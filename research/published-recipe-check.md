# Published Mānasollāsa recipes checked against the corrected source text

*Created 2026-07-25 15:15.*

Scope: all 14 published `src/content/recipes/*.md` files carrying a Mānasollāsa `source`, checked against `src/data/sources/manasollasa.ts` (the collated Shrigondekar text). Method: mechanical word-level diff of every `original` field against the corresponding `latin` field, syllable-counting of every divergent pāda, then a clause-by-clause read of each `translation`, ingredient list, method, and note against the canonical English. Corroborated against `research/manasollasa-collation-A/C/D/F.md`, which diagnosed the same loci from the printed page.

## TL;DR

**Six of the 14 have findings that change what the page asserts; the other eight need only `original`-field corrections that leave every method and claim intact; one — `majjika-sweet-spiced-buttermilk` — is exact.** The single most important fix is the **onion in `puryala-covered-meat`**: 1460a reads `पश्चात्`, "afterwards", not `पलाण्डुं`, "onion", and the page's reading makes the hemistich 17 syllables. Onion appears nowhere in 1457–1461, so a published ingredient, a translation clause, and a method step all rest on a misreading. Close behind, three pages carry substantial notes built on words that are not in the text: `bhaditraka-skewers` has a 130-word note on *mūṣaka* where the print reads `मूलकैः`; `tamarind-fried-fish` says verse 1526 "needs collating against Shrigondekar's printed edition" and is two syllables short, both now superseded; and `pork-cakkalikas-sour-citron` asserts "1440 names the citron twice" on the strength of a reading the edition prints only as a variant. Nothing found affects food safety, and no reconstruction's cooking is wrong — the puryala onion is the only ingredient without textual warrant, and about 30 distinct Devanagari loci need correcting across the 14 files (six of them shared across the four *cakkalikā* pages).

Two of the six pre-flagged concerns turned out to be non-issues and are recorded as verified below: the salt ratio in both soups already matches `विंशत्यंशेन` exactly, and the fish page has the sliminess polarity right.

## Verdicts

| Recipe | Verses | Verdict | One-line summary |
|---|---|---|---|
| `basic-split-pulse-soup` | 1357–1366 | minor | Five `original` corrections, one of them metrically decisive; translation, salt ratio, and notes all check out. |
| `mung-soup-with-ginger-and-eggplant` | 1367–1372 | **substantive** | 1372a is `वृक्कान्वापि`, kidneys — absent from the translation and the ingredients, and "some of them split in two" is unsupported. |
| `sweet-pulse-purika` | 1388–1390 | minor | `source` should be 1388cd–1390; the page prints an emendation at 1389c where the edition prints the base reading. |
| `pork-cakkalikas-fried-sweet` | 1436–1441 | minor | Two metrically decisive spelling fixes in the shared `original`; `स्विन्न` is lost from the translation. |
| `pork-cakkalikas-mustard-citron-curd` | 1436–1441 | minor | Same, plus the note calls *mathita* "thin" where 1571 makes it the undiluted grade. |
| `pork-cakkalikas-sour-citron` | 1436–1441 | **substantive** | 1440d prints `केसराभैः`; the translation's gloss and the "names the citron twice" note both rest on the variant `केसराम्लैः`. |
| `pork-cakkalikas-sweet-curd` | 1436–1441 | minor | Same shared fixes, plus the "thin curd" characterization of *mathita*. |
| `puryala-covered-meat` | 1457–1461 | **substantive** | Onion has no basis in the text: 1460a is `पश्चात्`, and the page's reading runs the hemistich to 17 syllables. |
| `bhaditraka-skewers` | 1462–1465 | **substantive** | The print reads `मूलकैः`, radish, not `मूषकैः`; the long "piercing tool" note is about a word not in the text. |
| `sauced-bhaditraka` | 1466–1468 | **substantive** | The dish has its own name, `हुण्डभडित्रके` (*huṇḍa-bhaḍitraka*); and `परिभजयेत्` is "fry all over", not "feed with ghee". |
| `tamarind-fried-fish` | 1524–1531 | **substantive** | Verse 1526 is now collated, complete, and a list of fish names; the note's central claims are superseded. |
| `sour-tender-leaf-salad` | 1550–1553 | minor | One cadence-decisive spelling (`कोपासि`); translation policy and safety notes are sound. |
| `spiced-takra` | 1571–1572 | minor | "With half its volume of water" commits to a dilution ratio the Sanskrit states the other way round. |
| `majjika-sweet-spiced-buttermilk` | 1573 | clean | Devanagari exact, translation exact, the *mathita*-is-thick reading correct. One misquoted verb form in a note. |

Substantive: 6. Minor: 7. Clean: 1.

---

## `puryala-covered-meat` (1457–1461) — substantive

### 1. The onion is not in the text (categories 1, 2, 3)

**Page** `original`: `सुतप्ते च घृते पलाण्डुं लशुनं हिङ्गुना सह`. **Translation**: "Into the very hot ghee put onion, garlic, and asafoetida". **Ingredients**: "1 small onion, sliced". **Method** step 6: "Fry the onion, garlic, and asafoetida until fragrant."

