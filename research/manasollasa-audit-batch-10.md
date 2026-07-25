# Mānasollāsa 3.13.1575–1584 — the chapter's tail, plus the closing material and 1417–26

*Created 2026-07-25 12:08.*

Scope: the five `status: draft` recipes at 3.13.1575, 1576–77, 1578–79, 1580, and 1581–84, all edited. Plus two read-only tasks: the unreviewed closing entries at 1585–97 and 1598–1600 in `src/data/sources/manasollasa.ts`, and the question of what 1417–1426 actually contains. `manasollasa.ts` was not touched.

## Summary

**Four of the five recipes had substantive errors; the fifth (the ghee) had one real one and is otherwise sound.** The single most consequential finding runs across three of the five and reaches into two *published* recipes: **`धूप` in this chapter is literal smoke, and the reconstructions have been treating it as a spice stirred in or bloomed in ghee.** The proof is lexical and internal. The chapter keeps three separate constructions for asafoetida and uses them consistently:

| Construction | Count | What it means |
|---|---|---|
| `हिङ्गुतोय` (asafoetida-water) | 6 | thrown or sprinkled into the food |
| `हिङ्गुधूप` (asafoetida-incense) | 3 | burned; the food is held over or under the smoke |
| `हिङ्गुसर्पिस्` (asafoetida-with-ghee) | 1 | dripped onto the fumigant to make it smoke (1400) |

**Verse 1478 settles it by putting two of them in adjacent pādas** — `मिश्रयित्वा तु तन्मांसं हिङ्गुधूपेन वासयेत् । आमं मांसं च पेषण्यां हिङ्गुतोयेन सिञ्चितम्`, "scent the mixed meat with asafoetida-incense; the raw meat on the grinding stone is sprinkled with asafoetida-water." Same substance, two pādas apart, two different operations. And `manasollasa.ts` already renders that one correctly: "Perfume the mixed meat with asafoetida smoke." So the reading is house practice in the meat section and has simply not reached the drinks.

The dish that suffers most is **`dhupa-kanjika.md`, where the technique is the name of the recipe.** `Dhūpa-kāñjika` is "the smoked *kāñjika*", and what distinguished it from the plain *kāñjika* the king drinks at 1597 was that it had been salted and put under smoke. The reconstruction whisked powdered asafoetida and roasted ground cumin into the liquid, which produces a salted *kāñjika* — the thing 1404 already describes. All five of my rewrites now use the *dhūngar* method (a glowing coal in a cup standing in the liquid, aromatics and a few drops of ghee on the coal, covered) where the text says `धूपित`, with the ghee tempering named as the modern shortcut rather than as the technique.

**Before cooking anything from this batch, Damon should know three things.** First, `dhupa-kanjika.md` was unmakeable as written — it listed the sour ferment as though you could buy it, when the verse presupposes it and describes none of it; the file now carries a full 3–4 day barley ferment with a concrete safety protocol. Second, the *mastu* did not chain: it asked for 500 ml of whey where the *śikhariṇī* yields about 250 ml, now fixed on the child's side, and this is the third instance in the chapter of a child recipe asking for roughly double its parent's output. Third, the *pānaka* was building the drink in the wrong order — the text sweetens and spices the split milk *before* it hits the cloth, which is what makes the finished liquid both clear and cardamom-scented.

Good news on two things the brief flagged as exposure. **The *pānaka* has no fruit-identification problem, because the text names no fruit** — `यस्य कस्य फलस्यापि रसेन`, "with the juice of whatever fruit", is deliberately open, and the only named plant in the passage is `चिञ्चा`, tamarind, which is secure. And **`ताम्बूलपत्र` is securely *Piper betle***, the paan leaf; Someśvara gives *tāmbūla* its own section elsewhere in the work.

On `सौवीर` at 1580: **it is the sour ferment, not the jujube grade** — `निर्मलं`, "clear, free of sediment", is a liquid word, used in this chapter of cloth, water, and a liquid coming clear, and a fruit is not `निर्मल`. I have gone further and made it *barley*, on the Ayurvedic `sandhāna` literature where `sauvīraka` and `tuṣodaka` are the barley sours against rice-based `kāñjika` / `dhānyāmla`; that part is flagged as a judgement call in the file, because the identification comes from outside this text.

| | Confirmed | Judgement calls | Unresolved |
|---|---|---|---|
| *Mastu* (1575) | 3 | 2 | 1 |
| Ghee (1576–77) | 2 | 2 | 1 |
| *Vyañjana* (1578–79) | 3 | 3 | 1 |
| *Dhūpa-kāñjika* (1580) | 3 | 2 | 1 |
| *Pānaka* (1581–84) | 4 | 2 | 0 |
| Closing material (1585–1600) | 5 | — | 4 |
| 1417–1426 | 3 | — | 3 |

**Transcription: my five passages scan 39/40; 1417–1426 scans 40/40 clean; the closing material scans 48/52 plus 14/14.** Full table in §8. The one defect in my batch and three of the four in the closing material are seven-syllable pādas that a dropped particle would explain, which is the signature of a transcription slip rather than a loose verse.

