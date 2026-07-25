# Mānasollāsa size-idiom sweep — restoring dropped comparisons, and loan-word markup

*Created 2026-07-25 11:30.*

Scope: all 64 Mānasollāsa recipes in `src/content/recipes/`, plus the mirrored entries in `src/data/sources/manasollasa.ts`. `chickpea-and-meat-mixture.md` was skipped per brief (separate rewrite in progress; since renamed `finely-diced-meat-with-green-chickpeas.md`). No `original` Devanagari field was altered anywhere.

## Summary

**8 recipes had dropped size/shape/colour comparisons; all 8 are fixed.** I scanned every Devanagari `original` for the full marker set (`प्रमाण`, `सङ्काश`/`संकाश`, `आकार`/`आकृति`, `सम्मित`, `सम`/`समान`, `सन्निभ`, `उपम`, `-वत्`, `-शः`, plus sandhi variants `ाकार`, `वच्`, `वन्`, `ङ्काश`), got 37 genuine instances across the 63 in-scope recipes, and found 25 of them already carried in the English. The single most significant restoration is **`घनसारप्रमाणानि` in `bhaditraka-skewers.md` (1462) — "pieces the size of lumps of camphor"** — because it is the one published recipe affected, and because it is the only size specification in that recipe: without it the translation says nothing about how big the meat is cut, while the reconstruction quietly asserts 4 cm.

Second most consequential: `mandali-blood-sausage.md` was dropping two comparisons (`रज्जुसङ्काशैः`, ropes; `राजवृक्षफलोपमा`, the pod of *Cassia fistula*) **and mis-anchoring a third** — `अङ्गारैः किंशुकाकारैः` is instrumental and describes the *embers* glowing like *kiṃśuka* flowers, not the sausage turning red. That is now re-anchored; see the flag below, since it is a correction rather than a restoration.

I also found and fixed two **stale mirror entries** in `manasollasa.ts` unrelated to this sweep: 1442–1448 (Sour Meat Glaze) and 1427–1435 (Roast Pork Śuṇṭhaka) were both still carrying the pre-correction English from before today's fixes, even though the file's own header declares the recipes the source of truth.

| | Count |
|---|---|
| Recipes scanned | 63 (64 minus the skipped chickpea dish) |
| Comparison instances found in the Devanagari | 37 |
| Already present in the English | 25 |
| Dropped and restored (Task 1) | 8 recipes, 11 clauses |
| Mis-anchored and re-anchored | 1 |
| Recipes given loan-word markup (Task 2) | 44 |
| Published files touched, total | 7 (1 for Task 1, 7 for Task 2) |
| `manasollasa.ts` entries re-synced | 44 |
| Build | `SHOW_DRAFTS=1 npm run build` passes, 274 pages, no warnings |

---

## 1. Task 1 — restored comparisons

Every change is a minimal insertion into the `translation` field. No surrounding sentence was rewritten, reordered, or shortened. All 8 are mirrored into `manasollasa.ts`.

| Recipe | Verse | Sanskrit | What I inserted |
|---|---|---|---|
| `bhaditraka-skewers.md` **(published)** | 1462 | `घनसारप्रमाणानि` | "the size of lumps of camphor" |
| `mamsa-vataka-bhusika-and-kosali.md` | 1479 | `पिष्टवच्चिकणं` | "until it is sticky like dough" |
| `mandaka-flatbreads.md` | 1379 | `सितपट्टसमप्रभाः` | "as lustrous as white silk" |
| `mandali-blood-sausage.md` | 1496 | `पेटकाकृतियुक्तासु` | "circular forms" → "basket-shaped forms" |
| `mandali-blood-sausage.md` | 1497 | `रज्जुसङ्काशैः` | "with lengths of intestine alone, which look like ropes" |
| `mandali-blood-sausage.md` | 1498 | `किंशुकाकारैः` | re-anchored to the embers — see flag below |
| `mandali-blood-sausage.md` | 1498 | `राजवृक्षफलोपमा` | "resembles the pod of the *rājavṛkṣa* [Cassia fistula]" |
| `pancavarni-five-coloured-offal-stew.md` | 1489 | `मेदसः शकलास्तद्वत्` | "cut the same way" |
| `pancavarni-five-coloured-offal-stew.md` | 1490 | `प्रमाणाल्लवणं` | "salt" → "salt in due measure" |
| `roast-meat-salad-with-citron-and-ginger.md` | 1477 | `गृञ्जनैस्तत्प्रमाणकैः` | "*gṛñjana* cut to the same size" |
| `roast-pork-sunthaka.md` | 1431 | `पाण्डुरं बिससङ्काशं` | "then wash it until it is pale like a lotus-stalk" |
| `royal-boiled-rice.md` | 1352 | `वाससा शशिशुभ्रेण` | "a dense clean cloth as white as the moon" |

