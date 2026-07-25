# Mānasollāsa 3.13.1401–1416 — the *vaṭaka* and sugar recipes audited

*Created 2026-07-25 11:45.*

Scope: the five `status: draft` recipes covering 1401–1416 — `gharika-black-gram-rings.md`, `vatakas-in-sweet-curd-or-kanjika.md`, `spiced-sour-vatakas.md`, `ksira-prakara-milk-curd-sweets.md`, `varsolaka-spiced-milk-sugar-balls.md`. All five were edited. `src/data/sources/manasollasa.ts` and `iderika-fermented-black-gram-cakes.md` were read but not touched.

## Summary

**All five had substantive errors.** Two of them contradict translations the site already publishes elsewhere in the same chapter, which is the cheapest kind of error to confirm and the most embarrassing to leave standing.

**The most consequential correction is `ārānāla` in the Spiced Sour Vaṭakas, and it is not the philology — it is the starch.** The term is not uncertain: `आरनाल` (note the spelling — the metre requires four syllables, `ā-ra-nā-la`, not `ārānāla`) is the standard word for sour fermented rice gruel, treated in the lexica as an equivalent of `kāñjika`, which is exactly what the *previous* recipe puts *vaṭakas* into. And the text qualifies it `सान्द्रेण`, **thick**. A thick unstrained rice kāñjika is a starch slurry, and that starch is what allows a curd sauce to be reduced to `घनीभवेत्` without graining — the same job besan does in kadhi. The draft substituted diluted rice vinegar, which keeps the acid and throws away the stabilizer, and then had to soften the text's own endpoint to survive: `पचेद्यावद्घनीभवेत्` ("cook until it becomes thick") was rendered as "until steaming and slightly thickened; do not let it boil hard or split". **The prior audit used this recipe's 300 g curd : 150 ml liquid ratio as its benchmark for a stable sauce. That was the wrong benchmark.** Yoghurt plus a mildly sour liquid lands around pH 4.0–4.3 — right at casein's isoelectric point, where aggregation is fastest, and *more* fragile than the Glaze's sub-3.5 mixture, not less. Add a teaspoon of salt and a reduction and this sauce grains harder than the one it was used to fix. What makes the text's version work is the thing the reconstruction removed.

**Second, and airtight: the sweet curd recipe adds water to a preparation the chapter defines as waterless.** 1403d says `मथिते` — *mathita* — and 1571 defines the word: churn curd, remove the butter, and *undiluted* it is `mathita`; with half its volume of water it is `udaśvit`; with a quarter, `takra`. The draft's 400 g yoghurt + 100 ml water is exactly one quarter water, i.e. `takra` — and the chapter uses `takra` explicitly three verses later (1408) when it means that. **`spiced-takra.md`, which is published, already states the definition correctly**, so the site was contradicting itself across two pages. The translation also offered "churned curd **or buttermilk**", inventing an alternative where the text names one substance.

**Third: the Varṣolaka passage contains two products and a four-stage doctrine, and the draft had one product and three stages.** `साधिके शर्करा भवेत्` (1414b) — "cooked beyond that, it becomes `śarkarā`", i.e. it grains back into loose sugar — was dropped entirely. It is the passage's stop instruction, and the chapter states the same terminal point independently at 1567 (`शर्करा स्यादथाष्टमे`). Also dropped: the whole sub-recipe at 1414c–1415b, in which hard-stage refined sugar is set in a `सम्पुट` (a closed two-part mould) and `नानारूपाणि`, various forms, are made by a `खण्डपाकविशारद` — an expert in `khaṇḍa`-cooking. The `तु` at 1415c marks the split between that and the varṣolaka proper; the translation dropped the `तु` and merged them into one instruction.

**Fourth, confirming batch 1's boundary finding and locating its cause.** Four boundary half-verses in my stretch were translated in a file that does not quote them, or in no file at all — including both `kṣīraprakāra` (1411a) and `varṣolaka` (1417a), each of which is a recipe's *own name* stranded outside its own quoted range. The two boundaries the coordinator asked about, 1401 and 1403, are **correctly divided**, and the reason is mechanical: those verses are quoted in full by both neighbouring files, so each translates its own half. The ranges stop overlapping after 1404, and every boundary after that point is broken. **The iḍerikā dependency is not mis-stated** — the batter's defining instructions are all inside 1397cd–1399a, off any boundary, and the pointer to them at 1401cd is in my file where it belongs. Full audit and the recommended range extensions in §9.

**Before cooking, Damon should know:**

- **Do not make the Spiced Sour Vaṭakas with vinegar.** Make thick unstrained kāñjika first (24–48 h), or whisk 2 tsp rice flour into thin kāñjika cold. With the starch in, you can and should reduce the sauce properly.
- **The Kṣīra-Prakāra will not curdle with 200 ml of supermarket buttermilk.** `तक्रम् अम्लं` is marked *sour*; you need roughly half the milk's volume of genuinely soured buttermilk or saved sour whey. The ingredient quantity has been raised to 400–600 ml.
- **The Varṣolaka's 116–118°C is too low** for `कठिना`, and its "equal quantity" of milk was double-counting the clarifying milk. Raised to 120–124°C with the two milk amounts separated, and the stage is now a hard stop rather than a target to pass through.
- **All four batter recipes (iḍerikā, ghārikā, and the two *vaṭaka* dishes) draw on one batch of urad batter** and none of them said so. One batch now reads as about eight ghārikās, which is also what the *vaṭaka* recipes assume.

