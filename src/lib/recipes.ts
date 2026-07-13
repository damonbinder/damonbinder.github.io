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

// Citation-string tokens mapped to their canonical work, used when a recipe
// has no explicit `work`. A token can be spelled several ways (Cato's cookbook
// is cited both "Cato …" and bare "De Agricultura …"), so this is a token→work
// map, not a bare name list. Minor authors quoted *through* another work
// (Mithaecus, Hegesippus, Erasistratus, Mnesitheus) are deliberately absent:
// their citations name Athenaeus (or Oribasius) too, so they fold into that
// work's page rather than spawning a page of their own.
const WORK_TOKENS: [token: string, work: string][] = [
  ['Mānasollāsa', 'Mānasollāsa'],
  ['Chrysippus', 'Chrysippus of Tyana'],
  ['Archestratus', 'Archestratus'],
  ['Vinidarius', 'Vinidarius'],
  ['Apicius', 'Apicius'],
  ['Anthimus', 'Anthimus'],
  ['Galen', 'Galen'],
  ['Hierophilus', 'Hierophilus'],
  ['Heidelberg', 'Heidelberg'],
  ['Athenaeus', 'Athenaeus'],
  ['De Agricultura', 'Cato'],
  ['Cato', 'Cato'],
  ['Columella', 'Columella'],
  ['Palladius', 'Palladius'],
  ['Geoponica', 'Geoponica'],
  ['Varro', 'Varro'],
  ['Oribasius', 'Oribasius'],
  ['Pliny', 'Pliny'],
  ['Horace', 'Horace'],
  ['Pseudo-Virgil', 'Pseudo-Virgil'],
];

// The author/work a recipe is attributed to (explicit `work`, else derived from
// the citation string). When a citation names more than one — e.g.
// "Archestratus 14, preserved in Athenaeus" — the token appearing *earliest*
// in the string wins, i.e. the attributed author, not the work it survives in.
export function workOf(d: { work?: string; source?: string }): string {
  if (d.work) return d.work;
  const s = d.source ?? '';
  let best: { work: string; idx: number } | null = null;
  for (const [token, work] of WORK_TOKENS) {
    const idx = s.indexOf(token);
    if (idx !== -1 && (best === null || idx < best.idx)) best = { work, idx };
  }
  return best ? best.work : 'Other sources';
}

// The works Damon has chosen to give a dedicated source page. Everything else
// is collected onto a single shared "Other sources" page for now (Columella,
// Oribasius, Pliny, Varro, Pseudo-Virgil, and anything unattributed).
export const SOURCE_PAGES = new Set([
  'Apicius', 'Vinidarius', 'Athenaeus', 'Cato', 'Galen', 'Anthimus',
  'Heidelberg', 'Hierophilus', 'Archestratus', 'Chrysippus of Tyana',
  'Mānasollāsa',
]);
// Works that don't get their own page are collected onto a themed group page.
// Anything not listed here (or in SOURCE_PAGES) falls to OTHER_SOURCE.
const SOURCE_GROUPS: Record<string, string> = {
  Columella: 'Agricultural writers',
  Palladius: 'Agricultural writers',
  Varro: 'Agricultural writers',
  Geoponica: 'Agricultural writers',
  Oribasius: 'Other sources',
  Pliny: 'Other sources',
  Horace: 'Other sources',
  'Pseudo-Virgil': 'Other sources',
};
export const OTHER_SOURCE = 'Other sources';

// The page a work lives on: its own if it's a chosen source page, else the
// themed group page it's assigned to, else the shared catch-all.
export const sourcePageOf = (work: string): string =>
  SOURCE_PAGES.has(work) ? work : (SOURCE_GROUPS[work] ?? OTHER_SOURCE);

// The page a recipe lives on. This — not workOf — is what drives source URLs,
// page generation, and the counts on the hub, so a recipe always lands on a
// page that actually exists.
export const pageOf = (d: { work?: string; source?: string }): string =>
  sourcePageOf(workOf(d));

// Display names for source pages whose work token is a short form. The token
// stays the routing/counting key; this is only what the reader sees.
const DISPLAY_NAMES: Record<string, string> = {
  Cato: 'Cato the Elder',
  Heidelberg: 'The Heidelberg Papyrus',
  Hierophilus: 'Hierophilus the Sophist',
};
export const displayName = (work: string): string => DISPLAY_NAMES[work] ?? work;

