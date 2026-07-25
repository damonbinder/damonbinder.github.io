# Mānasollāsa 3.13.1449–1475 — collation against Shrigondekar (Part D)

*Created 2026-07-25 13:21.*

## Summary

**I reached the printed edition and collated every akṣara of 1449–1475 against it, on two independent scans.** Source of record: **Shrigondekar, ed., *Mānasollāsa*, Gaekwad's Oriental Series, Vol. II, Oriental Institute, Baroda, 1939** — [ebharatisampat scan](https://www.ebharatisampat.in/pdfs/10403-Manasollasa.pdf) (PDF page = printed page + 49), cross-checked against the [Gurukul Kangri / Siddhanta eGangotri scan on archive.org](https://archive.org/details/EhVx_manasollasa-of-king-someshwara-vol-2-by-gk-shri-gondekar-baroda-1939-oriental-in) (leaf `n{N}` = printed page `N − 56`). My range sits on **printed pages 123–126** (verse 1449 is the last verse on p. 123; 1450–1461 on p. 124; 1462–1473 on p. 125; 1474–1475 at the top of p. 126).

**14 Devanagari corrections**, listed below. Every disputed glyph was re-rendered at 500–600 dpi before I decided, and confirmed on the second scan.

**`मूषकैः` (1462d) does not exist.** The print reads **`मूळकैः`** — *mūlakaiḥ*, the ordinary word for radish, with `ळ` for `ल` as this edition prints it throughout (compare `मूळकस्य` at 1454, which we transcribe `मूलकस्य`). Our `मूषकैः` is a misreading of `ळ` as `ष`. That removes the lexical puzzle but not the syntactic one: construed with `विध्वा` the sense required is still a piercing tool, and radish is not one. The apparatus offers no help — manuscript D reads `पूळकैः`. So the pāda is probably corrupt at a level Shrigondekar could not repair, and I have translated the printed reading with the problem flagged rather than emending.

**Both flagged metrical defects resolved from the print, and the corrected text is now metrically clean throughout: 54/54 hemistichs at exactly 16 syllables.** Our transcription had 2 defective (1460a–b and 1471a–b); the print has none. The remaining 12 corrections are metre-invisible single-character errors, which is the class the brief warned about.

**Deliverable:** `research/collation/partD.json` — 6 entries reusing the existing `ref` strings exactly, covering 1449–1475 continuously.

## Corrections

| Verse | Our reading | Printed reading | Page | Note |
|---|---|---|---|---|
| 1459a | `धान्यकस्य` | **`धान्याकस्य`** | 124 | Both mean coriander and both scan; 1467a does print `धान्यकस्य`, so the two forms stand side by side in the edition. |
| 1460a | `पलाण्डुं लशुनं` | **`पश्चाल्लशुनं`** | 124 | **Metrical fix** — our hemistich was 17. The onion disappears from the tempering: it is "afterwards, garlic together with asafoetida". |
| 1462a | `प्रगृह्य च` | **`प्रगृह्यते`** | 125 | Passive finite verb, not an absolutive: "clean meat … is taken". |
| 1462d | `मूषकैः` | **`मूळकैः`** | 125 | See above. `ळ` misread as `ष`. Apparatus: D `पूळकैः`. |
| 1463b | `रसैर्युक्तं` | **`रसंयुक्तं`** | 125 | `हिङ्ग्वार्द्रकरस-संयुक्तं` as one compound, not a separate instrumental plural. |
| 1465a | `मरिचं` | **`मारिचं`** | 125 | Adjectival *mārica*, "of pepper", with `चूर्णं`. Both scan. |
| 1468a | `परिभोजयेत्` | **`परिव(भ)जयेत्`** → `परिभजयेत्` | 125 | The edition's own correction (MSS `परिवजयेत्`). Not "feed with ghee". The sense the passage needs is "fry all over", i.e. `परिभर्जयेत्`; I did not emend. |
| 1468b | `भण्डे भडित्रके` | **`हुण्डभडित्रके`** | 125 | One compound, no space: the *huṇḍa*-*bhaḍitraka*, the pot version as against the skewered one. `हु` misread as `भ`, and the following superscript (footnote 9) misread as an `े` matra. |
| 1469a | `छित्त्वा` | **`छित्वा`** | 125 | Orthographic; the edition prints the shortened absolutive. |
| 1469b | `विधारयेत्` | **`विधारितम्`** | 125 | Participle, not a finite verb; `मर्दयेत्` in the next pāda carries the sentence. |
| 1470a | `विनिःसृते` | **`विनिःस्रुते`** | 125 | From निः-स्रु, "flowed out" — apt for blood. Apparatus: some MS reads `सिराजाळे` as a separate locative. |
| 1471a | `कर्तरिकाग्रेण` | **`कर्त्रिकाग्रेण`** | 125 | **Metrical fix** — our hemistich was 17. (The apparent anusvāra on `देशांत्` in the poorer scan is footnote marker 11 above `क्रो`; the print reads `क्रोडदेशात्`.) |
| 1471b | `हरेदाभ्यन्तरास्थिताम्` | **`हरेद्बाह्यान्तरास्थिताम्`** | 125 | "What lies outside and within", not "the inner-lying". |
| 1475b | `मरिचयुक्तं` | **`मरिचैर्युक्तं`** | 126 | Instrumental plural. |

