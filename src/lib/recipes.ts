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
// citation string). Used for the "by source" browse.
export function workOf(d: { work?: string; source?: string }): string {
  if (d.work) return d.work;
  const s = d.source ?? '';
  for (const w of WORKS) if (s.includes(w)) return w;
  return 'Other';
}

// Rough date for each source work, shown alongside the citation. Only the
// sources we've actually published recipes from need an entry.
const PERIODS: Record<string, string> = {
  Vinidarius: 'c. 500',
};
export const periodOf = (work: string): string | undefined => PERIODS[work];

// Short blurb on what the source is, shown on its page. Left empty until
// written — no placeholder text; the page just skips the block until then.
// TEMP: Vinidarius is filled with lorem ipsum so we can eyeball the two-column
// layout — swap for the real blurb (or delete the entry) before this goes live.
const BLURBS: Record<string, string> = {
  Vinidarius: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
};
export const blurbOf = (work: string): string | undefined => BLURBS[work];

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
