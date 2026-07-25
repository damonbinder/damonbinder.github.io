# Mānasollāsa 3.13.1436–1441 — the four Pork *Cakkalikās*, translation and reconstruction audit

*Created 2026-07-25 11:51.*

Scope: the four published files `src/content/recipes/pork-cakkalikas-fried-sweet.md`, `pork-cakkalikas-sweet-curd.md`, `pork-cakkalikas-sour-citron.md`, `pork-cakkalikas-mustard-citron-curd.md`. All four carry the same `original` and `translation`; the translation was rewritten once and applied identically to all four. `src/data/sources/manasollasa.ts`, `roast-pork-sunthaka.md`, `sour-meat-glaze.md`, and `finely-diced-meat-with-green-chickpeas.md` were read but not edited.

## Summary

**The four-way split matches the Sanskrit exactly.** 1437 is the sweet curd, 1438–1439ab the mustard-and-citron curd, 1439cd the ghee fry, and 1440–1441 the sour citron dressing. The boundaries fall on the text's own connectives — `वा` at 1439c and `अथवा` at 1440a — every recipe file claims the right one, and none of the four collapses a `वā … vā` menu into a combination. This is the cleanest result of the audits so far: the division was drawn correctly, and the errors are all inside the translation rather than in the reconstruction or the split.

**The most consequential correction: camphor is not optional, and the sweet curd base is a named dish.** 1437's curd is `मथिते शर्करायुक्ते ... एलाविमिश्रिते । कर्पूरवासिते` — four coordinate locatives, none marked with `वा`. The chapter then says, at **1573**, `मथितं शर्करायुक्तमेलाचूर्णविमिश्रितम् । कर्पूरधूपितं नाम्ना मज्जिकेत्यभिधीयते` — that exact mixture of churned curd, sugar, cardamom, and camphor is called ***majjikā***. Slot for slot it is the same formula as 1437. So the camphor is a defining component of a named preparation, not a garnish, and "Optional speck of edible camphor" understates the source. The modern optionality is defensible on intensity grounds and I left the ingredient list alone, but the note now says so.

**Second: `मथित` is a defined technical term and the chapter defines it itself.** At **1571–72**: `मन्थानेन मथित्वा तन्नवनीतमथो हरेत् । निर्जलं मथितं प्रोक्तम्` — churn the curd, remove the butter; the undiluted product is *mathita*, as against `उदश्वित्` (half water) and `तक्र` (quarter water). The site's own translation of that entry already says this. So both curd *Cakkalikās* call for a **thin, tangy, defatted churned curd**, not set whole-milk yoghurt. That is a real reconstruction consequence, noted on both curd files.

**Third: the translation invented an ingredient.** "A sour version combines citron pulp, fresh ginger, **sour citrus**, pepper, mustard, rock salt, and asafoetida" turned `केसराम्लैर्मनोहरैः` (1440d) into a phantom second fruit. `केसराम्ल` is a lexically attested name for the citron across six dictionaries — Monier-Williams, Shabda-Sagara, Yates, DDSA, Böhtlingk–Roth, and the *kürzere Fassung* all give "citron" or "citron tree". 1440 names the citron twice under two names; it does not list two fruits. The ingredient lists never had a "sour citrus" line, so the translation was the more wrong of the two.

**Fourth: `धूपित` has a different target in each of the two verses that use it, and neither target was in the translation.** At 1439a `धूपिते हिङ्गुना सम्यग् दध्नि` the participle is locative, agreeing with `दध्नि` — the **curd** is what gets the asafoetida smoke. At 1441c `हिङ्गुना धूपिताः ... चक्कलिका` it is nominative plural feminine, agreeing with `चक्कलिका` — the **meat** is what gets it. That is a useful distinction for a cook and it happens to corroborate Damon's own hedge on the sour version: 1441 fumigates the pieces themselves, which fits a dressed dish rather than something folded into a sauce.