### The one change that is a correction, not a restoration

**`mandali-blood-sausage.md`, 1498.** `अङ्गारैः किंशुकाकारैर्यावत्काठिन्यमाप्नुयुः` — `अङ्गारैः` and `किंशुकाकारैः` are both instrumental plural and agree; the flower-coloured thing is the bed of embers, and `यावत्काठिन्यम्` ("until they attain firmness") is the doneness cue for the sausages. The old translation read "heat it until firm and red like *kiṃśuka* flowers", which transfers the colour to the sausage and drops the ember reference. The brief says to leave comparisons that are already present alone, so this one is called out separately: it was present but attached to the wrong noun, and I judged a mis-anchored comparison to be the same defect as a dropped one. Easy to revert independently of the other three changes in that file.

### Restorations I considered and deliberately did not make

- **`iderika-fermented-black-gram-cakes.md`, `यावद्बुद्बुदसंकाशा` (1397ab).** This clause sits in the iḍerikā file's `original` because the files overlap at pāda boundaries, but it belongs to the *preceding* recipe — it is the frying cue for the *kaṭakarṇas* of 1394–96, and `katakarna-pulse-fritters.md` already translates it ("until the pieces are bubble-like and golden"). Inserting "until resembling bubbles" into the iḍerikā translation would attach it to the wrong dish. The same leading-pāda-untranslated convention is already in force in `gharika-black-gram-rings.md` and `patrika-layered-breads.md`. **Side effect worth knowing:** `katakarna-pulse-fritters.md`'s own `original` stops at 1396, so the source page shows that file's English carrying a clause its Devanagari does not contain, and the iḍerikā entry's Devanagari carrying a clause its English does not. Cosmetic, but it is the kind of thing that looks like an error on the source page.
- **`varsolaka-spiced-milk-sugar-balls.md`, `नानारूपाणि कुर्वीत` (1414).** "Make various forms" is narrowed to "shape into balls". Real omission, but a bare shape instruction rather than a comparison or measure, so out of this brief's scope. Note the chapter's other "various forms" (`नानाकारैः`, 1410) *is* carried, in `ksira-prakara-milk-curd-sweets.md`, so the two are inconsistent with each other.
- **`upakhandaka-dried-meat.md`, `चक्कलीः परिकल्पितान्` (1516).** Rendered "cut thin". `चक्कली` is the chapter's own shape term, defined at 1436 as `ताडपत्रसमाकाराः`, palmyra-leaf-shaped — and the four published *Cakkalikās* recipes all keep it. Not a comparison construction, so untouched, but "cut into *cakkalīs*" would be the consistent rendering.
- **`kavacandi-mixed-fry.md`, `तत्प्रमाणांश्च` (1453).** Carried as "equal-sized pieces of ginger" rather than "of that same measure". Present; left alone.
- **`basic-split-pulse-soup.md`, 1364.** `वर्णतः स्वादतो गन्धान्मार्दवाल्लाघवादपि` ("in colour, taste, smell, softness, and lightness") is dropped, but it is a list of qualities, not a comparison. Left alone.

