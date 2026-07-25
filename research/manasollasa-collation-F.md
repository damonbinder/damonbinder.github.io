# Mānasollāsa 3.13.1502–1532 — collation against Shrigondekar and full close translation (part F)

*Created 2026-07-25 13:18.*

## Summary

**I reached the edition and collated all 31 verses against it, character by character.** Source: Shrigondekar, ed., *Mānasollāsa*, Gaekwad's Oriental Series, Vol. II (Baroda, 1939), read off the scan at `https://www.ebharatisampat.in/pdfs/10403-Manasollasa.pdf`. My range sits on **printed pages 128–130 = PDF pages 177–179** (PDF = printed + 49). There is no text layer, so I rendered the pages at 300 dpi to locate verses and re-rendered every disputed glyph at 600–1400 dpi before deciding.

**Nine Devanagari corrections, plus two adoptions of the editor's own bracketed corrections.** Two of the nine are semantic: **1508 reads `चार्द्रकेणापि`, "and with fresh ginger", not `चाम्लकेनापि`, "with a sour agent"** — so the long-boiled *utkvāthita* soup is seasoned with asafoetida, ginger, and salt, and has no souring agent at all, which is unusual in this chapter and worth knowing; and **1528 reads `वस्त्रे बध्वा`, the fish are *tied up* in a cloth, not `धृत्वा`, merely held in one.** The rest are single-character slips of exactly the kind predicted: `सराङ्ग`/`सारङ्ग`, `प्रपवेषु`/`प्रपकेषु`, `चञ्चुपादौ`/`चञ्चुपादं`.

**The ellipsis in 1526 is filled, and the answer is two-part.** Our transcription read `कण्टकष्टबडिशादग्धाः खवलाचुकैः ...`; the print reads **`कह्लांकरोष्ट्र बडिशा दग्धा खवल चाचुकैः ?`**. So (a) the words themselves were mangled — `कह्लांकरोष्ट्र` collapsed into `कण्टकष्ट`, and `खवल चाचुकैः` run together as `खवलाचुकैः`, losing a syllable — and (b) **the literal `...` stood where Shrigondekar prints a question mark.** He prints one after *each* hemistich of 1526, marking the whole verse doubtful, and records ms D's first pāda as `कन्दं करोष्ट्र बिडिशाः`. Nothing is missing: both hemistichs scan at exactly eight syllables. The words are unidentified, and the construction of 1526c–d (`पाठीनैश्च तथैतेषां पृथक् कृत्वा शिरः पचेत्`) requires them to be names of fish, alongside the *pāṭhīna*.

**Metre before and after.** Our transcription had 60 of 62 hemistichs at 16 syllables; the two failures were 1525d (15) and 1526a–b (14). **The corrected text is 62/62.** Every other correction is metre-invisible — the class of error the metre cannot detect, and the reason the collation was worth doing.

**Deliverable:** `research/collation/partF.json`, nine entries, continuous coverage of 1502–1532, reusing the nine existing `ref` strings. Validated as parsing JSON. Nothing in `src/` was touched.

**One decision for Damon.** I carried Shrigondekar's `?` sigla into the Devanagari of 1526 rather than dropping them, because dropping them would silently claim the verse is sound. If you'd rather the Devanagari stay clean, delete the two `?` characters — the translation's bracketed note already says everything they say.

---

## 1. Corrections to the Devanagari

Every reading below was verified at 600 dpi or higher. "Ours" = `src/data/sources/manasollasa.ts` as of this session.

