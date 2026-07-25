# Mānasollāsa 3.13.1342–1390 — collation against the printed edition

*Created 2026-07-25 13:41.*

## Summary

I reached the printed edition and read every verse of 1342–1390 off the page images. **31 Devanagari corrections** to the text currently on the site, three of them substantive: `कान्यपि` is really `वृक्कान्वापि` ("or the kidneys" — a whole ingredient the site is missing), `कीसार` is really `कासार` (the dish name in the *kisara* recipe is wrong), and `अङ्गारपालिकाः` is really `अङ्गारपोलिकाः` (the ember-bread is a *polikā*, which is what 1383 calls it two verses later). The rest are single characters the metre cannot detect — `निधूमे`/`निर्धूमे`, `मन्दाग्नि`/`मृद्वग्नि`, `कार्ण्यं`/`कार्ष्ण्यं`, `घरट्रैः`/`घरट्टैः`, and so on.

Coverage of 1342–1390 is continuous with every verse in exactly one entry. As a check on the whole transcription, **all 98 hemistichs (49 verses × 2) scan to exactly 16 syllables** — so the text as I have it is metrically sound throughout.

Deliverable: `research/collation/partA.json`, 12 entries.

## Sources used

**Primary — page images at 600 dpi.** Shrigondekar, ed., *Mānasollāsa of King Someśvara*, Vol. II, Gaekwad's Oriental Series No. LXXXIV, Oriental Institute, Baroda, 1939.

- <https://archive.org/details/in.ernet.dli.2015.208789>
- Printed **pages 115–120** = archive leaves **n167–n172** (offset: leaf = printed page + 52). Verified: leaf n130 = p. 78 (verses 891–894); leaf n167 = p. 115, whose header reads `[ अध्यायः १३` from p. 116 on and which carries `इति पुत्रभोगः ॥ १२ ॥` immediately before verse 1342.
- Page images fetched as JPEG via `https://archive.org/download/in.ernet.dli.2015.208789/page/n<N>.jpg` (3560×5416, ~1 MB each), then cropped and re-rendered with PIL at native resolution for disputed glyphs. This item's own OCR is Latin-only (zero Devanagari characters) and useless.

**Secondary — independent scan with Devanagari OCR**, used to cross-check every reading.

- <https://archive.org/details/EhVx_manasollasa-of-king-someshwara-vol-2-by-gk-shri-gondekar-baroda-1939-oriental-in>
- Its `_djvu.txt` has ~267,000 Devanagari characters and covers my whole range legibly. It confirmed 28 of my 31 corrections independently and **overturned four of my own first readings** (see "What the second scan changed" below). It systematically drops *repha* (`र्`) — it prints `खपर` for `खर्पर`, `निवि(बे)श्या` for `निर्विं(वे)श्या`, `सूपकपणि` for `सूपकर्मणि` — so its silence on a *repha* is not evidence, and it confuses `ल`/`ळ` and `क्व`/`क्क`/`क्ष` freely.

The verses are on pages **115** (1342–1350), **116** (1351–1362), **117** (1363–1374), **118** (1375–1386), and **119** (1387–1390, and on to 1400).

## Corrections

Verse references are by pāda: a = first quarter, b = second, and so on. "Ours" is the text currently in `src/data/sources/manasollasa.ts` and the recipe files.