**Text** (1460ab): `सुतप्ते च घृते पश्चाल्लशुनं हिङ्गुना सह` — *sutapte ca ghṛte paścāl laśunaṃ hiṅgunā saha*, "afterwards, when the ghee is thoroughly hot, garlic together with asafoetida". `पश्चात्` is "afterwards", picking up `घृतं वान्यत्र तापयेत्` at the end of 1459; `पलाण्डु` does not occur anywhere in 1457–1461. It occurs at 1451 and 1454, in the two preceding recipes, which is the likely source of the contamination.

**Confidence: high.** Three independent lines converge. The metre: the page's hemistich counts 17 syllables against the anuṣṭubh's 16, the corrected one 16. The syntax: without `पश्चात्` the tempering has no temporal connective to the "heat ghee elsewhere" of 1459d. And the collation (`research/manasollasa-collation-D.md`, printed p. 124) reads it off the page directly.

**Minimal edit.** In `original`, `पलाण्डुं लशुनं` → `पश्चाल्लशुनं`. In `translation`, "Into the very hot ghee put onion, garlic, and asafoetida" → "Afterwards, into the thoroughly hot ghee, put garlic together with asafoetida". Drop the onion from Ingredients; in step 6, "Fry the onion, garlic, and asafoetida" → "Fry the garlic and asafoetida". If Damon cooked it with onion and liked it, the honest move is to keep it as a flagged addition rather than silently as the text's.

### 2. `धान्यकस्य` → `धान्याकस्य` (category 1)

**Page**: `धान्यकस्य च पूलिकाम्`. **Text**: `धान्याकस्य च पूलिकाम्`. Both are coriander and both pādas count four akṣaras, so nothing follows for sense or metre; `धान्याक` is what the print has. Low priority. Note the page's *translation* of `पूलिकाम्` as "a small bundle of coriander" is right and is a good catch — the canonical English agrees.

### 3. `किंचित्` → `किञ्चित्` (category 1)

Orthographic only (anusvāra for the conjunct nasal). Cosmetic.

**Checked and correct**: the verse range 1457–1461 spans exactly, stranding nothing. The chicken licence quoted in the notes from 1522–23 and 1419 matches the corrected text word for word, including `शाकुनं लघु`. The decant-then-return order in note 3 is what 1458 says.

---

## `bhaditraka-skewers` (1462–1465) — substantive

### 1. The piercing implement is `मूलकैः`, not `मूषकैः` (categories 1, 2, 4)

**Page** `original`: `घनसारप्रमाणानि कृत्वा खण्डानि मूषकैः`. **Translation**: "pierce them many times with *mūṣakas* [the implement is not identifiable — see the notes]". **Note** ("On the piercing tool"), ~130 words: "*Mūṣakaiḥ* (1462) is instrumental plural… The lexica give rat, mouse, thief, a crucible, a leech, a metre, and a people; this chapter's own *mūṣaka* (1543–47) is a rodent that gets eaten."

**Text** (1462cd): `घनसारप्रमाणानि कृत्वा खण्डानि मूलकैः` — *mūlakaiḥ*. The print has `मूळकैः`, with the `ळ` this edition writes for intervocalic *la* throughout (compare `मूळकस्य`, radish, at 1454); `मूषकैः` is a misreading of `ळ` as `ष`. Manuscript D reads `पूळकैः`.

The note's *conclusion* survives intact — no attested sense of *mūlaka* is a piercing tool either, so the pāda is probably corrupt beyond repair — but every sentence of evidence in it is about the wrong word. The rat cross-reference to 1543–47 in particular is now a coincidence of the misreading, not a fact about the text.

**Confidence: high** on the reading (collated from the printed page, `manasollasa-collation-D.md`, p. 125), **high** that the note needs rewriting, **unchanged** on the substantive conclusion.

**Minimal edit.** `मूषकैः` → `मूलकैः`; translation `*mūṣakas*` → `*mūlakas*`; rewrite the note around *mūlaka*: the print reads *mūḷakaiḥ*, the ordinary word for radish, with D's *pūḷakaiḥ*; construed with `विध्वा` immediately following, the sense required is a piercing tool, which radish does not supply, so the pāda is probably corrupt. The pāda scans clean at eight either way, so the metre does not help. Radish *is* an ingredient two recipes earlier (1454), so "pieces of camphor-measure, with radishes" is not impossible as an ingredient list — but that requires pulling the instrumental away from the verb that follows it.

### 2. `प्रगृह्य च` → `प्रगृह्यते` (category 1)

**Page**: `शुद्धं मांसं प्रगृह्य च`, an absolutive. **Text**: `शुद्धं मांसं प्रगृह्यते`, a finite passive — "clean meat that comes from beside the backbone *is taken*". Both count eight, so the metre is silent; the print settles it. The page's translation, "Take clean meat from beside the spine", works for either reading, so this is an `original`-field fix only.

### 3. `मरिचं` → `मारिचं` (1465a) and `शूलपोतानि` → `शूलप्रोतानि` (1464a) (category 1)

