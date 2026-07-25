# Mānasollāsa 3.13.1427–1448 — collation against Shrigondekar (GOS), Part C

*Created 2026-07-25 13:16.*

## Summary

**I reached the edition and read the whole range off the print.** Shrigondekar, ed., *Mānasollāsa*, Gaekwad's Oriental Series Vol. II, Baroda 1939, scan at **`https://www.ebharatisampat.in/pdfs/10403-Manasollasa.pdf`** (353 pp., 600 dpi 1-bit CCITT images, no OCR of the Sanskrit — the verses have to be read off the page images). My range sits on **printed pages 122–123 = PDF pages 171–172**; the offset is PDF = printed + 49. Verses 1427–1437 are on p. 122, verses 1438–1448 on p. 123 (which then runs on to 1449). Every verse and the full critical apparatus of both pages is legible. Disputed glyphs were re-rendered from the native 600 dpi image at 3–11× with Lanczos upscaling.

**18 Devanagari corrections**, all of them on our side. Every verse from 1427 to 1448 is present in the repo — no missing text in this range.

**Verse 1432 is not as broken as it looked, and the reason is that our transcription had four separate errors in it.** The printed text is:

> आमूर्ध्नं प्रस्थापयति कर्त्रिकापरिपाटितम् ।
> सारीफलकरेखाभ्यां चित्तं (वच्च त) स्यायामसुण्ठिकाम् (शुण्ठकान्) ॥ ३२ ॥

Against our `आमूर्ध्नः प्रस्थापयति कर्तरिकापरिपाटितम् । सारीफलकररेखाभ्यां चित्तवत् स्यादायामशुण्ठकम्`, the print gives `आमूर्ध्नं` for `आमूर्ध्नः`, **`कर्त्रिका-` for `कर्तरिका-`** (the same slip is at 1429a, and the edition writes `कर्त्रिका` throughout — e.g. `कर्त्रिकाग्रेण` at 1471, p. 125), `करेखाभ्यां` for `कररेखाभ्यां`, and `चित्तं … स्यायामसुण्ठिकाम्` for `चित्तवत् स्यादायामशुण्ठकम्`. With those four fixes **the verse scans 8+8+8+8 exactly.** The three "defective" half-lines were our transcription's, not the text's.

Three further points on 1432, which matter for how much weight the verse can bear:

- **`चित्रवत्` is not the printed reading.** The conjecture was reasonable and it is what the sense wants, but the print has `चित्त-` — the `त्त` ligature, checked against a known `त्र` (`ताडपत्र-`, 1436c) on the same page at 11× magnification. Our independent step-1 transcription also read `त्त`. So both witnesses to the print agree, and `चित्रवत्` would be an emendation, not a restoration.
- **Shrigondekar could not restore pāda d either, and says so by printing two parenthetical alternatives** — `(वच्च त)` after `चित्तं`, and `(शुण्ठकान्)` after `सुण्ठिकाम्`. This is his convention for a reading he cannot settle (compare `पाकज्ञैर्वा(ज्ञोवा)रंवारं` at 1464 and `मेथ(था)कस्य` at 1467, both p. 125). The verse that defines the *śuṇṭhaka* is therefore corrupt in the edition, not merely in our copy of it.
- **What the verse is trying to say is nonetheless clear from `सारीफलकरेखाभ्यां`** — "by the two lines of a *sārī*-board", the scored grid of a game-board. The carcass is laid out flat and slit up to the head, then scored crosswise in a grid, and the long strips that result are the *śuṇṭhaka*. That reading does not depend on pāda d.

**Metrical result: 43 of 44 hemistichs in the corrected text scan at exactly 16 syllables** (was 28/36 for 1427–1435 alone). The single holdout, 1437ab, is the edition's own defect and not ours — see "Unresolved" below.

Deliverable: `research/collation/partC.json`, three entries reusing the existing `ref` strings (1427–1435, 1436–1441, 1442–1448), continuous over the whole range.

## Corrections

Page numbers are printed pages of GOS Vol. II. Pure whitespace differences (the edition runs sandhi-joined words together where our transcription spaces them, e.g. 1433 `चतुरस्रीकृतान्खण्डान्शूलप्रोतान्प्रतापयेत्`) are not counted as corrections.