| Verse | Ours | Printed edition | Page |
|---|---|---|---|
| 1342a | `द्वयोरन्त्यो` | `द्वयोरन्यो` — *dvayor anyo*, "the other of the two", not "the last of the two" | 115 |
| 1349b | `विचिनुयात्कणकांस्ततः` | `विसृजेत्कणकांस्ततः` — "he should cast out", not "he should pick out" | 115 |
| 1349d | `पाषाणमृत्तिकाशूक-` | `पाषाणमृत्तिकाशाली-` — *śālī-tṛṇa*, rice-straw, not *śūka*, awns | 115 |
| 1350a | `यत्नादाकृष्य` | `यत्नाद्विकृष्य` | 115 |
| 1353a | `निधूमे` | `निर्धूमे` — the correct word for "smokeless"; two hooks over `धू` at high magnification | 116 |
| 1354c | `सिक्थं विमृश्य` | `सिक्थं विमर्द्य` — "crush", not "examine". P. 116 fn. 4 records `D मृष्य`, which is where our reading came from. The same word recurs as `विमर्द्य` at 1398b | 116 |
| 1355a | `मृदुभूते` | `मृदु(दू)भूते` → `मृदूभूते` | 116 |
| 1356c | `ईषदुद्धारितं` | `ईषदुद्ध(वे)रितं`; I keep the base `उद्धरितं` (see "Emendations" below) | 116 |
| 1357a | `सुपकं` | `सुपक्वं` | 116 |
| 1360a | `घरट्रैर्दलिताः` | `घरट्टैर्दलिताः` — *gharaṭṭa*, the attested word for a quern | 116 |
| 1361a | `विदलीकृताः सम्यक्` | `विदली च कृताः सम्यक्` — ours is a syllable short of the pāda | 116 |
| 1362c | `मन्दाग्निपच्यमाने` | `मृद्वग्निपच्यमाने` | 116 |
| 1363a | `रञ्जनी-` | `रंजनी-` (anusvāra for the conjunct; typographic, not a variant) | 117 |
| 1364c | `स्वादतो` | `स्वादुता (स्वादतः)` → `स्वादतो` (agrees with ours) | 117 |
| 1366a | `पाक्या` | `पाक्या (च्या)` → `पाच्या` | 117 |
| 1368a | `मन्दाग्निना` | `मृद्वग्निना` | 117 |
| **1372a** | `कान्यपि द्विधा भिन्नान्` | **`वृक्कान्वापि द्विधा भिन्नान्`** — "or kidneys split in two". Ours scans to 7 syllables, the print to 8 | 117 |
| 1375c | `क्षालिताः` | `क्षालिता` (no visarga in the print) | 118 |
| 1376a | `घरट्रैश्चूर्णिताः` | `घरट्टैश्चूर्णिताः` | 118 |
| 1376d | `किंचिद्घृत-` | `किंचित्घृत-` (the edition leaves the sandhi unassimilated) | 118 |
| 1378a | `चिकणीभूतं` | `चिक्कणीभूतं` — *cikkaṇa*, the attested form | 118 |
| 1379a | `प्रसारयेद्गोलकां-` | `प्रसारयेत्गोलकां-` | 118 |
| 1380d | `कार्ण्यं` | `कार्ष्ण्यं` — blackness, from *kṛṣṇa*; ours is missing the `ष्` | 118 |
| 1381a | `चतस्रश्च चतस्रो` | `चतस्रश्च चतस्रश्च` — ours scans to 7 | 118 |
| **1382a** | `अङ्गारपालिकाः` | **`अङ्गारपोलिकाः`** — an ember-*polikā*, matching `पोलिकानाम्` at 1383d | 118 |
| 1383a | `सुतप्ततापने क्षिप्तान्` | `सुतप्ततापनिक्षिप्तान्` | 118 |
| 1383c | `खर्परेऽपि` | `कर्परेऽपि` — p. 118 fn. 4 is `D ख`, i.e. our reading is MS D's. Note 1380c genuinely reads `खर्पर` | 118 |
| 1384a | `सोहला पचेत्` | `सोहलां पचेत्` (accusative singular) | 118 |
| 1385a | `मृदवः` | `मृद्यः (द्वः)` → `मृद्वः`; ours scans to 9 syllables, the emendation to 8 | 118 |
| 1385c | `ताप्य स्नेहेन` | `ताप्यां स्नेहेन` — locative, "on the griddle" | 118 |
| 1386b | `पत्रिकाः` | `पत्रिका` (no visarga) | 118 |
| 1387a | `घृतपकांश्च` | `घृतपक्वांश्च` | 119 |
| **1387d** | `कीसारसंज्ञितान्` | **`कासारसंज्ञितान्`** — the dish is *kāsāra*, not *kīsāra*. What we read as a long-`ī` hook is the superscript footnote digit `१`; p. 119 fn. 1 is `D क्कास`, and the second scan's OCR reads `कासार` | 119 |
| 1389c | `मरिचैलादिचूर्णेन` | `मरिचैलाविचूर्णेन` — the print really has `वि`, confirmed on both scans; but the sense requires `-आदि-`, so I flag it as a probable misprint rather than adopt it silently (see below) | 119 |

