# Mānasollāsa 3.13.1391–1426 collated against Shrigondekar — batch B

*Created 2026-07-25 13:09.*

## Summary

**I reached the printed edition and read my whole range off it.** Shrigondekar, ed., *Mānasollāsa*, Gaekwad's Oriental Series, Vol. II, Baroda 1939 — scan at `https://www.ebharatisampat.in/pdfs/10403-Manasollasa.pdf`. Verses 1391–1426 occupy **printed pages 119–122** (PDF pages 168–171; printed page = PDF page − 49). Every verse and the critical apparatus on all four pages is legible; I read them at 200 dpi for structure and re-rendered at 400–900 dpi for every disputed character.

**Nine Devanagari corrections, and the range now scans perfectly.** Concatenating the corrected text gives **72 hemistichs, all 72 at exactly 16 syllables**, against three off-metre hemistichs in the transcription the recipe pages carry. Verse numbers 1391 through 1426 appear exactly once each, in order.

**On 1393: `धोसकान्` is confirmed beyond doubt, in both halves of the verse.** At 400 dpi the glyph is unmistakably ध, not घ, and Shrigondekar records no variant. So the dish is *dhosaka*, the Sanskritized *dosa* — a bare pulse batter spread on an oil-smeared *tāpī*, with no dough wrapper. This independently confirms batch 2's reading.

**Three results matter more than the *dhosaka*, because they are new text rather than a re-reading.** (1) **1412b is `तक्रं`, buttermilk** — not the unreadable `सकं` our transcription carried and the previous audit gave up on. Sugar is clarified with milk *or buttermilk*. (2) **1414d is `सिताया दृढसम्पुटे`** — the two syllables `दृढ` were missing, which is exactly why the pāda was short, and it confirms the moulded-sugar sub-recipe: hard-stage *sitā* set in a *tight closed mould*. (3) **1416b is `तावत्तत्क्वाथयेत्पुनः`**, "he should boil that again", where our text had the seven-syllable `तावत्तापयेत्पुनः`. All three had been flagged as unresolved by the earlier audit of 1411–1416; the edition settles all three.

**One correction changes what a dish is called.** 1408b reads **`मनोभिधाः`**, not `मनोहराः`. That is not "those *vaṭakas* are delightful" but a naming formula, matching `वटिकाभिधाः` and `काञ्जिकाभिधाः` two verses earlier.

**Did anything change how a dish is cooked?** Per the narrowed scope I made **no recipe edits at all** — nothing under `src/content/recipes/` was touched, and nothing outside `research/collation/partB.json` and this file was written. But for whoever picks the recipes up later, two corrections do bear on cooking: the sugar clarification at 1412 admits buttermilk as well as milk, and 1414's `दृढसम्पुटे` makes the moulded-sugar step a real second product rather than a defective line. Everything else is textual.

**Deliverable:** `research/collation/partB.json` — 11 entries, continuous coverage of 1391–1426, corrected Devanagari plus a full close translation of every verse. Report: this file.

---

## 1. Devanagari changes

Every row is a reading taken from the printed page cited, never a conjecture. "Ours" is the transcription in the recipe pages' `original` fields (and hence in `manasollasa.ts`).

| Verse | Ours | Shrigondekar | Page | Consequence |
|---|---|---|---|---|
| 1393a, 1393d | `घोसकान्` ×2 | **`धोसकान्` ×2**, no variant | 119 | the dish is *dhosaka*, the Sanskritized *dosa* |
| 1394c | `वट्टाणस्य` | **`वट्टाणकस्य`** | 119 | metre 15 → 16 |
| 1399c | `गर्भाभिरन्याभिः` | **`वस्त्रगर्भाभिरन्याभिः`** | 119 | metre 14 → 16; the covering moulds are cloth-lined, so moist heat |
| 1408b | `मनोहराः` | **`मनोभिधाः`** (A `मना-`) | 120 | a naming formula, not a praise epithet |
| 1412b | `सकं` | **`तक्रं`** | 121 | resolves the crux: milk **or buttermilk** clarifies the syrup |
| 1414d | `सितायाः सम्पुटे` | **`सिताया दृढसम्पुटे`** (A `पञ्चसम्पुटैः`) | 121 | metre 14 → 16; a *tight* closed mould |
| 1416b | `तावत्तापयेत्पुनः` | **`तावत्तत्क्वाथयेत्पुनः`** (F variant at क्वा) | 121 | metre 15 → 16; the verb is *boil*, not *heat* |
| 1417c | `वराहपलं` | **`वराहपलळं`** = `वराहपललं` | 121 | metre 15 → 16 (see §4) |
| 1418d | `—` (verse absent from our text) | `क्रव्यमृ(म)जोद्भवम्` → **`क्रव्यमजोद्भवम्`** | 121 | editor's correction gives "the flesh arising from the goat" |

