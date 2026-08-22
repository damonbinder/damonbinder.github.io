import type { Loader } from 'astro/loaders';
import { XMLParser } from 'fast-xml-parser';

// What a source reports back: the posts it found, plus anything wrong with how
// it found them. A source never throws — it reports, so that one dead source
// does not mask what the others would have said. `externalLoader` collects
// every problem and then fails the build once, with all of them listed.
interface SourceResult {
  posts: RawPost[];
  errors: string[];
}

// One raw link-post before schema validation.
interface RawPost {
  id: string;
  title: string;
  date: string; // ISO
  excerpt?: string;
  external: string;
  source: string;
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/(&#39;|&#x27;)/g, "'")
    .replace(/<[^>]*>/g, '')
    .trim();
}

// Retry the transient failures — a connection reset, a 502 from a CDN, a
// source mid-deploy — because a missed fetch now fails the build, and a build
// that fails on a blip trains you to ignore the mail it sends. A 404 or other
// 4xx is an answer, not a blip, so it is taken at face value.
const FETCH_ATTEMPTS = 3;
const FETCH_BACKOFF_MS = 500;

async function fetchText(url: string): Promise<string | null> {
  for (let attempt = 1; attempt <= FETCH_ATTEMPTS; attempt++) {
    const last = attempt === FETCH_ATTEMPTS;
    try {
      const res = await fetch(url);
      if (res.ok) return await res.text();
      if (res.status < 500) {
        console.error(`[external-posts] ${url} — HTTP ${res.status}`);
        return null;
      }
      if (last) {
        console.error(
          `[external-posts] ${url} — HTTP ${res.status} after ${FETCH_ATTEMPTS} attempts`,
        );
        return null;
      }
    } catch (err) {
      if (last) {
        console.error(
          `[external-posts] ${url} — ${err} (after ${FETCH_ATTEMPTS} attempts)`,
        );
        return null;
      }
    }
    await new Promise((r) => setTimeout(r, FETCH_BACKOFF_MS * attempt));
  }
  return null;
}

function slugFromUrl(url: string): string {
  try {
    const parts = new URL(url).pathname.replace(/\/+$/, '').split('/');
    return parts[parts.length - 1] || url;
  } catch {
    return url;
  }
}

// --- Defenses in Depth --------------------------------------------------------
// Read from two places at once, because neither is sufficient alone and the
// history here is that a single silent source can empty the river.
//
//   The author page, `/authors/damon-binder/`, lists every one of his posts,
//   but only as HTML — a redesign of the card markup breaks it.
//
//   `/feed.xml` is RSS, so it survives any redesign, but it holds only the 15
//   most recent posts across all authors. Filtering it to Damon yields his
//   recent ones and drops the rest, and it loses one more each time a
//   co-author publishes.
//
// So take the union. Between them, the page supplies the back catalogue and
// the feed supplies a machine-readable floor, and it takes both breaking at
// once to lose everything. The feed also acts as a canary: anything it lists
// that the scrape missed means the markup moved, which is reported rather
// than absorbed. (Ghost's `/author/damon/rss/`, which this replaces, 404'd
// for who knows how long without anyone noticing.)
const DID_ORIGIN = 'https://defensesindepth.bio';
const DID_AUTHOR_PAGE = `${DID_ORIGIN}/authors/damon-binder/`;
const DID_FEED = `${DID_ORIGIN}/feed.xml`;
const DID_AUTHOR = 'Damon Binder';
// The author page is one page today. If the blog ever grows enough to
// paginate it, follow the chain rather than silently keeping page one.
const DID_MAX_PAGES = 25;

// The blog runs its own link-posts, titled "Linkpost: …". Damon carries those
// same links here as native link-posts pointing at the article itself, so
// pulling them in would list each one twice — once via the real URL, once via
// the wrapper page.
function isDidLinkpost(title: string): boolean {
  return /^Linkpost:/i.test(title);
}

function didPost(link: string, title: string, date: string, excerpt?: string): RawPost {
  const abs = new URL(link, DID_ORIGIN).href;
  return {
    id: `did/${slugFromUrl(abs)}`,
    title,
    date,
    excerpt: excerpt || undefined,
    external: abs,
    source: 'Defenses in Depth',
  };
}

// One page of `post-card` articles.
function parseDidCards(html: string): RawPost[] {
  const out: RawPost[] = [];
  const articles = html.matchAll(
    /<article class="post-card">([\s\S]*?)<\/article>/g,
  );
  for (const [, block] of articles) {
    const link = block.match(/class="post-card-title">\s*<a href="([^"]+)"/)?.[1];
    const title = block.match(/class="post-card-title">\s*<a[^>]*>([\s\S]*?)<\/a>/)?.[1];
    const dateStr = block.match(/<time datetime="([^"]+)"/)?.[1];
    const excerpt = block.match(/class="post-card-excerpt">([\s\S]*?)<\/div>/)?.[1];
    const creator = block.match(/class="post-card-author">([\s\S]*?)<\/a>/)?.[1];
    if (!link || !title) continue;
    if (creator && decode(creator) !== DID_AUTHOR) continue; // guard against guest posts
    const clean = decode(title);
    if (isDidLinkpost(clean)) continue;
    out.push(
      didPost(
        link,
        clean,
        dateStr ? new Date(dateStr).toISOString() : new Date(0).toISOString(),
        excerpt ? decode(excerpt) : undefined,
      ),
    );
  }
  return out;
}