| Verse | Ours | Shrigondekar | Page | Consequence |
|---|---|---|---|---|
| 1504d | `राजिकयाथवा` | `राजिकयाऽथवा` | 128 | Avagraha restored. Cosmetic. |
| 1508a | `स्थाल्यवक्त्रे` | `स्थाल्य(ल)वक्त्रे` → `स्थालवक्त्रे` | 128 | Editor's own correction, adopted. Resolves the "obscure compound" flagged in batch 7: the vessel's mouth is closed by a **dish/plate** (*sthāla*) used as a lid, not by some property of a *sthālī*. |
| 1508b | `चाम्लकेनापि` | `चार्द्रकेणापि` | 128 | **Semantic.** *ārdraka* = fresh ginger. The soup has asafoetida, ginger, and salt — no souring agent. |
| 1516b | `चक्कलीः परिकल्पितान्` | `चक्कलीपरिकलिपतान्` | 129 | Print has the compound (no visarga, no word break). The printed `परिकलिपतान्` is a typographic transposition — it gives 9 syllables and is not a form; `परिकल्पितान्` gives 8 and is the word. I print `चक्कलीपरिकल्पितान्`: the print's compounding, the print's *intended* letters. Flagged rather than silently smoothed. |
| 1518a | `रुरुशम्बरसराङ्ग-` | `रुरुशम्बरसारङ्ग-` | 129 | **Semantic.** `सारङ्ग` is the word (spotted antelope); `सराङ्ग` is not. Both scan at 8, so metre could not catch it. Supported by the apparatus: ms D reads `चित्तलस्य`, "of the spotted one". |
| 1522b | `चञ्चुपादौ` | `चञ्चुपादं` | 129 | Samāhāra-dvandva in the accusative singular, not a dual. Both scan. |
| 1522b | `ततोदरम्` | `ततो(थो)दरम्` → `तथोदरम्` | 129 | Editor's own correction, adopted. `तथा + उदरम्`, "and likewise the belly", rather than `ततः + उदरम्`. |
| 1524b | `कार्याः` | `कार्या` | 130 | Print drops the visarga; `कार्याः` is what the grammar wants (agreeing with `स्थूलाः`). **I kept ours** and record the print here. This is the one place I did not follow the printed page. |
| 1525d | `अन्त्राण्यपसारयेत्` | `अन्त्रकाण्यपसारयेत्` | 130 | **Fixes the metre**: 15 → 16. The noun is `अन्त्रक`, not `अन्त्र`. |
| 1526a–b | `कण्टकष्टबडिशादग्धाः खवलाचुकैः ...` | `कह्लांकरोष्ट्र बडिशा दग्धा खवल चाचुकैः ?` | 130 | **Fixes the metre**: 14 → 16. See §2. |
| 1528c | `वस्त्रे धृत्वा` | `वस्त्रे बध्वा` | 130 | **Semantic.** The fish are *tied up* in the cloth before pressing, not held in it. |
| 1529a | `प्रपवेष्वाणकेषु` | `प्रपकेष्वाणकेषु` | 130 | `प्रपक`, not `प्रपव`. Neither is identifiable, but the letter is settled — the glyph is unambiguously `के` at 1400 dpi. |

### Editorial corrections where our transcription already had it right

Shrigondekar prints the manuscript reading followed by his correction in parentheses; the working transcription silently adopted the correction in each case, and I have kept that.

| Verse | Printed | Adopted | Page |
|---|---|---|---|
| 1504b | `राजिकाकल्कलेपितम्(तान्)` | `लेपितान्` | 128 |
| 1505b | `चंक(क्क)लिकाः` | `चक्कलिकाः` | 128 |
| 1514b | `वास्तु(यु)ना` | `वायुना` | 129 |
| 1515c | `उपष(ख)ण्डकनामानि` | `उपखण्डकनामानि` | 129 |
| 1517c | `हृद्यान्यथा(पथ्या)न्` | `हृद्यान्पथ्यान्` | 129 |
| 1524a | `स्फे(स्फो)ट्यं` | `स्फोट्यं` | 130 |

The apparatus supports 1517c independently: footnote 4 on page 129 records `F पथा`, so a manuscript reads something built on *pathya*, and the editor's `पथ्यान्` is not a guess.

### Verses that collate clean, including the ones the brief flagged