---

## 2. Task 1 — published file, verbatim before/after

Only one published recipe was touched by Task 1.

### `bhaditraka-skewers.md` (`status: published`, Mānasollāsa 3.13.1462–1465)

Before:

> Take clean meat from beside the spine, cut it into pieces, and pierce the pieces many times. Rub them with asafoetida-water, ginger juice, and rock salt. Thread them on skewers and roast over embers, turning repeatedly and basting with ghee. When cooked, scatter ground black pepper and rock salt over them. This preparation is called bhaditraka.

After (Task 1 insertion only; the `*bhaditraka*` markup is Task 2, §3):

> Take clean meat from beside the spine, cut it into pieces **the size of lumps of camphor**, and pierce the pieces many times. Rub them with asafoetida-water, ginger juice, and rock salt. Thread them on skewers and roast over embers, turning repeatedly and basting with ghee. When cooked, scatter ground black pepper and rock salt over them. This preparation is called bhaditraka.

Five words inserted; nothing else in the field changed. Two things to note. First, `घनसार` is camphor by synonym rather than by the chapter's usual word — the chapter says `कर्पूर` at 1416, 1437, and 1475, and Monier-Williams gives *ghana-sāra* = camphor as a headword but also as the resin of *Shorea robusta*. Either referent is a small hard lump, so the size claim survives the ambiguity, but if you want it hedged the alternative is "the size of a lump of *ghanasāra*". See §5. Second, the recipe's ingredient list still says 4 cm pieces, which is considerably larger than a camphor lump — I did not touch the ingredients or method, but the two now visibly disagree and that is a decision for you.

---

## 3. Task 2 — loan-word markup (separately revertible)

Independent of Task 1. 44 recipes had transliterated source terms in the `translation` field with no `*asterisks*`; all are now marked, and all 44 are mirrored into `manasollasa.ts`. Applied by script with word-boundary guards and longest-match-first, skipping any span already inside asterisks; verified by an asterisk-balance check on every file and by confirming zero literal `*` survive in the rendered `dist/recipes/manasollasa/index.html`.

**Excluded, per CLAUDE.md:** English possessives ("sheep's", "cow's or buffalo's"), naturalized English (ghee, asafoetida, tamarind, jackfruit, basmati), English glosses standing in for source terms ("sour turmeric", "elephant-foot yam", "lotus-stem discs"), modern common names used as substitutes (tendu), and proper nouns.