---

## 1. *Mastu* (1575) — `mastu-spiced-whey.md`

### Confirmed

**M1. The asafoetida is smoked, and it is the only thing in the verse that is.** `जीरकाज्यसैन्धवैः संयुक्तं` puts cumin, ghee, and rock salt in one instrumental phrase governed by `संयुक्तं`, "joined with" — they go *in*. Then `हिङ्गुधूपेन धूपितम्`, a separate phrase with its own participle, fumigates with asafoetida-incense. `हिङ्गुधूप` is a noun: asafoetida-*as-incense*. The reconstruction used the ghee as a carrier for both the cumin and the asafoetida, which collapses the verse's two-part structure into one tadka. Fixed: the ghee and cumin are whisked in (toasting the cumin in the ghee is a fair way to combine them, and I have said so), the asafoetida goes on a coal.

**M2. The chain to `śikhariṇī` did not carry quantities.** 1575's `स्रावितं ... तोयं` is anaphoric to 1574's `स्रावयेत् तद् द्रुतं जलम्` — this is the water that came out of that cloth. The recipe asked for 500 ml of it. I independently reached ~350 ml against the old 750 g parent (full-fat yoghurt loses 40–50% of its mass to a 6–12 hour hang); **batch 9 has since dropped the parent to 500 g of curd and worked the yield down to 235–285 ml, on the ground that curd set from reduced milk drains less freely than commercial yoghurt.** I have deferred to that, since they own the parent: **250 ml**, with the seasonings scaled (6 g ghee, 2 g salt), and the whey line now says not to count on more. `related: [sikharini-sweet-strained-curd]` added — it was missing.

Per batch 9, this is the **third** instance in the chapter of a child recipe asking for roughly twice what its parent yields — the *Sour Meat Glaze*'s 750 g of cooked pork against a 1 kg raw belly was the first. It is a systematic defect in how these reconstructions were scaled, not three coincidences, and it is worth a deliberate pass over every parent–child quantity pair in the Mānasollāsa set.

**M2b. *Mastu* is the only genuinely downstream preparation in this run.** *Takra* (1572), *majjikā* (1573), and *śikhariṇī* (1574) are three parallel treatments of one setting of curd — you pick one, you do not do them in order. *Mastu* is the exception, because it consumes a by-product that only exists if the *śikhariṇī* was made. Stated in the notes so the file cannot be read as implying a longer chain. (Batch 9's finding; my own intro did not imply a sequence, but the ghee's did through 1573–75 and has been corrected — the chain there is 1565 → 1568 → 1571 → 1576, with everything in between a branch off the same curd rather than a step.)

**M3. "Acid-set curds" is the wrong whey.** The parent verse presses set *dadhi*, so this is thin, sour, uncooked yoghurt whey. Whey from acid-set boiled milk is a different liquid — sweeter, less acidic — and it belongs to 1408 and 1581, not here. The ingredient line now says drained *dadhi*.

### Judgement calls

- **Cumin: seeds bloomed in ghee, or roasted and ground?** `जीरक` is bare, and it sits in the mixed-in list rather than in the fumigant. Roasted ground cumin is what a whey drink normally takes. I kept the seeds-in-ghee treatment because it is also the natural way to get the `आज्य` in, and flagged the toasting as a convenience. Either is defensible.
- **Serving temperature.** The recipe said "cool or gently warmed", but 8 g of melted ghee whisked into 350 ml of cold whey sets into flecks. The text asks for the ghee, so I changed the serving instruction rather than the ingredient: room temperature or warm, with the reason given.

### Unresolved

- **`यद्धृतं`.** I read `dhṛtaṃ`, "kept, retained" — the whey that was saved rather than thrown away, which is the natural sense after 1574. If Shrigondekar reads `यद्घृतं` the sense would have to change, awkwardly, given `आज्य` for ghee in the very next pāda. Low stakes; worth a glance if the volume is open.

### Title

`Mastu Spiced Whey` is accurate and not misleading. On publication it wants asterisks: **`*Mastu*` Spiced Whey**, per the loan-word convention the published *Cakkalikās* follow.

---

## 2. Ghee (1576–77) — `clarified-ghee-with-wheat-and-betel-leaf.md`

### Confirmed

**G1. "1 whole wheat grain" makes the step incoherent.** `गोधूमबीजकम्` is neuter accusative singular with a self-referring `-क`, exactly as in `गोधूमचूर्णकं श्लक्ष्णं` at 1376–77, where the `-क` sits on a mass noun ("fine wheat flour"). So this is *wheat grain* as a material, not one seed. The recipe's internal contradiction gives the game away: the intro said "scented or tested", the ingredient list picked the quantity that only makes sense for a test (one grain), and the method treated it as a flavouring (add, rest two minutes, strain). Changed to 1 tsp of wheat grains, with the singular reading flagged in the notes as the alternative.

