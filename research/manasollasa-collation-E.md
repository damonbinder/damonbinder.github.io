# Mānasollāsa 3.13.1476–1501 — collation against Shrigondekar (GOS II, 1939)

*Created 2026-07-25 13:28.*

## Summary

I reached the printed edition and read the whole range off the page scans at the scan's native 600 dpi. **Printed pages 126–128** (Viṃśati 3, Adhyāya 13) carry 1476–1501; I also read page 125 for calibration. **Twelve Devanagari corrections** to the repo's text, plus two orthographic normalisations carried over from the print. **The 1478 boundary falls at the hemistich**: 1478ab (`मिश्रयित्वा … वासयेत् ।`) closes the meat-relish entry, 1478cd (`आमं मांसं …`) opens the *māṃsa-vaṭaka* entry and carries the `॥ ७८ ॥` marker. Every verse 1476–1501 appears exactly once; the eight entries concatenate seamlessly.

**After correction, 51 of 52 hemistichs scan at exactly 16 syllables.** The exception is 1499a–b, which runs to 17 and is corrupt in the printed edition too — left unemended and flagged. The flagged 1483a defect resolved cleanly from the print: our `वार्ताकान्तदेशस्य` (7 syllables) is the print's `वार्ताकं वृन्तदेशस्य` (8), and the eggplant is pierced at the **stalk end**, not vaguely "near its end".

Deliverable: `/Users/damonbinder/Documents/Website/research/collation/partE.json`.

## Sources used

| What | Where | Resolution |
|---|---|---|
| Primary | `https://www.ebharatisampat.in/pdfs/10403-Manasollasa.pdf` — GOS Vol. II, Baroda 1939. PDF pages **175, 176, 177** = printed pages **126, 127, 128** (offset +49). No text layer; images are 600 dpi bitonal, 3110×4810. | 600 dpi native, re-rendered to 1200–5000 px wide for disputed glyphs |
| Cross-check | `https://archive.org/details/EhVx_manasollasa-of-king-someshwara-vol-2-by-gk-shri-gondekar-baroda-1939-oriental-in`, leaves 182–184 (= printed 126–128) | ~326 dpi |
| Rejected | `https://archive.org/details/in.ernet.dli.2015.208789` — same edition, but the Devanagari body is not OCR'd (0 Devanagari characters in `_djvu.txt`) | — |

The `EhVx` item's `_djvu.txt` **does** contain Devanagari OCR (266k characters) and is a useful first pass, but it is noisy enough that I confirmed every reading against the page image. GRETIL has no Mānasollāsa e-text.

Every reading below was settled at 600 dpi, not at 200–300 dpi. Three readings flipped between the low-resolution and high-resolution reads (`चिक्कणं`→`चिकणं`, `पूरभट्टांक`→`पूरभट्टाक`, and the shape of the mark over `संहितं`), so the warning about resolution is well founded.

## Corrections

Page numbers are the printed pagination of GOS Vol. II.

| Verse | Our reading | Printed reading | Page | Note |
|---|---|---|---|---|
| 1478b | `सिञ्चितम्` | **`सेचितम्`** | 126 | Footnote 3: `A सिञ्चि` — our reading is MS A's variant, not the text |
| 1479a | `सहितं` | **`संहितं`** | 126 | Anusvāra is there, plus footnote marker 4; footnote 4: `A सेचितं` (A's scribe repeated the previous line's word) |
| 1480d | `निक्षिपेदाणके` | **`प्रक्षिपेदाणके`** | 126 | `प्र` (with subscript *ra*) is unambiguous at 600 dpi; both scans agree |
| 1483a | `वार्ताकान्तदेशस्य` | **`वार्ताकं वृन्तदेशस्य`** | 126 | Fixes the 7-syllable pāda. `वृन्त` = stalk/calyx, so the hole is made at the stalk end |
| 1487d | `वटिमकं` | **`वट्टिमकं`** | 127 | `ट्ट` ligature clear; the dish name is *vaṭṭimaka* |
| 1492c | `तथाङ्गारैः` | **`तथाऽङ्गारैः`** | 127 | Avagraha printed |
| 1492d | `कठिनतां` | **`काठिनतां`** | 127 | Long *ā*; consistent with `काठिन्य` at 1498a |
| 1494a | `छोधिते` | **`छोषिते`** | 127 | `ष` not `ध`, confirmed on both scans. Changes the sense: "dried" rather than "purified" — see Unresolved |
| 1494d | `सम्भूतं` | `संभूतं` | 127 | Orthographic; the edition uses anusvāra |
| 1499a | `पञ्चाङ्गपट्टद्वेष्ट्या` | **`पञ्चाङ्गपट्टवद्वेष्ट्य च`** | 128 | Our version had dropped `व` and `च`. Still corrupt — see Unresolved |
| 1500c | `शूलपोतानि` | **`शूलप्रोतानि`** | 128 | Same `प्र`/`प` slip already confirmed at 1464 |
| 1500c | `तानङ्गारेषु` | **`तान्यङ्गारेषु`** | 128 | `तानि` + `अङ्गारेषु`, neuter to agree with `खण्डानि`; our masculine `तान्` was wrong |
| 1490a | `स्तोकमम्लम्` | `स्तोकं अम्लम्` | 127 | Orthographic: the edition leaves the hiatus unresolved, as it also does at 1475 (`तस्मिन् एलाचूर्णेन`). Followed the print |
| 1495a | `हिङ्गु मरिचं` | `हिङ्गुमरिचं` | 127 | Word-division only |

### Editor's own corrections adopted