| Recipe | Confirmed | Judgement calls | Unresolved |
|---|---|---|---|
| Ghārikā (1401–03) | 3 | 1 | 0 |
| Vaṭikās / Kāñjika-vaṭakas (1403–04) | 3 | 2 | 0 |
| Spiced Sour Vaṭakas (1405–07) | 5 | 2 | 0 |
| Kṣīra-Prakāra (1408–10) | 3 | 3 | 0 |
| Varṣolaka (1411–16) | 5 | 3 | 1 |

Transcription is in good shape: **62 of 64 pādas scan clean**, against 28/36 for the corrupt 1427–35. The two defects are both in the Varṣolaka and both are *short* pādas, which reads like dropped syllables in transcription rather than a corrupt exemplar.

---

## 1. `bhakṣya`: the chapter's own class term, lost three times out of three

Outside the framing verse at 1344 (`भोज्यं भक्ष्यं तथा पेयं लेह्यं चोष्यं`), the word `भक्ष्य` occurs in this chapter **exactly three times, and all three are in my five recipes**:

| Verse | Text | Was rendered | Now |
|---|---|---|---|
| 1403b | `भक्ष्येषु सुमनोहराः` | "these attractive snacks" | "the most delightful of *bhakṣyas*" |
| 1411b | `भक्ष्यं मृष्टं मनोहरम्` | dropped (out of the file's quoted range) | translated in the Varṣolaka, where it is quoted |
| 1414a | `कठिना भक्ष्या` | "it becomes a firm sweet" | "it is firm, a *bhakṣya*" |

This is the same defect the Śuṇṭhaka audit found with `प्रलेहक` → "thick sauce": a technical placement in the fivefold scheme flattened into an English food word. It matters most at 1413–14, where the sugar stages are mapped onto the classification: **soft cooking gives a `पेया`, a drinkable thing; hard cooking gives a `भक्ष्या`, a morsel you bite.** The chapter does the same thing at 1567 for reduced milk — `पाने`, `लेह्यक`, `पिण्डता`, `शर्करा`. Reading `पेया` and `भक्ष्या` as class terms rather than loose adjectives is what makes 1413–14 a coherent doctrine rather than a list of impressions.

## 2. Ghārikā Black-Gram Rings (1401–1403)

### Confirmed

**G1. `भक्ष्येषु` flattened.** See §1. Also restored: `ख्याता` ("renowned"), and `गोलकान् विस्तृतान् घनान्` — the text makes *balls* which are then spread broad and thick, which is the same two-step the chapter uses for `maṇḍakas` at 1378–79 (`गोलकान् परिकल्पयेत्` … `प्रसारयेत्` … `विस्तृता`). "Make broad thick discs" lost the shaping sequence.

**G2. The back-reference is to the *soured* batter, and the intro said the opposite of what that implies.** `तस्यैव माषपिष्टस्य` (1401c) — "of that very same black-gram batter" — has one available antecedent: `आम्लीभूतं माषपिष्टं`, the soured batter, at 1399a. `एव` insists on the identity. The reconstruction already used the fermented batter and was right to; but the intro called this "a close relative of medu vada" without qualification, and medu vada batter is ground and beaten, *not* fermented. That is the single most surprising thing about the recipe for anyone who has made medu vada, and it was unmarked. The translation now brackets the referent and the intro names the difference.

**G3. The oil temperature and time do not match the geometry the text specifies.** `विस्तृतान् घनान्` — broad *and* thick — plus `लौहित्यं` (redness, not gold) is a longer, gentler fry than 175°C for 3–5 minutes on a 50 g disc. Raised to 80 g discs about 9 cm across and 1.5–2 cm thick, at 165–170°C for 6–8 minutes. The five-or-seven holes are what makes that cookable, which is worth saying: `परिशोभितान्` frames them as ornament, and they *are* ornament, but on a disc this thick they also cut the heat path to the centre. Note added, without overriding the text's own framing.

### Judgement call

**G-J1. Batch size.** The text gives no quantities and never says how the iḍerikā batter is divided. I have set one batch ≈ eight ghārikās, and said in the notes that the steamed *iḍerikās* and the fried *ghārikās* are alternative uses of one batch rather than two batches — following the house pattern already set by the four *Cakkalikās*, which are four treatments of one parent batch. Revert if you would rather leave it unstated.

### Metrical scan

12 pādas (1401–1403), **12 clean**. Two orthographic slips that do not affect the metre and that I have *not* touched: `सुशीताः धवलाः` should sandhi to `सुशीता धवलाः`, and `निच्छिद्रा … पक्वा` want visarga (`निच्छिद्राः … पक्वाः`).

## 3. Vaṭakas in Sweet Curd or Kāñjika (1403–1404)

### Confirmed

**V1. `मथित` is waterless by the chapter's own definition; the recipe added a quarter water.** The full argument is in the Summary. Three supports, in descending order of strength:

1. **1571 defines the term in this chapter**: `निर्जलं मथितं प्रोक्तमुदश्वित् स्याज्जलार्धकम् । पादाम्बु तक्रमुद्दिष्टम्`. Waterless = `mathita`; half water = `udaśvit`; quarter water = `takra`.
2. **`spiced-takra.md` is published and already says so**: "The same churned base, left undiluted, is *mathita*; cut with half its volume of water it is *udaśvit*." The site contradicted itself.
3. **The author uses `takra` when he means `takra`** — at 1408d, three verses later, and at 1568, 1572, 1578, 1596. The choice of `मथित` at 1403d is not loose synonymy.

Fix: 500 g plain yoghurt, whisked hard, no water. Since `mathita` has had its butter removed, low-fat yoghurt is marginally closer than whole-milk; noted rather than mandated.

**V2. "Churned curd **or** buttermilk" invents an alternative.** The text names one substance. (The same slippage sits in the published `majjika-sweet-spiced-buttermilk.md` — see §7.)

**V3. The translation rendered a verse the file does not quote.** "In general, a *vaṭaka* takes the name of the liquid in which it is served" is **1405ab** (`यत्र यत्र द्रवद्रव्ये तन्नाम्ना वटकास्तु ते`), which lives in the *next* recipe's `original`, where it was untranslated. Moved: it now opens the Spiced Sour Vaṭakas' translation, and survives here as a cross-reference in the notes with the transliteration.

### Judgement calls

**V-J1. The soaking liquid is essentially the chapter's own `majjikā`.** 1573: `मथितं शर्करायुक्तमेलाचूर्णविमिश्रितम् कर्पूरधूपितं … मज्जिका`. Compare 1403d–1404a: `मथिते शर्करायुते एलामरिचसंयुक्ते`. Same base, same sugar, same cardamom; pepper here where 1573 has camphor. I have put this in the notes and added `related: [spiced-takra]` — arguably `majjika-sweet-spiced-buttermilk` belongs in `related` too, but that is a published file and I have left the reciprocal link to whoever owns it.

**V-J2. "8 small fried urad vaṭakas" → "8 fried holeless *ghārikās*".** 1403c is `निच्छिद्रा घारिकाः पक्वा` — the holeless ones are explicitly the *same* ghārikās, so the same broad thick disc minus the holes, not a separate small cake. "Small" was an unmarked invention. I kept a practical caveat (without holes the centre cooks more slowly, so make them thinner) rather than silently shrinking them.

Also: the ½ tsp salt in the kāñjika version has no warrant in 1404, which specifies no seasoning at all for it. I kept it and pointed the note at 1580, where the chapter's own `dhūpa-kāñjika` is salted.

### Metrical scan

8 pādas (1403–1404), **8 clean**.

## 4. Spiced Sour Vaṭakas (1405–1407)

The recipe the brief flagged, and it needed the most work.

### Confirmed

**S1. `ārānāla` → `āranāla`, and it is not uncertain.** The Devanagari is `आरनालेन`, and the metre requires it: `आ-र-ना-ले-न सा-न्द्रे-ण` = 8. `ārānāla` would give 9. Substantively, `āranāla` is the standard term for sour fermented rice gruel — the water in which boiled rice has been left to ferment — and the Ayurvedic literature treats it inside the family `kāñjika` / `dhānyāmla` / `sauvīra` / `tuṣodaka`. The chapter has `kāñjika` at 1404 (three pādas earlier), 1520, 1580, and 1597, and `sauvīra` at 1580. The note calling it "uncertain" misassigned the uncertainty, in the same pattern as the Glaze's `दन्तशठ`.

**S2. Thick fermented rice liquid, not vinegar — the substitution removed the stabilizer.** `सान्द्रेण` is load-bearing. Full argument in the Summary. Fix: 250 ml thick unstrained rice kāñjika replaces 150 ml water + 30 ml rice vinegar. Fallback for thin kāñjika: 2 tsp rice flour whisked in cold. The notes now explain making it thick (keep the starchy cooking water, don't strain, mash some rice in).

**S3. `घनीभवेत्` was softened to "slightly thickened".** `घनी-भू` is strong in this author's usage: at 1409a `घनीभूतं` describes the *coagulated curd mass* after acid-setting milk — a solid. The two occurrences of the root in this chapter are 1407b and 1409a, adjacent, and the second fixes the sense of the first. "Cook until it becomes thick", 12–18 minutes, coating the spoon. With the starch in, this is now safe to do.

**S4. 1405ab was dropped.** `यत्र यत्र द्रवद्रव्ये तन्नाम्ना वटकास्तु ते` is quoted in this file's `original` and went untranslated while its English sat in the previous recipe. Restored (see V3).

**S5. The asafoetida is 1408, and it is `धूपयेत्` — perfumed, not stirred in.** "Perfume with asafoetida" appeared in this file's translation although 1408a is not in its quoted range, and the reconstruction had the asafoetida whisked raw into the cold sauce. Fixed both ways: the translation carries a bracketed `[1408 continues: …]`, and the method blooms it in hot ghee at the end, following the house reading already used in `spiced-takra.md` and the Roast-Meat Salad.

Also restored in the translation: `पाकवित्` (the formulaic knowing cook), `दर्व्या विघट्टयन्` as a continuous participle, and the case marking — `आरनालेन … दध्ना … च` is instrumental and the salt/ginger/coriander/cumin compound is the accusative object of `विमिश्रयेत्`, so the spices go *into* the sour base, not alongside it as coordinate ingredients. The old translation's flat list ("Mix thick sour ārānāla with well-churned curd, rock salt, fresh ginger, coriander, cumin, and split peppercorns") made all seven co-ordinate.

### Judgement calls

**S-J1. `धान्याक` = coriander seed, not leaf.** A hapax in the chapter. It sits unmarked inside `सैन्धव-आर्द्रक-धान्याक-जीरक`, where `आर्द्रक` next to it is explicitly marked *fresh* and `जीरक` is unambiguously a seed. In Ayurvedic usage `dhānyaka` is the fruit. Changed to 2 tsp coarsely ground coriander seed; the note gives 2 Tb chopped leaf as the alternative reading. Revert to leaf if you disagree — coriander leaf in a sour curd sauce is perfectly plausible cooking, it just is not what the word most likely says here.

**S-J2. 250 ml of kāñjika against 300 g of curd.** `आरनालेन सान्द्रेण दध्ना सुमथितेन च` is a `X-ena Y-ena ca` pair with no proportion given, so equal parts is the natural default and I have come close to it. Nothing in the text licenses a number.

### Metrical scan

12 pādas (1405–1407), **12 clean**.

## 5. Kṣīra-Prakāra Milk-Curd Sweets (1408–1410)

### Confirmed

**K1. 1408ab was dropped; the file's own dish name comes from a verse it does not quote.** `हिङ्गुना धूपयेत्सम्यग् वटकास्ते मनोहराः` is quoted here and was untranslated, its English having migrated to the previous recipe (see S5). Restored at the head of the translation. Symmetrically, the *name* `क्षीरप्रकार` is at **1411a**, in the Varṣolaka's `original`, so this file could not translate its own title — now carried as a bracketed `[1411 names it: …]` and translated properly in the Varṣolaka.

**K2. 200 ml of cultured buttermilk will not set a litre of milk.** `तक्रम् अम्लं` is marked *sour*, and the mark is doing work. Supermarket cultured buttermilk sits near pH 4.5 and brings its own buffering casein and lactose along with its acid; 200 ml into 1 L of near-boiling milk gives a flocculent partial break, not the clean separation the recipe's step 1 assumes. Traditional chhena set from sour whey runs at roughly half to equal the milk's volume. Raised to 400–600 ml of *well-soured* buttermilk or saved sour whey, with instructions to sour it 12–24 h at room temperature first, and a 5-minute off-heat rest added before straining (which materially improves the yield on a soft acid set).

**K3. The lemon-juice fallback changes the dish and was presented as a neutral top-up.** Sour-whey and buttermilk sets give a softer, springier curd; lemon and vinegar give a firmer, more granular one. Since the curd is then kneaded, shaped, and fried, this is the difference between the recipe working and the recipe being paneer. Reframed as a fallback with a stated cost.

Also restored in the translation: `शालितण्डुलपिष्टेन` — the flour of `śāli` rice, the fine white rice whose eight varieties open the chapter at 1345–48, so plain white rice flour and specifically not glutinous or parboiled *idli* rice flour; `परिपेषितम्` (thoroughly ground); `नानाकारैः सुघटितं` (well formed into various shapes — which is why the method now says "various forms rather than one"); `पक्वशर्करया सिक्तम्` (drenched with *cooked* sugar); `तन्मध्ये` (into the middle of it); and `तक्र` as a term rather than as generic "buttermilk".

### Judgement calls

**K-J1. `पक्वशर्करा` is defined by the next passage, and the soft stage is the right one.** 1413 gives the stages; a soaked sweet wants `मृदु पाक`, fluid. The existing 5–7 minute syrup already lands there, so nothing changed in the method — but the note now cites the cross-reference, because a reader who takes "cooked sugar" to mean hard-stage will produce candy-shelled rocks.

**K-J2. 50 g rice flour to ~200 g curd (20%) is firm.** The text gives no proportion. Kept, with a note that half as much makes something closer to a chhena sweet and correspondingly more fragile in the pan. The intro's "falls between a fried paneer sweet and a rice-flour fritter" is an accurate description of 20%.

**K-J3. `सर्पिषा परिपाचितम्` points at deep-frying.** `pari-pac` is all-round cooking. The existing shallow-fry compromise is sensible and I have kept it, but the note now says what the text asks for rather than paraphrasing it as "fry in ghee".

### Metrical scan

12 pādas (1408–1410), **12 clean**.

## 6. Varṣolaka Spiced Milk-Sugar Balls (1411–1416)

The largest translation gap of the five.

### Confirmed

**R1. `साधिके शर्करा भवेत्` (1414b) was dropped, and it is the passage's warning.** `साधिक` = "having something in addition, exceeding" — so at a cooking *beyond* `khara`, it becomes `शर्करा`, sugar grains. This completes a four-stage series that the old translation gave as three:

| Stage | Text | Reading |
|---|---|---|
| `मृदु` soft | `द्रुता पेया` | fluid; a *peya*, a drinkable |
| `मध्यम` middle | `मधुसन्निभा` | resembling honey |
| `खर` hard | `कठिना भक्ष्या` | firm; a *bhakṣya*, a morsel |
| `साधिक` beyond | `शर्करा भवेत्` | it grains back into loose sugar |

**The chapter states the same terminal point independently at 1567**, for reduced milk: `षड्भागं पिण्डतामेति शर्करा स्यादथाष्टमे` — at a sixth it comes to a mass, at an eighth it becomes `śarkarā`. Same four-member shape, same first member (`पाने` / `पेया`), same last. That parallel is what makes this a confirmed reading rather than a guess about `साधिक`. And it explains `खरपाकावधिः` at 1416a — "up to the **limit** of the hard cooking" is a stop instruction, not a target to sail through.

**R2. A whole sub-recipe (1414c–1415b) is missing.** `खरपाके सुसिद्धायाः सितायाः सम्पुटे [†] । नानारूपाणि कुर्वीत खण्डपाकविशारदः` — out of `sitā` well perfected at the hard cooking, in a `सम्पुट`, the expert in `khaṇḍa`-cooking makes various forms. `सम्पुट` is a closed two-part vessel or the two hands cupped together, so a mould — and this author demonstrably knows paired moulds, having used them for the iḍerikās at 1399 (`वैटिकासु … गर्भाभिरन्याभिः पिधाय`). Moulded sugar figures are a living Karnataka tradition (`sakkare acchu`). The `तु` at 1415c is what separates this product from the varṣolaka; the old translation dropped the `तु` and merged them into "at the hard stage it becomes a firm sweet. Mix an equal quantity of milk with purified sugar…". Restored in the translation and described in the notes; not reconstructed as a method, since it needs neither milk nor spice.

**R3. The sugar-grade vocabulary was collapsed.** The passage runs `शर्करा` (raw, 1411c, 1414b) → clarified with milk → strained → `सिता` (refined, 1414c, 1415b) and its cook is a `खण्डपाकविशारद`, `खaṇḍa` being a third grade in the same series. `सिता` appears in the chapter *only* in these two verses. The old translation gave "sugar" and "purified sugar" and dropped `खण्डपाकविशारदः` entirely. Also dropped: `तेन मुञ्चेन्मलं` — the *mechanism*, that the milk carries the impurity up as it coagulates, which is the only reason a cook would add milk to syrup.

**R4. "Equal quantity" was double-counting the clarifying milk.** `क्षीरं संमिश्रयेत्समम्` (1415d) governs the milk mixed into the `शोधिता सिता`. The milk thrown in at half-cooking (1412a) is a separate, prior, unquantified amount. The draft split 250 ml into 50 + 200 and called the total "equal" to 250 g of sugar. Now 250 ml for the body plus 50 ml for clarifying, and the note says which verse each comes from.

**R5. `सकं वापि यथारुचि` was dropped — an alternative, and a "as you please".** See the Unresolved section. The old translation had "At half-cooking add milk to separate the scum", losing both the second option and `यथारुचि`.

Also restored: `निर्मलेन वस्त्रेण` (a *spotless* cloth) and `मुहुर्मुहुः` as an instruction the method now follows ("Repeat the straining"); `भक्ष्यं मृष्टं मनोहरम्` at 1411b; `तीक्ष्ण` kept transliterated rather than paraphrased as "pungent spice", cross-referenced to the prior audit's reading (a named spice in three closed lists, probably black pepper).

### Judgement calls

**R-J1. 116–118°C → 120–124°C.** `कठिना` is a hard sweet, and 116–118°C with 50% milk gives a fudge that will not be firm and may not hold a ball. My reasoning on the ceiling: a *pourable-and-mouldable* pure-sugar product (R2, the `sampuṭa` figures) sits around 118–122°C, and past that a stirred saturated syrup seizes into loose grains before you can shape it — which is exactly `साधिके शर्करा भवेत्`. Milk solids soften and delay the set, so the milk version wants the same or a little more. 120–124°C, described by behaviour as well as temperature. Mapping `khara` onto a number is inferential; this is the flaggable part of the change.

**R-J2. Beat it off the heat, and stop rather than reduce further.** Continuous stirring is unavoidable here or the milk catches, but it also promotes crystallization, so the honest description of the finished texture is a fine crystalline one — a firm burfi rather than a toffee. Both the stop instruction and the off-heat beating come out of `खरपाकावधि` + 1414b rather than from an explicit direction, so they are inferences, but they are inferences from the text rather than from modern practice.

**R-J3. Cooking time and the copper pot.** 30–45 minutes of stirring for a 250 g batch was unstated; added. `ताम्रपात्रे` was in the translation but "a heavy saucepan" in the method — same defect as the Glaze's earthen pot. Now "heavy — copper if you have it", with a note on why (even heat over a long milk reduction). Also added, explicitly labelled modern: reducing the milk to a third separately first, which cuts the stirring substantially.

### Unresolved

**R-U1. `सकं` (1412b).** `क्षिपेद्दुग्धं सकं वापि यथारुचि` — "throw in milk, or else `saka`, as preferred". The pāda scans at exactly 8, so this is not obviously a transcription slip, and it is a hapax in the chapter. Candidates, none of which I would put weight on:

- A corruption of `तक्रं` — metrically identical (two syllables), a real traditional sugar clarifier, and used three verses earlier at 1408d. Attractive, and pure speculation.
- A bahuvrīhi on `क` (attested lexically for "water"), giving "milk, or else [milk] with water" — i.e. diluted milk. Grammatical but leans on a poetic rarity.
- A Deccani or Kannada vernacular term. This chapter is full of them (`iḍerikā`, `ghārikā`, `vaṭaka`, `kīsāra`, `sohalā`, `pāhalikā`, `ghosaka`, `kaṭakarṇa`, `varṣolaka` itself), so a vernacular clarifier would not be surprising.

Kept transliterated and asterisked in the translation with `[the second term is unclear]`. **Worth checking against Shrigondekar.**

Also noted rather than resolved: `सा तु शर्करा कथिता सती` (1412d). I have translated `सती` as `सitā` — "that sugar is then declared *sitā*, refined" — because `सिता` is the term for the refined product in the two following verses and the passage is plainly describing the `śarkarā` → `sitā` transition. The alternative needs no emendation at all: `सती` as the adjective "true, genuine", giving "that sugar is called true sugar". Either way the *point* is the grade change, which the old translation lost entirely; the choice between them only affects whether the word `sitā` appears at 1412d or first at 1414c. Flagging because I have printed a reading that differs from the transcribed letters.

### Metrical scan

24 pādas (1411–1416), **22 clean, 2 defective**:

- **1414d `सितायाः सम्पुटे` — 6 syllables.** Two short. Something has dropped out, and it has dropped out precisely at the object or verb of the moulding step (R2), which is the reason that sub-recipe is easy to read past. Bracketed in the translation as `[the line is defective here]`.
- **1416b `तावत्तापयेत्पुनः` — 7 syllables.** One short. `तावत्संतापयेत्पुनः` would restore 8 with a natural verb, and `तावत्` correlating with 1416a's `यावत्` is required either way, so the sense is not in doubt. **Not emended.**

**Recommendation: collate 1411–1416 against Shrigondekar's GOS edition before publishing.** Both defects are short pādas — consistent with syllables lost in transcription rather than a corrupt exemplar — and 1414d in particular is likely to yield the missing moulding instruction.

### Whole-batch scan

| Passage | Pādas | Clean | Defective |
|---|---|---|---|
| 1401–1403 (Ghārikā) | 12 | 12 | — |
| 1403–1404 (Vaṭikās) | 8 | 8 | — |
| 1405–1407 (Spiced Sour) | 12 | 12 | — |
| 1408–1410 (Kṣīra-Prakāra) | 12 | 12 | — |
| 1411–1416 (Varṣolaka) | 24 | 22 | 1414d (6), 1416b (7) |
| **Unique verses 1401–1416** | **64** | **62** | **2** |

For comparison: 1442–48 scored 28/28, 1449–52 16/16, 1427–35 28/36. This batch sits with the clean passages.

---

## 7. Implications for the iḍerikā parent recipe (agent 2's file)

`iderika-fermented-black-gram-cakes.md` looks sound to me on the points that bear on my three downstream recipes. Three things to pass on:

1. **The anaphora is confirmed and the parent should probably say so.** `तस्यैव माषपिष्टस्य` (1401c) picks up `आम्लीभूतं माषपिष्टं` (1399a), so the batter that goes into the fried ghārikās and both *vaṭaka* dishes is the *fermented* one. The iḍerikā file's own translation renders this correctly ("When the batter has soured…"). Nothing to change; but the parent is the natural place to note that this same batter has four children.
2. **The batter must stay stiff enough to punch a hole.** A ghārikā is shaped by hand and holed with a fingertip. That argues for the lower end of the iḍerikā file's `120–180 ml water` and against the upper end of its `8–16 hours` ferment, at least for the portion destined for frying. I have put the consequence in the ghārikā notes ("if a fermented batch has slackened too much to hold a punched hole, it was ground too wet or left too long") rather than changing the parent's numbers.
3. **Batch arithmetic.** 250 g dry urad gives roughly 600–650 g of batter. I have set that as about eight ghārikās, and both *vaṭaka* recipes call for eight cakes, so the numbers now close. If agent 2 changes the parent's dal quantity, my "makes about 8" needs revisiting.

One thing I could not check without editing the parent: `सम्भार` at 1398b is rendered "seasonings" and the reconstruction puts salt, asafoetida, cumin, and pepper in the batter *before* fermenting. Salt at 1 tsp per 250 g dal is ~0.4%, low enough not to stall a wild ferment, so that is fine. But `हिङ्गुसर्पिर्भ्यां जीरकेण च धूपयेत्` at 1400d already accounts for the asafoetida and cumin as a *finishing* temper, so putting half of each into the batter as well may be doubling an ingredient that the text mentions once. Worth agent 2's eye; I have not acted on it.

## 8. Knock-ons into other agents' files

Flagged, not touched.

- **`majjika-sweet-spiced-buttermilk.md` (published, 1573).** Translation reads "Churned curd or buttermilk mixed with sugar…" — the same "or buttermilk" invention as V2, and here it matters more, because 1573's `मथितं` is the same waterless preparation and the recipe's ingredient line is "500 ml fresh buttermilk or takra", i.e. the wrong one of the three grades the chapter defines at 1571. The intro says Damon substituted thinned Greek yoghurt, which is the right instinct; the frontmatter should say `mathita` and the note should point at 1571 the way `spiced-takra.md` already does. **This is a published page.**
- **`spiced-takra.md` (published).** Correct, and now the load-bearing internal witness for V1. No change needed; worth knowing that two draft pages now cite it.
- **Reciprocal `related` links.** I added outward links from all five of my files. The targets that are not mine — `iderika-fermented-black-gram-cakes` and `spiced-takra` — have no back-links to my recipes. Someone should sweep `related` chapter-wide once the parallel audits land; the Śuṇṭhaka audit made the same observation.

## 9. Verse-boundary audit (answering batch 1's finding)

Batch 1 found boundary half-verses assigned to the wrong recipe across 1350–1385. **The same failure mode is present in my stretch, four times — but not at the two boundaries the coordinator asked about.** 1401 and 1403 are both divided correctly. The breakages are all downstream of 1404.

### The two boundaries asked about are clean

**Verse 1401** — `सुशीताः धवलाः श्लक्ष्णा एता इडेरिका वराः । तस्यैव माषपिष्टस्य गोलकान् विस्तृतान् घनान्`

| Half-verse | Content | Belongs to | Translated in |
|---|---|---|---|
| 1401ab | "These excellent *iḍerikās* are well-cooled, white, and smooth" — the naming/closing line | iḍerikā, 1397–1401 | iḍerikā only ✓ |
| 1401cd | "Of that very same black-gram batter, balls, spread broad and thick" — the opening instruction | ghārikā, 1401–1403 | ghārikā only ✓ |

Correct before my edits and after. Verse 1401 is quoted **in full in both files**, and each translates its own half — which is the design working as intended.

**Verse 1403** — `घारिकासंज्ञया ख्याता भक्ष्येषु सुमनोहराः । निच्छिद्रा घारिकाः पक्वा मथिते शर्करायुते`

| Half-verse | Content | Belongs to | Translated in |
|---|---|---|---|
| 1403ab | "Renowned by the name *ghārikā*, most delightful of *bhakṣyas*" — the naming/closing line | ghārikā, 1401–1403 | ghārikā only ✓ |
| 1403cd | "*Ghārikās* cooked without holes, into *mathita* joined with sugar" — opens the next dish, and is syntactically incomplete without 1404ab | vaṭikās, 1403–1404 | vaṭikās only ✓ |

Also correct before and after, and also quoted in full in both files.

**So the parent dependency is not mis-stated.** The batter's defining instructions are wholly inside 1397cd–1399a — soak, deskin, grind, mix with *sambhāra*, knead, leave for the day, then the soured batter into the moulds — and none of them sits on a boundary. The only boundary half-verse that touches the batter is 1401cd, the *pointer* (`तस्यैव माषपिष्टस्य`), and it is in my file where it belongs. The one substantive thing I did change is that the pointer's referent is now explicit: `[the soured batter of the *iḍerikās*]`, since `तस्यैव` picks up `आम्लीभूतं माषपिष्टं` at 1399a and the reconstruction depended on that silently.

### Where it does break, and why

| Boundary | Content belongs to | Quoted in | Was translated in | Now |
|---|---|---|---|---|
| 1401 | — | both files | correct | unchanged ✓ |
| 1403 | — | both files | correct | unchanged ✓ |
| **1405ab** | arguably either (see below) | spiced sour **only** | vaṭikās — **which does not quote it** | translated in spiced sour; cross-referenced in vaṭikās' notes |
| **1408ab** | spiced sour (the asafoetida finish; `ते` is anaphoric to 1407c's *vaṭakas*) | kṣīra-prakāra **only** | spiced sour — **which does not quote it** | translated in kṣīra-prakāra; `[1408 continues: …]` in spiced sour |
| **1411ab** | kṣīra-prakāra (its own name, `क्षीरप्रकारनामेदं भक्ष्यं`) | varṣolaka **only** | **neither file — a total gap** | translated in varṣolaka; `[1411 names it: …]` in kṣīra-prakāra |
| **1417ab** | varṣolaka (its own name and final step, `गोलकाः कार्या नाम्ना वर्षोलकास्तु ते`) | the 1417–1426 meat-classification entry **only**, which does not translate it either | varṣolaka — **which does not quote it** | `[1417 continues: …]` in varṣolaka |

**The structural cause is verifiable and mechanical: the ranges stop overlapping after 1404.** 1397–1401, 1401–1403, and 1403–1404 each share a full verse with their neighbour, and every boundary in that run is handled correctly. From 1403–1404 onward the ranges are disjoint — 1405–1407, 1408–1410, 1411–1416, 1417–1426 — and every boundary in *that* run is broken. Where a shared verse is quoted at both ends, each file translates its own half and nothing is lost. Where a boundary half-verse is quoted in only one file, its English ends up in the file that does not quote it, or in no file at all. Both symptoms batch 1 reported fall out of the same cause.

Note that 1417ab is the worst of the four: it is the *varṣolaka's own naming line*, and it is quoted only inside the meat-classification entry, whose English begins "The text characterizes the meats" and never renders it. A recipe named *Varṣolaka* had its name in no verse it quotes and in no translation of a verse that quotes it.

**1405ab is the one where content is genuinely arguable**, so I want to be explicit that I did not just apply a rule. `यत्र यत्र द्रवद्रव्ये तन्नाम्ना वटकास्तु ते` — "in whatever liquid substance they are put, the *vaṭakas* take their name from it" — generalizes what 1403cd–1404 just demonstrated twice, so it reads as a closing. But the very next pāda introduces a *new* liquid, so it reads just as well as a bridge that licenses the new dish's name before naming it. Given that it is quoted in the spiced sour file and not in the vaṭikās file, and that the bridge reading is at least as good, translating it in spiced sour is the better assignment on content as well as on quoting. It survives in the vaṭikās notes with its transliteration, because it is the rule that explains why that recipe has two names.

### My resolution, and the cleaner central fix

I resolved it as: **translate everything the file quotes; carry anything outside the quoted range as a `[bracketed]` continuation keyed to its verse number.** That keeps the English answerable to the Devanagari shown on the same page, and it loses no content — both stranded dish names (`kṣīraprakāra` at 1411a, `varṣolaka` at 1417a) survive as brackets.

**But the cleaner fix is to extend the ranges so every neighbour shares a full verse, the way 1397–1404 already does**, and that requires editing `original` fields, which I am forbidden to do. Recommended for central reconciliation:

| File | Current `source` | Should be |
|---|---|---|
| `spiced-sour-vatakas.md` | 3.13.1405–1407 | **3.13.1405–1408** (picks up its own asafoetida finish) |
| `ksira-prakara-milk-curd-sweets.md` | 3.13.1408–1410 | **3.13.1408–1411** (picks up its own name) |
| `varsolaka-spiced-milk-sugar-balls.md` | 3.13.1411–1416 | **3.13.1411–1417** (picks up its own name and its last step) |

`vatakas-in-sweet-curd-or-kanjika.md` needs no change if 1405ab is read as the bridge, which is where I have landed. If Damon prefers to read it as the closing of 1403–1404, that file wants 3.13.1403–1405 instead.

If the ranges are extended, the brackets I added become redundant and should be folded into plain translation — three small edits, all in `translation` fields. **This is a house-convention decision affecting every Mānasollāsa file, not just mine**, and it interacts with whatever batch 1 has done at its own boundaries, so it wants one hand rather than ten.

## 10. Files edited

All five, and nothing else. `original` fields verified byte-identical to `HEAD` in all five; frontmatter verified to parse under `yaml.safe_load`; all `related` slugs verified to resolve to existing files.

- `src/content/recipes/gharika-black-gram-rings.md` — translation, intro, ingredients, method (2 steps), notes (4 added), `related`.
- `src/content/recipes/vatakas-in-sweet-curd-or-kanjika.md` — translation, intro, ingredients (water removed), method (2 steps), notes (4 added), `related`.
- `src/content/recipes/spiced-sour-vatakas.md` — translation, intro, ingredients (kāñjika replaces water + vinegar; coriander seed; ghee), method (all 5 steps), notes (rewritten, 7 items), `related`.
- `src/content/recipes/ksira-prakara-milk-curd-sweets.md` — translation, intro, ingredients (buttermilk quantity), method (2 steps), notes (rewritten, 8 items), `related`.
- `src/content/recipes/varsolaka-spiced-milk-sugar-balls.md` — translation (substantially expanded), intro, ingredients (milk split), method (3 steps), notes (rewritten, 8 items), `related`.

Not edited, as instructed: `src/data/sources/manasollasa.ts` (will need re-syncing from these five files afterwards — all five translations changed), `iderika-fermented-black-gram-cakes.md`, and everything else in the collection.

One house-style call I did not make unilaterally: the site uses **"mould"** five times and "mold" zero times, so I wrote "mould" in the Varṣolaka rather than splitting the convention mid-chapter, notwithstanding the US-spelling rule. Worth a chapter-wide normalization pass either way.