| Verse | Our reading | Shrigondekar | p. | Note |
|---|---|---|---|---|
| 1427d | प्रच्छाद्योत्**क्वथित**वारिणा | प्रच्छाद्योत्**फुल्ल**वारिणा | 122 | Fixes a 9-syllable pāda. *utphulla* = "burst open, bubbled up", i.e. water at a rolling boil. |
| 1428b | **तावसिञ्चन्**मुहुर्मुहुः | **तावत्सिञ्चेन्**मुहुर्मुहुः | 122 | The conjecture in the brief is confirmed exactly. Restores both the correlative to `यावत्` and the optative. |
| 1429a | पश्चात्**कर्तरि**कया | पश्चात्**कर्त्रि**कया | 122 | Fixes a 17-syllable half-verse that no one had flagged. |
| 1430c | आजानुसन्धिमूलाङ्घ्र**ीं** | आजानुसन्धिमूलाङ्घ्र**ि** | 122 | Orthographic; both scan. |
| 1431b | क्षालयेन्निर्मल**जलैः** | क्षालयेन्निर्मल**ैर्जलैः** | 122 | Two instrumental plurals, not a compound. Both scan. |
| 1432a | आमूर्ध्न**ः** | आमूर्ध्न**ं** | 122 | |
| 1432b | **कर्तरि**कापरिपाटितम् | **कर्त्रि**कापरिपाटितम् | 122 | Fixes a 9-syllable pāda. |
| 1432c | सारीफलक**रर**ेखाभ्यां | सारीफलक**र**ेखाभ्यां | 122 | Fixes a 9-syllable pāda — one `र` too many in our text. |
| 1432d | चित्त**वत् स्यादायामशुण्ठकम्** | चित्त**ं (वच्च त) स्यायामसुण्ठिकाम् (शुण्ठकान्)** | 122 | See Summary. Base text scans at 8; the edition prints two unresolved alternatives. |
| 1433b | शूल**पो**तान् | शूल**प्रो**तान् | 122 | Confirmed. The edition also has `शूलप्रोतानि` at 1464a (p. 125). "Pierced on a skewer." |
| 1434c | **अथा**म्लपरिस्विन्नान् | **अथवा**म्लपरिस्विन्नान् | 122 | Fixes the 7-syllable pāda, and gives `अथवा` "or else", matching the run of alternatives into 1435. |
| 1435c | **भर्जये**दङ्गारपुञ्जेषु | **भृज्ये**दङ्गारपुञ्जेषु, alt. **भृज्जे-** | 122 | Fixes a 9-syllable pāda. The editor's parenthetical `(ज्जे)` gives `भृज्जेद्`, the regular optative of *bhrasj* "to fry"; MS D reads `जे`. |
| 1438b | पूर्ववच्**च**क्कलीकृतान् | पूर्ववच्**छ**क्कलीकृतान् | 123 | Both scan. MS D reads `च्च` (apparatus fn 2), so here the print is arguably the odd one out — the dish is `चक्कलिका` in all five other occurrences. Adopted the printed form; worth a second look. |
| 1438d | मातुलिङ्गक**सरे** | मातुलिङ्गक**केसरे** | 123 | **Resolves the flagged 7-syllable pāda.** `केसर`, not `कसर`, as suspected. |
| 1439a | सम्य**ग्** | सम्य**क्** | 123 | Orthographic. |
| 1440b | सु**पक**स्य | सु**पक्व**स्य | 123 | "Well-**ripened**"; metre cannot see this one. |
| 1440d | केसरा**म्लै**र्मनोहरैः | केसरा**भै**र्मनोहरैः, alt. **(म्लै)** | 123 | The base reading is `केसराभैः` "having the look of *kesara*" — the ginger cut fine enough to pass for the citron's own filaments, which pairs with `केसरैः` earlier in the same verse. Our `केसराम्लैः` is the editor's parenthetical alternative. This undercuts the site's existing gloss of *kesarāmla* as "a second name for the citron". |
| 1441a | राज**ी**सैन्धवैः | राज**ि**सैन्धवैः | 123 | Orthographic. |

Everything else is identical to the print. **1436, 1437, and the whole of 1442–1448 required no correction at all** — the running impression that 1442–1448 was clean (28/28 on the metrical scan) is confirmed against the printed witness.