Both metrically neutral, both real: `मारिच` is the adjective "of pepper" agreeing with `चूर्णं`, and `प्रोत` ("pierced, threaded") is the word the sense needs — `पोत` is not. Spelling fixes with no downstream effect.

### 4. `हिङ्ग्वार्द्रकरसैर्युक्तं` → `हिङ्ग्वार्द्रकरसंयुक्तं` (category 1)

The print has one compound, `हिङ्ग्वार्द्रकरस-संयुक्तं`, not a separate instrumental plural `रसैः`. Eight syllables either way; the page's translation ("the juices of asafoetida and fresh ginger… into them") is unaffected.

**Checked and correct — the camphor size comparison.** `घनसारप्रमाणानि` matches character for character, and the identification is now firmer than the page claims: manuscript A reads `करपूर` outright, the chapter's own word for camphor, which is decisive for *ghanasāra* = camphor. The page could cite that but is not wrong without it. The note's characterization of Shrigondekar's manuscript base is also consistent with the collation.

---

## `tamarind-fried-fish` (1524–1531) — substantive

### 1. Verse 1526 is collated, complete, and a list of fish names (categories 1, 2, 4)

**Page** `original`: `कण्टकष्टबडिशादग्धाः खवलाचुकैः ...`. **Translation**: "[One and a half pādas are corrupt here.] …". **Note**: "1526 is defective in the transcription: the first half-line comes in at 14 syllables against *anuṣṭubh*'s 16 and breaks off mid-phrase… **This is the one part of the passage that needs collating against Shrigondekar's printed edition.**"

**Text** (1526ab): `कह्लांकरोष्ट्र बडिशा दग्धा खवल चाचुकैः ?` — *kahlāṃ karoṣṭra baḍiśā dagdhā khavala cācukaiḥ*. Two things were wrong at once. The words were mangled (`कह्लांकरोष्ट्र` collapsed into `कण्टकष्ट`; `खवल चाचुकैः` run together as `खवलाचुकैः`, losing a syllable), and the literal `...` stood where Shrigondekar prints a **question mark** — he prints one after each hemistich of 1526, marking the whole verse doubtful. Nothing is missing: the corrected hemistich counts exactly eight, and `एतेषाम्` at 1526c requires a preceding list, with `चाचुकैः` coordinate with `पाठीनैः`. So these are names of fish varieties.

Three claims on the page are now superseded: that the half-line is 14 against 16, that it "breaks off mid-phrase", and that this part needs collating.

**Minimal edit.** Replace the hemistich with the printed reading (keeping or dropping the `?` sigla is a judgement call — dropping them silently claims the verse is sound). Translation: replace the bracketed apology with the fish list, e.g. "*Kahlāṃ*, *karoṣṭra*, *baḍiśa*s, *dagdhā*, *khavala*, together with the *cācuka*s, and likewise the *pāṭhīna*s [the scaleless sheatfish] — of these, having separated the head, one should cook it. [The edition marks the whole verse doubtful; the words are unidentified, but both hemistichs scan, so no text is missing.]" Rewrite the note: the collation is done, the verse is metrically complete, and six unidentified words are fish names — Shrigondekar could not resolve them either, and manuscript D reads `कन्दं करोष्ट्र बिडिशाः` for the first pāda.

### 2. `प्रपवेष्वाणकेषु` → `प्रपकेष्वाणकेषु` (categories 1, 2, 4)

**Page** `original` has `प्रपवेषु`; translation "Throw them into the *prapavas* and pans"; note "*Prapava* (1529) is not in the lexica." **Text**: `प्रपकेषु` — *prapaka*. The letter is settled (unambiguously `के` at 1400 dpi). The note's conclusion again survives — *prapaka* occurs nowhere else in the chapter and has no lexical entry — but the word it names is wrong in three places on the page.

**Minimal edit.** `प्रपवेषु` → `प्रपकेषु`; *prapavas* → *prapakas*; note: "*Prapaka* (1529) is not in the lexica."

### 3. `अन्त्राण्यपसारयेत्` → `अन्त्रकाण्यपसारयेत्` (categories 1, 4)

**Page** `original`: `विपाट्य जठरं तस्मादन्त्राण्यपसारयेत्`, and the note explains the short pāda thus: "only 1525c–d is short, and there by one syllable that comes straight back if the editorial sandhi in *antrāṇy apasārayet* is dissolved to *antrāṇi apasārayet*."

**Text**: `अन्त्रकाण्यपसारयेत्` — the noun is `अन्त्रक`, not `अन्त्र`. The page's hemistich counts 15; the corrected one 16. So the missing syllable is in the word itself, and the note's sandhi explanation, while ingenious, is not what happened. Fix the Devanagari and drop that sentence of the note.

### 4. `वस्त्रे धृत्वा` → `वस्त्रे बध्वा` (categories 1, 2)

**Page**: "hold them in a cloth and press them". **Text** (1528c): `वस्त्रे बध्वा निपीड्यैतान्` — *baddhvā*, having **tied** them up in the cloth, then pressed. Eight syllables either way; the print settles it. Semantic, though with no consequence for the method as written. Minimal edit: `धृत्वा` → `बध्वा`, and "tie them up in a cloth and press them".