// A `rel="next"` link, or failing that any link deeper into the author's own
// paginated pages. Returns null at the end of the chain.
function didNextPage(html: string, current: string): string | null {
  const rel =
    html.match(/<a[^>]+rel="next"[^>]*href="([^"]+)"/)?.[1] ??
    html.match(/<a[^>]+href="([^"]+)"[^>]*rel="next"/)?.[1];
  const href =
    rel ?? html.match(/href="([^"]*\/authors\/damon-binder\/page\/?\d+\/?)"/)?.[1];
  if (!href) return null;
  const abs = new URL(href, current).href;
  return abs === current ? null : abs;
}

async function fetchDidAuthorPage(): Promise<RawPost[]> {
  const byUrl = new Map<string, RawPost>();
  const visited = new Set<string>();
  let url: string | null = DID_AUTHOR_PAGE;
  while (url && !visited.has(url) && visited.size < DID_MAX_PAGES) {
    visited.add(url);
    const html: string | null = await fetchText(url);
    if (!html) break;
    for (const p of parseDidCards(html)) byUrl.set(p.external, p);
    url = didNextPage(html, url);
  }
  return [...byUrl.values()];
}

async function fetchDidFeed(): Promise<RawPost[]> {
  const xml = await fetchText(DID_FEED);
  if (!xml) return [];
  const parser = new XMLParser({ ignoreAttributes: true, trimValues: true });
  const items = parser.parse(xml)?.rss?.channel?.item;
  const list = Array.isArray(items) ? items : items ? [items] : [];
  const out: RawPost[] = [];
  for (const it of list) {
    const creator = it['dc:creator'] ? String(it['dc:creator']).trim() : '';
    if (creator !== DID_AUTHOR) continue; // the feed is site-wide, so this one matters
    const link = String(it.link ?? '');
    if (!link) continue;
    const title = decode(String(it.title ?? 'Untitled'));
    if (isDidLinkpost(title)) continue;
    out.push(
      didPost(
        link,
        title,
        new Date(String(it.pubDate ?? '')).toISOString(),
        it.description ? decode(String(it.description)) : undefined,
      ),
    );
  }
  return out;
}

async function fetchDefensesInDepth(): Promise<SourceResult> {
  const [scraped, feed] = await Promise.all([
    fetchDidAuthorPage(),
    fetchDidFeed(),
  ]);
  const errors: string[] = [];

  // Prefer the scraped entry where both have a post: same fields, but the
  // author page is the source that carries the whole history, so keeping its
  // copy means one consistent shape rather than a mix.
  const byUrl = new Map<string, RawPost>();
  for (const p of feed) byUrl.set(p.external, p);
  for (const p of scraped) byUrl.set(p.external, p);

  if (feed.length === 0) {
    // Not data loss on its own — the author page carries everything — but it
    // means the cross-check below is no longer watching anything.
    errors.push(
      `${DID_FEED} yielded no posts by ${DID_AUTHOR}. The river still has whatever the author page returned, but the feed is no longer available as a check on it.`,
    );
  }

  if (scraped.length === 0 && feed.length > 0) {
    errors.push(
      `The author page ${DID_AUTHOR_PAGE} yielded no posts while the feed yielded ${feed.length}. Its markup has almost certainly changed — parseDidCards needs updating, and until it is, only the posts still in the feed will appear.`,
    );
  } else {
    const missing = feed.filter((p) => !scraped.some((s) => s.external === p.external));
    if (missing.length > 0) {
      errors.push(
        `The feed lists ${missing.length} post(s) the author-page scrape missed: ${missing
          .map((p) => p.external)
          .join(', ')}. The page markup has probably drifted.`,
      );
    }
  }

  return { posts: [...byUrl.values()], errors };
}