Also dropped and now restored: `पूर्ववत्` (1438b), the entire material specification `मांसमेदोमयान् शुण्ठान्` (1438a), `सम्यग्` (1439a), `सुपक` (1440b), `सूक्ष्मैः` (1440c), `चूर्णितं` (1441a), `ततः` (1441b), and four epithets — `शुभाः`, `रुच्याः`, `मनोहरैः`, `हृद्याः ... वराः`.

| | Count |
|---|---|
| Confirmed problems fixed | 9 |
| Judgement calls applied (revertible individually) | 4 |
| Unresolved, flagged | 2 |

Transcription: **22 of 24 pādas scan clean** as *anuṣṭubh*. 1437b is one short but resolves by dissolving a sandhi; **1438d is genuinely defective at 7 syllables** and should be collated. Against the prior results (1442–48 clean at 28/28, 1449–52 at 16/16, 1427–35 corrupt at 28/36), this passage sits with the clean ones.

---

## 1. The four-way split, verified against the connectives

The whole passage is one syntactic chain governed by two optatives (`क्षिपेत्`, `किरेत्`) plus a resultative close.

| Recipe file | Verses | Where the Sanskrit draws the boundary | Verdict |
|---|---|---|---|
| `pork-cakkalikas-sweet-curd.md` | 1436–1437 | Opens the passage. `मेदोभागं प्रगृह्य` … `कृत्वा` … `क्षिपेत्` — two absolutives and one main verb, ending at `क्षिपेत्` (1437d). | Correct |
| `pork-cakkalikas-mustard-citron-curd.md` | 1438–1439ab | New accusative object (`मांसमेदोमयान् शुण्ठान्`) restarts the sentence; ends at the second `क्षिपेत्` (1439b). | Correct |
| `pork-cakkalikas-fried-sweet.md` | 1439cd | `घृते **वा**` — the `वा` coordinates against 1439b's `क्षिपेत्`, so this is an alternative treatment of 1438's pieces. | Correct |
| `pork-cakkalikas-sour-citron.md` | 1440–1441 | `**अथवा**` opens 1440a; the passage closes with a nominative predication rather than an imperative. | Correct |

Two consequences the pages did not carry:

- **1436 and 1438 take different material.** 1436 takes `मेदोभागं`, the *fatty portion*, of the cooked *śuṇṭhakas*. 1438 takes `मांसमेदोमयान् शुण्ठान्`, *śuṇṭhas* "consisting of meat and fat". Since 1439cd and 1440–41 hang off 1438, the sweet curd is the one version built on fat alone and the other three are built on meat-and-fat. Pork belly satisfies both readings, so this is a note rather than an ingredient change (see J1).
- **`शुण्ठक` (1436) versus `शुण्ठ` (1438)** is metrical convenience, not a second cut. Both are the parent recipe's pieces.

### `स्विन्नानां` is confirmed, and it is the right evidence for the parent fix

`स्विन्नानां शुण्ठकानां` (1436a) is a genitive plural past participle of `स्विद्`, the `स्वेदन` family — sweated, steamed, cooked by moist heat. Rendering it "cooked *śuṇṭhakas*" is correct, and the bare genitive with no qualifier is a back-reference to 1427–35, matching `प्रक्षिप्य शुण्ठकांस्तत्र` at 1447. `related: [roast-pork-sunthaka]` is present on all four files and is right.

One nuance worth knowing rather than acting on: because `स्विन्न` literally names *moist-heat* cooking, 1436 may be pointing specifically at 1434's `अम्लपरिस्विन्नान्` variant — the pieces sweated in sour liquid — rather than at the plain ember roast. It does not matter for the reconstruction, because 1434's sour-sweated pieces are then roasted `पूर्ववत्` anyway, so roast belly satisfies either reading. It does mean 1436 is independent corroboration of the parent correction: the same root, in the same passage, in a sense that can only be cooking.

---