**G2. The back-reference to the churn is dropped.** `नवनीतं नवं` is the butter lifted off at 1571, `नवनीतमथो हरेत्` — this entry is the last step of one continuous dairy sequence running 1565 → 1568 → 1571 → 1573 → 1574 → 1575 → 1576. That makes *cultured* butter the correct starting point rather than sweet-cream butter, which the ingredient list happened to get right for the wrong reason. `related: [spiced-takra]` added, and the intro now leads with the cascade instead of restating the title.

### Judgement calls

- **`धौतं` and `नीरलेशविवर्जितम्` are two requirements, not a purpose clause.** The old translation read them as one ("wash until no trace of water remains"), which is not what washing butter does — you knead it in cold water to rinse out buttermilk, and *then* work the water back out. Re-rendered as two adjectives on `नवनीतं`, with the point of the fussiness explained in the notes: butter entering the pot dry clarifies faster and spits less.
- **What the wheat and the leaf are *for*.** Deliberately left open. This chapter states purposes when it has one — `वर्णार्थं` at 1583, `गन्धार्थं` and `रुच्यर्थं` at 1445 — and 1577 states none. The old intro's "scented or tested" hedge was honest but it was still the reconstructor guessing; the note now names aroma, a doneness indicator, and an auspicious finish as all live, and asserts none.

### Unresolved

- Nothing philologically open. `ताम्बूलपत्र` is *Piper betle*, secure. `गोधूम` is wheat, secure. `घृतभाण्डक` is a ghee-pot, restored to the notes on the pattern of `मृदः स्थाल्यां` in the glaze audit.

### Title — recommend a rename

**"Clarified Ghee" is a pleonasm** — ghee *is* clarified butter, so the title reads "clarified clarified butter". Not renamed, per the brief. Suggest **Ghee with Wheat and Betel Leaf**, or **`*Ghṛta*`: butter clarified with wheat and betel leaf** if Damon wants the source term.

---

## 3. *Vyañjana* (1578–79) — `seasoned-rice-water-vyanjana.md`

### Confirmed

**V1. There is no cooking step in the text, and the reconstruction cooked the finished mixture.** Every element of 1578–79 is a past participle agreeing with `तोयं` — `विमिश्रितम्`, `संयुक्तं`, `योजितम्`, `समायुक्तम्`, `धूपितं` — and the sentence ends `व्यञ्जनं परिकीर्तितम्`. It is a definition. No verb of cooking occurs. The old method's "heat gently until steaming and slightly thickened, about 5 minutes" was invented, and it was actively harmful: heating buttermilk against 20 g of tamarind concentrate risks splitting it, and it cooks off the fresh-ginger character. **Restructured so the brief simmer applies to the rice water alone, before anything else goes in** — which keeps the modern safety step, cooks the raw starch, and lets the drink be assembled cold as the text describes. The heating is labelled as mine.

**V2. `सम्यक्` dropped.** `धूपितं हिङ्गुना सम्यग्` is "*thoroughly* fumigated with asafoetida". Restored, and it is not decorative — it is the intensifier that confirms the fumigation is a real operation.

**V3. The asafoetida was in the pot instead of on the coal.** Same defect as M1; same fix.

### Judgement calls

- **`व्यञ्जन` is a relish, not a beverage.** MW gives "seasoning, condiment, anything eaten with rice to give it relish", and the word is *not* one of the five classes at 1344 (`भोज्यं भक्ष्यं पेयं लेह्यं चोष्यं`) — it belongs to a different axis, the accompaniment axis that 1592–94 spells out for royal rice. This is the only occurrence of the word in the chapter. I have kept the drink option but put "spooned over rice" first in the serving line and made the point in the notes. I did **not** touch `category: Beverages`, which is a legacy field.
- **Sugar raised from 15 g to 30 g.** `सितया सह योजितम्` gives no quantity, but 15 g in ~600 ml against 20 g of tamarind concentrate is barely detectable, and the verse pairs sugar with the sour deliberately. Flagged in the notes with the old figure named so it can be reverted.
- **The salt stays, and the label stays.** But the note is now sharper: both flanking entries salt explicitly (`सैन्धवैः` 1575, `लवणेन` 1580), so the omission at 1578–79 is probably the author's choice. Reduced from ½ tsp to ¼ tsp.

### Unresolved

- **`तण्डुलक्षालितं तोयं` — washing water, not cooking water.** I am confident: the chapter has a separate word for the drained starch water of boiled rice, `मण्ड` at 1356, and does not use it here. Worth recording because it is the kind of thing that gets silently "improved" later.

---

## 4. *Dhūpa-kāñjika* (1580) — `dhupa-kanjika.md`

### Confirmed

**K1. The recipe's defining technique was absent.** `धूपकाञ्जिकम्` — the name is "smoke-*kāñjika*". Strip the smoke and you have the salted *kāñjika* of 1404, not this dish. Beyond the 1478 contrast, the decisive general argument is `नखधूप` at 1448: onycha, the dried operculum of a marine snail, which is an incense and cannot be eaten at all. If one member of the chapter's fumigant list is inedible, `धूप` is smoke throughout. The file now fumigates with a coal.

