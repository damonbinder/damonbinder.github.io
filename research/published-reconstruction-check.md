# Published Mānasollāsa recipes — does the reconstruction match the Sanskrit?

*Created 2026-07-25 17:52.*

Scope: the 14 published Mānasollāsa recipes in `src/content/recipes/`. Only the ingredient list and the numbered method were checked, against the Devanagari `original` on each page plus the surrounding verses in `src/data/sources/manasollasa.ts` (needed wherever a recipe's verses say *pūrvavat*, "as before"). Intros, notes, and translation wording are out of scope. No files were edited.

## TL;DR

**Six of the 14 have a divergence I'd call real, five are clean, and three are clean-but-worth-a-line.** After the known Puryala onion, the most consequential finding is a technique substitution shared by two published recipes: 1439ab and 1441 both have the curd *dhūpita* — perfumed with asafoetida **smoke** — and both cakkalikā recipes whisk the raw powder into the dressing instead, even though `spiced-takra` (same verb, verse 1572) blooms it in ghee. The crispest single fix is `majjika-sweet-spiced-buttermilk`, whose base is offered as "buttermilk **or takra**" when 1573 says *mathita* and 1571 has just defined *takra* as the quarter-water dilution of it — striking two words resolves it. All three of the suspected items resolved: takra's dilution is **exactly right** (125 ml : 500 ml = a quarter), `sauced-bhaditraka` **does fry** rather than baste, and the kidneys at 1372a are **genuinely optional** in the text, so their absence is not a finding. Confidence is high on the onion, the *dhūpita* cluster, and the majjikā base; medium on the camphor-lump piece size, the *svinna* śuṇṭhaka, and the front-loaded soup water.

## Verdicts

| Recipe | Verdict | One line |
|---|---|---|
| `puryala-covered-meat` | **divergence** | Method step 6 fries an onion that is in neither the Sanskrit nor its own ingredient list; drumsticks also contradict *sthūlāmalaka*-sized pieces of *śuddha māṃsa*. |
| `pork-cakkalikas-mustard-citron-curd` | **divergence** | Raw asafoetida whisked into the yoghurt where 1439ab has the curd *dhūpite hiṅgunā*, perfumed with asafoetida smoke. |
| `pork-cakkalikas-sour-citron` | **divergence** | Same: *hiṅgunā dhūpitāḥ* (1441) is a smoking, the recipe mixes the powder into the dressing. |
| `majjika-sweet-spiced-buttermilk` | **divergence** | Base given as "buttermilk or takra"; 1573 specifies *mathita*, which 1571 defines as *nirjalaṃ*, waterless. |
| `bhaditraka-skewers` | **divergence** | 4 cm pieces against *ghanasārapramāṇāni*, the measure of a camphor lump — larger than any comparison the chapter uses. |
| `basic-split-pulse-soup` | **divergence** | All 900 ml of water in at the start where 1361 charges water *samamānataḥ*, equal to the pulse, and 1363 tops up; salt runs about half the *viṃśatyaṃśa*. |
| `pork-cakkalikas-sweet-curd` | divergence (medium confidence) | Roast pork where 1436 asks for *svinnānāṃ śuṇṭhakānāṃ*, the sour-sweated śuṇṭhaka of 1434, not the ember-roasted one of 1433. |
| `mung-soup-with-ginger-and-eggplant` | optional-omitted | Kidneys and fat omitted, but 1371–72 marks them optional; water front-loaded as above; the dried ginger sits on a half-verse outside the quoted range. |
| `tamarind-fried-fish` | clean (declared) | The oil-and-salt rub and turmeric wash are gerundive-obligatory at 1527–28 and marked optional here — but the intro declares it. |
| `spiced-takra` | clean | Dilution ratio is exactly the *takra* quarter; the ghee is an addition, but a declared one implementing *dhūpita*. |
| `sweet-pulse-purika` | clean | Every ingredient named at 1388cd–1390; boil-grind-stuff-shallow-fry order intact. |
| `pork-cakkalikas-fried-sweet` | clean | 1439cd is four words long and the recipe matches all of them. |
| `sauced-bhaditraka` | clean | *Paribhajayet* at 1468 is a frying and the method fries. |
| `sour-tender-leaf-salad` | clean | Tamarind / lime / curd as alternatives, plus salt — exactly 1553. |

---

## 1. `puryala-covered-meat` — an onion in the method, in neither the text nor the ingredient list

**What the recipe does.** Step 6: "Heat the ghee in the emptied pot. Fry the **onion**, garlic, and asafoetida until fragrant."

**What the Sanskrit says.** 1460: `सुतप्ते च घृते पश्चाल्लशुनं हिङ्गुना सह । प्रक्षिप्य…` — *sutapte ca ghṛte paścāl laśunaṃ hiṅgunā saha prakṣipya*, "when the ghee is thoroughly hot, having thrown **garlic** into it together with asafoetida". Two aromatics, no third. *Palāṇḍu*, onion, does occur in this chapter — 1451 `पलाण्डुशकलान्`, 1454 `पलाण्ड्वार्द्रकसम्भूतान्` — so its absence from 1457–1461 is a real absence, not a gap in the vocabulary. The onion is also absent from the recipe's own ingredient list, so the method cannot be executed as written.

**Category.** Ingredient the Sanskrit does not name.

**Smallest edit.** Delete "the onion," from step 6.

**Secondary, medium confidence.** 1457 specifies `स्थूलामलकसङ्काशान् शुद्धमांसस्य खण्डकान्` — *sthūlāmalakasaṅkāśān śuddhamāṃsasya khaṇḍakān*, "pieces of clean meat resembling large emblic myrobalans", i.e. boneless flesh cut to roughly 3 cm. The recipe cooks whole bone-in drumsticks. The intro declares the chicken-for-meat adaptation, but not the shift from cut pieces to whole limbs, and the two are separable — boneless thigh in 3 cm pieces would satisfy both. Smallest edit: a clause in the intro, or switch the cut.

**Also noted, not reported as a divergence.** 1458 has `तत्समान् शुण्ठकान् क्षिप्त्वा`, "having thrown in *śuṇṭhakas* of that same size", into the soured liquid. If *śuṇṭhaka* is being used in its technical sense from 1427–1435 (roast pork strips), the dish has a second meat the recipe has no counterpart for; if it just means "lumps of that size", the recipe is fine. I can't settle it from the text and am not reporting it.

## 2. The *dhūpita* cluster — the text smokes the asafoetida, two recipes stir it in

**What the recipes do.** `pork-cakkalikas-mustard-citron-curd` step 2: "Whisk the yoghurt with the mustard, citron pulp, and **asafoetida**." `pork-cakkalikas-sour-citron` step 3: "Mix the citron, ginger, mustard, pepper, rock salt, and **asafoetida**." Both add ¼ tsp / a pinch of raw powder.

**What the Sanskrit says.** 1439ab: `धूपिते हिङ्गुना सम्यक् दध्नि चक्कलिकाः क्षिपेत्` — *dhūpite hiṅgunā samyak dadhni*, "into curd thoroughly *dhūpita* with asafoetida". 1441: `हिङ्गुना धूपिताः साम्ला हृद्याश्चक्कलिका वराः` — *hiṅgunā dhūpitāḥ*. *Dhūpita* is from *dhūpa*, incense-smoke, and this chapter uses it as a real operation with a named repertoire: 1448 lists `धूपयेद्धिङ्गुना वापि नखधूपेन वा पुनः । धूपेन जीरकस्यापि शशिधूपेन` — asafoetida, *nakhadhūpa* (onycha), cumin smoke, *śaśidhūpa*. A vessel held over smouldering asafoetida is a different thing from powder whisked into cold yoghurt, in strength and in where the aroma sits.

**Category.** Technique substituted — stirring an aromatic in where the text smokes it.

**Note the internal inconsistency.** `spiced-takra` has the same verb at 1572 (`धूपितं हिङ्गुजीरकैः`) and handles it by blooming cumin and asafoetida in ghee, with a note explaining exactly that reasoning. So the site already has a house answer to *dhūpita*; the two cakkalikās don't use it.

**Smallest edit.** Bloom the asafoetida in a little hot ghee or oil and cool it before whisking into the curd, as `spiced-takra` already does — or add the pinch to a hot pan for a few seconds. Either keeps the ingredient list unchanged except for the fat.

**Camphor, lower confidence, not counted as a divergence.** 1573 has `कर्पूरधूपितं` for majjikā and `majjika` adds a speck of camphor directly; but 1437 uses `कर्पूरवासिते` — *vāsita*, merely "scented" — for the same substance in the same construction, so the text itself is loose about camphor. I would not change anything on that basis.

## 3. `majjika-sweet-spiced-buttermilk` — the base is the diluted product the text distinguishes

**What the recipe does.** Ingredient 1: "500 ml fresh buttermilk **or takra**".

**What the Sanskrit says.** 1573 opens `मथितं शर्करायुक्तम्` — *mathitaṃ śarkarāyuktam*, "*mathita* joined with sugar". Two verses earlier, 1571–72 define the three products by dilution: `निर्जलं मथितं प्रोक्तम्` (*nirjalaṃ mathitaṃ*, the waterless one is *mathita*), *udaśvit* is `जलार्धकम्` (half water), and `पादाम्बु तक्रम्` (*pādāmbu takram*, that with a quarter part water is *takra*). Majjikā is specified on the undiluted base, and *takra* is by definition not it — the definition is in the immediately preceding verse, so this is the text drawing the contrast itself, not a fine distinction imported from elsewhere.

**Category.** Ratio the text specifies and the recipe contradicts.

**Smallest edit.** Strike "or takra". (Buttermilk itself is a defensible stand-in for *mathita* — churned curd with the butter taken off — and the intro already declares the thinned-yoghurt version.)

## 4. `bhaditraka-skewers` — 4 cm pieces against a camphor-lump measure

**What the recipe does.** "750 g lamb loin, goat loin, or pork tenderloin, cut into **4 cm** pieces".

**What the Sanskrit says.** 1462: `घनसारप्रमाणानि कृत्वा खण्डानि` — *ghanasārapramāṇāni kṛtvā khaṇḍāni*, "having made pieces of the measure of *ghanasāra*", camphor (manuscript A reads *karpūra* outright, per the collation note). This is the recipe's only size specification. Placed on the chapter's own scale of size comparisons, it belongs in the small register:

| Verse | Comparison | Rough size |
|---|---|---|
| 1449 | `चणकस्य समान्` chickpea | ~1 cm |
| 1453 | `बदराकारकान्` jujube | ~1.5–2 cm |
| 1473 | `पूगीफलप्रमाणानि` areca nut | ~2–2.5 cm |
| 1457 | `स्थूलामलक` large emblic | ~3–4 cm |

4 cm sits at or above the chapter's **largest** comparison, while a camphor lump is nowhere near it. Confidence is medium-high that 4 cm is too big and only medium on any replacement number, since the absolute size of a camphor lump isn't fixed; roughly 2 cm would be safe.

**Category.** Quantity the text specifies and the recipe contradicts.

**Smallest edit.** Change "4 cm pieces" to about 2 cm.

**Secondary, low confidence — not a recommendation.** 1463 reads `हिङ्ग्वार्द्रकरसंयुक्तं सैन्धवेन च पेषयेत्` — *peṣayet*, "he should pound [the meat, neuter singular agreeing with *māṃsaṃ* at 1462] combined with the juices of asafoetida and fresh ginger, together with rock salt". The recipe rubs the marinade on and refrigerates 2–4 hours. But *peṣayet* right after the meat has been pierced full of holes can also be read as working the paste into it, which is what the recipe does, so I would not change this.

**Not a finding.** The recipe omits `मूलकैः` (*mūlakaiḥ*) entirely, but the collation note records that no attested sense of *mūlaka* supplies the piercing tool the syntax requires, and that the reading is probably corrupt. Nothing to act on.

## 5. `basic-split-pulse-soup` — the water is front-loaded, and the salt is about half

**What the recipe does.** 250 g pulse, 900 ml water, all combined in step 2, with hot water added later only if it thickens too far. 1 tsp fine rock salt.

**What the Sanskrit says, water.** 1361: `स्थाल्यां शीतोदकं क्षिप्त्वा विदलैः सममानतः` — *śītodakaṃ kṣiptvā vidalaiḥ samamānataḥ*, "having put cold water into the pot, **equal in measure to the split pulse**". Topping up is then the explicit mechanism, 1363: `मुहुर्मुहुःक्षिपेत्तोयं यावत्पाकस्य पूर्णता`, "again and again he should add water, until the cooking is complete". Working: 250 g of split pulse is about 300 ml by volume (bulk density ~0.85 g/ml), so the specified opening charge is ~300 ml. The recipe opens with 900 ml, three times that. The finished consistency is not specified anywhere, so the endpoint isn't contradicted — only the opening ratio and the incremental method are.

**What the Sanskrit says, salt.** 1364: `सुश्लक्ष्णं सैन्धवं कृत्वा विंशत्यंशेन निक्षिपेत्` — *viṃśatyaṃśena nikṣipet*, "he should put it in at a twentieth part". Working: a twentieth of 250 g of pulse is 12.5 g; 1 tsp of fine rock salt is about 5–6 g, so the recipe is at roughly 1/45 of the pulse, about half the text's figure. In the finished dish 12.5 g against ~1.15 kg of pulse-plus-water is 1.1% salt, which is a normal well-seasoned dal, so the text's number is not absurd. **Confidence: medium-low**, because *viṃśatyaṃśena* names no referent — a twentieth of the pulse is the natural reading but not the only one — and the recipe says "plus more to taste".

**Category.** Ratios the text specifies.

**Smallest edit.** In step 2 combine the pulse with 300 ml of the water, and move the remaining 600 ml into step 3 as the top-up. Optionally raise the salt to 2 tsp.

**Checked and clean otherwise.** All four offered pulses (mung, *masūra*, *caṇaka*, *māṣa*) are among the seven of 1357cd–1358, and none of them is the *niṣpāva* / dark-pigeon-pea exception that 1365–66 excludes from asafoetida and turmeric. Asafoetida, turmeric, and rock salt are all named.

## 6. `pork-cakkalikas-sweet-curd` — roast pork where the text asks for the sweated śuṇṭhaka

**What the recipe does.** "500 g cooked skinless **roast** pork belly, chilled", linked to `roast-pork-sunthaka`.

**What the Sanskrit says.** 1436 opens `स्विन्नानां शुण्ठकानां च मेदोभागं प्रगृह्य` — *svinnānāṃ śuṇṭhakānāṃ ca medobhāgaṃ pragṛhya*, "taking the fatty portion of the śuṇṭhakas **that have been sweated**". 1433–1435 give three śuṇṭhaka finishes: skewered and roasted over embers until the fat runs (1433), `अथवाम्लपरिस्विन्नान्` — *amlaparisvinnān*, "sweated through in sour liquids" (1434) — and split, salted, fried in ember heaps (1435). *Svinna* at 1436 picks the middle one. The three other cakkalikās are not marked this way: 1438 says only `मांसमेदोमयान् शुण्ठान्`, meat-and-fat śuṇṭhas, so roast pork is unobjectionable there.

**Category.** Technique substituted — roasting where the text sweats.

**Confidence: medium.** *Svinna* could be read loosely as just "cooked", and 1434 itself says the sweated pieces are then "prepared as before", which may loop back to the roasting. But 1434 exists precisely to name a non-roasted variant, and 1436 reaches for its participle.

**Smallest edit.** Either braise the pork belly in a sour liquid rather than roast it, or leave the reconstruction alone and say in the intro that the text specifies the sour-sweated śuṇṭhaka here.

## 7. `mung-soup-with-ginger-and-eggplant` — optional-omitted only, plus one loose end

**Kidneys: confirmed optional, so not a finding.** 1371cd–1372a: `केचिदिच्छन्ति रुच्यर्थं मेषमांसस्य खण्डकान् । वृक्कान्वापि द्विधा भिन्नान्मेदसः शकलानि वा` — *kecid icchanti rucyarthaṃ*, "**some**, for the sake of relish, want" pieces of sheep's flesh, **or** kidneys split in two, **or** slices of fat. *Kecit* plus *vāpi…vā* makes all three alternatives within an explicitly optional clause. The recipe carries the first as "Optional: 250 g boneless lamb" and omits kidneys and fat. **Optional-omitted, weak.** Smallest edit if wanted: add "or lamb kidneys, halved" to that line.

**Water, same as §5.** 1367cd: `प्रक्षालितान्वरान्मुद्गान् समतोये विनिक्षिपेत्` — *samatoye*, "into an equal measure of water"; 1371ab `पुनः पुनः क्षिपेत्तोयं स्तोकं स्तोकं`, added "a little at a time". 250 g of mung is ~295 ml; the recipe opens with 750 ml, 2.5 times the specified charge, and holds back only 150 ml.

**Loose end, low importance.** The ingredient list has "½ tsp ground dried ginger" and step 5 adds it off the heat. That is right — but it rests on 1373a, `उत्तार्य नागरं चूर्णं क्षिप्त्वा`, which the collation explicitly marks as completing this dish, and which falls outside the page's `source: 1367cd–1372`. As trimmed, the page asks for an ingredient its own Sanskrit doesn't contain. Smallest edit: extend the range to 1367cd–1373ab and add that half-verse to `original`/`translation`.

**Not a finding.** The 1 tsp of salt is not named in 1367–1372, but 1367a opens `इतरः पूर्ववत् कार्यः पाकः` — "the other preparation is to be made **as before**" — which carries the rock salt of 1364. Eggplant-versus-lotus-stem-versus-charoli matches the text's `क्षिपेद्वा`. The final order (pepper while cooking, dry ginger off the heat) matches 1372–1373 exactly.

## 8. `tamarind-fried-fish` — text-obligatory steps marked optional, but declared

1527 uses a gerundive of obligation: `मत्स्यानां घर्षणं कार्यं तैलेन लवणेन च` — *gharṣaṇaṃ kāryaṃ*, "the fish **are to be** rubbed with oil and with salt", and 1528 `क्षालयेदुदकैः… हरिद्राकल्कमिश्रितैः` has the turmeric wash as the following step. The recipe marks both, and the tamarind simmer, `*(Optional)*`. The intro says outright that they didn't add much and recommends skipping them, so this is a declared divergence rather than a silent omission and I am not counting it. One sub-point, low confidence: 1530 has `चिञ्चाम्लेन विपाचयेत्`, *vipācayet*, cook the fish pieces **right through** in the tamarind sour, where the recipe simmers 2–4 minutes "just until the exterior firms".

Ingredients are otherwise fully grounded: wheat flour (`गोधूमचूर्णं`), cardamom and pepper and rock salt (`एलामरिचचूर्णेन सैन्धवेन`), turmeric, tamarind, oil, salt. The `धूपयेत्` at 1529 belongs to the other branch of the passage (the *prapaka*-pan method), which the recipe does not follow, so its absence is not an omission.

Separate from the Sanskrit and offered only because it is in an ingredient list: "Neutral oil, for the rub shallow-frying" looks like a mis-merged line.

---

## Clean — checked and passed

- **`spiced-takra`.** The suspected ratio is right. 1572 `पादाम्बु तक्रमुद्दिष्टं` gives *takra* a quarter part water; the recipe is 500 ml buttermilk to 125 ml water, exactly 1:4, and not the *mathita* (`निर्जलं`, none) or *udaśvit* (`जलार्धकम्`, half) figures from 1571. Ginger, cardamom, rock salt, cumin, and asafoetida are all named at 1572. The 1 tsp of ghee is not in the Sanskrit, but it is the declared vehicle for *dhūpita* and the note says so.
- **`sweet-pulse-purika`.** Chickpeas, sugar, cardamom, pepper, asafoetida, rock salt, dough, oil — every one named at 1388cd–1390 (`चणकप्रभृतीन्`, `शर्करा`, `मरिचैलाविचूर्णेन`, `हिङ्गुसैन्धवसंयुक्तान्`, `गोलकवेष्टितान्`, `तैले`). Order (boil, grind, season, wrap, shallow-fry or griddle) follows `उत्क्वाथ्य… पिष्ट्वा… वेष्टितान्… विपचेत्… एवं ताप्यां पचेत्`. Canned chickpeas satisfy *utkvāthya*; `किंचित्प्रसारिते तैले`, "in oil spread a little", is shallow-frying, which is what the recipe does.
- **`pork-cakkalikas-fried-sweet`.** 1439cd is one line — `घृते वा चक्कलीं भृष्ट्वा किरेदेला सशर्कराम्` — and the recipe has exactly ghee, frying, then cardamom with sugar scattered off the heat.
- **`sauced-bhaditraka`.** The suspected point is refuted: 1468 `घृतेन परिभजयेत्` (print; *paribharjayet*, "fry all over") is matched by step 4, "Add the ghee and fry the pieces until lightly browned" — no basting anywhere. Sour liquid, asafoetida, ginger juice, coriander juice, cumin powder, fenugreek powder, and the closing pepper are all named at 1466–1468, and the dry-out-then-fry order is preserved. The 1½ tsp salt is not in these three verses but is carried by `अनेनैव प्रकारेण` back to the rock salt of 1463.
- **`sour-tender-leaf-salad`.** 1553 `अम्लिकाम्लेन मिश्रयेत् । जम्बीराम्लेन दध्ना वा लवणेन च संयुतान्` gives tamarind **or** lime **or** curd, plus salt; the recipe offers precisely those three as one dressing, plus salt. Spinach for the ~30 named plants is declared improvisation in the ingredient line itself.
- **`pork-cakkalikas-mustard-citron-curd`** and **`pork-cakkalikas-sour-citron`** are clean on ingredients — mustard (`राजिका`/`राजि`), citron *kesara*, ginger, pepper, rock salt, curd are all named — and their only finding is the *dhūpita* technique in §2. The sour version's ghee is declared in its notes and is licensed by the `घृते वा` of the preceding 1439cd. I did not treat *kesara* as a divergence: 1440's `मातुलुङ्गस्य… केसरैः` is the citron's own filaments and the recipe's "citron or lemon pulp" is consistent with that reading, which is a separate question from the saffron reading adopted at 1486.
