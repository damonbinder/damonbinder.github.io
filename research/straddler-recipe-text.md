# Straddler recipes — corrected Mānasollāsa text

*Created 2026-07-25 15:25.*

## TL;DR

All 14 straddler recipes turned out to map onto **exactly one** sense-unit entry each. No entry had to be split; no recipe's cited range genuinely crosses a boundary in the corrected division. The 14 recipes now carry their own verbatim copy of the corrected Devanagari and English, and their `source:` fields have been reset to the entry refs. Both `npm run build` and `SHOW_DRAFTS=1 npm run build` pass; every field round-trips exactly against `src/data/sources/manasollasa.ts`, bodies and all other frontmatter keys are byte-identical to their pre-edit state.

The reason the boundaries fell out cleanly: the recipes' own notes had already diagnosed most of the seams (the *kaṭakarṇa* note asks for 1394–1397a; the *iḍerikā* note says "this entry's own text starts at 1397c"; both meat recipes describe the seam running down the middle of 1478), and the corrected text's sense units land in the same places.

**Three things need follow-up, none of them mine to fix** — see "Flags" below: `sweet-pulse-purika.md` is a 15th straddler that both passes missed and is still carrying the *udumbara*'s hemistich; a batch of collation notes in the recipe bodies is now stale; and two recipe titles now contradict their own corrected text.

## What changed

| recipe | old `source:` | new `source:` | whole entry or split | reason |
|---|---|---|---|---|
| sohala-and-pahalika-fried-breads | 1384–1385 | **1384–1385ab** | whole | The dish ends at 1385b (*pāhalikāḥ smṛtāḥ*). 1385cd starts the *patrikā*, which the old translation already flagged as belonging to the next recipe. |
| patrika-layered-breads | 1385–1386 | **1385cd–1386ab** | whole | The *patrikā* is exactly the 1385cd–1386ab hemistich pair. The old field carried both the *pāhalikā* line before it and the *kāsāra* line after it. |
| kisara | 1386–1387 | **1386cd–1387** | whole | The dish begins at 1386c (*godhūmacūrṇād uddhṛtya*) and ends with the naming formula at 1387d. |
| udumbara-fried-sweets | 1387–1388 | **1388ab** | whole | The recipe's own intro says "the whole recipe is half a verse". 1387 is the *kāsāra* filling (its own recipe); 1388cd starts the *pūrikā*. |
| savoury-vestika-and-ghosaka | 1391–1394 | **1391–1394ab** | whole | *Veṣṭikā* + *dhosaka* run 1391–1394b. 1394cd opens the *kaṭakarṇa* with a fresh pair of pulses. |
| katakarna-pulse-fritters | 1394–1396 | **1394cd–1397ab** | whole | Picks up the `यावद्` frying clause at 1397ab that the recipe's "citation problem" note said was misfiled in the *iḍerikā* entry. |
| iderika-fermented-black-gram-cakes | 1397–1401 | **1397cd–1401ab** | whole | Drops the borrowed 1397ab and picks up the naming line at 1401ab, exactly as the recipe's closing note asked. |
| gharika-black-gram-rings | 1401–1403 | **1401cd–1403ab** | whole | *Tasyaiva māṣapiṣṭasya* at 1401c through *bhakṣyeṣu sumanoharāḥ* at 1403b. |
| vatakas-in-sweet-curd-or-kanjika | 1403–1404 | **1403cd–1405ab** | whole | Gains the naming rule at 1405ab, which the recipe's notes already quote as the reason the same cake takes two names. |
| spiced-sour-vatakas | 1405–1407 | **1405cd–1408ab** | whole | Gains the asafoetida-smoking at 1408ab, which the old translation carried only as a bracketed "[1408 continues: …]". |
| ksira-prakara-milk-curd-sweets | 1408–1410 | **1408cd–1411ab** | whole | Gains the naming line at 1411ab; the recipe's last note says the dish's name comes from 1411. |
| varsolaka-spiced-milk-sugar-balls | 1411–1416 | **1411cd–1417ab** | whole | Sheds the *kṣīraprakāra* naming line at 1411ab and gains the *varṣolaka* naming at 1417ab. |
| roast-meat-salad-with-citron-and-ginger | 1476–1478 | **1476–1478** *(entry ref unchanged in form)* | whole | The entry runs 1476a–1478b; the corrected text prints the ref without the `ab` suffix. Trims 1478cd, which the old field carried. |
| mamsa-vataka-bhusika-and-kosali | 1478–1482 | **1478–1482** *(unchanged in form)* | whole | The entry starts at 1478c; trims 1478ab, which the old field carried. |

