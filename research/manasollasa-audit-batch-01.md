# Mānasollāsa 3.13.1350–1385 — audit of the rice, pulse, *pāyasa*, and bread recipes

*Created 2026-07-25 12:01.*

Scope: the seven recipes covering 3.13.1350–1385 — `royal-boiled-rice.md`, `basic-split-pulse-soup.md` (published), `mung-soup-with-ginger-and-eggplant.md` (published), `buffalo-milk-payasa.md`, `mandaka-flatbreads.md`, `ember-baked-angarapolika-and-griddle-polika.md`, `sohala-and-pahalika-fried-breads.md`. All seven were edited. `src/data/sources/manasollasa.ts` was not touched and will need re-syncing.

## Summary

**All seven recipes had substantive errors.** Two of the three most consequential are in the two published files, and one of them changes what the dish tastes like.

**The single most consequential correction: the *maṇḍaka* is made from sifted white flour, not atta.** 1376a–b says the ground wheat is `चालन्या वितुषीकृताः` — de-husked *with a sieve*, i.e. the bran taken out after milling — and the passage states its target twice over: the wheat is `शुभ्राः` (washed white, 1375c) and the finished breads are `श्लक्ष्णाः सितपट्टसमप्रभाः`, "smooth and of a lustre equal to white silk" (1379d), taken off the griddle `यावत्कार्ण्यं न जायते`, before any blackness arises. The translation dropped the sieve; the reconstruction then called for "fine whole-wheat flour or atta", which cannot produce a white-silk bread. This propagates into two more recipes, since both bread recipes downstream use the *maṇḍaka* dough.

**Second: the salt in both published soups is roughly half what the text asks for.** `विंशत्यंशेन` (1364) is a twentieth part. Against 250 g of pulse that is ~12 g, which in a finished soup of about a kilogram lands at ~1.1% salt — normal seasoning. Both recipes had 1 tsp (~6 g), i.e. ~0.5%, which will taste flat. The mung soup inherits the proportion through `पूर्ववत्` at 1367a, a back-reference the translation had dropped, so the two errors are the same error.