## 2. Confirmed problems, all fixed

Ordered most-consequential-first. Every one of these is a case where the page contradicted or silently dropped the text.

### C1. The camphor is a defining ingredient, not an option (1437c, with 1573)

- **Text:** `मथिते शर्करायुक्ते दध्न्येलाविमिश्रिते । कर्पूरवासिते तत्र रुच्याश्चक्कलिकाः क्षिपेत्` — four locative attributes of the curd, coordinate, none marked optional.
- **Parallel:** 1573 gives the identical formula (`मथितं शर्करायुक्तम् एलाचूर्णविमिश्रितम् । कर्पूरधूपितम्`) a name: *majjikā*. Take the camphor out and it is not *majjikā*.
- **`वासित` vs `धूपित`:** 1437 has the curd *scented* with camphor, 1573 *fumigated* with camphor smoke. Both point at aromatizing the curd rather than stirring a lump through it, which supports the recipe's "speck" quantity. The mechanism, not the amount, is what was missing.
- **Fixed:** translation restored; note on `sweet-curd` now says the text does not treat it as optional and names *majjikā*. Ingredient list untouched.

### C2. `मथित` is a defined dairy classification (1437a, 1438c, with 1571–72)

- **Text's own definition, 1571–72:** `निर्जलं मथितं प्रोक्तमुदश्वित् स्याज्जलार्धकम् । पादाम्बु तक्रमुद्दिष्टं` — churned, butter removed, **no water** = *mathita*; half water = *udaśvit*; quarter water = *takra*. The site already translates that entry correctly.
- **Consequence:** both curd versions want a defatted, churned, unwatered curd — thin and sharply tangy. 200 g of set whole-milk yoghurt is the wrong texture and the wrong fat level, particularly as a foil for 500 g of pork fat.
- **Fixed:** `[*mathita*, from which the butter has been removed]` in the translation; a note on both curd files. Quantities untouched.

### C3. `केसराम्ल` is the citron, not a second sour citrus (1440d)

- **Text:** `केसराम्लैर्मनोहरैः`, instrumental plural, in a verse that has already said `मातुलुङ्गस्य सुपकस्य च केसरैः`.
- **Lexica:** `केसराम्ल` / `केशराम्ल` = "the citron", "a citron tree" in Monier-Williams, Shabda-Sagara, Yates, DDSA, Böhtlingk–Roth, and the *Sanskrit-Wörterbuch in kürzerer Fassung*. Six independent glosses, all the same fruit. The chapter is already known to vary synonyms freely for one substance — dried ginger runs `नागर` / `शुण्ठी` / `विश्व`, turmeric `निशा` / `हरिद्रा`.
- **Was:** "sour citrus" listed as a distinct item alongside "citron pulp".
- **Fixed:** translated as `*kesarāmla*` with the bracketed gloss "a second name for the citron", plus a note on the sour-citron file. The phantom ingredient is gone. Ingredient list needed no change, since it never had the extra item.

### C4. `धूपित` — smoke, and two different targets (1439a, 1441c)

- **1439a:** `धूपिते हिङ्गुना सम्यग् दध्नि` — `धूपिते` is locative singular agreeing with `दध्नि`. The **curd** is fumigated.
- **1441c:** `हिङ्गुना धूपिताः ... चक्कलिका` — `धूपिताः` is nominative plural feminine agreeing with `चक्कलिका`. The **pieces** are fumigated.
- **Was:** "perfumed with asafoetida" with no stated target in one file, and asafoetida as a plain mixed-in powder in the other.
- **House precedent:** the site renders `धूप` as "perfumed" throughout `manasollasa.ts`, and as "cumin smoke" / "camphor smoke" at 1448. I kept the house verb and added "smoke" once, at 1439, rather than re-verbing the whole chapter.
- **Fixed:** translation carries both targets; notes on the two affected files. This also independently supports the sour version's existing hedge about frying (see §4).