// Recipe counts per work, respecting showingDrafts (so the hub page can show
// "coming soon" for sources with drafts but nothing published yet, without
// pretending they don't exist).
export async function getWorkCounts(): Promise<Map<string, number>> {
  const recipes = await getRecipes();
  const counts = new Map<string, number>();
  for (const r of recipes) {
    const w = pageOf(r.data);
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
    const w = pageOf(r.data);
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
    const w = pageOf(r.data);
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
  for (const e of eras) {
    const names = e.data.sourceGroups
      ? e.data.sourceGroups.flatMap((g) => g.sources)
      : e.data.sources;
    for (const w of names) m.set(w, e.data.name);
  }
  return m;
}

// Source-level metadata (rough date + intro blurb), one markdown file per
// source in src/content/sources/. Only sources with something to say need an
// entry — pages without one just skip the blurb block.
export async function getSourceEntry(work: string) {
  const sources = await getCollection('sources');
  return sources.find((s) => s.data.name === work);
}

// A recipe's ordinal position within its source, as a multi-level key so that
// "by source" pages and prev/next list recipes in the order they appear in the
// text — not just by the first number. "Apicius 6.8.14" -> [6, 8, 14], so book
// 6 runs 6.2.1, 6.2.2, … in order. A trailing letter folds into a fraction
// (6.8.1a before 6.8.1b), a range or alternate takes its first value
// ("6.8.1-2" -> [6, 8, 1]), and "Galen … R6" -> [6]. Citations with no number
// fall back to the legacy `order` field.
export function citationKey(d: { work?: string; source?: string; order: number }): number[] {
  const work = workOf(d);
  const s = d.source ?? '';
  const idx = s.lastIndexOf(work);
  // Only look past the work name when it's actually present in the string.
  const tail = idx >= 0 ? s.slice(idx + work.length) : s;
  // Stop at the first range/alternate separator so "6.8.1-2" and "1/2" use the
  // opening value.
  const head = tail.split(/[–—/-]/)[0];
  const parts = head.match(/\d+[a-z]?/gi) ?? [];
  if (parts.length === 0) return [d.order];
  return parts.map((p) => {
    const m = p.match(/^(\d+)([a-z])?$/i)!;
    const letter = m[2] ? (m[2].toLowerCase().charCodeAt(0) - 96) / 100 : 0;
    return parseInt(m[1], 10) + letter;
  });
}

// Comparator over citationKey: element-wise, shorter (less specific) first.
export function compareCitations(
  a: { work?: string; source?: string; order: number },
  b: { work?: string; source?: string; order: number },
): number {
  const ka = citationKey(a), kb = citationKey(b);
  for (let i = 0; i < Math.max(ka.length, kb.length); i++) {
    const x = ka[i] ?? -1, y = kb[i] ?? -1;
    if (x !== y) return x - y;
  }
  return 0;
}

// English names for the books of multi-book sources, shown alongside "Book N"
// in the by-book browse. Keyed by work, then book number. Apicius's ten books
// each carry a Greek title and a Latin subject gloss in the manuscript; these
// are the conventional English renderings.
export const BOOK_NAMES: Record<string, Record<number, string>> = {
  Apicius: {
    1: 'The Careful Cook',
    2: 'The Meat-Mincer',
    3: 'The Gardener',
    4: 'The Miscellany',
    5: 'Pulses',
    6: 'Fowl',
    7: 'The Gourmet',
    8: 'Quadrupeds',
    9: 'The Sea',
    10: 'The Fisherman',
  },
};

// The book a recipe belongs to, for sources cited as book.chapter.recipe
// (e.g. "Apicius 4.2.9" -> 4). Returns null when the citation isn't
// book-structured (e.g. "Vinidarius 20"), so single-book or flat-numbered
// sources don't get a spurious per-book grouping.
export function citationBook(d: { work?: string; source?: string }): number | null {
  const work = workOf(d);
  const s = d.source ?? '';
  const idx = s.lastIndexOf(work);
  const tail = idx >= 0 ? s.slice(idx + work.length) : s;
  const m = tail.match(/(\d+)\.\d+/); // needs at least book.chapter
  return m ? parseInt(m[1], 10) : null;
}
