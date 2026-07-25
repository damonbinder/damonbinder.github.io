# Draft recipe translation cleanup — bracket apparatus and neighbour spill

*Created 2026-07-25 15:56.*

## TL;DR

Removed all 54 bracketed editorial notes from the `translation` frontmatter of the 50 Mānasollāsa **draft** recipes — 33 files carried at least one. Trimmed 5 leading/trailing sentences that belonged to a neighbouring dish (in 4 files), and made 2 repairs where removing a bracket left a meaningless sentence. Nothing else was touched: `original`, `source`, the body, and every other frontmatter key are byte-identical to their pre-session state in all 248 recipe files, and none of the 14 published Mānasollāsa recipes was modified. Both `npm run build` (53 pages) and `SHOW_DRAFTS=1 npm run build` (274 pages) pass. No draft `translation` contains `[` or `]`, and none opens or closes on a dangling em dash.

**Method note.** Every draft `translation` was verbatim identical to the `english` field of the matching entry in `src/data/sources/manasollasa.ts`, so the source file's own apparatus was the authority for finding spill. Exactly four entries in that file carry an explicit half-verse marker (`[This half-verse completes…]` / `[…closes the preceding…]`), and those four are the four spill cases the brief named. One further spill — the trailing *maṇḍaka* line on `buffalo-milk-payasa` — is unmarked but obvious. A full start/end sweep of all 74 source entries against each draft's own title, ingredients, and method turned up no fifth case.

## What changed, per file

| Recipe | Brackets removed | Sentences trimmed | Repair made |
|---|---|---|---|
| `brined-fruits-pods-and-vegetables` | 1 | — | — |
| `buffalo-milk-payasa` | 2 | leading: "Having taken it off the fire, he should put in powdered dry ginger…"; trailing: "Wheat grains, washed, white, dried by the rays of the sun —" | — |
| `ember-baked-angarapolika-and-griddle-polika` | 1 | leading: "*Maṇḍaka*s fitted together four and four are the best." | — |
| `finely-diced-meat-with-green-chickpeas` | 3 | — | — |
| `fruit-panaka-with-milk-whey-base` | 2 | — | — |
| `gharika-black-gram-rings` | 1 | — | — |
| `ghrta-karkata-crabs-in-ghee` | 1 | — | — |
| `iderika-fermented-black-gram-cakes` | 1 | — | — |
| `kalakhanda-preparations` | 3 | — | — |
| `katakarna-pulse-fritters` | 1 | — | — |
| `kavacandi-mixed-fry` | 2 | — | — |
| `khara-khanda-salted-fish` | 1 | — | — |
| `ksira-prakara-milk-curd-sweets` | 2 | — | — |
| `mandaka-flatbreads` | 1 | leading: "— ground fine with querns and freed of bran…" | — |
| `mandali-blood-sausage` | 5 | — | — |
| `meat-stuffed-eggplant-gourd-or-radish` | 1 | — | — |
| `musaka-style-sour-roast` | 1 | — | — |
| `nandyavarta-sour-turtle` | 1 | — | — |
| `pickled-shoots-and-roots` | 1 | — | — |
| `roast-meat-salad-with-citron-and-ginger` | 2 | — | — |
| `roast-pork-sunthaka` | 3 | mid-text: "By two lines like the lines of a *sārī*-board, patterned … a long *śuṇṭhikā*." | yes — see below |
| `royal-boiled-rice` | 2 | leading: "— with care, by means of the maidservants…" | — |
| `savoury-vestika-and-ghosaka` | 1 | — | — |
| `sour-meat-glaze` | 3 | — | — |
| `spiced-fish-roe` | 1 | — | — |
| `spiced-roasted-marrow` | 2 | — | — |
| `spiced-sour-vatakas` | 1 | trailing: "Those *vaṭakas* are *mano-abhidhāḥ*." | yes — see below |
| `upakhandaka-dried-meat` | 1 | — | — |
| `utkvathita-long-cooked-meat-soup` | 2 | — | — |
| `varna-sunthaka-liver-and-fat-skewers` | 1 | — | — |
| `varsolaka-spiced-milk-sugar-balls` | 2 | — | — |
| `vatakas-in-sweet-curd-or-kanjika` | 1 | — | — |
| `vatimaka-meat-cakes` | 1 | — | — |

**Total: 54 brackets across 33 files. 5 sentences trimmed across 4 files. 2 repairs.**

The other 17 drafts carried no brackets and no spill, and were not touched.