### 5. "and their tail and fins" (category 2)

**Page**: "Cut off the head of the fish, and their tail and fins". **Text** (1525ab): `मत्स्यानां छेदयेच्छीर्षं पुच्छं तेषां च पक्षिणाम्` — `पक्षिणाम्` is genitive plural of `पक्षिन्`, "winged", parallel to `मत्स्यानाम्`, so it modifies the fish as fin-bearers: "the head of the fish, and the tail of those fin-bearers". A separate accusative object "fins" would need `पक्षान्`, not the genitive. So the page adds an operation (trimming the fins) the verse does not name. **Confidence: fairly high** on the grammar; no practical consequence, since the recipe uses fillets. Minimal edit: "and the tail of those fin-bearers [*pakṣin*, 'winged', used of the fins]".

**Checked and correct — the sliminess polarity.** `यावत्पिच्छलतां याति` is rendered "until they turn slimy" in the translation and explained correctly in the first note: "The sliminess is something the rubbing *produces*, not something it removes." No reversal. The verse range 1524–1531 is right, and the note's account of 1529 as an alternative to the tamarind-and-flour version holds under the corrected text.

---

## `sauced-bhaditraka` (1466–1468) — substantive

### 1. The dish has its own name: `हुण्डभडित्रके` (categories 1, 2, 4)

**Page** `original`: `क्षिपेच्च मरिचं भृष्टे सूदो भण्डे भडित्रके`. **Translation**: "the cook should throw pepper on the *bhaditraka* once it has fried in the pan". **Note**: "The text keeps the name too, calling the finished dish *bhaḍitraka* fried in a pan (*bhṛṣṭe bhāṇḍe bhaḍitrake*, 1468)."

**Text**: `क्षिपेच्च मरिचं भृष्टे सूदो हुण्डभडित्रके` — one compound, no space: *huṇḍa-bhaḍitraka*, `हु` misread as `भ` and the following footnote marker misread as an `े` mātrā. *Huṇḍa* is the vernacular word for a large cooking vessel, so the pot version gets a distinct name against the skewered one. The page's claim that "the text keeps the name too" is therefore the opposite of what the corrected text does — it coins a new one — and the Sanskrit the note quotes is not what the edition prints. Both readings count eight syllables, so this rests entirely on the printed page.

**Minimal edit.** `भण्डे भडित्रके` → `हुण्डभडित्रके`; translation "…on the *huṇḍa-bhaḍitraka*, the pot version of the dish, once it has fried"; rewrite the note's last sentence: the text gives the pot version its own name, *huṇḍa-bhaḍitraka*, *huṇḍa* being the vernacular word for a large cooking vessel, as against the skewered *bhaḍitraka* above. This also supplies a better page title than "Sauced" if Damon wants one — worth noting that `शोषयित्वा द्रवं सर्वं` dries the liquid off entirely, so there is no sauce at the end.

### 2. `परिभोजयेत्` → `परिभजयेत्`, and "feed" → "fry" (categories 1, 2)

**Page** `original`: `घृतेन परिभोजयेत्`. **Translation**: "When all the liquid has dried away, **feed** the pieces with ghee". That is a rendering of *paribhojayet*, causative of √*bhuj*.

**Text**: `घृतेन परिभजयेत्` — the print's own correction of the manuscripts' `परिवजयेत्`. The sense the passage needs is "fry them all over", which `परिभर्जयेत्` would give; this chapter's manuscripts elsewhere lose a *repha* and confuse *va* for *bha* in exactly that way. Sixteen syllables either way.

The recipe's method already fries (step 4, "Add the ghee and fry the pieces until lightly browned"), so only the translation gloss is off. **Minimal edit**: `परिभोजयेत्` → `परिभजयेत्`; "feed the pieces with ghee" → "fry them all over in ghee [the print's *paribhajayet*; the sense wants *paribharjayet*]".

**Checked and correct**: "No salt is named in 1466–1468" — confirmed, neither `लवण` nor `सैन्धव` occurs in the entry. The `अनेनैव प्रकारेण` back-reference to 1463's piercing is right. Verse range 1466–1468 spans exactly.

---

## `mung-soup-with-ginger-and-eggplant` (1367–1372) — substantive

### 1. 1372a offers kidneys (categories 1, 2, 3)

**Page** `original`: `कान्यपि द्विधा भिन्नान्मेदसः शकलानि वा`. **Translation**: "Some cooks, for relish, want mutton pieces — some of them split in two — or pieces of fat."