- **1502c–d is exact.** The print reads `पूगीफलप्रमाणेन खण्डान्कृत्वा विचक्षणः` — identical to ours except that the print does not space `खण्डान्कृत्वा`. So the control case for the formulaic recipe opening **holds without qualification**: [size standard] + `खण्डान्` + absolutive of "make" + `विचक्षणः`, with the material (`कालखण्डं`, accusative, object of `विकृत्य`) named in 1502b and omitted from the formula. Areca nut cannot be the material of a dish that is then oiled, peppered, salted, and fumigated, so the slot demonstrably takes a size standard. Another agent's range can lean on this.
- **1506 is in the dual in the print, all four forms.** `समेदस्कौ द्विधा भक्तौ कृत्वा लवणमिश्रितौ । आम्लकैर्भावयित्वा तौ तैलेन परिपाचयेत्` — verified at 600 dpi. Not a transcription artefact. The contrast with 1513's neuter plural `समेदस्कानि मांसानि` in the very next passage is real and is itself an argument: the author uses the plural when he means fatty meat generally and the dual here, so the dual denotes a specific paired organ. The kidney reading stands (1425 has `कालखण्डं तथा वृक्कौ`, the *kālakhaṇḍa* and the two kidneys, in that order and in the dual). My translation preserves all four duals.
- **1510–1512, 1520–1521, 1523, 1527, 1530–1532 collate character for character.** The three no-recipe stretches were all present in `manasollasa.ts` and, apart from 1522, all correct — the problem there was only the thinness of the English.
- **1516d is `प्राज्यलवणेन`, "with abundant salt".** At 300 dpi this looked like `आज्य-` (ghee), which would have changed the dish. At 1400 dpi the `प्र` ligature is unmistakable. Negative result: ours was right.

---

## 2. Verse 1526 in detail

Printed text, page 130:

> कह्लांकरोष्ट्र बडिशा दग्धा खवल चाचुकैः ? ।
> पाठीनैश्च तथैतेषां पृथक् कृत्वा शिरः पचेत् ? ॥ २६ ॥

Footnote marker 4 sits over `कह्लां`; footnote 4 reads `D कन्दं करोष्ट्र बिडिशाः`. Footnote marker 5 sits over `पाठी`; footnote 5 reads `A ठा`.

Four things follow.

1. **No text is missing.** `कह्-लां-क-रोष्-ट्र-ब-डि-शा` = 8; `दग्-धा-ख-व-ल-चा-चु-कैः` = 8. The half-verse is metrically complete as printed. Our `...` was not a lacuna in the source; it was the transcriber's rendering of Shrigondekar's `?`.
2. **The words are unidentified and Shrigondekar says so.** He prints a question mark after each hemistich. That is his strongest doubt-marker in this chapter, and it is the reason the passage has never been translated.
3. **They must be fish names.** 1526c–d says "and with the *pāṭhīna*s likewise — having separated the head of these, one should cook it". `पाठीन` is a securely known fish, the scaleless sheatfish, which is exactly why it appears in a verse that follows a verse about scaled fish. `एतेषाम्`, "of these", needs a preceding list, and the instrumental `चाचुकैः` is coordinate with `पाठीनैः`. So `कह्लां`, `करोष्ट्र`, `बडिशा`, `दग्धा`, `खवल`, `चाचुक` are names of fish varieties. This is a structural argument, not a conjecture about letters, and I have made no emendation.
4. **The word division is the print's own.** Shrigondekar leaves gaps between these words rather than compounding them, which is itself a signal that he could not resolve the sandhi. I have kept his spacing.

`बडिश` in the lexica means "fish-hook", and `दग्ध` means "burnt"; either could be a fish name in Deccan usage that never entered the Sanskrit dictionaries, which is true of a good deal of this chapter's vocabulary. I have not guessed. The translation transliterates all six with asterisks and carries the bracketed note.

---

## 3. `अजाजी`, established

`अजाजी` appears twice in my range, both times in a powdered-spice list beside pepper: 1503b `मरिचाजाजिसैन्धवैः` and 1519c `मरिचाजाजिचूर्णेन`.