### C5. `पूर्ववत्` dropped (1438b)

`पूर्ववच्चक्कलीकृतान्` — "made into *cakkalikās* as before". This is the passage's one back-reference to its own slicing instruction, and it is what tells you the mustard-citron version repeats 1436's palmyra-leaf cut rather than inventing a new one. Restored verbatim as "made into *cakkalikās* as before".

### C6. The whole material specification of 1438 was missing

`मांसमेदोमयान् शुण्ठान्` — "*śuṇṭhas* consisting of meat and fat" — had no counterpart in the English at all, which is why the translation read as though all four versions started from 1436's fatty portion. Restored.

### C7. Four quantifiers and modifiers dropped

| Text | Was | Now |
|---|---|---|
| `सम्यग्` (1439a) | — | "thoroughly perfumed" |
| `सुपकस्य` (1440b) | "citron pulp" | "the pulp of a **well-ripened** citron" |
| `सूक्ष्मैः` (1440c) | "fresh ginger" | "**finely cut** pieces of fresh ginger" |
| `चूर्णितं` (1441a) | "pepper" | "**powdered** pepper" |

`सूक्ष्मैः` is the one with a cooking consequence, and the reconstruction already honored it ("10 g fresh ginger, finely chopped") while the translation did not — the page was more faithful than its own translation.

### C8. `ततः` dropped, and it encodes the order of operations (1441b)

`चूर्णितं मरिचं राजीसैन्धवैर्मिश्रयेत्ततः` — "**then** he should mix in powdered pepper together with mustard and rock salt", after the citron and ginger. The dressing is built first and the meat arrives last. The reconstruction's step 3 already does this; the translation flattened it to "combines". Restored as "then mix in".

### C9. Five epithets dropped, two of them dietetic terms rather than decoration

- `शुभाः` (1436d) → "make **fine** *cakkalikās*".
- `रुच्याः` (1437d) → "the **appetizing** *cakkalikās*". Cognate with the `रुच्यर्थं` ("for relish") that the 1442–48 entry already carries.
- `मनोहरैः` (1440d) → "**delightful**".
- `साम्ला हृद्याश्चक्कलिका वराः` (1441d) → "sour and **heart-pleasing**, these *cakkalikās* are **excellent**".

`हृद्य` is not filler. The chapter's own framing verse at 1345 is `इति पञ्चविधं हृद्यं पथ्यं भुञ्जीत भूपतिः` — the king should eat this fivefold food, *hṛdya* and *pathya*. So `हृद्याः` at 1441 places the dish against the chapter's opening dietetic frame, exactly as `प्रलेहकं` at 1446 places the glaze in the *lehya* class. Worth keeping for that reason and not only as praise.

Note a resulting inconsistency: `manasollasa.ts` drops trailing epithets elsewhere — `रुच्यं लघु पथ्यं मनोहरम्` at 1465 and `वरम्` at 1475 are both gone from the English. My four files now keep theirs. Since the source file is being re-synced centrally, this is the moment to settle the policy either way.

---

## 3. Judgement calls — applied, flag them to revert individually

| # | Item | What I did | Why it could go the other way |
|---|---|---|---|
| **J1** | **`मेदोभागं` vs `मांसमेदोमयान्`.** 1436 takes the fatty portion; 1438 takes meat-and-fat. | Added a note to `sweet-curd` suggesting the fattier end of the belly for that version only. Left all four ingredient lists at "500 g cooked skinless roast pork belly, chilled". | `मेदोभाग` may just mean "the fat-bearing part" of the animal — the belly — as against `शुद्धं मांसं` (lean meat) at 1457 and 1462, in which case there is no distinction to make and pork belly already is the answer. Under the softer reading the note is unnecessary. |
| **J2** | **The `[*mathita*, …]` bracket inside the `translation` field.** | Kept, because it changes what a cook should buy. | It is the only bracketed gloss in the field, and Damon may prefer the technical point to live entirely in the Notes and the translation to read as plain English. Deleting the bracket costs nothing else. |
| **J3** | **The palmyra-leaf note, added to all four files.** | One identical bullet in each, saying the thickness, length, chilling, and skinning are the reconstructor's. | Four copies of one sentence. The alternative is to put it on one file and let the other three assert 3 mm × 5–7 cm without warrant, which seemed worse. Trimming it to the two curd files would be a middle option. |
| **J4** | **Keeping "perfumed" as the verb for `धूपित` and adding "smoke" only once.** | Minimal change, stays house-consistent. | A stricter reading would use "fumigated" throughout and force the same change across `manasollasa.ts`. That is a chapter-wide decision, not one for four recipe files. |

