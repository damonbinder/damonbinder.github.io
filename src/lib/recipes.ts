import { getCollection } from 'astro:content';
import sections from '../data/recipe-sections.json';

// URL slug for a name, e.g. "Eggs and Patinas" -> "eggs-and-patinas",
// "Mānasollāsa" -> "manasollasa".
export const catSlug = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // drop combining diacritics (ā, ṇ, ś …)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export { sections };

// Drafts are visible in local dev (our private "working version") and in any
// build with SHOW_DRAFTS=1; the public production build ships only `published`.
export const showingDrafts =
  import.meta.env.DEV || process.env.SHOW_DRAFTS === '1';

// Recipes in original document order. Drafts included only when showingDrafts.
export async function getRecipes() {
  const all = (await getCollection('recipes')).sort(
    (a, b) => a.data.order - b.data.order,
  );
  return showingDrafts ? all : all.filter((r) => r.data.status === 'published');
}

// Known source works, matched against the citation when `work` isn't set yet.
// Longer / more specific names first so they win over substrings.
const WORKS = [
  'Mānasollāsa', 'Vinidarius', 'Apicius', 'Columella', 'Athenaeus', 'Anthimus',
  'Archestratus', 'Oribasius', 'Hierophilus', 'Hegesippus', 'Mnesitheus',
  'Heidelberg', 'Pseudo-Virgil', 'Galen', 'Pliny', 'Cato', 'Varro',
];

// The source work a recipe belongs to (explicit `work`, else derived from the
// citation string). Used for the "by source" browse. When a citation names
// more than one work (e.g. "Archestratus 14, preserved in Athenaeus 325f"),
// the one mentioned first wins — that's the actual attributed source, not
// just whichever happens to be first in the WORKS list above.
export function workOf(d: { work?: string; source?: string }): string {
  if (d.work) return d.work;
  const s = d.source ?? '';
  let best: { w: string; idx: number } | null = null;
  for (const w of WORKS) {
    const idx = s.indexOf(w);
    if (idx !== -1 && (best === null || idx < best.idx)) best = { w, idx };
  }
  return best ? best.w : 'Other';
}

// Recipe counts per work, respecting showingDrafts (so the hub page can show
// "coming soon" for sources with drafts but nothing published yet, without
// pretending they don't exist).
export async function getWorkCounts(): Promise<Map<string, number>> {
  const recipes = await getRecipes();
  const counts = new Map<string, number>();
  for (const r of recipes) {
    const w = workOf(r.data);
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  return counts;
}

// Total counts per work regardless of draft status — used only for "N
// drafted, not yet published" context on sources with no published recipes
// yet, not for deciding what's visible.
export async function getWorkTotalCounts(): Promise<Map<string, number>> {
  const all = await getCollection('recipes');
  const counts = new Map<string, number>();
  for (const r of all) {
    const w = workOf(r.data);
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  return counts;
}

// Published-only counts per work, regardless of showingDrafts — paired with
// getWorkTotalCounts() for "N of M recipes published" display, independent
// of whether the current build happens to be showing drafts.
export async function getWorkPublishedCounts(): Promise<Map<string, number>> {
  const all = await getCollection('recipes');
  const counts = new Map<string, number>();
  for (const r of all) {
    if (r.data.status !== 'published') continue;
    const w = workOf(r.data);
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  return counts;
}

// Named, specialized dish forms (caccabina, patina, ofella, cakkalikā, ...) —
// as opposed to generic ingredient words like "pork" or "fish", which live
// under `category` instead. `dishType` currently mixes both; this is the
// allowlist of values that actually belong in a "dish type" browse facet.
// Extend as more specialized forms get tagged.
const SPECIALIZED_DISH_TYPES = new Set([
  'caccabina', 'ofella', 'patina', 'minutal', 'cakkalika',
]);
export const isSpecializedDishType = (dishType?: string): boolean =>
  !!dishType && SPECIALIZED_DISH_TYPES.has(dishType);

// Work -> era/cuisine name, built from the `sources` lists in the eras
// collection. This is the top browse axis ("Tradition"): Ancient Mediterranean,
// Medieval India, ... — a work belongs to whichever era lists it. Recipes whose
// work isn't listed under any era get no era (null).
export async function getWorkToEra(): Promise<Map<string, string>> {
  const eras = await getCollection('eras');
  const m = new Map<string, string>();
  for (const e of eras) for (const w of e.data.sources) m.set(w, e.data.name);
  return m;
}

// Source-level metadata (rough date + intro blurb), one markdown file per
// source in src/content/sources/. Only sources with something to say need an
// entry — pages without one just skip the blurb block.
export async function getSourceEntry(work: string) {
  const sources = await getCollection('sources');
  return sources.find((s) => s.data.name === work);
}

// The recipe's position within its source, e.g. "Vinidarius 20" -> 20,
// "Vinidarius 21–22" -> 21, "Ofellas garaton - Vinidarius 6" -> 6. This is
// what "by source" pages and prev/next should sort by — `order` reflects the
// old category grouping and doesn't track citation order within a source.
export function citationNumber(d: { work?: string; source?: string; order: number }): number {
  const work = workOf(d);
  const s = d.source ?? '';
  const idx = s.lastIndexOf(work);
  const tail = idx >= 0 ? s.slice(idx + work.length) : s;
  const m = tail.match(/\d+/);
  return m ? parseInt(m[0], 10) : d.order;
}
