import type { Loader } from 'astro/loaders';
import { XMLParser } from 'fast-xml-parser';

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
    if (!res.ok) return null;
    return await res.text();
  } catch {
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

// --- Defenses in Depth (Ghost, RSS, author-scoped) ---------------------------
const DID_FEED = 'https://defensesindepth.bio/author/damon/rss/';
const DID_AUTHOR = 'Damon Binder';

async function fetchDefensesInDepth(): Promise<RawPost[]> {
  const xml = await fetchText(DID_FEED);
  if (!xml) return [];
  const parser = new XMLParser({ ignoreAttributes: true, trimValues: true });
  const items = parser.parse(xml)?.rss?.channel?.item;
  const list = Array.isArray(items) ? items : items ? [items] : [];
  const out: RawPost[] = [];
  for (const it of list) {
    const creator = it['dc:creator'] ? String(it['dc:creator']).trim() : '';
    if (creator && creator !== DID_AUTHOR) continue; // guard against guest posts
    const link = String(it.link ?? '');
    if (!link) continue;
    out.push({
      id: `did/${slugFromUrl(link)}`,
      title: String(it.title ?? 'Untitled'),
      date: new Date(String(it.pubDate ?? '')).toISOString(),
      excerpt: it.description ? String(it.description) : undefined,
      external: link,
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

// Aggregates all external link-post sources into one collection. Each source
// failing is non-fatal (returns []), so the build still succeeds offline.
export function externalLoader(): Loader {
  return {
    name: 'external-posts',
    async load({ store, logger, parseData }) {
      store.clear();
      const groups = await Promise.all([
        fetchDefensesInDepth(),
        fetchRandomLives(),
      ]);
      for (const posts of groups) {
        for (const raw of posts) {
          const data = await parseData({ id: raw.id, data: raw });
          store.set({ id: raw.id, data });
        }
      }
      const bySource = groups.map((g) => g.length);
      logger.info(
        `Loaded external posts — Defenses in Depth: ${bySource[0]}, Random Lives: ${bySource[1]}.`,
      );
    },
  };
}