**Text** (1372ab): `वृक्कान्वापि द्विधा भिन्नान्मेदसः शकलानि वा` — *vṛkkān vāpi dvidhā bhinnān*, "or kidneys split in two". So 1371cd–1372ab offers a three-way choice of relish additions: `मेषमांसस्य खण्डकान्` (pieces of sheep's flesh), *or* kidneys split in two, *or* slices of fat. The page has two of the three, and mis-attaches "split in two" to the mutton.

**Confidence: high.** The page's pāda counts seven syllables, the corrected one eight; `कान्यपि` on its own is not a construable Sanskrit word in this slot; and `वृक्को` appears in the dual in the organ list at 1425, so kidneys are within the chapter's repertoire.

**Minimal edit.** `कान्यपि` → `वृक्कान्वापि`. Translation: "Some cooks, for relish, want mutton pieces, or kidneys split in two, or pieces of fat." Ingredients: add "Optional: 2 lamb kidneys, halved" alongside the existing optional lamb. The final note ("The mutton and the fat are marked *rucyarthaṃ*…") should become "The mutton, the kidneys, and the fat".

### 2. `मन्दाग्निना` → `मृद्वग्निना` (category 1)

**Page**: `चुल्यां मन्दाग्निना पाकः`. **Text**: `चुल्यां मृद्वग्निना पाकः`. Eight syllables either way and identical in sense ("gentle fire"), but `मृद्व-` is the chapter's own word — it recurs at 1362, 1446, and 1565 — and `मन्दाग्नि` is a transcription substitution. The same substitution occurs at 1362c in `basic-split-pulse-soup`. Low priority.

### 3. The recipe uses 1373ab, which its `source` range does not cover (categories 2, 5)

The translation ends "after removing from the fire, add powdered dry ginger and stir", and step 5 and the "½ tsp ground dried ginger" ingredient depend on it. That clause is 1373ab, `उत्तार्य नागरं चूर्णं क्षिप्त्वा दर्व्या विघट्टयेत्` — outside both the quoted `original` and the cited range 1367–1372. The corrected text flags it explicitly: "[This half-verse completes the mung soup of the preceding passage.]" It is quoted and cross-referenced on the `buffalo-milk-payasa` draft, so nothing is lost site-wide, but a reader of this page sees a translated instruction with no Sanskrit behind it.

**Minimal edit** (optional, and a house-style decision): extend `source` to `Mānasollāsa 3.13.1367–1373ab` and append the half-verse to `original`. The whole-verse quoting convention used elsewhere would instead argue for leaving it and relying on the cross-reference.

**Checked and correct — the salt ratio.** 250 g pulse to 12 g salt is `विंशत्यंशेन` (1364, imported by `पूर्ववत्` at 1367a) to within 0.5 g: a twentieth of 250 g is 12.5 g. The earlier suggestion that this recipe's salt is "about half" what the text asks is not borne out — it was true of the 1 tsp the page carried before `manasollasa-audit-batch-01.md` corrected it, and the correction is in place.

---

## `pork-cakkalikas-sour-citron` (1436–1441) — substantive

### 1. 1440d prints `केसराभैः`, not `केसराम्लैः` (categories 1, 2, 4)

**Page** `original`: `सूक्ष्मैरार्द्रकखण्डैश्च केसराम्लैर्मनोहरैः`. **Translation**: "with delightful *kesarāmla* [a second name for the citron]". **Note**: "1440 names the citron twice, once as *mātuluṅga* and once as *kesarāmla*, which the lexica also gloss as the citron. There is no second, separate sour fruit in the verse."

**Text**: `केसराभैर्मनोहरैः` — *kesarābhaiḥ*, "having the look of *kesara*", i.e. the ginger cut fine enough to pass for the citron's own pulp-filaments. Shrigondekar prints that as the base reading and records `केसराम्लैः` only as the parenthetical variant. On the printed reading there is no *kesarāmla* in the verse at all: the word is an adjective describing the `सूक्ष्मैरार्द्रकखण्डैः` beside it, which also gives `केसरैः` earlier in the same verse a neat internal echo.

So the note asserts as a fact about the verse ("1440 names the citron twice") something that holds only on the variant, and the translation's bracketed gloss identifies as a citron-name a word that on the base reading is not a noun.

**Confidence: high** that the page has the variant where the print has the base; **the choice between them is genuinely contested** — the edition itself offers both, and `केसराम्लैः` is a defensible reading (it also turns up, as the editor's own correction of `केसराल`, at 1477a). The finding is not "the page picked wrong" but "the page states as settled a reading the edition prints as secondary, and builds a note on it".

**Minimal edit.** Either (a) adopt the base reading — `केसराम्लैः` → `केसराभैः`, translation "and with fine pieces of fresh ginger, delightful, cut to resemble the citron's own filaments [*kesarābhaiḥ*; the edition records the variant *kesarāmlaiḥ*, 'sour with *kesara*']", and replace the note with one saying the pungent-and-sour dressing has one citron in it, `मातुलुङ्ग`, and that the ginger is cut to imitate its filaments; or (b) keep `केसराम्लैः` but mark it as the edition's variant in both the translation and the note. Either way the ingredient list is unaffected: 50 g citron pulp plus 10 g fine ginger is exactly what the base reading describes.

### 2–4. Shared with the other three *cakkalikā* pages

See the block below. `bhṛṣṭa`-related and the `स्विन्न` point apply here too.

**Checked and correct**: the observation that 1441 perfumes the *cakkalikā*s where 1439 perfumes the curd holds under the corrected text (`हिङ्गुना धूपिताः` agreeing with `चक्कलिका` at 1441cd, against `धूपिते … दध्नि` at 1439ab). The mustard-timing note is a cook's observation, not a claim about the Sanskrit.

---

## The four `pork-cakkalikas-*` pages (1436–1441) — shared `original` findings

All four carry an identical `original` and `translation`, so these apply to `pork-cakkalikas-fried-sweet`, `-mustard-citron-curd`, `-sour-citron`, and `-sweet-curd` alike.

### 1. `मातुलिङ्गकसरे` → `मातुलिङ्गककेसरे` (1438d) (category 1)

The page drops a `के`, leaving the pāda at seven syllables against the corrected eight. **Metrically decisive.** Sense unchanged (the citron's pulp-filaments either way), so the translation and every ingredient list stand. Highest-priority of the shared fixes because it is provably wrong rather than a choice between readings.

### 2. `सुपकस्य` → `सुपक्वस्य` (1440b) (category 1)

*Supakva*, "well-ripened", is the standard participle; `सुपक` is not a form. Metrically neutral (`क्व` is one akṣara), so this rests on the print. The translation already says "well-ripened citron", which is `सुपक्व`'s sense — so this is an `original`-field fix only. The same slip appears at 1357a in `basic-split-pulse-soup`.

### 3. `पूर्ववच्चक्कलीकृतान्` → `पूर्ववच्छक्कलीकृतान्` (1438b) (category 1)

The edition spells the word `छक्कली` at this one place and `चक्कलिका` everywhere else; manuscript D has `चक्कली`. The page silently normalizes. Worth restoring only if Damon wants the page to reproduce the print exactly — the corrected file's own note flags the inconsistency, so it is documented either way.

### 4. `राजी` → `राजि` (1441c) and `सम्यग्` → `सम्यक्` (1439a) (category 1)

Both orthographic: `राजि`/`राजी` are the same mustard word, and `सम्यग् दध्नि` is `सम्यक्` with sandhi applied where the print leaves it unapplied. Cosmetic.

### 5. `स्विन्नानां` is lost from the translation (category 2, minor)

**Page**: "Taking the fatty portion of the **cooked** *śuṇṭhakas*". **Text** (1436a): `स्विन्नानां शुण्ठकानां च` — *svinna*, "sweated, steamed through". The word points back specifically to 1434's `अथवाम्लपरिस्विन्नान्`, the *śuṇṭhakas* sweated through in sour liquids, rather than to the ember-roasted ones of 1433 and 1435 — and all four pages start from roast pork belly and link to `roast-pork-sunthaka`.

**Confidence: moderate.** `पूर्ववत्` chains in this chapter are loose, and `स्विन्न` could be a generic "cooked through". But the chapter uses `स्विन्न`/`परिस्विन्न` for the sour-sweated method and `भृष्ट`/`प्रतापयेत्` for the ember work, so the distinction is probably live. **Minimal edit**: render it "the *śuṇṭhaka*s that have been sweated" and, if Damon agrees the distinction is real, add one line to the notes saying 1436 takes the sour-sweated *śuṇṭhaka*s of 1434 rather than the ember-roasted ones — the reconstruction's roast pork belly being a substitution, not the text's own cut.

### 6. *Mathita* described as "thin" — on `-mustard-citron-curd` and `-sweet-curd` (category 4)

**Page** (both): "*Mathita*… is defined later in the same chapter (1571–72) as curd churned with the butter taken out and no water added. So the target is a **thin**, tangy, low-fat curd rather than set whole-milk yoghurt."

**Text** (1571): `निर्जलं मथितं प्रोक्तम्` — *mathita* is by definition the **waterless** grade, the thickest of the three; `उदस्वित्` is half water and `तक्र` a quarter. "Low-fat" is supported by `नवनीतमथो हरेत्`. "Thin" is not — nothing in 1571 thins it, and the site's own `majjika-sweet-spiced-buttermilk` note calls *mathita* "the thick member of the family", so the two pages contradict each other.

**Minimal edit.** Replace "thin, tangy, low-fat curd" with "thick, tangy, low-fat curd" or, more safely, "churned and de-buttered but undiluted". No change to the 200 g of yoghurt in either method, which is right.

---

## `basic-split-pulse-soup` (1357–1366) — minor

All five are `original`-field corrections; the translation, the salt arithmetic, and all five notes check out against the corrected text.

1. **`विदलीकृताः` → `विदली च कृताः` (1361a) — metrically decisive.** The page's pāda counts seven against the corrected eight. Sense unchanged; the translation's "Split them properly and winnow off the husks" covers it.
2. **`घरट्रैर्` → `घरट्टैर्` (1360a).** `घरट्ट` is the attested word for a quern; `घरट्र` is not. Metrically neutral.
3. **`सुपकं` → `सुपक्वं` (1357a).** As at 1440b above. The translation says "Rice cooked in this way" where the corrected text gives "Rice cooked **well** in this way" — a half-word, worth adding with the Devanagari fix.
4. **`पाक्या` → `पाच्या` (1366a).** Here the page carries the edition's *base* reading and the corrected file adopts the editor's own parenthetical correction `(च्या)`, which is the gerundive of √*pac* that the sense needs. An editorial-convention difference rather than an error, and the corrected file's convention (adopt the editor's emendations, note the exceptions) is the one to follow.
5. **`मन्दाग्नि` → `मृद्वग्नि` (1362c)** and **`रञ्जनी` → `रंजनी` (1363b).** The first is the same substitution as in the mung soup; the second is anusvāra-for-conjunct orthography. Cosmetic.

**Checked and correct.** The salt: 12 g against 250 g of pulse is `विंशत्यंशेन` to within half a gram, and the note states the arithmetic. The eight-names-for-seven note at 1357cd–1358ab is right and the corrected text carries the same observation. The `निष्पाव`/`मेचकाढक्यो` cooked-whole-and-unspiced clause is fully translated. Range 1357–1366 is right — 1357ab does belong to the rice, but the verse-range convention puts it here, and the translation renders it.

---

## `sweet-pulse-purika` (1388–1390) — minor

### 1. `source` should be `1388cd–1390` (category 5)

The `original` opens with `गोलकेन समावेष्ट्य तैलेनोदुम्बरान् पचेत्` — 1388ab, the *udumbara* instruction, which the corrected text treats as its own entry and which the draft `udumbara-fried-sweets` also quotes. The page's translation does not render it, correctly, since it belongs to the other dish. This is the whole-verse quoting convention working as designed rather than an error, but `manasollasa-collation-A.md` recommends the tighter range. **Minimal edit** (optional): `source: Mānasollāsa 3.13.1388cd–1390`, and trim the first half-verse from `original`.

### 2. `मरिचैलादिचूर्णेन` → `मरिचैलाविचूर्णेन` (1389c) (category 1)

The page prints the emendation; the edition prints `वि`, confirmed on both scans and glyph-compared against a certain `वि` and a certain `द` on the same page. `-elāvi-` is not interpretable and the parallel formula at 1387c is `एलामरिचचूर्णेन`, so the sense plainly wants `-elādi-`. The corrected file transcribes the printed `वि` and flags it as a probable misprint. This is the mirror of the `पाक्या` case above: the page silently adopts a conjecture where the corrected text records the print and says so. **Minimal edit**: restore `वि` and add the bracket, or keep `दि` and mark it as an emendation. Either is defensible; what the page should not do is present a conjecture as the text.

**Checked and correct.** The translation covers 1388cd–1390 completely. Every ingredient — asafoetida, rock salt, sugar, pepper, cardamom, dough wrapper, oil — is named in the Sanskrit, and `उत्क्वाथ्य` (boiled) is satisfied by the canned chickpeas.

---

## `sour-tender-leaf-salad` (1550–1553) — minor

### 1. `कोपसी` → `कोपासि` (1550c) (category 1)

The print reads `कोपासि`. Both count eight, but the cadence decides: 1550c is an odd pāda, where the seventh syllable must be long — `पा` in the corrected reading, `प` in the page's. The word is unidentified either way, so nothing follows for the translation, which omits it. Low priority.

### 2. `संगृह्य` → `सङ्गृह्य` (1553a) (category 1)

Orthographic. Cosmetic.

**Checked and correct.** The declared omission policy holds up: the page renders about two-thirds of the ~28 names and says so, and the count of unidentifiable ones ("about a third") matches. The corrected text now supplies transliterations for the nine the page leaves out — `मरी`, `तीक्ष्णा`, `मरुकं`, `तालपर्णी`, `भिण्डुकी`, `सल्लक`, `अञ्जनं`, `शेढकं`, `कोपासि` — so the list could be completed with transliterations rather than omissions if Damon prefers. That is an opportunity, not a finding. `तथापरम्` as "and another besides" is right, the dressing options (`अम्लिकाम्ल`, `जम्बीराम्ल`, `दध्ना`, `लवणेन`) are all present, and the safety note conflicts with nothing.

---

## `spiced-takra` (1571–1572) — minor

### 1. "With half its volume of water" states the ratio the other way round (categories 2, 3)

**Page** translation: "The undiluted churned product is called *mathita*; **with half its volume of water** it is *udaśvit*; with one-quarter water it is *takra*." **Note**: "cut with half its volume of water it is *udaśvit*".

**Text** (1571cd–1572a): `निर्जलं मथितं प्रोक्तमुदस्वित्... जलार्धकम् । पादाम्बु तक्रमुद्दिष्टम्` — *udaśvit* is `जलार्धकम्`, "half-water", and *takra* is `पादाम्बु`, "quarter-water". The adjectives describe the product's composition, not the amount added to the base: half of the *udaśvit* is water (1:1 curd to water), and a quarter of the *takra* is water (3:1). The page's phrasing commits to water = half the curd's volume, which would make water a third of the total.

The recipe's quantities follow the page's reading: 500 ml buttermilk plus 125 ml water is a quarter *of the base*, 20% of the whole. On the composition reading it would be 500 ml plus ~167 ml, 25% of the whole.

**Confidence: low-to-moderate.** Both readings of `पादाम्बु` circulate in the Ayurvedic literature the note itself cites, and the difference here is 42 ml of water in a drink whose consistency the cook adjusts anyway. **Minimal edit**: make the translation neutral — "*udaśvit* is half water; that with a quarter part water is *takra*" — which is what the corrected English says, and leave the recipe quantities alone.

### 2. `प्रोक्तमुदश्वित् स्याज्जलार्धकम्` → `प्रोक्तमुदस्वित्या(श्विच्च)जलार्धकम्` (category 1)

The page prints a clean, normalized text at a place where the edition has a crux: the print's own reading is `उदस्वित्या`, with `उदश्विच्च` supplied in the editor's parenthesis. Both count eight and the sense is not in doubt. As with `पाक्या` and `मरिचैलादि`, the issue is only that the page presents a smoothed reading without saying so. Low priority — the sense is secure enough that a reader loses nothing.

**Checked and correct.** The three-way dilution scheme, the `dhūpita`-as-smoke reading and its practical workaround, and the observation that the curd being churned is the reduced-milk `दधि` of 1568–70 (`मथित्वा तत्` with a bare "it") all hold under the corrected text. Range 1571–1572 is right.

---

## `pork-cakkalikas-fried-sweet` and `-sweet-curd` — minor, no page-specific findings

Both are covered entirely by the shared `cakkalikā` block above (`-sweet-curd` also carries the "thin curd" wording). Two page-specific claims were checked and hold:

- **`-sweet-curd`**: "1436 asks specifically for the fatty portion of the *śuṇṭhakas*, where 1438… takes pieces of meat and fat together" — correct: `मेदोभागं प्रगृह्य` at 1436a against `मांसमेदोमयान् शुण्ठान्` at 1438a.
- **`-sweet-curd`**: "1573 gives that exact mixture of churned curd, sugar, cardamom, and camphor a name of its own, *majjikā*" — correct; all four elements match. Worth noting only that 1437 uses `कर्पूरवासिते` (scented) where 1573 uses `कर्पूरधूपितं` (smoked), so a stirred-in speck is more defensible for 1437 than it would be for 1573. Not a finding.
- **`-fried-sweet`**: the ghee-fry-then-scatter-cardamom-and-sugar sequence is 1439cd exactly.

---

## Clean

**`majjika-sweet-spiced-buttermilk` (1573).** The nine words of Devanagari match the corrected text character for character — the only one of the 14 that does. The translation is complete and accurate. Both notes are right: *mathita* is the undiluted grade, the pre-flagged concern about dilution does not apply (the page's Greek-yoghurt substitution thins a *strained* curd back toward churned-curd consistency, which is not the `जलार्धकम्`/`पादाम्बु` dilution of 1571), and `कर्पूरधूपितम्` is correctly read as smoke.

One nitpick, offered as an aside rather than a finding: the first note quotes 1596 as *cūṣen majjikām*, where the print reads `चूषेत मज्जिकां` — *cūṣeta*, the ātmanepada optative. The argument the quotation supports (that *majjikā* belongs to the `चोष्य` class of 1344, so it is thick enough to suck) is exactly right and is stated in the corrected text's own note on 1595–97.

---

## Pre-flagged concerns: dispositions

| Concern | Disposition |
|---|---|
| mung soup, 1372a kidneys | **Confirmed.** Translation and ingredients both affected. See above. |
| puryala onion | **Confirmed.** Onion is nowhere in 1457–1461; the page's hemistich is 17 syllables. |
| fish, `yāvat picchalatāṃ yāti` polarity | **Not an issue.** The page has it right in both the translation and the note. |
| majjikā, `mathitaṃ` thick not diluted | **Not an issue.** The page states it correctly and argues it from 1596. |
| bhaḍitraka camphor-lump size | **Correct as represented.** `घनसारप्रमाणानि` matches; ms A's `करपूर` would strengthen the identification if Damon wants to cite it. |
| both soups, `विंशत्यंशेन` salt at "about half" | **Not an issue any more.** Both are at 12 g against 250 g of pulse, i.e. a twentieth to within 0.5 g. The "about half" observation described the 1 tsp these pages carried before `manasollasa-audit-batch-01.md`; that fix is in. |

## Method and limits

- Every `original` field was diffed word by word against the corresponding `latin` field programmatically, so no Devanagari divergence in these 14 files is unreported, down to spacing. All 33 substantive loci are listed above; six whitespace-only differences are not.
- Syllable counts were computed for every divergent pāda. Six loci are metrically decisive against the page: 1361a, 1372a, 1438d, 1460ab, 1525cd, and 1526ab. The remaining Devanagari findings are metre-invisible and rest on the printed page as recorded in `research/manasollasa-collation-A/C/D/F.md`.
- Every finding here is a divergence between a published page and the collated text. I have not re-collated against the scans; where a reading is contested in the edition itself (`केसराभैः`/`केसराम्लैः`, `मरिचैलावि`/`-आदि`, `पाक्या`/`पाच्या`, the 1571 crux) I have said so and named both.
- No files were edited.