---

## 4. Stress-testing the cooking

**Neither yoghurt version will grain, and one of them has a rest that does real work.** Both fold pork into cold curd; nothing is heated, so the failure mode the *Glaze* audit found cannot arise here.

- **Sweet curd** (200 g yoghurt, 20 g sugar, cardamom, camphor; no added acid, **no salt**). Casein aggregation needs heat, or salt to screen charge, or both. There is neither. Stable.
- **Mustard-citron curd** (200 g yoghurt, 1 tsp ground mustard, 30 g citron/lemon pulp, asafoetida; **no salt**). Adding citrus to yoghurt at room temperature takes it further *below* the isoelectric point, which partly re-disperses casein rather than aggregating it. Some whey will weep over 20 minutes — and given `मथित` is supposed to be thin and unwatered, a little weeping is arguably the correct appearance rather than a fault. Sound.
- **The 20-minute rest.** Invented — 1437 and 1439 both just say `क्षिपेत्`, throw them in. But it earns its place in the mustard version and not in the sweet one. Ground mustard is inert dry; pungency develops only when myrosinase meets sinigrin in water, over roughly 10–15 minutes, and acid slows that reaction while stabilizing the isothiocyanate once formed. So with citron in the yoghurt the heat builds across the rest. In the sweet curd version the rest is doing nothing chemical.
- **The sour version's mustard is the one that loses out.** Its mustard is mixed and then tossed with **warm** pork and served immediately. Heat deactivates myrosinase and there is no bloom time, so that mustard will read flat next to the mustard in the curd version. Mixing the dressing about ten minutes ahead fixes it — and `ततः` (C8) says the powders go into the citron and ginger *before* the meat, so the text already implies that order. Added as a note; the method is untouched.
- **The chilling is a slicing aid, not a serving temperature.** You cannot cut 3 mm slices of warm belly, so chilling is right and it is the reconstructor's own step. But the curd versions then serve 3 mm slices of pork fat straight from the fridge, where the fat is waxy. Letting the sliced pork come to room temperature before folding would improve both, and the text says nothing either way. **Not changed** — the recipes are cooked-and-validated and this is a preference, not a correction. Flagging it in case Damon wants it.

---

## 5. Unresolved

| # | Term | Status |
|---|---|---|
| **U1** | `केसराम्ल` (1440d) — *why* the citron is named twice | The word itself is secure (C3). What is not settled is the rhetorical point of naming one fruit twice in one verse. Three live readings: a plain synonym-restatement, which this author's habits allow; an appositive, so that `केसरैः … केसराम्लैर्मनोहरैः` means "with the filaments, the delightful citron-sour ones"; or `केसर` + `अम्ल` read as "the sour juice of the filaments", pairing pulp with its juice the way 1443 pairs `रसं मातुलिङ्गस्य` against the pulp. **Nothing hangs on it** — every reading yields citron and nothing else — so the translation transliterates the word, glosses it, and stops. |
| **U2** | `केसर` for a citrus (1438d, 1440b) | Rendered "pulp", which is right but slightly loose. `केसर` is literally filament or mane, so the referent is the juicy vesicles inside the segments, which do look like filaments; the citron-filament preparations are a recognized item in the Ayurvedic materia medica. The reason to be careful is that `केसर` **also** means saffron, and the chapter uses it that way at 1416 (`एलाकर्पूरकेसरैः`, in a milk sweet). Here the genitive `मातुलुङ्गस्य ... केसरैः` rules saffron out — a citron does not have saffron — so the reading is safe, but the word is doing two jobs in one chapter and a reader who checks 1416 deserves to know that. Not surfaced on the page; noted here. |