**Third: three of the four boundary half-verses in this stretch are translated in the wrong recipe, and one is translated nowhere.** The `original` fields overlap at verse boundaries (the source file's own convention, cf. its 1385–86 / 1386–87 / 1387–88 entries), but the translations don't track the overlap:

| Half-verse | Sanskrit sits in | Translated in | Status |
|---|---|---|---|
| 1357a–b (`एवं भक्तं सुपकं यद्राजयोग्यं`) | split-pulse soup | nowhere | **now restored** to the split-pulse translation |
| 1373a–b (`उत्तार्य नागरं चूर्णं…`) | *pāyasa* | mung soup | now bracketed in the *pāyasa* too |
| 1375c–d (`गोधूमाः क्षालिताः शुभ्राः…`) | *pāyasa* | *maṇḍaka* | now bracketed in both |
| 1381a–b (`चतस्रश्च चतस्रो घटिता…`) | ember-baked *polikā* | *maṇḍaka* | moved to the *polikā*, cross-noted |

The line that gives `royal-boiled-rice.md` its title — `राजयोग्यं`, "fit for a king" — is one of these: it is 1357a–b, which sits in the pulse soup's `original` and had never been translated at all.

**Before Damon cooks from these:** the split-pulse and mung soups now start with water *equal in measure* to the pulse (`विदलैः सममानतः`, `समतोये`) and top up repeatedly, which is the text's method and which was previously collapsed into 900 ml up front. That means the pan is thick within ten minutes and needs watching. If that turns out to be annoying, the total volume is unchanged and reverting is a one-line edit — but the salt correction should stand either way.

| Recipe | Confirmed | Judgement calls | Unresolved | Metre |
|---|---|---|---|---|
| Royal Boiled Rice (1350–56) | 4 | 3 | 0 | 28/28 |
| Split-Pulse Soup (1357–66) — published | 6 | 2 | 2 | 39/40 |
| Mung Soup (1367–72) — published | 5 | 2 | 0 | 23/24 |
| Buffalo-Milk *Pāyasa* (1373–75) | 4 | 2 | 1 | 12/12 |
| *Maṇḍaka* (1376–80) | 4 | 1 | 0 | 20/20 |
| *Aṅgārapālikā* / *Polikā* (1381–83) | 4 | 1 | 1 | 11/12 |
| *Sohalā* / *Pāhalikā* (1384–85) | 2 | 1 | 1 | 7/8 |

Transcription is in much better shape here than in 1427–35: **140 of 144 pādas scan clean.** The four defects are isolated single-syllable slips, not the concentrated damage that made verse 1432 untrustworthy. No passage in this batch needs an edition check before publication, though the four slips are worth spot-checking against Shrigondekar.

---

## 1. Royal Boiled Rice — 3.13.1350–1356

### CONFIRMED

**R1. `किञ्चिद्वा कणगर्भिते` is an alternative, not a compound target.** 1355a–b: `मृदुभूते च तत्सिक्थे किञ्चिद्वा कणगर्भिते` — "when that grain has become soft, *or* is slightly kernel-bearing". The `वा` offers the cook two acceptable endpoints. The old translation fused them: "When they are soft but retain a slight firm core." Same defect class as the *śuṇṭhaka* audit's G4. Restored as "when the grain has gone soft, or still holds a little core", and the method now says "tender, or tender with a faint firm centre".

**R2. The whole draining apparatus was compressed away.** 1356: `स्थाल्यास्ये पिटकं दत्त्वा मण्डं तं स्रावयेद्गुणी` — "having set a `पिटक` at the mouth of the pot, the skilled man should let that `मण्ड` run off". `पिटक` is a basket or plaited lid; `मण्ड` is the named rice-starch water. The translation had only "drain the starchy water". Both are now in, and *māṇḍa* is asterisked as a loan word.

**R3. The doneness cues were flattened.** Two of them. The water's: `सुतप्ते बुद्बुदोपेते स्वल्पबाष्पसमन्विते` (1353c–d) — thoroughly hot, covered in bubbles, accompanied by *a little* steam. Not a rolling boil; the onset of one. The rice's: `सिक्थं विमृश्य वीक्षेत` (1354c) — press a grain and look at it, `वारं वारं`. The translation had "Bring the water to a boil" and "Test grains repeatedly". Both restored, and the method now says how to test.

**R4. Dropped detail.** `दर्व्या` (the ladle, 1354b), `विचक्षणः` and `गुणी` (the formulaic expert, 1354d/1356b), `चिरम्` ("a long while", 1351b), and the opening half-verse 1350a–b (the maidservants removing foreign matter, which the preceding source entry does cover — now flagged with a bracket rather than silently dropped). `कुन्दसङ्काश` and `शशिशुभ्र` were both already kept, correctly.

### JUDGEMENT CALLS

| # | Issue | Applied |
|---|---|---|
| **R-J1** | **Water ratio.** `तण्डुलत्रिगुणं तोयं` is three times the rice by volume ≈ 1.1 L for 300 g. The recipe had 1.5 L and a note saying a larger volume makes scorching less likely. In a *drained* boil that risk is close to zero, and 3:1 leaves enough surplus to boil freely in. | Changed to 1.1 L and rewrote the note to say the text's ratio works as written. |
| **R-J2** | **Dairy before or after the drain.** The text's order is unambiguous: `तत्र दुग्धं घृतं वापि निक्षिप्योत्तारयेत्ततः` (1355c–d) — put in the milk or ghee, *then* take it off the fire — and only then does 1356 drain. For ghee that works: it floats and coats the grains as the water runs through. For milk it does not, since 60 ml of milk in 1.1 L of water leaves with the *māṇḍa*. | Kept the modern order (drain, then enrich) and documented the discrepancy in a note. Reverting to the text's order is a one-line change. |
| **R-J3** | **Soak length.** `चिरम्` = a long while; the recipe had 30 minutes. | Changed to an hour, and noted the word. Aged basmati tolerates it. |

### Not changed

The title. "Royal Boiled Rice" is right in substance, but the royal epithet is 1357a–b, which belongs textually to the next entry — now noted on the page. The optional salt is correctly marked as not in the text.

---

## 2. Split-Pulse Soup — 3.13.1357–1366 — **PUBLISHED**

### CONFIRMED

**P1. `सप्तैते` — the numeral was dropped, and the list silently became eight.** 1358c–d: `सूपकर्मणि सप्तैते नियोज्याः सूपकारकैः` — "these **seven** are to be employed by soup-cooks in soup-making". The translation gave a flat list of eight names and no numeral. The resolution is internal: the operative lists later in the passage name exactly seven pulses — `चणक`, `राजमाष`, `मसूर`, `राजमुद्ग` (mill-split, 1359c–d), `आढकी` (bruised then milled, 1360c–d), `माष` (1366c), `निष्पाव` (1365c) — and `पीता`, "yellow", is not among them. So `राजमुद्गास्तथा पीता` is best read as a description of the *rāja-mudga* rather than an eighth pulse. Restored with a bracketed caveat.

**P2. The entire milling procedure (1359c–1361b) was absent.** `घरट्रैर्दलिताः` (split on the quern), `किंचिद्दष्टास्तथाढक्यो यन्त्रावर्तैर्द्विधाकृताः` (the *āḍhakī* is bruised a little first, then halved by turning the mill), `शूर्पकैर्वितुषीकृताः` (winnowed). This is not decoration: it records that the *āḍhakī* alone needs pre-treatment before milling, which is exactly the real technology of toor dal — pigeon pea is notoriously hard to dehull and is traditionally scarified first. Restored.

**P3. `वर्णार्थं` dropped, and `रञ्जनी` left unidentified.** 1363a: `वर्णार्थं रञ्जनीचूर्णम्` — "for the sake of colour, powder of `रञ्जनी`". The translation had "a little colouring spice", which absorbs the purpose clause into the noun and identifies nothing. `रञ्जनी` is turmeric, confirmed *inside the passage*: 1366b says the whole-cooked pulses are done `हरिद्राचूर्णकं विना`, without turmeric powder, referring back to this. So the turmeric is there for colour only — which is what tells a cook ½ tsp is the right amount.

**P4. The five-point quality standard was dropped entirely.** 1364c–1365b: `वर्णतः स्वादतो गन्धान् मार्दवाल्लाघवादपि । एवं विदलपाकस्य सम्यक्सिद्धिरुदाहृता` — "so is declared the proper perfection of split-pulse cooking, by colour, taste, aroma, softness, and lightness too". This is the passage's summary criterion and the most interesting sentence in it. (`गन्धान्` is grammatically odd amid four ablatives; `गन्धात्` is the expected reading and scans identically.)

**P5. 1366c–d was dropped, and it carries the contrasting rule.** `मसूरमाषपाकेषु हिङ्गुतोयं विनिक्षिपेत्` — "in the cooking of lentils and black gram, put in asafoetida-water". Without it, the translation ends on "cooked whole without asafoetida or turmeric" and never gives the positive rule the exception is an exception to.

**P6. `पूर्ववत्` dropped from 1366a.** `अभिन्नाः पूर्ववत् पाक्या` — the whole-cooked pulses follow the method just given. Same defect as the *śuṇṭhaka* audit's S2.

Also restored: the ordering at 1362 (cold water, then pulse, then onto the fire, then asafoetida-water *while it cooks* — the recipe had combined everything cold), and `मुहुर्मुहुः … यावत्पाकस्य पूर्णता` (1363c–d, water again and again until the cooking is complete) in place of "water as needed".

### JUDGEMENT CALLS

| # | Issue | Applied |
|---|---|---|
| **P-J1** | **Salt at a twentieth part.** `विंशत्यंशेन` gives no explicit referent. Against the pulse (250 g) it is 12.5 g; against the initial water (300 ml) it is 15 g. Either way it is 2–2.5× the recipe's 1 tsp, and 12 g in a ~1.1 kg finished soup is ~1.1% — squarely normal. | Changed 1 tsp → 12 g, with the arithmetic in a note. This is the change most likely to alter Damon's experience of the dish. |
| **P-J2** | **Initial water at equal measure.** `विदलैः सममानतः` ≈ 300 ml for 250 g of split pulse, topped up `मुहुर्मुहुः`. The recipe front-loaded 900 ml. Total unchanged; the dal is thicker from the start and finishes creamier, at the cost of needing attention in the first ten minutes. | Applied, with a caution about the base catching. |

### UNRESOLVED

- **`आढकी`: split at 1360, whole at 1365.** 1360c–d has the *āḍhakī*s halved by the mill; 1365c–1366a has `मेचकाढक्यो … अभिन्नाः`, the *dark* *āḍhakī* cooked unsplit. Either the text distinguishes plain from dark *āḍhakī* (but 1358 lists only `कृष्णाढकी`, black), or `अभिन्नाः` means "not broken up in the pot" rather than "unsplit". Not resolvable internally; left as the translation has it, which follows the surface reading of each verse.
- **`राजमुद्ग`.** Not securely identified (glossed variously as a wild *Vigna* or moth bean). Kept transliterated and now labelled as uncertain in the notes. `राजमाष` (cowpea), `आढकी` (pigeon pea), `निष्पाव` (lablab, per the chickpea-meat audit), `मसूर`, `माष`, `चणक` are all secure and are now glossed in the notes rather than in the translation, to keep the translation uncluttered.

### Verbatim published-file log — `basic-split-pulse-soup.md`

**1. `translation` field.**

*Before:*
```
Use *rāja-mudga*, yellow mung, *niṣpāva*, chickpeas, dark *āḍhakī*, black gram, lentils, or *rāja-māṣa*. Cook them split or whole according to taste. Put cold water in a pot in an amount equal to the split pulse, add the pulse, and cook over a low fire with asafoetida-water. Add a little colouring spice and water as needed. Add finely ground rock salt in the proportion of one part to twenty. *Niṣpāva* and dark *āḍhakī* are cooked whole without asafoetida or turmeric.
```

*After:*
```
Rice cooked in this way, fit for a king, is the best. Use *rāja-mudga*, yellow mung, *niṣpāva*, chickpeas, dark *āḍhakī*, black gram, lentils, or *rāja-māṣa*: these are the seven that soup-cooks employ [the list as transmitted gives eight names — "yellow" is probably a description of the *rāja-mudga* rather than a pulse of its own, since the seven that recur later in the passage do not include it]. Cook them split or whole according to taste. Chickpeas, *rāja-māṣa*, lentils, and *rāja-mudga* are split on the quern; the *āḍhakī* is first bruised a little and then halved by turning the mill. Split them properly and winnow off the husks. Put cold water in a pot in an amount equal to the split pulse, add the pulse, set it on the stove, and cook over a low fire, throwing in asafoetida-water while it cooks. For colour, add a little turmeric powder, and add water again and again until the cooking is complete. Add finely ground rock salt in the proportion of one part to twenty. So is declared the proper perfection of split-pulse cooking, judged by colour, taste, aroma, softness, and lightness. *Niṣpāva* and dark *āḍhakī* are cooked whole, as before, without asafoetida or turmeric. In cooking lentils and black gram, put in asafoetida-water.
```

Damon's own sentences are preserved word for word except two: "Add a little colouring spice and water as needed." → "For colour, add a little turmeric powder, and add water again and again until the cooking is complete."; and "and cook over a low fire with asafoetida-water" → "set it on the stove, and cook over a low fire, throwing in asafoetida-water while it cooks". Everything else is insertion.

**2. Frontmatter.** Added `related:` with one entry, `mung-soup-with-ginger-and-eggplant` (the chain is `पूर्ववत्` at 1367a).

**3. Ingredients.**

*Before:* `* 900 ml water, plus more as needed` / `* 1 tsp fine rock salt, plus more to taste`
*After:* `* 300 ml cold water, plus about 600 ml more added during cooking` / `* 12 g fine rock salt, plus more to taste`

**4. Method.** Steps 2–4 became 2–5. Before: "2. Combine the pulse, water, asafoetida, and turmeric in a saucepan. Bring to a boil, then reduce to a very gentle simmer. / 3. Cook partly covered until soft, adding small amounts of hot water whenever the mixture becomes too thick: about 20 minutes… / 4. Stir in the salt, and serve." After: cold water and pulse into a heavy pan first (2), asafoetida dissolved in water then turmeric added during cooking (3), the same timing table with "about 600 ml in all" and a caution on the first top-up (4), salt unchanged (5). Step 1 untouched.

**5. Added a `## Notes` section** (five bullets: the salt arithmetic, the equal-measure water, `hiṅgu-toya` and turmeric-for-colour, the five-point standard, the pulse identifications). The file previously had none.

---

## 3. Mung Soup with Ginger and Eggplant — 3.13.1367–1372 — **PUBLISHED**

### CONFIRMED

**M1. `पूर्ववत्` — the whole first half-verse was missing.** 1367a–b: `इतरः पूर्ववत् कार्यः पाकः पाकविचक्षणैः` — "the other preparation is to be made as before by those skilled in cooking". This is the load-bearing sentence in the recipe. It imports the previous recipe's method wholesale, which is where the salt comes from (the passage names none) and why the soup is cooked `मन्दाग्निना` with `हिङ्गुवारि`. Restored; the salt now follows from it.

**M2. `रुच्यर्थं` dropped.** 1371c: `केचिदिच्छन्ति रुच्यर्थं मेषमांसस्य खण्डकान्` — "some, *for relish*, want pieces of mutton". The translation had "Some cooks add mutton pieces". The purpose clause is the thing that tells you the meat is a flavouring, not a component.

**M3. `पाटितं` mistranslated as diced.** 1369c: `वार्ताकं पाटितं तैलभृष्टं` — eggplant *split*, oil-fried. `पाटित` is cleft or split, which for eggplant means halved or quartered lengthwise as small ones are handled, not "cut into 2 cm pieces". Both the translation and the ingredient list are fixed.

**M4. `मृदूभूताः` dropped from the lotus-stem alternative.** 1370a: `तैलभृष्टा मृदूभूताः` — the `बिसचक्रिका` discs are fried in oil *until soft*. Lotus root is not soft by default, so this is a real instruction. Added to both the translation and the ingredient line.

**M5. Small drops.** `कान्यपि द्विधा भिन्नान्` (1372a, some of the meat pieces split in two) and `दर्व्या विवर्तयेत्` (1370d, turned through with the ladle). Both restored. `सूक्ष्माणि` (fine ginger pieces) and `पुनः पुनः … स्तोकं स्तोकं` were already present in substance.

The translation's closing clause — "after removing from the fire, add powdered dry ginger and stir" — is **correct and stays**. It renders 1373a–b, whose Sanskrit the source file prints at the head of the *pāyasa*. See §4.

### JUDGEMENT CALLS

| # | Issue | Applied |
|---|---|---|
| **M-J1** | **Salt.** Nothing in 1367–72 names salt; `पूर्ववत्` imports 1364's twentieth part, giving ~12 g for 250 g of mung. The recipe had 1 tsp. | Changed to 12 g, with the derivation in a note. |
| **M-J2** | **`समतोये`, water in equal measure.** ≈ 300 ml for 250 g of mung, topped up `पुनः पुनः … स्तोकं स्तोकं`. The recipe front-loaded 750 ml of a 900 ml total. | Applied, total unchanged. Whole mung will need many top-ups over 1–1½ hours, which is exactly what the text describes. |

### Verbatim published-file log — `mung-soup-with-ginger-and-eggplant.md`

**1. `translation` field.**

*Before:*
```
Wash superior mung beans and cook them slowly in an equal quantity of water. While they cook, add asafoetida-water and small pieces of fresh ginger. Add eggplant fried in oil, or fried lotus-stem discs, or *priyāla* kernels. Add water little by little. Some cooks add mutton pieces or pieces of fat. When fully cooked, add ground black pepper; after removing from the fire, add powdered dry ginger and stir.
```

*After:*
```
The next preparation is to be made as before by cooks skilled in cooking. Wash superior mung beans and cook them slowly in an equal quantity of water. While they cook, add asafoetida-water and small pieces of fresh ginger. Add split eggplant fried in oil, or lotus-stem discs fried in oil until soft, or *priyāla* kernels, and turn them through with the ladle. Add water again and again, little by little. Some cooks, for relish, want mutton pieces — some of them split in two — or pieces of fat. When fully cooked, add ground black pepper; after removing from the fire, add powdered dry ginger and stir.
```

Every one of Damon's clauses survives; the changes are one sentence prepended, four insertions inside existing sentences ("split", "fried in oil until soft", "and turn them through with the ladle", "for relish"/"— some of them split in two —"), and "Add water little by little" → "Add water again and again, little by little".

**2. Frontmatter.** Added `related:` with one entry, `basic-split-pulse-soup`.

**3. Ingredients.**

*Before → After:*
- `* 900 ml water, plus more as needed` → `* 300 ml water, plus about 600 ml more added during cooking`
- `* 250 g eggplant, cut into 2 cm pieces` → `* 250 g small eggplants, split lengthwise into halves or quarters`
- `* 1 tsp fine salt` → `* 12 g fine salt`
- `* Optional alternative to eggplant: 200 g sliced lotus root or 50 g chopped charoli nuts` → `* Optional alternative to eggplant: 200 g sliced lotus root, fried in oil until soft, or 50 g chopped charoli nuts`

**4. Method.** Step 1: "Combine it with 750 ml water" → "Combine it with the 300 ml of water". Step 4: "adding the remaining water little by little" → "adding the remaining water a little at a time as it thickens". Steps 2, 3, 5 untouched.

**5. Added a `## Notes` section** (five bullets: `pūrvavat` and the salt it brings, the equal-measure water, `pāṭita` eggplant, *priyāla* = *Buchanania lanzan*, `rucyarthaṃ` on the meat). The file previously had none.

---

## 4. Buffalo-Milk *Pāyasa* — 3.13.1373–1375

### CONFIRMED

**Y1. The ingredient note was inverted.** `100 ml double cream (optional, especially when using cow's milk)` — read literally, that says to leave the cream out particularly in the case where it is most needed. The cream is precisely what makes cow's milk stand in for buffalo: buffalo milk runs ~7–8% fat against 3.5–4% for cow, and 1 L of whole milk plus 100 ml of double cream comes to ~7.6%. Changed to "omit if you have buffalo milk", and the arithmetic is now in a note.

**Y2. `सुतण्डुलैः` double-counted.** `श्यामाककङ्गुनीवारगन्धशालिसुतण्डुलैः` is one compound whose head is `सुतण्डुलैः` — "with the fine grains of *śyāmāka*, *kaṅgu*, *nīvāra*, and *gandhaśāli*". The old translation rendered it both as "fine grains of" *and* as a fifth item, "or another good rice". A mis-anchored modifier; the phantom fifth grain is gone.

**Y3. Both boundary half-verses were untranslated.** 1373a–b (`उत्तार्य नागरं चूर्णं क्षिप्त्वा दर्व्या विघट्टयेत्`) finishes the mung soup; 1375c–d (`गोधूमाः क्षालिताः शुभ्राः शोषिता रविरश्मिभिः`) begins the *maṇḍaka*. Both are in this file's `original` and neither was rendered. Both now appear as bracketed sentences.

**Y4. 1374a–b was silently dropped.** See UNRESOLVED. It is now in the translation with an explicit obscurity bracket rather than absent.

### JUDGEMENT CALLS

| # | Issue | Applied |
|---|---|---|
| **Y-J1** | **Sugar and cardamom.** The old note called them "plausible additions … not explicitly listed", which is honest but weaker than the evidence allows. Twelve verses later the chapter's own sweet grain-and-milk dish, *kīsāra* (1386–87), takes `सितया` and `एलामरिचचूर्णेन` — sugar, and a powder of cardamom and pepper. | Kept the additions, rewrote the note to cite 1386–87 so it is an import from the same chapter rather than a guess. |
| **Y-J2** | **Grain choice.** The recipe calls for "fragrant short-grain rice"; `गन्धशालि` is a long-grain *śāli*, and it is one of the eight rices defined at 1345–47 (`सुगन्धिर्गन्धशालिः स्यात्`) — a back-reference nothing flagged. Short grain is nonetheless the better pudding. | Kept short grain, added the cross-reference and the caveat to the notes. `नीवार` is now identified as uncultivated rice. |

### UNRESOLVED

**`सरवेष्टिकसेवाकैर्दिवसैर्लघुविस्तृतैः` (1374a–b).** Scans clean at 8+8, so it is not obviously a transcription slip, but it does not construe. It continues the instrumental list from 1373c–d, so it names further things a *pāyasa* can be made from: `सर`, `वेष्टिक`, `सेवाक`, described as `लघुविस्तृतैः` ("thinly extended") over `दिवसैः` ("days"). The least strained reading takes `सेवाक` as the ancestor of *sevaiyā* — sun-dried vermicelli, which is exactly a thing drawn out thin and dried over days — which would make this passage offer a noodle *pāyasa* alongside the grain ones, several centuries before the usual attestations. `वेष्टिक` is a dish name at 1392, and `सर` is plausibly cream. **Recommend a collation against Shrigondekar for this half-verse specifically**; it is the one place in this batch where an edition check could produce a new dish. Nothing in the reconstruction depends on it, and the recipe now says so.

---

## 5. *Maṇḍaka* Flatbreads — 3.13.1376–1380

### CONFIRMED

**D1. The flour is sifted, and the reconstruction used atta.** The headline finding; see the summary. `चालन्या वितुषीकृताः` (1376b) is de-husking with a sieve, which after milling means the bran comes out. The aesthetic target is stated twice (`शुभ्राः` at 1375c, `सितपट्टसमप्रभाः` at 1379d) and reinforced negatively (`यावत्कार्ण्यं न जायते`, 1380d). Ingredient list changed to plain white wheat flour, with finely sifted atta as the fallback.

**D2. The dough is beaten, not kneaded, and in a large wooden vessel.** 1377c–d: `सुमहत्यां काष्ठपात्र्यां करास्फालैर्विमर्दयेत्` — "in a very large wooden vessel he should work it with slaps of the hands". `करास्फाल` is striking with the flat hand. The translation had "knead vigorously until smooth", which loses both the vessel and the technique — and the technique is what develops the extensibility a bread this thin needs. Restored in the translation and reflected in the method.

**D3. The breads are hand-stretched, and the chapter contrasts that with rolling three verses later.** 1378d–1379b: `शालिचूर्णैर्विरूक्षितान् प्रसारयेद्गोलकांस्तान् करसञ्चारवर्तनैः` — dusted dry with rice flour, spread out "by the turnings of moving hands". The next recipe says `पेषण्या तान् प्रसारयेत्`, spread them with a **rolling stone** (1382d). So the chapter distinguishes the hand-stretched *maṇḍaka* from the stone-rolled *polikā*, and rendering both as "roll" erases the distinction. The method now leads with hand-stretching and demotes the rolling pin.

**D4. 1381a–b was translated here but its Sanskrit is in the next recipe.** "Four may be stacked or joined for a superior serving" rendered `चतस्रश्च चतस्रो घटिता मण्डका वराः`. Moved to the *polikā* file's translation (where the Devanagari sits), with a bracket saying it belongs to the *maṇḍaka*; the practical stacking step stays here, cross-noted.

Also restored: `घरट्ट` (the quern), `चिकणीभूतं` (the dough-readiness cue, smooth and glossy), and `मस्तके` in `तप्तखर्परमस्तके` — the *crown* of the heated griddle, so a convex surface, the same arrangement an inverted *tava* gives for *rumālī roṭī*. That is not decoration either: it explains how a hand-stretched bread that thin gets cooked without tearing.

### JUDGEMENT CALLS

| # | Issue | Applied |
|---|---|---|
| **D-J1** | **`क्षीरनीरेण`** — "with milk-water": milk and water, milk diluted with water, or a single milky liquid. The recipe's 100 ml milk + 80–110 ml water is a defensible middle. | Left as-is; no change needed. |

---

## 6. Ember-Baked *Aṅgārapolikā* and Griddle *Polikā* — 3.13.1381–1383

### CONFIRMED

**E1. `खर्परेऽपि पचेदेवं` is an alternative vessel, not a finishing stage.** 1383c: "he may cook them thus on a `खर्पर` too". The old translation had "place them on a thoroughly heated plate, turn them when partly cooked, and finish them on the plate or an earthen griddle" — which turns a `वा`-type alternative into a two-stage sequence. Same defect class as the *śuṇṭhaka* audit's G4 and R1 above. Fixed.

**E2. `शस्ताः` dropped, and with it the point of the pair.** 1382a–b: `अङ्गारपालिकाः शस्ताः किंचित्कृष्णत्वमागताः` — the ember breads are *commended* when they have come to a little blackness. Two verses earlier the *maṇḍaka* must come off `यावत्कार्ण्यं न जायते`, before blackness arises. The chapter is deliberately reversing its own doneness cue, and the translation had recorded the fact without the praise word or the contrast. Both are now in, and the note names the reversal.

**E3. The oven substitute was presented as the method.** `गोलान् प्रसारितान् पाणाव् अङ्गारेषु विनिक्षिपेत्` (1381c–d) — balls flattened *on the palm* and thrown *among the embers*. The recipe offered only "For an ember-style version in a modern oven, heat a baking stone… at 250°C", which cannot produce `किंचित्कृष्णत्व`. The real ember method is now the primary step, with the oven demoted to a substitute and labelled as one. The chapter uses the same `अङ्गारपुञ्ज` technique for meat at 1435, and it survives in *bāṭī* and *liṭṭī*.

**E4. `पाणौ` (palm-flattened) versus `पेषण्या` (stone-rolled) was not distinguished in the method.** The recipe rolled both breads. The ember bread is now palm-flattened and thick, the *polikā* rolled thin — which is also why the dough splits 6 thick rounds one way and 4 thin ones the other.

### JUDGEMENT CALLS

| # | Issue | Applied |
|---|---|---|
| **E-J1** | **Presentation order.** The text gives the ember bread first (1381c–1382b), then the *polikā*. The method gave griddle first. | Reordered to match the text and the title. Cosmetic. |

### UNRESOLVED

**`पालिका` vs `पोलिका`.** 1382a reads `अङ्गारपालिकाः`; 1383d reads `पोलिकानाम्`. The transcription has both forms one verse apart. `Aṅgārapolikā` is the form the secondary literature on the chapter uses and is what the title keeps; the translation now follows the transmitted `*aṅgārapālikā*` and the discrepancy is noted on the page. **Title recommendation: leave it.** A rename to *Aṅgārapālikā* would follow this manuscript but break with the received name.

---

## 7. *Sohalā* and *Pāhalikā* Fried Breads — 3.13.1384–1385

### CONFIRMED

**S1. The temperature distinction was invented; the text's variable is submersion, and it does the work better.** `उत्तानपाकसंसिद्धाः कठिनाः सोहला मताः` (1384c–d) — perfected by *uttāna* cooking, face-up, the *sohalās* are held to be firm. `तैलमग्नाः पीतवर्णा मृदवः पाहलिकाः स्मृताः` (1385a–b) — sunk in the oil, yellow, soft, they are called *pāhalikās*. The old note admitted the 185°C/170°C split was "a modern reconstruction of the text's contrast", but the text's own contrast needs no reconstruction and predicts the observed outcomes: a bread whose top face stays clear of the oil loses moisture there, sets firm, and browns only underneath; one held fully under traps its own steam, puffs, and colours evenly gold. Method rewritten to fry both at the same heat and vary only whether the bread is held under. Damon's translation of `उत्तानपाक` ("cook while floating with the upper surface exposed") was already right — it is the reconstruction that had drifted.

**S2. The oil was too shallow to make a *pāhalikā* at all.** 750 ml in a wide pan will not submerge a 10 cm round; `तैलमग्न` needs depth, and `तैलपूर्णकटाहे` is a cauldron *full* of oil. Raised to 1.2 L with the requirement stated, and a note saying a shallow pan gives you only *sohalās*.

Also: 1385c–d (`तनुप्रसारितान् गोलान् ताप्य स्नेहेन पाचितान्`) begins the layered-sheet *pātrikā* recipe and was untranslated in this file, though its Devanagari is here. Now bracketed.

### JUDGEMENT CALLS

| # | Issue | Applied |
|---|---|---|
| **S-J1** | **The old closing note** — "The breads are unsweetened in the source and may accompany savoury or sweet dishes" — the second clause has no basis in the text and is the kind of filler CLAUDE.md rules out. | Cut. Replaced with the submersion physics and the depth-of-oil point. Also added the textual basis for using the *maṇḍaka* dough, which neither verse names: `गोलान्` here is anaphoric to the `गोलकान्` of 1378. |

### UNRESOLVED

**1385b runs a syllable long.** `मृदवः पाहलिकाः स्मृताः` = 9. Reading `पाह्लिकाः` gives 8, so the dish name may be *pāhlikā*. Noted on the page; not emended. The name is Prakritic either way and I have found no independent attestation.

---

## 8. Transcription integrity — metrical scan

Every pāda in 3.13.1350–1385 scanned against *anuṣṭubh*'s 8+8+8+8. Comparison figures from the prior audits: 1442–48 = 28/28, 1449–52 = 16/16, 1427–35 = 28/36.

| Passage | Recipe | Clean | Defective pādas |
|---|---|---|---|
| 1350–1356 | Royal Boiled Rice | **28 / 28** | — |
| 1357–1366 | Split-Pulse Soup | **39 / 40** | 1361a = 7 |
| 1367–1372 | Mung Soup | **23 / 24** | 1372a = 7 |
| 1373–1375 | Buffalo-Milk *Pāyasa* | **12 / 12** | — |
| 1376–1380 | *Maṇḍaka* | **20 / 20** | — |
| 1381–1383 | *Aṅgārapālikā* / *Polikā* | **11 / 12** | 1381a–b = 15 against 16 |
| 1384–1385 | *Sohalā* / *Pāhalikā* | **7 / 8** | 1385b = 9 |
| **Total** | | **140 / 144 (97%)** | four single-syllable slips |

The four defects, with probable resolutions — none emended:

- **1361a `विदलीकृताः सम्यक्`** = 7. One syllable short; something like `सुविदलीकृताः सम्यक्` would restore it.
- **1372a `कान्यपि द्विधा भिन्नान्`** = 7, *and* the gender does not agree — `कान्यपि` is neuter plural against masculine accusative `भिन्नान्`. **`कांश्चिदपि द्विधा भिन्नान्` fixes both at once** (8 syllables, masculine), and is the most likely original. This is the tidiest suggestion in the batch and the one most worth checking.
- **1381a–b `चतस्रश्च चतस्रो घटिता मण्डका वराः`** = 15 against 16. `चतस्रश्च चतस्रश्च` would restore it.
- **1385b `मृदवः पाहलिकाः स्मृताः`** = 9. `पाह्लिकाः` gives 8.

One non-metrical oddity: **1364c `गन्धान्`** sits amid four ablatives (`वर्णतः स्वादतः … मार्दवात् लाघवात्`) and is very likely `गन्धात्`, which scans identically.

**Recommendation:** no passage in this batch needs an edition check before publication. That said, 1374a–b (semantically opaque though metrically clean) and 1372a (metre and gender both wrong) are the two places where Shrigondekar's GOS text would most likely change the reading, and 1374a–b is the one that could change the dish.

---

## 9. Files edited

All seven, all in `/Users/damonbinder/Documents/Website/src/content/recipes/`:

| File | Status | What changed |
|---|---|---|
| `royal-boiled-rice.md` | draft | `translation` rewritten, `related` added, water 1.5 L → 1.1 L, soak 30 min → 1 hour, method steps 2–3, notes rewritten (6 bullets) |
| `basic-split-pulse-soup.md` | **published** | `translation`, `related`, two ingredient lines, method steps 2–5, new `## Notes` — full verbatim log in §2 |
| `mung-soup-with-ginger-and-eggplant.md` | **published** | `translation`, `related`, four ingredient lines, method steps 1 and 4, new `## Notes` — full verbatim log in §3 |
| `buffalo-milk-payasa.md` | draft | `translation` rewritten (both boundary half-verses + 1374a–b bracketed), intro prose, cream note inverted → fixed, notes rewritten (5 bullets) |
| `mandaka-flatbreads.md` | draft | `translation` rewritten, `related` added, **atta → plain white wheat flour**, method rewritten (hand-stretching, slapping, griddle crown), notes rewritten (5 bullets) |
| `ember-baked-angarapolika-and-griddle-polika.md` | draft | `translation` rewritten (1381a–b restored, griddle as alternative), `related` added, intro prose, method reordered with the real ember step first, notes rewritten (5 bullets) |
| `sohala-and-pahalika-fried-breads.md` | draft | `translation` rewritten, `related` added, intro prose, oil 750 ml → 1.2 L, method rewritten around submersion rather than temperature, notes rewritten (4 bullets) |

**Not touched, as instructed:** `src/data/sources/manasollasa.ts`. Six of the seven entries there for 1350–1385 now diverge from the recipes and need re-syncing centrally.

**No `original` Devanagari field was altered, no `status` was changed, and no title was renamed** — verified by parsing the frontmatter of each file against `git show HEAD:` and comparing the `original`, `status`, and `title` values. All seven frontmatter blocks parse under `yaml.safe_load` with no unknown keys.

---

## 10. Loose ends outside this batch

- **The four boundary misalignments are a systematic problem, not local accidents.** Every recipe in this stretch has a half-verse of its neighbour at one or both ends of its `original`, and the translations were not written boundary-aware. The same pattern almost certainly runs through the rest of the chapter; the source file's own repeated entries at 1385–86 / 1386–87 / 1387–88 show it was a known feature of how the text was split. Worth a chapter-wide sweep: for each recipe, check whether the first and last half-verse of its `original` are rendered in its `translation` or in a neighbour's.
- **`रञ्जनी` = turmeric** is now fixed here, but the chapter's turmeric words (`रञ्जनी` 1363, `हरिद्रा` 1366 and 1444, `निशा` 1449) are worth a consistency pass, in the same way the prior audits documented `नागर` / `शुण्ठी` / `विश्व` for dried ginger.
- **`विंशत्यंशेन` may be the chapter's general seasoning rule**, not a local one for split pulse. If salt is under-specified elsewhere the same twentieth-part arithmetic is the place to start.
- **`कीसार` (1386–87)** now gets cited from the *pāyasa* notes as the sugar-and-cardamom precedent. `kisara.md` is outside this batch; whoever holds it should know it is being leaned on.