Formatting note: the edition writes `ळ` for `ल`, uses avagraha (`वाऽपि`), and joins words across pāda boundaries more aggressively than our file does. I have normalized all three to the conventions already used in `src/data/sources/manasollasa.ts`, which is why those differences are not listed as corrections.

## Leads from the brief, resolved

- **`मेषक` (1455) is the printed reading and I did not change it.** Page 124 has `मेषकस्य` unambiguously — the `ष` is clear at 600 dpi and matches the `ष` in `पेषयेत्` two pages on. The edition prints `मेथ(था)कस्य` at 1467 and `मेथकचूर्णकं` at 1459, so it distinguishes the two spellings rather than harmonizing them. The identical compound at 1459 makes fenugreek almost certainly what is meant at 1455 too, but that is an inference about the author, not a reading, so the translation flags it instead of adopting it.
- **1449a `चणकस्य समान् खण्डान्` is confirmed verbatim**, and the print's own word division supports the size reading: `चणकस्य` stands apart while `समान्खण्डान्` is joined. Verse 1449 needed no correction at all.
- **1458a**, which looked odd in our text, is right: the print gives `आँ(स्था)पयेत्तज्जलं पाँटै(पात्रे) रिक्तैर(क्तेचा)म्लैर्विपाचयेत्`, whose corrected reading is exactly our `स्थापयेत्तज्जलं पात्रे रिक्ते चाम्लैर्विपाचयेत्`. Shrigondekar's convention throughout is `X(Y)` = read Y in place of X — confirmed independently by `मुद्रा(द्गा)ङ्कुर` at 1454, where only `मुद्गाङ्कुर`, mung sprout, makes sense.

## Unresolved

- **`मूळकैः` (1462d).** Printed reading secure, sense not. Radish appears as an ingredient two recipes earlier (1454), so "make pieces of camphor-measure, with radishes" is not impossible as an ingredient list — but the instrumental then has to be pulled away from `विध्वा`, which immediately follows it, and a skewer dish is an odd place for radish chunks. Recorded as printed, with the problem stated in the translation.
- **`हुण्ड` (1468b).** The word is secure enough for the translation (a large cooking pot, Hindi/Marathi *haṇḍā*), but whether the print reads `हुण्ड` or `हण्ड` turns on a single u-matra that I could not separate from `ह`'s own tail with certainty even at 600 dpi. Same word either way. I read the mark above `ण्ड` as footnote marker 9 rather than an `े` matra, because the print leaves no space before `भडित्रके` and a compound cannot have a locative first member.
- **`तीक्ष्ण` (1449b)** is left transliterated. The nighaṇṭus give the name to black pepper and to mustard alike, and `शुण्ठी` follows in the same list, so I would not commit. Our previous English said "pepper" without hedging.
- **Apparatus not fully mapped.** I read the variant lines for pages 123–126 but did not pin every footnote marker to its lemma; the two I needed (A `करपूर` for `घनसार`, D `पूळकैः` for `मूळकैः`, both at 1462) are secure.

## Register

The Sanskrit is third-person optative throughout (`कुर्यात्`, `क्षिपेत्`, `सूदः … प्रयुञ्जीत`), so the translation uses "he should" rather than the imperative that the existing entries use. That is what "close" asks for, but it will read inconsistently against neighbouring entries unless the other seven ranges make the same choice — worth normalizing across the whole file one way or the other.

## Coverage check

27 verses, 54 hemistichs, verse markers running 1449 → 1475 with no gap and nothing twice. Every hemistich counts exactly 16 syllables. Nothing was missing from the repo text in this range; every correction is a substitution.