**K2. Both aromatics belong on the coal, not just the asafoetida.** `हिङ्गुना जीरकेणापि धूपितं` — one instrumental phrase, `अपि` adding the cumin to the asafoetida, both governed by `धूपितं`. The exact parallel is 1400: `घृताक्तान् हिङ्गुसर्पिर्भ्यां जीरकेण च धूपयेत्`, "smeared with ghee, fumigate them with asafoetida-and-ghee and with cumin". That verse is also where the ghee's real role in fumigation shows up — dripped on to make smoke, not used as a frying medium. The old recipe had roasted ground cumin whisked in.

**K3. The recipe was unmakeable.** The verse presupposes the ferment (`सौवीर`) as a pantry item and describes none of it, and the ingredient list read "500 ml strained rice kāñjika or another mild sour fermented grain liquid" as though it were a purchase. Since the brief notes other recipes point *at* this page — `vatakas-in-sweet-curd-or-kanjika.md` explicitly says its salt "follows the chapter's own *dhūpa-kāñjika* at 1580" — the page now carries the whole ferment. `related` added to the three *kāñjika* consumers.

**Food safety, concretely, as asked.** The protocol in the file: 150 g pearl barley simmered to soft in 1.5 L water, cooled to lukewarm, into a clean 2 L glass or glazed jar with 2 tbsp of an existing sour ferment as backslop and ½ tsp salt; loosely covered so gas vents; 22–28 °C out of sun; stirred daily with a clean spoon; grain kept submerged; sour in 2–4 days; strained through muslin, settled overnight in the fridge, then decanted off the sediment (this is the verse's `निर्मलं`); refrigerated, used within two weeks. The hazard reasoning, also in the file: the risk window is the first 24–48 hours before the pH drops, so the backslop is load-bearing and should not be skipped; cooked grain held warm is the classic vehicle for *Bacillus cereus*, whose spores survive boiling, so ferment at room temperature rather than somewhere warm; anything above the liquid line moulds; a white yeast film can be skimmed but fuzzy or coloured mould, a solvent smell, or anything putrid means the batch goes; pH strips below 4.0 before drinking; glass, glazed ceramic, or food-grade plastic, never bare reactive metal.

One cross-recipe consequence worth noting: **1580 wants its ferment `निर्मलं`, clear, and `spiced-sour-vatakas.md` (1405–07) wants its `आरनाल` `सान्द्र`, thick and unstrained, because the rice starch is what keeps that curd sauce from graining.** Those are opposite requirements. The note now says to keep them as separate batches.

### Judgement calls

- **`सौवीर` = barley, applied.** In the Ayurvedic `sandhāna` literature `sauvīraka` and `tuṣodaka` are the barley sours — distinguished by whether the husk is retained — while `kāñjika` / `dhānyāmla` is the rice sour. On that reading 1580 is informative rather than near-tautological: take the *barley* ferment, clarify it, salt it, smoke it, and the result is a *kāñjika*. Applied as the primary ingredient with clear strained rice *kāñjika* named as the fallback, and flagged in the file as a judgement call because the identification is imported, not internal.
- **The old note said the distinction was "uncertain".** It was closer to right than most of the notes I have seen, and I have kept its substance while sharpening it: the family membership is secure, the substrate assignment is where the uncertainty actually sits.

### Unresolved

- **`सौवीरनिर्मलं`: compound or two words.** "Clarified *sauvīra*" either way, so nothing turns on it. I have not touched the Devanagari.

### Title

`Dhūpa-Kāñjika` is right and should not change. On publication: **`*Dhūpa-kāñjika*`** — asterisked, and sentence case inside the compound.

---

## 5. Fruit *pānaka* (1581–84) — `fruit-panaka-with-milk-whey-base.md`

This is the passage whose reconstruction was furthest from its text, and the text is 16/16 clean, so there is no excuse of corruption.

### Confirmed

**P1. `पेयम्` dropped.** 1584d is `पानकं पेयमुत्तमम्` — "a *pānaka*, an excellent **peya**". `Peya` is the third of the five classes at 1344 (`भोज्यं भक्ष्यं तथा पेयं लेह्यं चोष्यं`), and the classification is not decorative: **the chapter's closing serving order at 1596 walks the classes in sequence with their own verbs** — `पिबेच्च पानकं` (drink the *pānaka*), `लिह्याच्छिखरिणीम्` (lick the *śikhariṇī*), `चूषेन्मज्जिकाम्` (suck the *majjikā*). Restored to the translation and made the spine of the new intro. **This also lands on agent 9's file: 1596 classifies `śikhariṇī` as `lehya`, licked, which is a real fact about what the dish should be like.**

**P2. The sugar and cardamom go into the split milk, before the cloth.** All three participles in 1581d–1582b — `भेदितम्`, `समायुक्तम्`, `विमिश्रितम्` — agree with `क्षीरम्`, and only then does `क्षिपेत् प्रसारिते वस्त्रे` throw that whole thing onto the cloth. The old method curdled plain milk, drained it, and *then* stirred sugar and cardamom into the whey. Order matters here for a practical reason: done the text's way, the cardamom is an infusion whose solids the cloth removes, which is exactly how the liquid ends up clear *and* scented. Done the other way you either have cardamom grit in a clear drink or you filter the cardamom back out.

**P3. `पेषयेत्` — the pressing — was dropped.** `स्रावयेत् पेषयेत् समम्`: let it drain, and press it evenly. You do not press a liquid, so this is the curd mass on the cloth being squeezed. Added as its own step.

**P4. The tamarind is for colour only.** `वर्णार्थं` is in the text and, to the previous translation's credit, in the translation — but the *reconstruction* said "add enough to give a pale amber colour **and mild sourness**". The purpose clause fixes the quantity, exactly as `वर्णार्थं` does for the turmeric in the glaze audit. Sourness is the fruit juice's job. Also `भृष्टं` means roasted, and "lightly toasted" will not colour anything: it has to go dark. Quantity trimmed 30 g → 25 g and the roasting instruction strengthened.

### Judgement calls

- **The coagulant.** `अम्लेन भेदितम्` names no acid. The chapter's own curdled-milk recipe at 1408 uses `तक्रमम्लं`, sour *takra*, and *mastu* was defined two verses earlier at 1575 — so a sour dairy coagulant is what is nearest to hand and it gives a milder, less cheesy whey than lemon. Made sour whey / *mastu* the primary with lemon juice retained as the alternative.
- **Clarification method.** `पुनः पुनः क्षिपेत् ... यावन्निर्मलतां व्रजेत्` is the same operation as the sugar-refining `गालयेत् ... मुहुर्मुहुः` at 1413, so repeated cloth-filtering is the text's own method and I kept it. I added the modern shortcut that actually works — return the drained whey to a boil so the residual whey proteins flocculate, then filter — labelled as such.

### Unresolved

**None, and this is worth stating plainly given the brief's expectations.** The passage names exactly one plant, `चिञ्चा` (tamarind, secure, and used again at 1578). **The fruit list is not incomplete — there is no fruit list.** `यस्य कस्य फलस्यापि रसेन परिमिश्रयेत्` is "mix it with the juice of whatever fruit", the same open-ended construction as `पलान्यन्यानि कानिचित्` ("some other meats") at 1455, and `तत्तन्नामसमाख्यातं` states the naming rule outright. Pomegranate, mango, grape, and lime are all the reconstructor's and the file now says so.

Also verified: the old note's cross-reference — "the curds left from the process can be used in the kṣīra-prakāra recipe" — **is correct and better than it looks**. 1408–10 boils milk, throws in sour *takra*, discards the water, ties the thickened mass in cloth, grinds it with rice flour, fries it in ghee, and drenches it in syrup. That is the same *chhena* this recipe produces as a by-product. Kept, strengthened, and `related: [ksira-prakara-milk-curd-sweets]` added.

### Title

`Fruit Pānaka with Milk-Whey Base` is accurate. On publication: **Fruit `*Pānaka*` on a Clarified Whey Base** — asterisks, and "clarified" earns its place because `निर्मलतां` is the whole point of two of the four verses.

---

## 6. The chapter's closing material — 1585–1597 and 1598–1600

Read-only. **Five corrections needed in the English, all in the 1585–97 entry; 1598–1600 is clean and needs nothing but one small trim.** The header's warning about these being unreviewed first-pass drafts is warranted, but the drafts are better than I expected — the errors are concentrated in the vessel list, where the vocabulary is genuinely hard.

### C1. `रीतियन्त्रविधारिते` (1585) is a brass stand, not "the appropriate serving apparatus"

Current: "in gold or silver vessels **supported or arranged by the appropriate serving apparatus**". `रीति` f. is **brass or bell-metal** (MW), and `यन्त्र` here is a stand or frame; `विधारित` is "held up". So: "**held on a brass stand**". Two supports for this: the passage is a list of metals, and reading `रीति` as "manner/appropriate" duplicates `यथायोग्य` two pādas later, which the English already renders as "appropriate". Suggested: "Food is to be served in gold or silver vessels held on a brass stand, to the district governors and the rest, each in the place appropriate to him."

Also minor: `मण्डलेश` is a lord of a *maṇḍala*, a district or provincial governor. "Feudatory chiefs" is 1343's `सामन्तान्`, which the chapter lists separately.

### C2. `खरखण्डोपखण्डकैः` (1594) — verified correct, do not touch

I went looking for an error here and there isn't one. `खरखण्ड` is a real named preparation in this chapter at 1533–34 (salt-packed fish, roasted at mealtime) and `उपखण्डक` at 1513–17 (shade-dried salted meat, roasted in embers), and both already have recipe files. So the English's "salted fish khara-khaṇḍas, and dried meat upakhaṇḍakas" is **a correctly resolved back-reference**, and 1594's list — `वटकैः पर्पटैर्हृद्यैः खरखण्डोपखण्डकैः` — reads as a coherent set of savoury accompaniments. My first hypothesis was that `खरखण्ड` was hard-stage sugar candy, on the strength of `खरपाके` and `खण्डपाकविशारदः` at 1414. **That is wrong and should be recorded as tested and rejected**, because the two named recipes are decisive.

### C3. `अन्नं मुद्रसमोपेतं` (1589) — the uncertainty is misassigned

Current: "hot rice flooded with ghee and accompanied by **mudra [the exact food meant by mudra here is uncertain]**". `मुद्र` is almost certainly `मुद्ग`, **mung bean** — ग/र confusion is one of the commonest Devanagari slips, `मुद्ग` scans identically, the chapter's mung *sūpa* is at 1367–72 (`प्रक्षालितान् वरान्मुद्गान्`), and 1592 continues the theme with `विदलैर्वा विमिश्रितम्`. Rice with mung and ghee is the canonical Indian first course. **Suggested English: "hot rice flooded with ghee and served with mung-bean soup [the transcription reads *mudra*, almost certainly for *mudga*, mung — to be checked against the printed edition]."** I have not emended the Devanagari.

### C4. `श्लक्ष्णमांस` (1592) is finely cut meat, not tender meat

Current: "Rice may be combined with **tender** meat". `श्लक्ष्ण` is this chapter's fixed term for finely divided — fat at 1495 (`मेदसः श्लक्ष्णखण्डानि`), salt at 1364 and 1501 (`सुश्लक्ष्णं सैन्धवं`), and the identical compound at 1451 which the chickpea audit already settled. Same correction there.

Two more points on the same verse. The three options are `वा … वा` alternatives — "either joined with finely cut meat, or mixed with split pulses, or smeared with various pleasing *lehas*" — and the English's series reads as a combination of the first two. And `लेहैः … लेपितं` is one word doubled into "sauces and linctuses"; better to name the class: "**coated with various pleasing *leha* preparations**", cross-referring to 1344.

### C5. The serving order at 1596 is the fivefold classification in action, and the English does not say so

The English carries the verbs correctly ("drink a pleasing pānaka, lick śikhariṇī, and afterwards sip or suck majjikā"), which is good. What it does not flag is that `पिबेत्` / `लिह्यात्` / `चूषेत्` are the verbs of `पेय` / `लेह्य` / `चोष्य` from 1344, applied in order, and that `पानकं` is a back-reference to 1584, `शिखरिणीम्` to 1574, `मज्जिकाम्` to 1573, `दधि` to 1570, `घनम्` to 1566–67, `तक्रं` to 1572, and `काञ्जिकं` to 1580. **The whole of 1596–97 is a table of contents for the entries I audited.** A bracketed note naming the classification would earn its place, since the chapter opened with the scheme at 1344 and this is where it closes the loop.

Two smaller ones: "sip or suck" for `चूषेत्` should just be "suck", since the choice of verb is the classification; and `धनददिङ्मुख` (1591) is the direction of Kubera, i.e. **north**, which is worth saying outright.

### 1598–1600 — clean

The dietary and seasonal material is accurate, including the `हेमन्त` / `शिशिर` distinction (early vs late winter), which is easy to flatten and has not been. One trim: `क्षारं` in 1599 is "alkaline", and the English's "alkaline **or sharp**" adds a second gloss the word does not carry. The colophon is correctly handled.

### Structural issue: the entry boundaries are offset by a half-verse, twice

Not a translation error, but it will show on the source page.

- **1417a–b** (`निक्षिप्य गोलकाः कार्या नाम्ना वर्षोलकास्तु ते`) is printed in the **1417–1426** entry's Devanagari but translated in the **1411–1416** entry's English ("and shape into balls called *varṣolakas*"). The 1417–26 English simply skips it.
- **1427a–b** (`एतेषु मांसवर्गेषु केषाञ्चित्किंचिदुत्तमम्`) is printed in the **1427–1435** entry's Devanagari but translated at the end of the **1417–1426** entry's English ("while allowing that among the various classes some are better than others"). The 1427–35 English skips it.

Both are the same artifact: a verse straddles an entry boundary and the English was assigned to the neighbour. Consistent and harmless once known, but a reader comparing columns will see an untranslated half-verse at the top of two entries and an untranslated one at the end of another.

---

## 7. 1417–1426 — confirmed present, and it is not just an anatomy list

**Yes, it is in `manasollasa.ts`** (the entry at line 120). The prior audit's shorthand "the 1417–26 anatomy list" is **only partly right**: the anatomy is the back half. The entry contains four things.

| Verses | Content |
|---|---|
| 1417a–b | tail of the *varṣolaka* recipe from 1411–16 — see the boundary note above |
| 1417c–1420b | **meat-quality classification**: which animal's flesh has which property |
| 1420c–1422b | **prohibition list**: eleven conditions that disqualify an animal |
| 1422c–1426 | **anatomy / cuts list**: about twenty-five named parts |

The English is broadly faithful and the prohibition list is complete and accurate. Three things to fix and three genuinely open terms.

**Corrections.**

1. **`पुष्टं चेद्रुच्यमीरितम्` (1419d) is a conditional and the English drops the condition.** `चेत्` is "if": "[flesh] of the *ruru* and *sambara*, **if the animal is well-fed**, is said to be tasty." The English has "the flesh of ruru and sambar deer is nourishing and palatable", which turns the condition into a property and loses the point — which is that the very next line begins the list of animals to reject for being emaciated. The conditional is the hinge between the two halves of the passage.
2. **`मृष्टं सारङ्गजं पलम्` (1417d) — `मृष्ट` is "dainty, rich, sweet", not "praised".** The English's "sāraṅga meat is praised" makes it an evaluation rather than a quality term; the chapter uses `मृष्ट` as a quality word at 1376, 1411, 1493, and 1570.
3. **`पृष्ठवंशस्य पार्श्वस्थं बहिरन्तश्च संस्थितम्` (1422c–d) deserves a gloss.** "Beside the spine, lying both outside and within" is a precise description of the loin outside the vertebrae and the tenderloin within — a butchery distinction, not a vague one. A bracket would help the reader: `[the loin outside the vertebrae and the tenderloin within]`. Similarly `वपा` (1426) is specifically the omentum, so "caul fat (omentum)" rather than "fat attached within the carcass"; and `कुक्षिसन्धिविलेपकम्` drops `विलेपक`, the lining or smear at the belly junction.

**Open terms.**

- **`आविकं तरसं रुच्यं` (1418c).** The English gives "mutton is juicy and tasty". `आविक` is sheep, secure, but `तरसं` is not "juicy" — `तरस्` is speed or strength. Either the transcription is for `सरसम्` (juicy), or the sense is "strengthening". The pāda scans at 8 either way, so metre does not decide it. Recommend "sheep's flesh is `*tarasa*` and tasty [the term is obscure; possibly for *sarasa*, juicy]".
- **`वृषणकर्णकम्` (1425d).** The English gives "testicles" and silently drops `-कर्णक`. Either a compound of two parts or a single cut-name. Transliterate.
- **`मुकुलं हृदयोद्भवम्` (1424d).** "The bud arising from the heart." The English's "a bud-shaped portion associated with the heart" is a fair hedge; the heart's own apex is bud-shaped, so it may be the heart itself.

`कालखण्डं` (1425a) is correctly flagged as probably a dark organ, most likely liver, matching the recipe at 1499–1501.

**Metrically, 1417–1426 is the cleanest passage I scanned: 40/40.** That is a useful result, because it means the corruption in 1427–1435 (28/36, concentrated in 1429 and 1432) is **localized to that passage** rather than being a property of the transcription in that region of the chapter. It strengthens the earlier recommendation to collate 1427–35 specifically.

---

## 8. Metrical scan — every passage I read

*Anuṣṭubh*, 8 syllables per pāda, counted post-sandhi.

| Passage | Pādas | Clean | Defective pādas |
|---|---|---|---|
| 1575 — *mastu* | 4 | 3 | **1575b** `जीरकाज्यसैन्धवैः` (7) |
| 1576–1577 — ghee | 8 | 8 | — |
| 1578–1579 — *vyañjana* | 8 | 8 | — |
| 1580 — *dhūpa-kāñjika* | 4 | 4 | — |
| 1581–1584 — *pānaka* | 16 | 16 | — |
| **My batch** | **40** | **39** | **1** |
| 1417–1426 | 40 | 40 | — |
| 1585–1597 | 52 | 48 | **1587a** (9), **1592c** (7), **1596c** (7), **1597a** (7) |
| 1598–1600 (incl. colophon half-verse) | 14 | 14 | — |

For reference against the prior audits: 1442–48 scored 28/28, 1449–52 16/16, and 1427–35 28/36.

**Diagnosis and probable resolutions** — recommendations for collation against Shrigondekar's GOS edition, not emendations. I have altered no Devanagari anywhere.

- **1575b** `जीरकाज्यसैन्धवैः` = 7. Dissolving the *savarṇa-dīrgha* to `जीरक आज्य-` restores 8. Same shape as the prior audit's finding at 1434c. Probably a transcription writing the sandhi form. **Independently confirmed: batch 9 scanned 1565–1575 and found this the only defective pāda in that stretch, and it falls in my verse.** Two scans agreeing on a single defect in an otherwise clean 40-pāda region is a good reason to have this one line checked against the printed edition — either the sandhi is the transcriber's or a short word is missing.
- **1587a** `भृङ्गारशुक्तिसमोपेते` = 9. `भृङ्गारशुक्त्युपेते` would give 8. The only over-long pāda in anything I scanned.
- **1592c** `लेहैर्विविधैर्हृद्यैः` = 7. `हृद्यकैः` would restore 8.
- **1596c** `चूषेन्मज्जिकां पश्चात्` = 7. `चूषेच्च मज्जिकां पश्चात्` restores 8.
- **1597a** `ततस्तक्रमश्नीयात्` = 7. `ततस्तु तक्रमश्नीयात्` restores 8.

**The pattern is informative.** Three of the four defects in the closing material, and the one in my batch, are seven-syllable pādas that a single dropped short particle (`च`, `तु`) or an undissolved sandhi would explain. That is the signature of a transcription losing small words, not of loose *śāstra* metre — loose *anuṣṭubh* tends to run long, not short. **Recommendation: collate 1585–1597 alongside 1427–1435.** 1417–1426 and 1598–1600 need no check.

---

## 9. Knock-on into published recipes — flagged, not touched

The `धूप` finding lands on two **published** files. Both are outside my scope; both are worth a look.

- **`spiced-takra.md` (1571–72, published)** carries the note: "Blooming the cumin and asafoetida in ghee follows the source's *dhūpita* ('perfumed'), which points to aromatics carried on hot fat rather than stirred in raw." That is a positive claim about what `धूपित` means, and 1478's `हिङ्गुधूपेन` / `हिङ्गुतोयेन` contrast plus `नखधूप` at 1448 tell against it. The tempering is a fine stand-in; the note should present it as one.
- **`majjika-sweet-spiced-buttermilk.md` (1573, published)** reads `कर्पूरधूपितं` as camphor stirred in, and Damon's own intro says "I have not yet found camphor that I trust to eat." **Reading it as camphor *smoke* dissolves that problem entirely** — a speck of camphor on a coal under a covered bowl gives the aroma with nothing ingested, which is how camphor is used in Indian kitchens. This is the most immediately useful consequence of the finding and it is sitting in a live recipe. **Batch 9 reached the same conclusion at 1573 independently**, from the dairy side; the two lines of argument converge, and camphor is the strongest single case, because it is the one fumigant in the chapter that is both unmistakably identified and unpleasant to eat.

Because other recipes will cite `dhupa-kanjika.md` as the chapter's dedicated `dhūpa` entry, that file now carries the full case as a standalone note: `धूप` is smoke applied to the food from outside, not an ingredient added to it, with `नखधूप` (1448, inedible), `कर्पूरधूपितं` (1573, camphor), and the 1478 `हिङ्गुधूप` / `हिङ्गुतोय` contrast all set out, plus the three-way asafoetida table. It is the one place a reader should be able to go to settle the question.

One reciprocity gap I could not close: I added `related` entries on my five files, but the targets cannot point back without editing other agents' files. Needs a single pass over `related` across the whole Mānasollāsa set once everyone has landed — `sikharini-sweet-strained-curd` should point at `mastu-spiced-whey`, `spiced-takra` at both the ghee and the *vyañjana*, and `ksira-prakara-milk-curd-sweets` at the *pānaka*.

---

## 10. Files edited

All five in `src/content/recipes/`. Frontmatter validated with `yaml.safe_load`; all five parse, all `related` slugs resolve to existing files, all five `original` Devanagari fields verified byte-identical to `manasollasa.ts` after editing. `status` unchanged on all five (`draft`). No build was run.

| File | What changed |
|---|---|
| `mastu-spiced-whey.md` | `translation` (asafoetida-incense, `कीर्तितम्`); `related` added; intro rewritten; whey 500 → 350 ml with seasonings scaled; whey source corrected to drained *dadhi*; asafoetida moved from the tempering to a fumigation step; serving temperature fixed; notes rewritten |
| `clarified-ghee-with-wheat-and-betel-leaf.md` | `translation` (two adjectives not a purpose clause, `सम्यक्`, ghee-pot); `related` added; intro rewritten around the 1565→1576 dairy cascade; wheat 1 grain → 1 tsp; notes rewritten |
| `seasoned-rice-water-vyanjana.md` | `translation` (definitional string, `ईषत्`, `सम्यक्`, *takra* named); `related` added; intro rewritten; the invented cooking step moved onto the rice water alone and labelled modern; asafoetida moved to a fumigation step; sugar 15 → 30 g; salt ½ → ¼ tsp; notes rewritten |
| `dhupa-kanjika.md` | `translation` (`निर्मल`, the `अपि`, the name glossed); `related` added; intro rewritten; full barley ferment added with a safety protocol; both aromatics moved onto the coal; notes rewritten |
| `fruit-panaka-with-milk-whey-base.md` | `translation` (stakes and rods, `पेषयेत्`, `पेयम्`); `related` added; intro rewritten around the `peya` classification and 1596; sugar and cardamom moved into the split milk before the cloth; pressing step added; boil-and-filter clarification added; tamarind restricted to colour and the roast darkened; notes rewritten |