| Recipe | Terms marked |
|---|---|
| `basic-split-pulse-soup.md` **(published)** | *rāja-mudga*, *niṣpāva*, *āḍhakī*, *rāja-māṣa*, *Niṣpāva* |
| `bhaditraka-skewers.md` **(published)** | *bhaditraka* |
| `brined-fruits-pods-and-vegetables.md` | *āmalaka*, *niṣpāva* |
| `buffalo-milk-payasa.md` | *śyāmāka*, *kaṅgu*, *nīvāra*, *pāyasa* |
| `dadhi-curd-from-reduced-milk.md` | *yāmas*, *dadhi* |
| `dhupa-kanjika.md` | *sauvīra*, *dhūpa-kāñjika* |
| `ember-baked-angarapolika-and-griddle-polika.md` | *aṅgārapolikās*, *polikās* |
| `fruit-panaka-with-milk-whey-base.md` | *pānaka* |
| `gharika-black-gram-rings.md` | *ghārikās* |
| `ghrta-karkata-crabs-in-ghee.md` | *ghṛta-karkaṭas* |
| `iderika-fermented-black-gram-cakes.md` | *iḍerikās* |
| `kalakhanda-preparations.md` | *kālakhaṇḍa*, *ajājī* |
| `kanjika-cooked-brain.md` | *kāñjika* |
| `katakarna-pulse-fritters.md` | *vaṭṭāṇa*, *kaṇḍu*, *niṣpāva* |
| `kavacandi-mixed-fry.md` | *vaṭakas*, *meṣaka*, *kāsamarda*, *kavacandī* |
| `khara-khanda-salted-fish.md` | *khara-khaṇḍas* |
| `kisara.md` | *kīsāra* |
| `krsnapaka-blood-finished-mutton.md` | *kṛṣṇapāka* |
| `majjika-sweet-spiced-buttermilk.md` **(published)** | *majjikā* |
| `mamsa-vataka-bhusika-and-kosali.md` | *māṃsa-vaṭakas*, *bhūṣikās*, *kośalī* |
| `mandali-blood-sausage.md` | *dantaśaṭha*, *kiṃśuka*, *maṇḍalī* |
| `mastu-spiced-whey.md` | *mastu* |
| `meat-stuffed-eggplant-gourd-or-radish.md` | *pūra-bhaṭṭāka*, *kośātakī* |
| `mung-soup-with-ginger-and-eggplant.md` **(published)** | *priyāla* |
| `musaka-style-sour-roast.md` | *mūṣaka*, *mayiga* |
| `nandyavarta-sour-turtle.md` | *nandyāvarta* |
| `pancavarni-five-coloured-offal-stew.md` | *kālakhaṇḍa*, *pañcavarṇī* |
| `pickled-shoots-and-roots.md` | *cakrī*, *śatāvarī*, *pātāla*, *kacora*, *bilakanda* |
| `puryala-covered-meat.md` **(published)** | *āmalakas*, *śuṇṭhakas*, *puryala* |
| `roast-meat-salad-with-citron-and-ginger.md` | *gṛñjana* |
| `savoury-vestika-and-ghosaka.md` | *harimantha*, *veṣṭikā*, *ghosaka*, *Ghosakas*, *rāja-māṣa*, *vaṭṭāṇa* |
| `seasoned-rice-water-vyanjana.md` | *vyañjana* |
| `sikharini-sweet-strained-curd.md` | *śikhariṇī* |
| `sohala-and-pahalika-fried-breads.md` | *sohalās*, *Pāhalikās* |
| `spiced-roasted-marrow.md` | *ajājī* |
| `spiced-sour-vatakas.md` | *ārānāla*, *vaṭakas* |
| `spiced-takra.md` **(published)** | *mathita*, *udaśvit*, *takra*, *Takra* |
| `sweet-pulse-purika.md` **(published)** | *pūrikās* |
| `udumbara-fried-sweets.md` | *udumbara* |
| `utkvathita-long-cooked-meat-soup.md` | *utkvāthita* |
| `varna-sunthaka-liver-and-fat-skewers.md` | *kālakhaṇḍa*, *varṇa-śuṇṭhaka* |
| `varsolaka-spiced-milk-sugar-balls.md` | *varṣolakas* |
| `vatakas-in-sweet-curd-or-kanjika.md` | *ghārikās*, *vaṭikās*, *vaṭakas*, *kāñjika*, *kāñjika-vaṭakas*, *vaṭaka* |
| `vatimaka-meat-cakes.md` | *vaṭimaka* |

### Task 2, published files — verbatim before/after

Six published files besides `bhaditraka-skewers.md` (§2, which took both a Task 1 and a Task 2 change).

**`basic-split-pulse-soup.md`**
Before: `Use rāja-mudga, yellow mung, niṣpāva, chickpeas, dark āḍhakī, black gram, lentils, or rāja-māṣa. … Niṣpāva and dark āḍhakī are cooked whole without asafoetida or turmeric.`
After: `Use *rāja-mudga*, yellow mung, *niṣpāva*, chickpeas, dark *āḍhakī*, black gram, lentils, or *rāja-māṣa*. … *Niṣpāva* and dark *āḍhakī* are cooked whole without asafoetida or turmeric.`

**`majjika-sweet-spiced-buttermilk.md`**
Before: `… perfumed with camphor smoke is called majjikā.`
After: `… perfumed with camphor smoke is called *majjikā*.`