Two terms the brief asked about came out secure and needed no hedging. `राजिका` (1438c) and `राजी` (1441a) are both black mustard, *Brassica juncea* / *nigra*, standard across the lexica; the variation is the same free synonymy the chapter shows elsewhere. `मातुलिङ्ग` (1438d) and `मातुलुङ्ग` (1440a) are both citron, *Citrus medica*. **The existing citron-substitute note is accurate** and I left it verbatim on both files. Worth knowing that it is strengthened by `सुपकस्य`: a *well-ripened* citron is exactly the state in which the Indian citron (*bijora*) has acidic juicy pulp worth using, so lemon pulp is standing in for something the text specifically wanted ripe.

---

## 6. Transcription integrity: metrical scan of 1436–1441

Every pāda scanned against *anuṣṭubh*'s 8+8+8+8, by script and checked by hand.

**22 of 24 clean.** The two exceptions:

| Pāda | Text | Count | Diagnosis |
|---|---|---|---|
| 1437b | `दध्न्येलाविमिश्रिते` | 7 | **Soft.** `दध्नि` + `एला` has been written with *yaṇ* sandhi, which costs a syllable. Printing the hiatus (`दध्नि एलाविमिश्रिते`) restores exactly 8. Same pattern as `अथाम्लपरिस्विन्नान्` → `अथ अम्ल-` in the parent passage. Probably an editorial-orthography artifact, not a textual problem. |
| 1438d | `मातुलिङ्गकसरे` | 7 | **Real.** No sandhi to dissolve, and one syllable genuinely missing. Note also that `कसर` here is a shortened `केसर` — 1440b has the full form — which is itself a sign of drift. `मातुलिङ्गकेसरे` still scans 7; the readings that reach 8 are **`मातुलुङ्गस्य केसरे`** (attractive, because 1440a–b uses exactly `मातुलुङ्गस्य … केसरैः`) or `मातुलिङ्गककेसरे`. |

One further orthographic wobble with no metrical consequence: 1439d has `किरेदेला सशर्कराम्`, where `सशर्कराम्` is accusative and `एला` should therefore be `एलां`; the pāda scans 8 either way. And 1440b's `सुपकस्य` is presumably for `सुपक्वस्य`, which also scans 8 — either form gives "well-ripened", so nothing turns on it.

**Recommendation:** collate **1438d** against Shrigondekar's GOS edition. I have not emended the Devanagari, and the `original` field is byte-for-byte what it was before this audit (verified, §7). The sense of 1438d is not in doubt — citron *kesara* in churned curd with mustard — so **there is no translation or reconstruction risk from the defect**, and no reason to hold the pages back. Compare the running tally: 1442–48 clean at 28/28, 1449–52 at 16/16, this passage at 22/24 with one soft and one real, 1427–35 corrupt at 28/36.

---

## 7. Verification, and files touched

Run after all edits, parsing the YAML directly (no build, per the brief):

```
pork-cakkalikas-fried-sweet.md             YAML OK  status=published  keys=15
pork-cakkalikas-sweet-curd.md              YAML OK  status=published  keys=15
pork-cakkalikas-sour-citron.md             YAML OK  status=published  keys=15
pork-cakkalikas-mustard-citron-curd.md     YAML OK  status=published  keys=15

original       IDENTICAL across all four   sha256[:16] = 38c4927b8b624341
translation    IDENTICAL across all four   sha256[:16] = 90a0d3cca735af29
source         IDENTICAL   work  IDENTICAL   originalLang  IDENTICAL
```