**Verses 1417cd–1426 were absent from our text altogether** — ten and a half verses of meat-quality classification, prohibitions, and the cuts list, none of which had any Sanskrit or English on the site. They are transcribed in full in the JSON.

### Negative results, which close off speculation

- **`कण्डुना` (1395d)** is printed exactly as transcribed, no variant. Not a transmission problem — a genuinely obscure implement-word the manuscripts agree on. Confirms the earlier verdict: it cannot be a leaven.
- **`वैटिकासु` (1399a)** likewise printed as transcribed, no variant.
- **`आरनालेन सान्द्रेण` (1405c)** printed exactly as transcribed. Four syllables, *ā-ra-nā-la* — so the roman spelling *āranāla* is right and the word is not uncertain. `सान्द्रेण`, thick, is secure.
- **`मथिते शर्करायुते` (1403d)** printed as transcribed. The locative is `मथित`, the waterless grade defined at 1571, so the vaṭaka soaking liquid takes no added water.
- **`साधिके शर्करा भवेत्` (1414b)** printed as transcribed — sugar cooked past hard grains back.
- 1385–1401 as a whole: my reading of pages 119–120 agrees with batch 2's row for row.

### Orthographic differences I did **not** adopt, and why

The volume is a Deccan text printed with Deccan conventions, and normalizing them silently would be wrong to leave unrecorded:

- **`ळ` for intervocalic `ल`** throughout: the edition prints `गोळकाः` (1417a), `वर्षोळका` (1417b), `काळखण्डं` (1425a), `वराहपलळं` (1417c). Our transcription normalizes to `ल` everywhere; I kept that, so the JSON has `गोलकाः`, `वर्षोलका`, `कालखण्डं`, `वराहपललं`.
- **1401a `सुशीता धवलाँ(ः)`.** The editor himself corrects `धवलाँ` to `धवलाः`, which our `धवलाः` matches. He prints `सुशीता` without visarga where ours has `सुशीताः`; no metrical difference, so I left ours.
- **1403c `निच्च्छिद्रा`** (doubled च before छ) for our `निच्छिद्रा`. Orthographic.
- **1404b `वटि(ट)काभिधाः`.** The manuscripts read `वटिका-`; the editor corrects to `वटका-` to match `वटकाः` in the next hemistich. I kept the manuscript reading, which is what ours has, and noted the correction in the translation.
- **1424c `आस्यं(अंस)`.** Here I *did* adopt the correction (`अंस`, shoulder, for `आस्य`, mouth) because the manuscript reading gives no sense in a list of cuts; flagged in the translation.
- **1426ab `वपामाष्ठिस्क(म्मास्तिष्क)मज्जं(माज)कम्`.** I adopted the first correction (`मास्तिष्क`, brain) and kept `मज्जक` (marrow) against the editor's `माज`, which is not a word; both choices are flagged in the translation, and both scan.

---

## 2. Boundary map — the whole point of this batch

The coordinator's note is right that my range has the chapter's worst boundaries. **Every sense unit in 1391–1426 begins at pāda c of one verse and ends at pāda b of the next**, without exception, for twelve consecutive units. The recipe pages' `source` ranges are whole-verse, so each one carries a neighbour's half-verse it does not translate, and four naming lines ended up stranded outside the range of the dish they name.

I resolved this by making the JSON entries **half-verse precise**. The table maps them.

| JSON entry `ref` | Content | Recipe `source` range that overlapped it |
|---|---|---|
| 1391–1394ab | *veṣṭikā*; *dhosaka* | 1391–1394 |
| 1394cd–1397ab | *kaṭakarṇa* | 1394–1396 — the closing `यावद्` clause at 1397ab sat in the *iḍerikā* file |
| 1397cd–1401ab | *iḍerikā*, including its own naming line | 1397–1401 |
| 1401cd–1403ab | *ghārikā*, including its own naming line | 1401–1403 |
| 1403cd–1405ab | *vaṭikā* in sweet *mathita*; *kāñjika-vaṭaka*; the naming rule | 1403–1404 — the naming rule at 1405ab sat in the next file |
| 1405cd–1408ab | spiced sour *vaṭakas*, including `मनोभिधाः` | 1405–1407 — the closing line at 1408ab sat in the next file |
| 1408cd–1411ab | *kṣīraprakāra*, including its own naming line | 1408–1410 — **naming line stranded at 1411ab** |
| 1411cd–1417ab | sugar grades; moulded *sitā*; *varṣolaka*, including its own naming line | 1411–1416 — **naming line stranded at 1417ab** |
| 1417cd–1420ab | meat quality by species | none — **no recipe file** |
| 1420cd–1422ab | the prohibition list | none — **no recipe file** |
| 1422cd–1426 | the cuts list | none — **no recipe file** |