Count of Devanagari changes to our text: **31** (the table has 34 rows; 1364c and 1366a agree with ours once the edition's emendation is adopted, and 1363a is typographic).

### What the second scan changed

Four of my own first readings were wrong and the cross-check caught them. This is worth recording because three of the four would have gone into the text as new errors:

| Verse | My first read | Correct | How settled |
|---|---|---|---|
| 1350a | `तण्डुलेस्थितान्` | `तण्डुलस्थितान्` | I read a `े` mātrā over `ल`. The second scan's OCR has no mātrā, and it agrees with our existing text. There **is** an unidentified mark there (p. 115 fn. 4 records `A लां  F लान्`), but I will not invent a character for it — reverted to our reading |
| 1355a | `मृदुभूते` | `मृदूभूते` | The parenthetical I could not resolve at low magnification turned out to be `(दू)`, the editor lengthening the vowel — which is the standard *mṛdū-bhūta* formation, and matches `मृदूभूताः` at 1370a |
| 1378a | `चिकणीभूतं` | `चिक्कणीभूतं` | OCR read a doubled `क`; re-rendering the word at native resolution showed the `क्क` ligature |
| 1384a | `सोहला` | `सोहलां` | The anusvāra is there, next to the footnote digit `५` |

### The `ळ` check

I checked this specifically, since *polikā* is exactly the sort of vernacular word (Marathi *poḷī*) where the edition might print `ळ`. It does not: the `ल` in `पोलिकाः` (1382a), `गोलकान्` (1378b), and `सोहलां` (1384a) is glyph-for-glyph identical to the `ल` in words that must be `ल` — `लवणेन` (1377a), `दलिताः` (1360a), `क्षालिता` (1375c). No `ळ` anywhere in 1342–1390. (The second scan's OCR is no use for this test: it prints `ळवणेन` for `लवणेन` and `तेळभृष्टा` for `तैलभृष्टा`.)

### Editorial parentheses in the printed text

The edition marks its own corrections with round brackets replacing the preceding syllable(s) — `रक्तत्वय(त्वाद्र)क्तशालिः` means "the MSS read *raktatvaya-*, read *raktatvād ra-*". There are **twelve** in my range:

1343d `निर्विं(वे)श्या` · 1346c `रक्तत्वय(त्वाद्र)क्त-` · 1355a `मृदु(दू)भूते` · 1355b `तत्सिक्के (क्थे)` · 1356b `स्रावयेद्गुणः(णी)` · 1356c `ईषदुद्ध(वे)रितं` · 1357d `निष्पर्या(ष्पा)वाश्च` · 1364c `स्वादुता (स्वादतः)` · 1366a `पाक्या (च्या)` · 1369d `तैलं भृ(लभृ)ष्टं` · 1374a `सरवेष्टिक(त)सेवाकैः` · 1386b `निक्षिप्ता(ः)`

**Convention I used, following the existing file:** adopt the emended reading and drop the brackets, because the emendation is the editor's own text and our file already does this at 1346c, 1355b, 1356b, 1357d, and 1369d. **Two exceptions** where the emendation yields nothing interpretable — there I keep the printed base reading and say so in the English:

- **1356c** `ईषदुद्ध(वे)रितं`. `उद्वेरितं` is not a word I can establish; the base `उद्धरितं` reads sensibly ("the little *māṇḍa* removed/left"). Kept `उद्धरितं`, noted in the translation.
- **1374a** `सरवेष्टिक(त)सेवाकैः`. Neither `वेष्टिक` nor `वेष्टित` gives an identifiable grain here, and the half-verse is corrupt on any reading. Kept `वेष्टिक` (= our text), noted in the translation.

One further case I did **not** treat as an emendation: **1389c `मरिचैलाविचूर्णेन`**. Both scans agree the print has `वि`, and I compared the glyph against a certain `वि` and a certain `द` on the same page — it is `व`. But `-elāvi-` is not interpretable and the parallel formula at 1387c is `एलामरिचचूर्णेन`, so the sense plainly wants `-elādi-`, "pepper, cardamom, and the like". I transcribed the printed `वि` and flagged it as a probable misprint in the English, rather than silently restore `दि`.

## Boundary decisions

The recipes in this stretch begin and end **mid-verse**, which is what produced the current duplication (1385 and 1386–1388 appear in two entries each; 1386cd was translated twice and 1357ab nowhere). My rule: the Devanagari is cut where the sense unit is cut, each half-verse belongs to exactly one entry, and each English translation covers exactly the Devanagari in its own entry.

For 1342–1383 the existing whole-verse blocks already tile the range without overlap, so I kept their `ref` strings exactly — the recipe links keep working. Where a block starts or ends mid-verse I say so with a bracketed note in the English, following the file's existing habit.

For **1384–1390** the five recipes cannot be expressed as non-overlapping whole-verse ranges, so I used half-verse refs. The assignments:

| Entry | Contents | Sense unit |
|---|---|---|
| 1342–1349 | 1342–1349 | Chapter opening, the fivefold classification, the eight rices and their names, start of the cleaning. Sentence runs on into 1350ab |
| 1350–1356 | 1350–1356 | 1350ab finishes the cleaning; 1350cd–1356 is the boiling of the rice |
| 1357–1366 | 1357–1366 | 1357ab closes the rice ("fit for a king, is the best"); 1357cd–1366 is the split-pulse soup |
| 1367–1372 | 1367–1372 | Mung soup. Its last instruction runs on into 1373ab |
| 1373–1375 | 1373–1375 | 1373ab finishes the mung soup; 1373cd–1375ab is the *pāyasa*; 1375cd begins the wheat |
| 1376–1380 | 1376–1380 | 1376ab finishes the wheat-milling sentence; the rest is *maṇḍaka* |
| 1381–1383 | 1381–1383 | 1381ab closes the *maṇḍaka*; 1381cd–1382ab is *aṅgārapolikā*; 1382cd–1383 is *polikā* |
| **1384–1385ab** | 1384, 1385ab | *sohalā* and *pāhalikā* |
| **1385cd–1386ab** | 1385cd, 1386ab | *patrikā* |
| **1386cd–1387** | 1386cd, 1387 | *kāsāra* |
| **1388ab** | 1388ab | *udumbara* |
| **1388cd–1390** | 1388cd, 1389, 1390 | pulse-stuffed *pūrikā* |

Specifically: **1386cd** (`गोधूमचूर्णादुद्धृत्य…`, the coarse wheat grains) belongs with *kāsāra*, not with *patrikā* — the *patrikā* sentence is complete at 1386ab (`…पत्रिका विपचेत्सुधीः ।`) and the edition's daṇḍa falls there. **1357ab** belongs with the pulse block as its opening clause, which is why it had gone untranslated: it is the last sentence of the rice recipe but sits inside the pulse verse-range.

Five refs therefore no longer match a recipe's `source` string, so those five links will render as plain text until the recipes are updated. The recipe-side edits that would restore them (a **later** job — I touched nothing in `src/`):

| Recipe file | Current `source` | Should become |
|---|---|---|
| `sohala-and-pahalika-fried-breads.md` | `Mānasollāsa 3.13.1384–1385` | `Mānasollāsa 3.13.1384–1385ab` |
| `patrika-layered-breads.md` | `Mānasollāsa 3.13.1385–1386` | `Mānasollāsa 3.13.1385cd–1386ab` |
| `kisara.md` | `Mānasollāsa 3.13.1386–1387` | `Mānasollāsa 3.13.1386cd–1387` |
| `udumbara-fried-sweets.md` | `Mānasollāsa 3.13.1387–1388` | `Mānasollāsa 3.13.1388ab` |
| `sweet-pulse-purika.md` | `Mānasollāsa 3.13.1388–1390` | `Mānasollāsa 3.13.1388cd–1390` |

## Things worth flagging beyond the text

- **`kisara.md` is misnamed.** The dish is `कासार`, *kāsāra*, not *kīsāra* — coarse wheat grains cooked in ghee with sugar, cardamom, and pepper, which is recognisably the *kasār* still made in western India. The recipe's title, slug, and every occurrence of the name need changing.
- **1372a restores a missing ingredient.** The current site text has "some of them split in two" where the edition offers kidneys (`वृक्कान्`) as an alternative to mutton pieces and slices of fat. `mung-soup-with-ginger-and-eggplant.md` is a **published** recipe, so its ingredient list may be affected.
- **The site's `1357–1366` translation is not wrong about the count problem.** The printed list at 1357cd–1358ab yields eight names for "these seven" (`सप्तैते`). `पीता`, "the yellow one", is almost certainly an epithet of *rājamudga* rather than a pulse of its own. I kept that note.
- **1374a is corrupt and should stay flagged.** `सरवेष्टिक(त)सेवाकैर्दिवसैर्लघुविस्तृतैः` — three unidentifiable terms plus a phrase about days and thin spreading. I translated it literally and said in brackets that the reading is uncertain. It should not be smoothed into confident grain names.

## Unresolved

1. **The mark over `ल` in 1350a** (`तण्डुल?स्थितान्`). There is a glyph between the footnote digit `४` and `स्थि` that is either a `े` mātrā or a candrabindu. `तण्डुले स्थितान्` ("situated in the rice") and `तण्डुलस्थितान्` (the same as a compound) mean the same thing and both scan, so nothing turns on it; I kept our existing reading. Settling it needs a cleaner scan than either of the two on archive.org.
2. **P. 116 footnote 10, `A ट्टैः`.** The footnote appears to annotate `घरट्टैः`, where recording MS A's `ट्टैः` would be pointless. Either the marker attaches to a neighbouring word or the footnote reads `ट्टेः`/`ट्ठैः` and I misread it. The base text is `ट्ट` on both occurrences (1360a, 1376a), compared glyph-for-glyph against the certain `ट्ट` of `सितपट्ट` at 1379b, so the reading itself is not in doubt.
3. **`सुपक्वं` vs `सुपक्कं` at 1357a.** The subjoined element looks like `व` and `सुपक्व` is the standard word; the second scan's OCR reads `क्क`, but it also renders 1383b's certain `पक्वान्` as `पक्षान्`, so it is unreliable on this ligature. I wrote `सुपक्वं`.