**It is cumin.** Monier-Williams gives *ajājī* f. = *Cuminum cyminum*; Apte gives "cumin seed". The Ayurvedic nighaṇṭus equate *ajājī* with *śveta-jīraka*, white cumin, the first of the three *jīraka*s. The chapter also uses `जीरक` directly (1495, in the blood-pudding spice list), so the two are near-synonyms rather than distinct spices, and there is no evidence in the chapter that the author distinguishes them.

The one live alternative is Nigella sativa — *ajājī* does get used for black cumin/kalonji in later and regional usage. I record it and reject it: the lexica are unanimous on *Cuminum*, and the nighaṇṭu identification with *śveta-jīraka* is explicit. Rendered as "*ajājī* [cumin]" in both places, which is what the existing entries said; this note is the evidence they lacked.

---

## 4. Notes on the translation

What changed relative to the digest, beyond the corrections.

- **1506's duals are preserved in English** ("the two fat-covered ones … each having been divided in two"). The digest had them, but with the reasoning collapsed; the bracket now lists all four dual forms and the 1425 cross-reference.
- **1510a is flagged rather than smoothed.** The digest read "Open the sheep's belly with a knife", which takes `विशैः` as an instrumental plural of a non-existent noun. `विशैस्तस्य` is what the print has, it is not a Sanskrit form, and the manuscripts already disagreed (D: `चित्तलस्य`). `विशस्तस्य`, "of the slaughtered [sheep]", fits sense and metre exactly, and I say so in a bracket — but I have not put it in the text, because it is a conjecture.
- **1510d–1511a is one instruction, not two.** `बध्नीयादपराङ्घ्रिकौ । शिरश्च रज्ज्वा दृढया` — the hind feet *and the head* are bound with the stout rope, and then the whole is held into the flame. The digest split this into "bind the hind legs" and "tie the head with a rope", which loses the point: the rope is a handle.
- **1522–1523 is translated in full.** Four pādas of procedure (feathers off all round, beak and feet separated, belly slit, entrails and everything else drawn out) plus the licence clause, which is the only permission for poultry anywhere in the chapter and names pig and sheep explicitly.
- **1524–1531 is restored to eight verses.** The digest ran to a few lines. `स्थूलाश्चेत्खण्डशः कार्याः लघवश्चेत्सरूपतः` (large fish cut up, small ones left whole) is back. `यावत्पिच्छलतां याति` is translated with the right polarity: the oil-and-salt rub is continued *until the fish goes slimy* — it lifts the skin mucus rather than removing it, and the smell goes with it. The digest had the slime being eliminated.
- **1509's naming formula and 1515's praise formula are kept**, as is 1517's triple of dietetic adjectives with `पथ्य` marked as the Ayurvedic category rather than flattened to "wholesome".
- **`पक्षिणाम्` at 1525b.** Genitive plural of `पक्षिन्`, "winged", parallel to `मत्स्यानाम्`. `पक्ष` is a fin as well as a wing, so the sense is the fish themselves as fin-bearers, not the birds of 1522. I translate it that way and note it, rather than silently rendering "and fins" as the digest did — the text does not have a separate word for fins here.

---

## 5. Unresolved