**Verified mechanically:** concatenating the eleven `latin` fields in order reproduces a continuous text in which verse numbers 1391–1426 each appear exactly once. An entry that closes on a half-verse ends with ` ।` and no number; the next entry opens with the second hemistich and carries that verse's number. So the set assembles by plain concatenation with no editing at the seams, and nothing is translated twice.

**Metrical check on the assembled text:** 72 hemistichs, **72 at exactly 16 syllables, 0 off-metre**. As transcribed, three were defective (1394cd at 15, 1399cd at 14, 1414cd at 14) plus 1416ab at 15 and 1417cd at 15 — all five fixed by readings from the page, none by conjecture.

---

## 3. Notes on the translation

The four boundaries the brief flagged as broken are the four naming lines in the table above, and the JSON now attaches each to its own dish. Beyond that:

- **The fivefold class term is kept.** `भक्ष्येषु` (1403b), `भक्ष्या` (1414a), and `भक्ष्यं` (1411a) all point at the second of the five kinds of food set out at 1344–45, and the translation keeps *bhakṣya* rather than flattening it to "snack".
- **`धूप-` is rendered as smoke** at 1400d and 1408a, consistent with the chapter-wide finding. The chapter has a separate vocabulary for a hot-ghee bloom at 1459–60.
- **The sugar-grade vocabulary is kept distinct**: `शर्करा` (raw sugar), `सिता` (refined white), `खण्ड` (the grade behind `खण्डपाकविशारद` at 1415a), and the four cooking degrees `मृदु` / `मध्यम` / `खर` / past-`खर`.
- **Purpose and praise formulas are kept**: `पाकतत्त्ववित्`, `बुधः`, `पाकवित्`, `खण्डपाकविशारदः`, `वराः`, `सुमनोहराः`, `मृष्टं मनोहरम्`.
- **Size and shape comparisons are kept**: `विस्तृतान् घनान्`, the five or seven holes, `बुद्बुदसंकाशा … कनकत्विषः`, `घनं पिण्डं`, `मुकुलं`.
- Uncertain terms are transliterated in `*asterisks*` (*kaṇḍu*, *vaiṭikā*, *sampuṭa*, *tīkṣṇa*, *vilepaka*, *vṛdho*, *tarasa*, *mano-abhidhāḥ*); editorial notes are in `[square brackets]`.

---

## 4. Two readings a reviewer should look at

Both are recorded faithfully in the JSON with the manuscript evidence, and neither is emended.

- **1417c `वराहपलळं`.** Six syllables, which is what makes the pāda scan at eight — but `पलळ`/`पलल` is not the chapter's word for flesh (`पल` is, twice in the immediate neighbourhood, at 1417d and 1426d). Either the doubling is genuine and the word is unusual, or a syllable of something else has been absorbed into it. The metre argues for keeping it. Footnote 7 on page 121 records A as reading `द्द` in this line, which I could not place.
- **1425d `वृधो`.** Two syllables between `रसनाकर्णौ` and `वृषणकर्णकम्`, in a run of paired organs, and not a word I can identify. Footnote 2 on page 122 records A as `बृधौ` — a dual, which would suit the position. Kept transliterated and flagged obscure.

Lower-stakes, also flagged in the JSON: **1412d `सती`** where the sense wants the grade name `सिता` that 1414–15 then use; the printed reading is `सती`, "genuine, pure", and I translated it that way rather than emending.

---

## 5. Files written

| File | What |
|---|---|
| `research/collation/partB.json` | **the deliverable** — 11 entries, 1391–1426 continuous, corrected Devanagari + full close translation |
| `research/manasollasa-collation-B.md` | this report |

**Nothing under `src/` was touched**, and `src/data/sources/manasollasa.ts` was not opened for writing. No recipe file was edited at any point in this task — the scope narrowed before I made any recipe changes, so there is nothing half-applied to unwind. `npm run build` was not run.
