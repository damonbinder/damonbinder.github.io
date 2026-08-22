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
// One author-scoped RSS feed, which exists specifically so that this file does
// not have to scrape anything. It carries every one of Damon's posts, uncapped,
// in a format that a redesign of the blog cannot disturb.
//
// It was added to defensesindepth.bio in August 2026 to end a run of exactly
// that problem. This first read Ghost's `/author/damon/rss/`; the migration to
// Jekyll dropped it, and the 404 emptied the river of every post here without
// failing a build. The replacement scraped the author page's HTML, which worked
// but would have broken the next time the card markup moved.
const DID_FEED = 'https://defensesindepth.bio/authors/damon-binder/feed.xml';
const DID_AUTHOR = 'Damon Binder';

async function fetchDefensesInDepth(): Promise<SourceResult> {
  const xml = await fetchText(DID_FEED);
  if (!xml) return { posts: [], errors: [] };
  const parser = new XMLParser({ ignoreAttributes: true, trimValues: true });
  const items = parser.parse(xml)?.rss?.channel?.item;
  const list = Array.isArray(items) ? items : items ? [items] : [];
  const posts: RawPost[] = [];
  for (const it of list) {
    // The feed is author-scoped already; this only catches it being pointed
    // somewhere else by mistake.
    const creator = it['dc:creator'] ? String(it['dc:creator']).trim() : '';
    if (creator && creator !== DID_AUTHOR) continue;
    const link = String(it.link ?? '');
    if (!link) continue;
    const title = decode(String(it.title ?? 'Untitled'));
    // The blog runs its own link-posts, titled "Linkpost: …". Damon carries
    // those same links here as native link-posts pointing at the article
    // itself, so taking these as well would list each one twice — once via the
    // real URL and once via the wrapper page.
    if (/^Linkpost:/i.test(title)) continue;
    posts.push({
      id: `did/${slugFromUrl(link)}`,
      title,
      date: new Date(String(it.pubDate ?? '')).toISOString(),
      excerpt: it.description ? decode(String(it.description)) : undefined,
      external: link,
      source: 'Defenses in Depth',
    });
  }
  return { posts, errors: [] };
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
