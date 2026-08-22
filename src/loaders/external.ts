import type { Loader } from 'astro/loaders';

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

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`[external-posts] ${url} — HTTP ${res.status}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.error(`[external-posts] ${url} — ${err}`);
    return null;
  }
}

function slugFromUrl(url: string): string {
  try {
    const parts = new URL(url).pathname.replace(/\/+$/, '').split('/');
    return parts[parts.length - 1] || url;
  } catch {
    return url;
  }
}

// --- Defenses in Depth (Jekyll, no author feed — read the author's page) -----
// The blog moved off Ghost, taking `/author/damon/rss/` with it. The site-wide
// `/feed.xml` that replaced it holds only the 15 most recent posts across all
// authors, so filtering it down to Damon drops his oldest and loses one more
// every time a co-author publishes. His author page carries all of them,
// unpaginated, so read that instead — same approach as Random Lives below.
const DID_ORIGIN = 'https://defensesindepth.bio';
const DID_AUTHOR_PAGE = `${DID_ORIGIN}/authors/damon-binder/`;
const DID_AUTHOR = 'Damon Binder';

async function fetchDefensesInDepth(): Promise<RawPost[]> {
  const html = await fetchText(DID_AUTHOR_PAGE);
  if (!html) return [];
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
    // The blog runs its own link-posts. Damon carries those same links here as
    // native link-posts pointing at the article itself, so pulling them in
    // would list each one twice — once via the real URL, once via the wrapper.
    const clean = decode(title);
    if (/^Linkpost:/i.test(clean)) continue;
    const abs = new URL(link, DID_ORIGIN).href;
    out.push({
      id: `did/${slugFromUrl(abs)}`,
      title: clean,
      date: dateStr ? new Date(dateStr).toISOString() : new Date(0).toISOString(),
      excerpt: excerpt ? decode(excerpt) : undefined,
      external: abs,
      source: 'Defenses in Depth',
    });
  }
  return out;
}

// --- Random Lives (Jekyll blog, no feed — read the blog index) ---------------
const RL_ORIGIN = 'https://random-lives.github.io';
const RL_BLOG = `${RL_ORIGIN}/random-lives/blog/`;

async function fetchRandomLives(): Promise<RawPost[]> {
  const html = await fetchText(RL_BLOG);
  if (!html) return [];
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
  return out;
}

// Aggregates all external link-post sources into one collection. A source
// failing is non-fatal (returns []), so the build still succeeds offline — but
// it is logged as an error, because that is how the Ghost feed going away in
// August 2026 quietly emptied the river of every Defenses in Depth post
// without failing a single build.
export function externalLoader(): Loader {
  return {
    name: 'external-posts',
    async load({ store, logger, parseData }) {
      store.clear();
      const sources = [
        { label: 'Defenses in Depth', fetch: fetchDefensesInDepth },
        { label: 'Random Lives', fetch: fetchRandomLives },
      ];
      const groups = await Promise.all(sources.map((s) => s.fetch()));
      for (const posts of groups) {
        for (const raw of posts) {
          const data = await parseData({ id: raw.id, data: raw });
          store.set({ id: raw.id, data });
        }
      }
      logger.info(
        `Loaded external posts — ${sources
          .map((s, i) => `${s.label}: ${groups[i].length}`)
          .join(', ')}.`,
      );
      for (const [i, s] of sources.entries()) {
        if (groups[i].length === 0) {
          logger.error(
            `${s.label} returned no posts. Either the site is unreachable or its markup changed — the blog river is now missing that source entirely.`,
          );
        }
      }
    },
  };
}