**`mung-soup-with-ginger-and-eggplant.md`**
Before: `… or fried lotus-stem discs, or priyāla kernels.`
After: `… or fried lotus-stem discs, or *priyāla* kernels.`

**`puryala-covered-meat.md`**
Before: `Cut clean meat into pieces the size of large āmalakas. … Return the same-sized meat śuṇṭhakas … This excellent preparation is called puryala.`
After: `Cut clean meat into pieces the size of large *āmalakas*. … Return the same-sized meat *śuṇṭhakas* … This excellent preparation is called *puryala*.`

**`spiced-takra.md`**
Before: `The undiluted churned product is called mathita; with half its volume of water it is udaśvit; with one-quarter water it is takra. Takra is perfumed …`
After: `The undiluted churned product is called *mathita*; with half its volume of water it is *udaśvit*; with one-quarter water it is *takra*. *Takra* is perfumed …`

**`sweet-pulse-purika.md`**
Before: `… and fry it in oil. Other pūrikās may be cooked on a heated plate.`
After: `… and fry it in oil. Other *pūrikās* may be cooked on a heated plate.`

No other word in any published file changed.

### Task 2 follow-up not done: the non-recipe entries in `manasollasa.ts`

Eight entries in `manasollasa.ts` have no matching recipe (the framing, the meat and vegetable classifications, the bird-cleaning passage, and the closing material on serving and seasonal diet). The brief scoped Task 2 to "all 64 recipes and mirror into `manasollasa.ts`", so I left them alone — but they carry the same unmarked terms, and the source page now applies the convention to recipe entries and not to their neighbours. Also, several of the terms there are proper nouns or classificatory abstractions where the call is yours, not mechanical. One line from you and I will do it.

| Entry | Unmarked terms |
|---|---|
| 1342–1349 | bhojya, bhakṣya, peya, lehya, coṣya; raktasāli, mahāsāli, gandhasāli, kaliṅgaka, muṇḍasāli, sthūlasāli, sūkṣmasāli, ṣaṣṭika (Raktasāli, gandhasāli, etc. recur; Kaliṅga is a region and probably should stay plain) |
| 1417–1426 | sāraṅga, ruru, kālakhaṇḍa |
| 1548–1549 | vaṭakas, parpaṭas |
| 1585–1597 | mudra, vaṭakas, parpaṭas, khara-khaṇḍas, upakhaṇḍakas, pāyasa, pānaka, śikhariṇī, majjikā, takra, kāñjika |
| 1598–1600 | Someśvara, Annabhoga (both proper nouns; probably leave) |
| 1510–1512, 1522–1523, 1532 | none |

---

## 4. `manasollasa.ts` sync findings

The file's header says the recipes are the source of truth and it stays in sync by regeneration. It had drifted. I re-synced every Mānasollāsa entry from its recipe and verified afterwards that all 63 in-scope recipes now match their entry exactly on both `latin` and `english`.

- **1442–1448 (Sour Meat Glaze) was stale.** It still had the pre-correction English — "Mix tamarind with curd, or use pomegranate juice; alternatively combine ground āmalaka with amlavetasa…", the flat "a thick sauce" for `प्रलेहकं`, and "add meat śuṇṭhakas". Now carries the corrected translation. **I made no translation change to this recipe; this is a pure sync.**
- **1427–1435 (Roast Pork Śuṇṭhaka) was stale** in the same way, still reading "Alternatively, first cook the pieces in a sour liquid" with no `पूर्ववत्` and no bracketed 1432 note. Now carries the corrected translation plus this sweep's lotus-stalk insertion.
- **1449–1452 (chickpea and meat) is still stale, deliberately.** The recipe has been rewritten by the parallel audit — and, after my last pass, renamed from `chickpea-and-meat-mixture.md` to `finely-diced-meat-with-green-chickpeas.md` — and its entry has not been updated. Whoever owns that rewrite should re-sync it. I never wrote to either filename. For the record the recipe now reads "Having made pieces [of meat] the size of a chickpea… pieces of fresh ginger cut to the same size", while the entry still reads "Make equal-sized pieces of chickpea preparation… Add equal-sized fresh ginger".
- **1436–1441 is still duplicated four times verbatim**, once per *Cakkalikās* recipe, as the earlier audit noted. My sync skipped these four (identical `latin`, so not uniquely addressable); their English was already correct and unchanged. It will still render as four identical blocks on the source page.

