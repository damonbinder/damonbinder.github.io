import { getCollection } from 'astro:content';

// A single item in the Writing river — either a native post (has its own page)
// or a link post (native hand-made or pulled from the feed; clicks out via
// `external`).
export interface RiverItem {
  id: string;
  title: string;
  date: Date;
  excerpt?: string;
  tags: string[];
  external?: string;
  source?: string;
  native: boolean; // true => rendered at /blog/{id}/
}

// Merge native posts and feed link-posts into one date-sorted stream.
export async function getRiver(): Promise<RiverItem[]> {
  const native = (await getCollection('writing'))
    .filter((p) => !p.data.draft)
    .map((p) => ({
      id: p.id,
      title: p.data.title,
      date: p.data.date,
      excerpt: p.data.excerpt,
      tags: p.data.tags,
      external: p.data.external,
      source: p.data.source,
      native: !p.data.external,
    }));

  const links = (await getCollection('links')).map((p) => ({
    id: p.id,
    title: p.data.title,
    date: p.data.date,
    excerpt: p.data.excerpt,
    tags: p.data.tags,
    external: p.data.external,
    source: p.data.source,
    native: false,
  }));

  return [...native, ...links].sort(
    (a, b) => b.date.valueOf() - a.date.valueOf(),
  );
}