// --- Random Lives (Jekyll blog, no feed — read the blog index) ---------------
const RL_ORIGIN = 'https://random-lives.github.io';
const RL_BLOG = `${RL_ORIGIN}/random-lives/blog/`;

async function fetchRandomLives(): Promise<SourceResult> {
  const html = await fetchText(RL_BLOG);
  if (!html) return { posts: [], errors: [] };
  const out: RawPost[] = [];
  const articles = html.matchAll(
    /<article class="blog-preview">([\s\S]*?)<\/article>/g,
  );
  for (const [, block] of articles) {
    const link = block.match(/<h2>\s*<a href="([^"]+)"/)?.[1];
    const title = block.match(/<h2>\s*<a[^>]*>([\s\S]*?)<\/a>/)?.[1];
    const dateStr = block.match(/class="blog-date">([^<]+)</)?.[1];
    const excerpt = block.match(/class="blog-excerpt">([\s\S]*?)<\/p>/)?.[1];
    if (!link || !title) continue;
    const abs = new URL(link, RL_ORIGIN).href;
    out.push({
      id: `rl/${slugFromUrl(abs)}`,
      title: decode(title),
      date: dateStr ? new Date(dateStr.trim()).toISOString() : new Date(0).toISOString(),
      excerpt: excerpt ? decode(excerpt) : undefined,
      external: abs,
      source: 'Random Lives',
    });
  }
  return { posts: out, errors: [] };
}

// Aggregates all external link-post sources into one collection, and fails the
// build if any of them looks broken.
//
// Failing is the point. This used to log the problem and carry on, which meant
// the Ghost feed disappearing in August 2026 emptied the river of every
// Defenses in Depth post while the daily cron kept deploying and kept
// reporting success — the breakage was discoverable only by reading the log of
// a run that said it passed, so nobody found it by anything but eye.
//
// Throwing here fails the GitHub Actions run, which sends mail. And because
// Pages keeps serving the last successful deployment, a failed build leaves
// the site up and correct rather than replacing it with one that is missing
// posts. Deploying nothing beats deploying a river with holes in it.
export function externalLoader(): Loader {
  return {
    name: 'external-posts',
    async load({ store, logger, parseData }) {
      store.clear();
      const sources = [
        { label: 'Defenses in Depth', fetch: fetchDefensesInDepth },
        { label: 'Random Lives', fetch: fetchRandomLives },
      ];
      const results = await Promise.all(sources.map((s) => s.fetch()));
      for (const { posts } of results) {
        for (const raw of posts) {
          const data = await parseData({ id: raw.id, data: raw });
          store.set({ id: raw.id, data });
        }
      }
      logger.info(
        `Loaded external posts — ${sources
          .map((s, i) => `${s.label}: ${results[i].posts.length}`)
          .join(', ')}.`,
      );

      const problems: string[] = [];
      for (const [i, s] of sources.entries()) {
        if (results[i].posts.length === 0) {
          problems.push(
            `${s.label} returned no posts — the site is unreachable or its markup changed.`,
          );
        }
        for (const err of results[i].errors) problems.push(`${s.label}: ${err}`);
      }
      if (problems.length > 0) {
        for (const p of problems) logger.error(p);
        throw new Error(
          `External post sources are broken, so this build was stopped rather than shipped:\n` +
            problems.map((p) => `  - ${p}`).join('\n') +
            `\nThe live site keeps serving the last good deploy until this is fixed.`,
        );
      }
    },
  };
}