## Judgment calls

### `roast-pork-sunthaka` — dropped the corrupt *sārī*-board sentence

Verse 1432 is corrupt in Shrigondekar and the printed edition offers two alternatives rather than a restoration; the translation marked the gap with an ellipsis. I dropped the whole sentence ("By two lines like the lines of a *sārī*-board, patterned … a long *śuṇṭhikā*.") rather than keeping the bare "…" on a cook's page. That paragraph is now the single sentence "He lays it out slit open with the knife right up to the head."

**What is lost:** the removed sentence was where the text said the carcass is scored crosswise into long strips, which is what "the pieces" in the next paragraph refers to. With the sentence gone, "The pieces, made four-cornered and pierced on a skewer" has no antecedent in the translation. The recipe's own method section covers the cutting, so nothing a cook needs is missing — but the translation now has a small logical gap where the corruption was. Keeping the ellipsis version would preserve the gap honestly at the cost of the "…".

### `roast-pork-sunthaka` — KEPT the opening general remark, unsure

The translation still opens "Among these classes of meat, in each of them some one part is the best." That is verse 1427ab, and it closes the anatomy passage at 1422cd–1426 rather than beginning the pork recipe — it is the same *kind* of spill as the four flagged cases. Two reasons I left it:

- The source file does not flag it with a half-verse note, unlike the four it does flag.
- The neighbouring unit (1422cd–1426, meat parts and grades) has no recipe page, so the sentence is not another dish's text — it is a general remark about the meat section.

It does read as a non sequitur at the top of a pork page, since the "classes of meat" were never listed there. **Flagging rather than cutting.** If you want it gone, it is the first sentence of the `translation` block in `/Users/damonbinder/Documents/Website/src/content/recipes/roast-pork-sunthaka.md`.

### `spiced-sour-vatakas` — dropped the naming clause

Translation now ends "…and smoke them well with asafoetida." The dropped clause was "Those *vaṭakas* are *mano-abhidhāḥ*." — the bracket had been carrying the whole explanation (edition prints `मनोभिधाः`, the name-word is obscure, MS A reads `मना-`), so without it the sentence is meaningless. This is *not* a naming formula that names a usable dish name, so the keep-the-naming-formula rule does not apply.

### `varsolaka-spiced-milk-sugar-balls` — a sentence that now reads oddly

Removing `[it grains back]` leaves "…and cooked beyond that, it becomes *śarkarā*." Grammatical, but *śarkarā* is also the starting material named in the first sentence, so the sentence now looks circular. I left it — the fix would require adding a gloss, which is out of scope.

### `ksira-prakara-milk-curd-sweets` and `varna-sunthaka-liver-and-fat-skewers` — terms now unglossed

Per the no-adding rule: `*takra*` in `ksira-prakara` lost its `[buttermilk]` gloss, and `*pañcāṅga-paṭṭa*` in `varna-sunthaka` lost the note that it is some strip or band and that the quarter-verse is corrupt. Both sentences are grammatical; both terms are now unexplained. `varna-sunthaka` also opens "Having wrapped it like a *pañcāṅga-paṭṭa*, the caul…", where "it" has a loose antecedent — that was already true before the bracket came out.

### Back-references left in place

Three drafts refer to a preceding dish inside what is unambiguously their own text, so no trim: `finely-diced-meat-with-green-chickpeas` ("the sauce described earlier" — the *pralehaka* of `sour-meat-glaze`), `mastu-spiced-whey` ("The water that was drained off and kept" — the whey pressed off in `sikharini-sweet-strained-curd`; no brackets, file untouched), and `gharika-black-gram-rings` ("Of that very same black-gram paste" — the `iderika` batter).

## Verification performed

- `npm run build` — pass, 53 pages.
- `SHOW_DRAFTS=1 npm run build` — pass, 274 pages.
- Byte-level diff of all 248 files in `src/content/recipes/` against a pre-change copy: 33 files differ, all drafts, all differing only inside the `translation` block scalar. Frontmatter split into top-level key blocks and compared key by key; `original`, `source`, `title`, `work`, `originalLang`, `tradition`, `category`, `subcategory`, `order`, `status`, `related`, and the entire markdown body are identical in every file.
- 0 of the 14 published Mānasollāsa recipes differ.
- No `[` or `]` in any draft `translation`.
- No draft `translation` begins or ends with `—`; no doubled spaces, no space before `,` `.` `;` `:`; YAML block indentation is exactly two spaces on every content line.