---

## 5. Unresolved

Terms kept transliterated and asterisked, or glossed with a stated hedge, rather than guessed at confidently.

| # | Term | Status |
|---|---|---|
| **U1** | `घनसार` (1462) | **The identification behind the headline restoration.** Camphor is a Monier-Williams headword for *ghana-sāra*, but the chapter's own word for camphor is `कर्पूर` (1416, 1437, 1475), so this is a synonym-based reading — the same class of inference as `शशिधूप` in the earlier Śuṇṭhaka audit. MW also gives the resin of *Shorea robusta* (sal). Both referents are small hard lumps, so the *size* claim is robust either way; the wording "lumps of camphor" is the part that rests on the synonym. Fall back to "the size of a lump of *ghanasāra*" if you want it hedged on the page. |
| **U2** | `कम्रा` (1496–97) | Not identifiable. From context it is the casing or coil the blood is filled into: `पेटकाकृतियुक्तासु कम्रासु परिवेष्टयेत्`, then `कम्रामुखानि बध्नीयात्`, "tie the mouths of the *kamrās*". MW has `कम्र` only as an adjective ("lovely, desirous"), which does not fit. I carried only the shape word — "basket-shaped forms" — and left the noun unglossed rather than inventing a container. |
| **U3** | `पेटक` (1496) | "Basket, hamper, box" is the standard sense and is what I used; the word can also mean "a multitude". A basket-shaped coil is the reading that makes sense of a sausage wound into rings, but it is a choice. |
| **U4** | `किंशुक` (1498) | Almost certainly *Butea monosperma*, the flame-of-the-forest / *palāśa*, whose flowers are a brilliant scarlet-orange — exactly the colour of a good ember bed, which is what the comparison is doing. Kept as *kiṃśuka*, not glossed to a plant name, per brief. |
| **U5** | `राजवृक्ष` (1498) | *Cassia fistula*, the golden-shower tree, per MW — and its fruit is a long dark cylindrical pod, which is a strikingly apt comparison for a sausage. Some lexica also give *rāja-vṛkṣa* generically as "best of trees" or for the sal. I wrote "the pod of the *rājavṛkṣa* [Cassia fistula]" so the bracket carries the identification and can be struck without losing the comparison. |
| **U6** | `सितपट्ट` (1379) | "White silk" — `पट्ट` is specifically woven silk cloth, and the chapter uses `सितवस्त्र` for plain white cloth elsewhere (1427, 1445, 1587), which supports a deliberate contrast. But `पट्ट` also means a slab, plate, or tablet, giving "lustrous as a white slab". Both readings are about smooth whiteness, so "as lustrous as white silk" is safe on the substance and a choice on the material. |
| **U7** | `बिस` (1431) | Lotus rhizome/stalk. Secure, and corroborated internally: `बिसचक्रिकाः` at 1370 is already rendered "lotus-stem discs" in the published mung soup. The point is the pale, blanched colour of a scalded and scraped carcass. |
| **U8** | `कोल` (1451) | In the skipped chickpea recipe. Jujube (*Ziziphus*) is the usual gloss, which would make it the same fruit as `बदर` at 1453; other readings include pepper and a hog-plum. Flagged only because it bears on the size-series question in §6 — untouched here. |
| **U9** | `पाताल`, `तेण्टुक`, `चक्री`, `कचोर`, `बिलकन्द`, `मागिणी` (1561–64) | The pickled-shoots list is a run of plant names, several of them regional and not in the standard lexica. Marked with asterisks and left unglossed. |