The edition marks emendations by printing the manuscript reading followed by the correction in parentheses, with no space when the parenthesis replaces only the preceding akṣara. I adopted three:

- 1477a `केसराले(म्लै)श्च` → **`केसराम्लैश्च`** (p. 126). Our text already had this.
- 1487d `त्रिः (त्रि) प्रकारम्` → **`त्रिप्रकारम्`** (p. 127). Already had it.
- 1488d `खण्डिताः (तान्)` → **`खण्डितान्`** (p. 127). Already had it.

### Typographic quirk, not a variant

This printing sets `ल` with a glyph that reads as `ळ` throughout — `ळवणेन`, `काळखण्ड`, `गोळक`, `मूळकस्य`, `शूळप्रोतानि`, `विळोडयेत्`. That is the fount, not the text; I kept `ल`. (It is the same quirk that produced the `मूषकैः`/`मूळकैः` misreading at 1462.) I checked every `ल`/`ळ`/`ष` I relied on in this range: `मूलकस्य` at 1485 is `मूळकस्य` in print, i.e. *mūlaka*, radish — which is what the sense requires anyway, and matches `मूलकस्य च कन्दके`.

## Unresolved

**1499a is corrupt in the printed edition.** `पञ्चाङ्गपट्टवद्वेष्ट्य च` scans at 9 syllables against the required 8, and `पञ्चाङ्ग-paṭṭa` resists construal. Shrigondekar's footnote 2 on p. 128 records D's `-द्वेष्टा च` against the text's `-द्वेष्ट्य च`, which confirms the shape of the printed reading but does not repair the metre. The page gives no support for a `पञ्चाङ्गुल-` conjecture. Left as printed; the translation flags it.

**1476b `कर्त(?)र्या`.** The print carries an editorial parenthesis inside this word — the glyphs read as `कर्त` + `(ते)` or `(र्त)` + `र्या`, and at 600 dpi the base akṣara and the parenthesised one are near-identical in shape. Whatever the parenthesis is doing, the corrected reading must be `कर्तर्या` (instrumental of *kartarī*, "knife"): the metre demands three syllables there, which rules out `कर्त्र्या` (two), and there is no apparatus footnote on the word. Kept `कर्तर्या` as we had it. For calibration I checked the cognate at 1471a on p. 125, which the edition prints as `कर्त्रिकाग्रेण`.

**1494a `शोषिते`, "dried".** The reading is secure on both scans and carries no footnote, but `पूर्ववत्` ("as before") most naturally points back to the blood-cleaning at 1469–70, which would want `शोधिते`. I translated the printed reading and put the alternative in brackets rather than emending.

**`कम्रा` (1496–97) is not identifiable.** From the syntax it must be the coil or basket-shaped ring the filled gut is wound into — `पेटकाकृतियुक्तासु कम्रासु` (locative, "in *kamrā*s having the shape of baskets"), then `कम्रामुखानि बध्नीयात्` ("he should tie the mouths of the *kamrā*s"). Left transliterated.

**`केसराम्ल` (1477a)** and **`गृञ्जन` (1477b)** left transliterated. `गृञ्जana` is genuinely open between garlic, onion, and other alliums (and is used of carrot elsewhere); `केसराम्ल` is the edition's own correction of `केसराल` and I could not identify it. Note that `मातुलिङ्गस्य केसरैः` in the previous half-verse already supplies citron pulp, so `केसराम्ल` is probably a distinct item rather than a second name for the citron, which is how the site's digest glossed it.

## Substantive points the previous English got wrong or dropped

- **1480 casing vs filling.** `चूर्णीकृतं तु यन्मांसं गोलकैस्तद्विवेष्टयेत्` — the crumbed meat is accusative, the balls instrumental, so the sticky ground paste is the casing and the drier crumb is the filling. `चूर्णगर्भान् वटकान्` ("crumb-bellied *vaṭaka*s") and `चूर्णमांसेन` at 1485c both confirm it. Translated accordingly.
- **1476b / 1477b size specifications** both survive: cut `तिलशः` (to sesame fineness) with a knife, and the *gṛñjana* `तत्प्रमाणकैः` (to that same size).
- **1498a `किंशुकाकारैः` attaches to the embers**, being instrumental plural in agreement with `अङ्गारैः`. The sausage's own comparison is separate and comes in the next hemistich: `राजवृक्षफलोपमा`, like a *Cassia fistula* pod.
- **1499 `वपा` is the caul**, not fat: it is `वर्तिबद्धा`, "bound into a roll", which suits a membrane and not a lump, and the chapter has `मेदस्` for ordinary fat — which appears three times in this very range (1489a, 1495c, and in the *maṇḍalī* filling).
- **1499b–1500b keeps both registers of measure**: the absolute `अङ्गुलद्वयमानेन` (two finger-widths) and the matching `तत्प्रमाणानि` for the liver.
- **`कालखण्ड` = liver** at 1488a and 1500a; **`दन्तशठ` = the lime** (*Citrus acida*) at 1494b.
- **Optatives kept third-person and literal** throughout, with the epithets: `बुधः` (1479b, "the learned man"), `तज्ज्ञः` (1487a, "one who knows that art").

## Note for the agent on 1469–1475

Two readings on p. 126 fall just outside my range and differ from the repo's text of 1475: the print has `कर्पूरचूर्णकं तस्मिन् एलाचूर्णेन संयुतम्` (hiatus, not `तस्मिन्नेला-`) and `विकिरेन्मरिचैर्युक्तं` (not `मरिचयुक्तं`). Also 1474a is printed `स्तोकावशेषपाकेस्मिन्` without the avagraha the repo supplies.