- **The four `translation` fields are byte-identical.** Confirmed by hashing the parsed values, not the raw lines, so the check is immune to differences in YAML line wrapping.
- **The `original` Devanagari is unchanged.** Its hash, `38c4927b8b624341`, was captured before any edit and is unchanged after. No `original` field was touched in any file.
- `status: published` unchanged on all four. No other frontmatter field changed.
- `git status` shows exactly these four files modified under `src/content/recipes/`, and nothing else in the repo.

### Files edited

1. `src/content/recipes/pork-cakkalikas-fried-sweet.md` — `translation`; new `## Notes` section (the file had none).
2. `src/content/recipes/pork-cakkalikas-sweet-curd.md` — `translation`; three notes added, existing camphor note extended.
3. `src/content/recipes/pork-cakkalikas-sour-citron.md` — `translation`; three notes added, two existing notes kept verbatim.
4. `src/content/recipes/pork-cakkalikas-mustard-citron-curd.md` — `translation`; three notes added, existing citron note kept verbatim.

No ingredient list and no method step was changed in any file.

---

## 8. Verbatim change log

### The shared `translation` field — before

> Cut the fatty portion of cooked *śuṇṭhakas* into thin palmyra-leaf-shaped slices called *cakkalikās*. Put them in churned curd with sugar, cardamom, and camphor; or in curd with mustard and citron pulp, perfumed with asafoetida. Alternatively fry them in ghee and scatter cardamom and sugar over them. A sour version combines citron pulp, fresh ginger, sour citrus, pepper, mustard, rock salt, and asafoetida.

### The shared `translation` field — after

> Taking the fatty portion of the cooked *śuṇṭhakas*, make fine *cakkalikās*, slices of the same shape as a palmyra leaf. Throw the appetizing *cakkalikās* into churned curd [*mathita*, from which the butter has been removed] combined with sugar, mixed with cardamom, and perfumed with camphor. Or take *śuṇṭhas* of meat and fat, made into *cakkalikās* as before, and throw them into churned curd combined with mustard and citron pulp and thoroughly perfumed with asafoetida smoke. Alternatively fry them in ghee and scatter cardamom with sugar over them. Or else, with the pulp of a well-ripened citron, with finely cut pieces of fresh ginger, and with delightful *kesarāmla* [a second name for the citron], then mix in powdered pepper together with mustard and rock salt; perfumed with asafoetida, sour and heart-pleasing, these *cakkalikās* are excellent.

Phrases preserved from Damon's original wording: "the fatty portion", "cooked *śuṇṭhakas*", "palmyra-leaf", "churned curd", "mustard and citron pulp", "perfumed with asafoetida", "Alternatively fry them in ghee and scatter cardamom … over them".

### Notes added

**`pork-cakkalikas-fried-sweet.md`** — new section, one bullet:

> ## Notes
>
> * The text's only guide to the slicing is that the *cakkalikās* are shaped like a palmyra leaf: a long narrow strip, the same leaf South Indian manuscripts were written on. The thickness, the length, the chilling (which is only there to make thin slices possible), and the skinning are all mine.

**`pork-cakkalikas-sweet-curd.md`** — the palmyra bullet above, plus:

> * 1436 asks specifically for the fatty portion of the *śuṇṭhakas*, where 1438, which supplies the other three versions, takes pieces of meat and fat together. To follow that distinction, cut this version from the fattier end of the belly.
> * *Mathita*, the word for the curd here, is defined later in the same chapter (1571–72) as curd churned with the butter taken out and no water added. So the target is a thin, tangy, low-fat curd rather than set whole-milk yoghurt.

and the existing camphor note extended — before:

> * Use only food-grade camphor, and omit it unless you are familiar with its intensity.

after:

> * Use only food-grade camphor, and omit it unless you are familiar with its intensity. The text does not treat it as optional: the camphor sits alongside the sugar and cardamom, and 1573 gives that exact mixture of churned curd, sugar, cardamom, and camphor a name of its own, *majjikā*. Making it optional here is a concession to how strong edible camphor is, not something the source invites.

**`pork-cakkalikas-mustard-citron-curd.md`** — the palmyra bullet, plus:

> * *Mathita*, the word for the curd here, is defined later in the same chapter (1571–72) as curd churned with the butter taken out and no water added. So the target is a thin, tangy, low-fat curd rather than set whole-milk yoghurt.
> * In 1439 it is the curd that is perfumed with asafoetida rather than the meat, and the verb means perfumed with smoke. Blooming the asafoetida in a little hot ghee and stirring that into the yoghurt is closer to the text than dusting the powder over the finished dish.
> * The 20-minute rest earns its place in this version. Ground mustard develops its pungency only once it is wetted, and acid slows that reaction down, so with the citron in the yoghurt the heat builds over the rest instead of arriving all at once.

The existing citron note is unchanged and now sits last.

**`pork-cakkalikas-sour-citron.md`** — the palmyra bullet (first), plus:

> * In 1441 it is the *cakkalikās* themselves that are perfumed with asafoetida, where 1439 perfumes the curd instead. That is some support for treating this version as dressed meat rather than as something folded into a sauce.
> * Mixing the dressing ten minutes ahead gives the ground mustard time to develop; tossed straight onto hot pork it stays flat. The text puts the powders into the citron and ginger before the meat arrives, so this is the order it already implies.
> * 1440 names the citron twice, once as *mātuluṅga* and once as *kesarāmla*, which the lexica also gloss as the citron. There is no second, separate sour fruit in the verse.

Both existing notes on this file are unchanged and kept in place.

---

## 9. Knock-on for `manasollasa.ts`

Not edited, per the brief. Two things for whoever re-syncs it:

- **The 1436–1441 entry appears four times verbatim** in the source-text array, once per *Cakkalikās* recipe — already flagged in the *Śuṇṭhaka* audit. **My change makes the duplication more conspicuous, not less:** the corrected translation is about twice the length of the old one, so the source page will now render four identical blocks of roughly 900 characters instead of four of roughly 450. Worth de-duplicating in the same pass that syncs the new text.
- **The epithet policy is now inconsistent.** My four files restore `शुभाः`, `रुच्याः`, `मनोहरैः`, `हृद्याः`, and `वराः`, while `manasollasa.ts` drops the parallel epithets at 1465 (`रुच्यं लघु पथ्यं मनोहरम्`) and 1475 (`वरम्`). Pick one convention. I would restore them, on the strength of the `हृद्यं पथ्यं` framing at 1345 — several of these are dietetic classifications rather than ornament.

## 10. What would falsify any of this

- **A different reading at 1438d in the GOS edition.** The pāda is a syllable short, so the printed text differs from this transcription in some way. Any of the candidate restorations still yields citron *kesara*, so the exposure is low, but it is the one place in the passage where the transcription is known to be wrong.
- **`कर्पूरवासिते` absent, or marked `वा`, in the printed text.** That would undo C1. The pāda scans clean at 8 and the 1573 parallel independently supports camphor as constitutive, so I would be surprised.
- **A lexicon reading `केसराम्ल` as something other than the citron.** Six dictionaries agree, so this would take a nighaṇṭu entry rather than a general lexicon. Even then C3's substantive point — that 1440 lists one fruit, not two — would need `केसराम्ल` to be a *different* sour fruit, not merely an uncertain one.
- **A published translation of 1436–1441.** I found none, in English or otherwise. The secondary literature on this chapter names *śuṇṭhaka* and *cakkalikā* but does not render the verses. If Damon has the GOS volume or Arundhati's *Royal Life in Mānasollāsa*, 1438d and 1440d are the two lines worth a direct look.