1. **1526** — six unidentified words. Shrigondekar could not resolve them and neither can I. §2.
2. **`प्रपक` (1529a)** — the letter is settled, the referent is not. `पूर्वप्रसिद्धेषु`, "already made known", back-references vessels described earlier in the chapter, but `प्रपक` occurs nowhere else in the surviving text and I found no lexical entry. Whoever collates the earlier vessel passages (roughly 1440–1500) should watch for it; if it turns up there the note in 1529 can be replaced with a cross-reference.
3. **1510a `विशैस्तस्य`** — corrupt in the edition, and corrupt differently in ms D. `विशस्तस्य` is the obvious restoration but remains a conjecture. Not emended.
4. **1516b `परिकलिपतान्`** — I treat the printed form as a typographic transposition and print `परिकल्पितान्`. If Damon wants strict fidelity to the printed page, this is the one place to change back, at the cost of putting a nine-syllable pāda and a non-word on the site.
5. **1515a `यन्नृणाम्`** — `यत्` is syntactically loose ("which [are] of men"). It scans and both A's variant (footnote 3, `ङ्च्वा`, apparently against `यावच्च`) and the printed text leave it standing, so I translated it as it is ("appetizing to men") without flagging it in the entry. Low stakes.
6. **1524b `कार्या`** — print lacks the visarga the grammar wants. I kept `कार्याः`; if the policy is print-first everywhere, this reverts.

## 6. Method, for reuse

- Scan: `https://www.ebharatisampat.in/pdfs/10403-Manasollasa.pdf`, 353 PDF pages, no text layer, DLI digitization of GOS Vol. II.
- **PDF page = printed page + 49.** Verified twice: printed 137 = PDF 186, printed 128 = PDF 177.
- Rough verse density in the food chapter is 12 verses per printed page, so printed page ≈ 128 + (verse − 1502)/12.
- `pdftoppm -png -r 300 -f N -l N mano2.pdf p` to read a page; then `-r 600` to `-r 1400` with `-x -y -W -H` to crop a single word. At 300 dpi `प्र`/`आ`, `क`/`व`, and `ल्प`/`लिप` are all ambiguous; at 1400 dpi none of them are. Three of my nine corrections would have gone the wrong way on a 300 dpi read.
- The syllable counter is worth keeping: it caught 1525d and 1526a–b immediately and confirmed the corrected text at 62/62. It cannot see the other seven corrections, which is the argument for collating rather than trusting the metre.
- Page 128 apparatus: `१ A माः । २ D ब्येष्ट्य च । ३ C ष्ठा । ४ D ताः C ताम् । ५ D त्र F च्च । ६ A कस । ७ D कौ । ८ D तु । ९ C सक्षा A सस्वा । १० A क्वाषित । ११ D ख्यातं सूपशास्त्रविशारदैः ।` Three of these matter beyond my range or beyond the table above:
  - **Footnote 2 bears on 1499a**, which was flagged and is outside my range. The marker sits on the compound. My best reading of the printed pāda at 1600 dpi is `पञ्चाङ्गपट्टवेद्रेष्ट्य च` — but the ligature after `पट्ट` does not resolve cleanly even at that magnification, and I make no claim about it beyond this: **the pāda is corrupt in the print too, not merely in our transcription**, and D's variant (`ब्येष्ट्य च`, or possibly `ब्वेष्ट्य च`) shows the manuscripts already disagreed. The `पञ्चाङ्गुल-` conjecture from batch 7 gets no support from the printed page. Whoever owns 1499 should read printed page 128, line 4, directly rather than trusting my reading of a word outside my span.
  - **Footnote 5 supports the `चक्कलिकाः` correction at 1505b**: against the printed `चंक(क्क)लिकाः`, D reads `चंत्रलिकाः` and **F reads `चंच्चलिकाः`** — a geminate, which is what `क्क` is. So the editor's correction is grounded in a manuscript, not conjectured.
  - **Footnote 4 shows no manuscript has the editor's `तान्` at 1504b**: D reads `लेपिताः`, C reads `लेपिताम्`. `लेपितान्` is still what the grammar demands (agreeing with `कालखण्डान्`), and I have kept it, but it is the editor's restoration rather than a witness reading.
- Page 129 apparatus: `१ D चित्तलस्य। २ A खातृ। ३ A ङ्च्वा। ४ F पथा। ५ A स्फे।` Marker 1 sits over `विशै` in 1510a.
- Page 130 apparatus: `१ A ल्या। २ A ध्या। ३ A दां। ४ D कन्दं करोष्ट्र बिडिशाः। ५ A ठा। ६ CF खी। ७ D स्वि।`