## Cases where the call needed evidence

**udumbara-fried-sweets (1387–1388 → 1388ab).** Three candidate entries, and this was the largest cut. 1386cd–1387 is the *kāsāra* preparation, which already has its own recipe (`kisara.md`); 1388cd–1390 is the *pūrikā*, which has `sweet-pulse-purika.md`. That leaves the single hemistich 1388ab, `गोलकेन समावेष्ट्य तैलेनोदुम्बरान्पचेत् ।`, as the whole dish. The recipe's intro states this outright and argues it from syntax: `समावेष्ट्य` has no expressed object, so the accusative it takes is the *kāsāra* of the preceding line. The corrected English supplies exactly that reading ("Having wrapped the *kāsāra* grains up completely…"), so nothing was lost by cutting 1387.

**vatakas-in-sweet-curd-or-kanjika (gained 1405ab).** The naming rule *yatra yatra dravadravye tannāmnā vaṭakās tu te* could have been read as the header of the following recipe — the old text put it at the head of `spiced-sour-vatakas`. It belongs here: it generalizes the two namings that have just happened (*vaṭikā* in curd, *kāñjika* in *kāñjika*) and the *āranāla* sauce that follows names nothing. The corrected text's sense-unit division agrees, and this recipe's own notes already cite 1405 as the explanation of its own two names.

**katakarna / iderika (the 1397 seam).** Straightforwardly settled by the two recipes' own closing notes, which name the misfiling in opposite directions and agree on where the seam is: the `यावद्` bubble-and-gold clause at 1397ab is a frying cue, so it finishes the *kaṭakarṇa*; the *iḍerikā* starts at 1397c with `माषस्य विदलान्`.

**The two meat recipes (the 1478 seam).** Both files already carry an identical note explaining that 1478ab closes the salad (*tanmāṃsaṃ* refers back to the ember-roasted meat of 1476a) and 1478cd opens the *māṃsa-vaṭaka* (*āmaṃ māṃsaṃ*, raw meat). The corrected text cuts in the same place. Note that its two refs are printed as `1476–1478` and `1478–1482` rather than `1476–1478ab` / `1478cd–1482`, so the two recipes' `source:` strings now look like they overlap even though the texts do not. Left as the source file prints them, per brief; worth a decision if the refs are ever regularized.

## Flags

**1. A batch of collation notes in the recipe bodies is now stale — and this will apply to the mechanical 49 too.** Those notes exist because the old `original` field was a flawed working transcription and the body prose corrected it in passing. Now that the field *is* the printed edition, the notes describe a discrepancy that no longer exists. In my 14 the affected files are:

- `patrika-layered-breads.md` — "The transcription in the `original` field above has lost the ending and reads `ताप्य`" (it now reads `ताप्यां`); "1385b reads `मृद्वः` in the printed edition, not `मृदवः` as transcribed above, which is why that half-verse currently scans one syllable long" (1385b is no longer in this recipe's field at all).
- `savoury-vestika-and-ghosaka.md` — "the transcription in the `original` field above has `घोसकान्`, a `घ`/`ध` confusion" (now `धोसकान्`); "1394c reads `वट्टाणकस्य` … not `वट्टाणस्य` as transcribed above" (1394c is no longer in this recipe's field).
- `iderika-fermented-black-gram-cakes.md` — "the transcription in the `original` field has lost `वस्त्र-`, which is also why that half-verse currently scans two syllables short" (now `वस्त्रगर्भाभिरन्याभिः`); and the whole closing "**A citation problem**" note, now resolved.
- `katakarna-pulse-fritters.md` — the closing "**A citation problem**" note, now resolved; "1394c reads `वट्टाणकस्य` … not `वट्टाणस्य` as transcribed above" (the field now reads `वट्टाणकस्य`).
- `kisara.md` — "1387a reads `घृतपक्वांश्च` in the printed edition, not `घृतपकांश्च` as transcribed above" (now `घृतपक्वांश्च`).
- `sohala-and-pahalika-fried-breads.md` — "The transmitted 1385b runs a syllable long against the metre" no longer describes this recipe, whose field now stops at 1385b in the corrected reading `मृद्वः`.

Repo-wide the grep for `as transcribed above` / `transcription in the \`original\` field` / `A citation problem` hits 5 files, all of them mine — but the mechanical 49 will need the same sweep for whatever phrasing they use. I did not touch any body prose, per brief.

**2. Two recipe *titles* now contradict their own corrected text.**

- `savoury-vestika-and-ghosaka.md` is titled "Savoury *Veṣṭikā* and *Ghosaka*", but the corrected translation says *dhosaka* throughout. The recipe's own notes already carry the recommendation: "**Recommended title on publication: *Savoury Veṣṭikā and Dhosaka*.**" This is now a visible inconsistency on the page rather than a note.
- `kisara.md` is titled "*Kīsāra*" and its notes assert that `कीसार` is Shrigondekar's reading with `कासार` in manuscript D. The corrected text prints `कासारसंज्ञितान्` and translates "these are called *kāsāra*". One of the two is wrong about what the printed edition reads. Since the corrected file was collated against the page at high resolution and the note was not, I would trust the corrected text — but I cannot check the page myself, so flagging rather than deciding.

**3. `sweet-pulse-purika.md` is a 15th straddler and has been missed by both passes.** It cites `Mānasollāsa 3.13.1388–1390`, which overlaps **two** entries — `1388ab` (the *udumbara*) and `1388cd–1390` (the *pūrikā*) — so it is not one of the 49 exact matches, but it was not in my 14 either. As of the end of my pass it is still untouched: unmodified in `git status`, still carrying the old working transcription, and still opening its `original` field with the *udumbara* hemistich `गोलकेन समावेष्ट्य तैलेनोदुम्बरान् पचेत् ।`, which now belongs to `udumbara-fried-sweets.md`.

The fix is unambiguous and mechanical: the *pūrikā* is exactly the whole entry `Mānasollāsa 3.13.1388cd–1390`. I did not make it, because editing a file outside my assigned scope while the mechanical script may still be running is the collision case the workflow rules warn about.

Two consequences until it is fixed: the recipe carries a hemistich of someone else's dish, and it sorts **ahead** of `udumbara-fried-sweets` on the source page and in prev/next, because `citationKey("1388–1390")` is `[3, 13, 1388]` against udumbara's `[3, 13, 1388.01]`. Setting it to `1388cd–1390` gives `[3, 13, 1388.03]` and the order corrects itself. This is the only place in the whole Mānasollāsa run where a hemistich suffix collides with a bare verse number, so it is also the only ordering risk from the new ref forms.

**4. Minor, no action needed.** Two corrected translations now hedge where the old ones asserted. `roast-meat-salad-with-citron-and-ginger.md` translates *kesarāmla* as "not securely identifiable", while a note in the body still says it is "the citron under a second name, not a separate sour fruit". `spiced-sour-vatakas.md` now ends with the obscure `मनोभिधाः` (*mano-abhidhāḥ*) where the old text had the easy `मनोहराः`, "delightful"; no body prose depends on it.

## Verification performed

- `npm run build` — 53 pages, clean.
- `SHOW_DRAFTS=1 npm run build` — 274 pages, clean.
- Script check on all 14: parsed frontmatter back out with `js-yaml` and asserted `original === entry.latin` and `translation === entry.english` for the entry named in `source:`; asserted `translation` and `original` both differ from their pre-edit values; asserted balanced `[` / `]` in both fields; asserted the body and every other frontmatter key are unchanged byte-for-byte against a pre-edit copy. All 14 pass.
- Spot-checked the rendered `/recipes/manasollasa/` full-text section: each new ref appears and links through to its recipe.