## Apparatus variants worth knowing

Read off the footnote blocks at the foot of pp. 122 and 123.

| Verse | Word | Variant | Why it matters |
|---|---|---|---|
| 1428a | `गण्डकेन` | fn 6, p. 122: D `गुरुणा`, A `ण्डुवौ` | The manuscripts do not agree on the name of the implement used to pour the scalding water. Any confident gloss of *gaṇḍaka* as a specific vessel is resting on one witness. |
| 1432a | `प्रस्थापयति` | fn 11, p. 122: D `न्ति` | D has the plural `प्रस्थापयन्ति`. Either way it is a present indicative in a passage of optatives. |
| 1432b | `कर्त्रिका-` | fn 12, p. 122: D `तैर्या` | Probably D's `कर्तर्या`, the instrumental of `कर्तरी` — "with the knife" as a separate word rather than a compound. Also scans at 8. |
| 1432c–d | `रेखाभ्यां` / `चित्तं` / `सुण्ठिकाम्` | fns 13–15, p. 122: D `च`, A `त`, D `ष्ठ` | Three of the five apparatus notes on this page cluster in this one half-verse. The manuscript base for it is bad. |
| 1434c | `परिस्विन्नान्` | fn 18, p. 122: D F `तान् परितः स्वि` | |
| 1438b | `पूर्ववच्छक्कली-` | fn 2, p. 123: D `च्च`, `क` | Supports our `चक्कली`; see the corrections table. |
| 1446c | `प्रलेहकं` | fn 9, p. 123: A `प्रहेलकं` | A metathesis in one witness. The `lehya`-class reading of the dish name rests on the other manuscripts, but `प्रलेहक` is transparently *pra-* + *leha* and `प्रहेलक` is not a word, so the printed text is clearly right. |
| 1447d | `बुधः` | fn 11, p. 123: D `त्ततः` | |

A note on the witnesses, which bears on how much any single reading is worth: fn 5 on p. 123 cites **C** alongside D, so the volume draws on at least five manuscripts, not the four (A, B, D, F) named in the introduction. Shrigondekar's own description of that base is that D "is full of mistakes" and F is "complete but full of mistakes".

## Unresolved

- **1437ab is 15 syllables in the print.** `मथिते शर्करायुक्ते दध्न्येलाविमिश्रिते` — `दध्न्येलाविमिश्रिते` is 7 where 8 is wanted, and there is **no footnote marker on the line**, so this is the edition's text and not a transcription slip on either side. Reading `दध्नि एलाविमिश्रिते` with hiatus would give exactly 8, and this chapter does elsewhere carry metrically necessary hiatuses (1569a, 1570d). I have **not** emended it; the Devanagari in the JSON is the printed reading. The sense is not in doubt.
- **1432 pāda d remains unrestored**, and cannot be restored from this edition — Shrigondekar prints alternatives instead of a text. Settling it would need either a further manuscript or Arundhati's *Royal Life in Mānasollāsa*. The dish is not at risk: the method is legible from pāda c.
- **1438b `च्छ` vs `च्च`.** I adopted the printed `पूर्ववच्छक्कलीकृतान्`, but MS D and the five other occurrences of the dish name both point the other way, so this is the one place in my range where I think the edition may simply be wrong. Flagging rather than deciding.
- **`चित्तं` at 1432.** I have kept the print. If Damon would rather the site read `चित्रवत्` as a marked conjecture, that is a defensible editorial choice — but it should be marked as one, because the print does not support it.

## Method

- Scan: `https://www.ebharatisampat.in/pdfs/10403-Manasollasa.pdf`, printed pp. 122–123 = PDF pp. 171–172.
- Extracted the native 600 dpi page images with `pdfimages` rather than re-rasterising with `pdftoppm`, then cropped and upscaled with PIL/Lanczos. At the native resolution, rendering above 600 dpi only interpolates; cropping the native bitmap and upscaling is what actually makes the ligatures readable.
- Every disputed character was decided by comparison against a known instance of the competing glyph elsewhere on the same page, in the same typeface and at the same scan quality — `त्त` vs `त्र` against `ताडपत्र-`, `प्रो` vs `पो` against `शूलप्रोतानि` on p. 125.
- Corrected text checked with a Devanagari syllable counter over all 44 hemistichs.