**Devanagari integrity.** Nothing new to add to the earlier audit's finding on 1427–1435. I did not re-scan metrically, but no reading looked newly corrupt in the passages I worked in, and no `original` field was touched.

---

## 6. Is the graded dice-size series real?

**Partly. There is a real closed set of produce-sized referents and a real three-recipe monotonic run, but the four-item ladder as stated is not the text's order and does not hold once camphor and areca nut are placed on it.**

Here is every cube-size specification in the meat run, in textual order, with the physical size of the referent:

| Verse | Sanskrit | Referent | Rough size | Dish | Cooking method |
|---|---|---|---|---|---|
| 1449 | `चणकस्य समान् खण्डान्` | chickpea | 8–10 mm | chickpea and meat | deep-fried in hot oil, then a sour sauce reduced to dry |
| 1453 | `बदराकारकान्` | jujube | 15–25 mm | *kavacandī* | fried in well-heated oil with vegetables |
| 1457 | `स्थूलामलकसङ्काशान्` | large *āmalaka* | 25–35 mm | *puryala* | boiled in mustard-water, then sour-cooked, then covered |
| 1462 | `घनसारप्रमाणानि` | camphor lump | 10–15 mm | *bhaditraka* | pierced through, skewered, direct ember roast |
| 1473 | `पूगीफलप्रमाणानि` | areca nut | 15–25 mm | *kṛṣṇapāka* | braised in sour liquid, finished with blood |

**What is real.** Three consecutive recipes — 1449, 1453, 1457 — do step monotonically upward, chickpea to jujube to large *āmalaka*, and each of the three also has a satellite ingredient cut to match (`समानार्द्रकखण्डान्` at 1450, `तत्प्रमाणान्` at 1453, `तत्समान्` at 1458). That is a genuine pattern and it is hard to read as accident across three adjacent entries.

**What breaks it.** 1462 drops back to roughly chickpea size and 1473 lands mid-range, so as a five-term ladder the sequence is up-up-up-down-up. And the ladder in the brief has camphor at the bottom, whereas camphor is the *last* of the four in the text, not the first.

**What actually explains the sizes: method, not verse order.** Sort the same five by size and the cooking technique sorts with them. The two smallest — chickpea for a deep-fry, camphor lump for a direct ember roast on a skewer — are the two that get the most violent, most direct heat and the shortest time; the *bhaditraka* additionally gets pierced many times (`बहुरन्ध्राणि`), which is a second heat-penetration measure on top of small pieces. The largest — large *āmalaka* for the *puryala* — gets the longest and wettest treatment, a boil followed by a sour cook followed by a covered rest. The middle two, jujube and areca nut, are a mixed fry and a braise. Cube size tracks the length and wetness of cooking, and inversely tracks the directness of the heat. That is a coherent culinary logic and it does not need a graded series to explain it.

**Two other things worth recording.** First, the referents are a closed set of five, and every one of them is a pantry object a palace kitchen has physically to hand — chickpea, jujube, gooseberry, areca nut, camphor. This is a kitchen convention, not a metrology. Second, the chapter has a *separate* register for lengths, and it uses absolute units there rather than produce: `अङ्गुलद्वयमानेन` for two-fingerbreadth fat strips (1499) and `चतुरङ्गुलसम्मितान्` for four-fingerbreadth fish (1533). Both of those are long thin things, not cubes. So the division is systematic — produce comparisons for cube size, `अङ्गुल` for strip and fish length — and it is the strongest evidence in the chapter that the size vocabulary is deliberate rather than decorative. The fingerbreadth pair belongs to that second register and should not be placed on the dice ladder at all.

Practical upshot: the produce comparisons are useful to a cook and worth carrying in every translation, which is what this sweep does, but I would not build a note claiming a graded series. The defensible claim is that the chapter specifies cube size for every meat recipe in 1449–1473, from a fixed repertoire of five household referents, and that the size it picks is a function of how the dish is cooked.
