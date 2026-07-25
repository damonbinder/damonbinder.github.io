# Mānasollāsa Śuṇṭhaka + Sour Glaze — translation and reconstruction audit

*Created 2026-07-25 10:47.*

Scope: `src/content/recipes/roast-pork-sunthaka.md` (3.13.1427–1435) and `src/content/recipes/sour-meat-glaze.md` (3.13.1442–1448), both `status: draft`. Nothing in `src/` was edited.

## Summary

The single most important correction: **`अम्लपरिस्विन्नान्` (1434) is a moist-heat cooking step, not a marinade.** `pari-svid` is the `svedana` family — sweating, steaming, simmering. The reconstruction renders it as a 2-hour cold refrigerated soak in 20 ml of lime juice, which is both philologically wrong and does nothing to pork belly. The text's own `पूर्ववत्` ("as before") is dropped from the translation, and it is exactly the word that tells you the sour-cooked pieces then go on skewers over embers. Damon's own **musaka** and **nandyāvarta** drafts already handle the identical verb-phrase correctly (simmer in tamarind water, drain, skewer, roast) — the Śuṇṭhaka should follow them.

Second: **the Glaze demotes a mandatory step to optional and reverses its order.** `गालयेत्सितवस्त्रेण किंचित्तैलं विमिश्रयेत्` (1445) — strain through cloth, *then* mix in a little oil — is a plain optative like every other instruction in the passage. Together with `मृदावग्नौ` (gentle fire), `दर्वीघट्टनपूर्वकम्` (continuous ladle-stirring), and `मृदः स्थाल्यां` (earthen pot), it is a coherent anti-curdling protocol. The reconstruction makes the strain optional, frames it as cosmetic, and puts the oil in before it.

Third: **the two recipes don't chain.** 1447's `प्रक्षिप्य शुण्ठकांस्तत्र` does take the śuṇṭhakas from the preceding recipe — confirmed, and the word `मांस` never appears in 1442–1448 — but 1 kg raw skin-on belly cannot yield the Glaze's 750 g cooked meat, and all four already-published *Cakkalikās* recipes take 500 g cooked from the same parent.

Fourth: **`विश्व` (1445) is dried ginger and has been dropped from both the translation and the ingredient list**, and the Glaze's `**Notes**` call `दन्तशठ` "uncertain and omitted" when the standard gloss is lime/lemon and the recipe already contains lemon juice. The genuinely contested ingredient, `अम्लवेतस`, isn't mentioned in the notes at all.

Transcription reliability differs sharply between the two: 1442–1448 scans as clean anuṣṭubh in all 28 pādas; 1427–1435 has 8 defective pādas out of 36, concentrated in 1429 and 1432. **Verse 1432 — the verse that defines what a śuṇṭhaka is — is corrupt in three of its four pādas. Don't publish the Śuṇṭhaka's Devanagari without checking it against a printed edition.**

| | Confirmed problems | Judgement calls | Unresolved philology |
|---|---|---|---|
| Śuṇṭhaka | 4 | 3 | 2 |
| Glaze | 5 | 4 | 3 |

---

## 1. Confirmed problems

Ordered most-consequential-first. "Confirmed" = the text says something the reconstruction or translation contradicts, and I can support the reading.

### S1. `अम्लपरिस्विन्नान्` is cooking, not marinating

- **Text (1434c–d):** `अथाम्लपरिस्विन्नान् पूर्ववत्परिकल्पयेत्` — "then, [the pieces] thoroughly sweated in sour [liquid], one should prepare as before." `pari-svid`: root `svid`, class 4, "to sweat"; the derived `svedana` is the standard term for moist-heat sudation/steaming in both medical and culinary Sanskrit, and the participle `svinna` carries "steamed, stewed, parboiled". The chapter itself confirms the culinary sense: **1436 opens `स्विन्नानां शुण्ठकानां`, which Damon's published *Cakkalikās* already renders "cooked *śuṇṭhakas*."**
- **Reconstruction:** "For the sour variant, toss with the lime juice and half the salt and refrigerate for 2 hours." 20 ml of lime juice on 1 kg of pork.
- **Why it also fails as cooking:** 20 ml doesn't submerge 4 cm cubes; acid penetrates 1–3 mm in hours, so on 4 cm cubes it reaches a few percent of the mass; 2 hours cold does nothing to collagen; and surface-denatured pork goes mushy-then-dry on a grill rather than tender.
- **Change:** replace step 1's sour variant with a simmer, on the pattern of Damon's own musaka (1543–47) and nandyāvarta (1537–39) drafts, which render the same construction (`अम्लैः पचेत्` / `अम्लकैः विपच्य`) as a braise. Concretely: simmer the pieces covered in ~350 ml water with 30–40 g tamarind concentrate and 1 tsp salt for 30–40 minutes until nearly tender, drain, pat dry, then skewer and roast as in steps 2–3. This also fixes S3 below — the pre-simmer is what makes belly grillable.
- **Translation change:** restore `पूर्ववत्`. Suggested: "Or else sweat the pieces in sour liquid and then prepare them as before."

### S2. `पूर्ववत्` dropped from the translation

- **Text:** `पूर्ववत्परिकल्पयेत्` (1434) — "prepare as before", i.e. skewer over abundant embers until the fat drips, then salt and pepper.
- **Translation:** "Alternatively, first cook the pieces in a sour liquid" — full stop; the roast never returns.
- **Consequence:** this omission is what licenses the marinade reading in S1. The sour treatment is a *pre-*treatment, not a substitute preparation. Fix the translation and the method follows.

### G1. The strain is mandatory, load-bearing, and comes before the oil

- **Text (1445c–d):** `गालयेत्सितवस्त्रेण किंचित्तैलं विमिश्रयेत्` — "strain through a white cloth; mix in a little oil." Both optatives, same mood as `विनिक्षिपेत्` and `पचेत्` throughout the passage. Nothing marks either as optional.
- **Reconstruction:** step 1 whisks the oil in with everything; step 2 is "For a smooth sauce, strain through a fine sieve" — optional, and framed as being about smoothness.
- **Why it matters functionally:** passing the curd through cloth breaks the gel into a homogeneous liquid and removes the coarse solids (tamarind fibre and seed grit, `आमलकं पिष्टं` pulp, ginger fibre) that would otherwise read as graininess. The oil added *after* — the text's order — coats and disperses, interfering with protein network formation; this is the same job ghee does in kadhi. Straining after the oil is in is self-defeating.
- **Change:** make the strain a mandatory numbered step, move it before the oil, and reorder step 1 as: whisk yoghurt smooth → add the sour juices and spices → strain through muslin → stir in the oil.

### G2. `विश्व` = dried ginger, dropped from both translation and ingredients

- **Text (1445a–b):** `रुच्यर्थं विश्वमरिचं सैन्धवं च विनिक्षिपेत्` — a dvandva: `विश्व` + `मरिच`. `विśvā` is a standard synonym for `śuṇṭhī`, dried ginger (Zingiber officinale), attested in the *Rājanighaṇṭu* — a 13th-century thesaurus, so contemporaneous with the Mānasollāsa. Note that 1444 has already called for `आर्द्रकम्`, fresh ginger, so this is a second, different ginger. The chapter varies its dry-ginger words freely: `नागर` (1373, 1457), `शुण्ठी` (1449, 1547), `विश्व` here.
- **Translation:** "black pepper" — `विश्व` gone.
- **Reconstruction:** no dried ginger.
- **Change:** add `½–1 tsp ground dried ginger` to the ingredient list, and render 1445a as "for relish put in dried ginger, black pepper, and rock salt". Damon's Puryala already carries both gingers from `नागरार्द्रक`, so this matches house practice.

### G3. The notes misassign the uncertainty

- **Reconstruction note:** "The ingredient *dantaśaṭha* and several named fumigants are uncertain and omitted."
- **Problem 1:** `दन्तशठ` ("tooth-blunting") is glossed by Monier-Williams as common lime, *Citrus acida*; minority glosses are wood-apple, orange, and *Averrhoa carambola*. It is a citrus, almost certainly lime or lemon — and the recipe **already contains 30 ml of lemon juice**, so it is neither meaningfully uncertain nor omitted.
- **Problem 2:** two of the four fumigants are identifiable. `नखधूप` is onycha — the dried operculum of a marine snail, sold as *nakhla* in South Asian and Middle Eastern spice shops. `जीरकधूप` is just cumin smoke, which the chapter uses repeatedly (1400, 1474) and which Damon's Roast-Meat Salad already renders as hot ghee poured over the aromatic. `शशिधूप` is the only obscure one (see U-G1).
- **Problem 3:** the actually contested ingredient, `अम्लवेतस`, isn't mentioned in the notes at all, and `आमलक` is dropped without comment.
- **Change:** rewrite the note along the lines of: *dantaśaṭha* is most likely lime, and the lemon juice stands in for it as well as for citron; *amlavetasa* is contested (Garcinia pedunculata in Bengal and Assam, Rheum emodi leaf-stalks elsewhere) and is omitted; *āmalaka* is one of the listed alternatives and is omitted, though amla powder would serve; the fumigants are asafoetida, onycha, cumin, and probably camphor, and the hot-ghee tempering stands in for the smoke.

### G4. `आमलकं पिष्टं` is an alternative, not a partner — the translation makes it a combination

- **Text (1442):** `अथवामलकं पिष्टं मेलयेद्वाम्लवेतसम्` — `वा … वा`, "or ground āmalaka, or combine amlavetasa". Two separate options in a menu of alternatives.
- **Translation:** "alternatively combine ground āmalaka **with** amlavetasa, citron juice, or dantaśaṭha juice" — this makes āmalaka the head of a combination and the other three its partners, which the Sanskrit does not say. The combining licence is a separate sentence (1443d, `द्वित्रान्`).
- **Change:** render 1442–1443 as a flat list of alternatives: "Mix curd with tamarind, or with pomegranate essence, or with ground āmalaka, or with amlavetasa, or with the juice of citron, or with the juice of dantaśaṭha. Or mix two or three of these juices, as you like."

### G5. `प्रलेहकं` flattened to "a thick sauce"; the reduction target is stated as a fraction, not a consistency

- **Text (1446):** `प्रलेहकं मृदावग्नौ पचेत्पाकविशारदः` — "the expert in cooking should cook it into a *pralehaka* over a gentle fire." `pralehaka` < `lih`, "to lick": a thing licked up. This is a **technical classification**, placing the dish in the `lehya` class of the fivefold scheme at 1344–45 (`भोज्यं भक्ष्यं तथा पेयं लेह्यं चोष्यं`). The chapter's own yardstick for `lehya` consistency is at 1375: `पायसं लेहने योग्यं`, which Damon rendered "thick enough to lick" — so a milk-pudding viscosity, pourable off a spoon in a sheet, not a gravy.
- **Corroboration:** 1452 — the chickpea dish that reuses this very sauce (`एवं पूर्वोदितं`) — ends `शोषितेऽम्लरसे`, "when the sour juice has dried away". This sauce family cooks down to nearly dry.
- **Reconstruction:** "until reduced by about one-third" (step 3), then "adding a splash of water if necessary" (step 4). The two fight each other, and neither expresses the target. One-third off ~280 ml leaves ~190 ml, which is thin-but-plausible coverage for 500 g of meat and definitely thin for 750 g.
- **Change:** replace the fraction with the consistency — "cook until it thickens to a glaze heavy enough to coat the back of a spoon" — and drop the water rescue in step 4, or restrict it to "only if it threatens to scorch before the meat is soft". The existing note ("thick and penetrating, not a large-volume curry gravy") is right; strengthen it by naming *lehya* and citing 1344–45.

### S3. The plain version bastes with ghee; the text has the pork basting itself

- **Text (1433):** `अङ्गारेषु प्रभूतेषु घृतबिन्दुस्रवावधि` — "over abundant embers, up to the trickling of drops of fat." `घृत` here is the pork's own rendering fat, and its dripping is the *doneness cue*. No added fat.
- **Contrast:** 1464 (bhaditraka) does say `घृतेन सिञ्चेत्` — the chapter says "baste with ghee" when it means it, and doesn't here.
- **Reconstruction:** `15 g ghee, melted` in the ingredients, "brushing with ghee" in step 3 — while the intro says the pork is "roasted until it begins to baste itself." Internally contradictory, and belly needs no help.
- **Change:** drop the ghee from the plain skewer version, or keep it and label it a modern addition in the notes.

### S4. The third variant (1435) is missing entirely

- **Text (1435):** `अथवा दारितान् कृत्वा त्वक्शेषान् लवणान्वितान् । भर्जयेदङ्गारपुञ्जेषु शुण्ठकानमृतोपमान्` — "or else, having split them, with the skin left on, salted, roast them **in heaps of embers** — śuṇṭhakas like ambrosia." No skewers: the pieces go *into* the coals.
- **Reconstruction:** offers only the skewer method. The translation carries the variant ("roast them in a heap of embers") but the method never does.
- **Change:** add it as a short variant step or a note — split thick pieces, skin on, salt only, buried in embers. Also restore `अमृतोपमान्` to the translation; other entries in `manasollasa.ts` keep this kind of praise epithet (`वरम्` → "This excellent preparation is called puryala").

---

## 2. Judgement calls

Real choices, defensible either way — Damon's call.

| # | Text | Reconstruction | Suggested |
|---|---|---|---|
| **J-G1** | `दध्ना विमिश्रयेत्` (1442) — curd in the instrumental, governing the whole list of sours. On the natural reading curd is the base for every option, and the sours are what you add *to it*. | 100 g yoghurt against 260 ml of strong acid — curd is a minority component and the base is fruit juice. | Invert the ratio: 300–400 g yoghurt, one or two sour agents totalling 100–150 ml. The chapter's other cooked-curd sauce (1405–07, Damon's *Spiced Sour Vaṭakas*) runs 300 g yoghurt : 150 ml water : 30 ml vinegar, and that draft's own method says *"do not let it boil hard or split."* This glaze is far more acidic and carries no such warning. See §3 for the chemistry. |
| **J-G2** | `द्वित्रान्` (1443) — "two or three" sour juices. | Tamarind + pomegranate + lemon = exactly three. Technically compliant, at the ceiling. | Legal as written; the objection is volume (J-G1), not count. But the intro's "Tamarind, yoghurt, pomegranate, and lemon produce the layered acidity requested by the source" misdescribes the text — the text offers a *menu* of six sours, of which you pick one or combine two or three. It does not request layering, and (per CLAUDE.md) the sentence mostly restates the ingredient list. Cut it or replace it with the *lehya* point. |
| **J-G3** | `दाडिमसारकम्` (1442). `सार` = essence, pith, sap, the best part. The `-क` may be merely svārthika, giving `सारक ≈ सार`. **But the very next verse uses `रस` explicitly for juice** (`रसं मातुलिङ्गस्य`, `रसं दन्तशठस्य`), so choosing `सारक` for the pomegranate looks deliberate. Cutting the other way: 1443d retrospectively calls them all `रसान्`. | "100 ml pomegranate juice" — a dilute, sweet supermarket liquid. | Genuinely ambiguous, but "juice" is the weakest of the live readings. Options in increasing order of concentration: reduce the 100 ml of juice to ~40 ml first; use pomegranate molasses; or use *anārdāna* (dried sour pomegranate seed), which is the standard Indian pomegranate souring agent and behaves nothing like sweet juice. At minimum, gloss it in the translation as "pomegranate essence" rather than "pomegranate juice". |
| **J-S1** | `त्वक्शेषान्` (1435) — "with the skin left on" is the *distinguishing* feature of the third variant, which suggests the main skewer preparation does not have it. Not airtight: 1429–31 de-bristle the carcass rather than skinning it, so skin is present on the whole animal, and the contrast may be between surface strips and interior ones. | `1 kg skin-on pork belly` for the skewer version. | Practically, this is the stronger argument: 4 cm skin-on belly cubes direct-grilled for 15–25 minutes give leathery, inedible skin and unrendered fat, and the fat hitting the coals will flare and scorch the outside first. Damon's already-published *Cakkalikās* — the direct child of this recipe — specifies **"cooked skinless roast pork belly."** Recommend skinless for the skewers, and reserve skin-on for the 1435 ember variant where the text asks for it. (If S1's pre-simmer is adopted, skin-on becomes workable, since the simmer softens it.) |
| **J-S2** | 1433: pieces are `चतुरस्रीकृतान्` — made four-cornered — *from* the long strips of 1432. | "4 cm cubes or thick strips". | Fine as-is; the sequence strips → squares is respected. |
| **J-S3** | Salt and pepper go on `पश्चात्`, after roasting (1434a–b). | Plain version salts only at the end (correct); sour version puts half the salt in the pre-treatment. | Correct as written. If S1's simmer is adopted, salt in the simmering liquid is the right place for it (as in Damon's musaka and puryala). |
| **J-G4** | `मृदः स्थाल्यां` (1446) — an *earthen* pot. | "a heavy pan". | Worth honouring, or at least noting: for a sauce this acidic, an unlined reactive metal pan will pick up metallic flavour. "Heavy non-reactive pan" would carry it without archaeology. |

---

## 3. Will the Glaze split? Stress-test

**Yes, it will very likely go grainy as written.** Not a violent oil-and-curd break, but a visibly granular, faintly chalky sauce with some whey weeping — it will taste right and look wrong.

The mechanism. Casein aggregates maximally at its isoelectric point, pH ≈ 4.6, which is why yoghurt sets. Heating denatures whey proteins, which then bind casein micelles and coarsen the aggregates. The reconstruction's mix — 100 g yoghurt (~pH 4.3) against 30 g tamarind concentrate (~2.5–3), 100 ml pomegranate juice (~3), and 30 ml lemon juice (~2.3) — lands well under pH 3.5. Going that far *below* the isoelectric point does partially re-disperse casein, so an extremely acidic yoghurt sauce is less fragile than a mildly acidic one; but 1½ tsp (~9 g) of salt screens that charge and promotes aggregation, and a sustained low simmer through a one-third reduction coarsens whatever forms. There is no starch here. Indian practice stabilizes cooked yoghurt with besan for exactly this reason.

**The text's own protocol is a competent answer to this, and the reconstruction weakens the most distinctive part of it.** Five elements, all in 1445–1446:

1. `गालयेत्सितवस्त्रेण` — strain through cloth. Homogenizes the curd and removes the coarse solids that would otherwise be mistaken for a break. **Demoted to optional; see G1.**
2. `किंचित्तैलं विमिश्रयेत्` — a little oil, added *after* straining. Fat interferes with protein network formation and masks residual graininess. **Order inverted; see G1.**
3. `मृदावग्नौ` — gentle fire. Carried correctly ("low heat").
4. `दर्वीघट्टनपूर्वकम्` — continuous ladle-stirring. Carried correctly ("stirring").
5. `मृदः स्थाल्यां` — earthenware: non-reactive, slow and even. **Dropped; see J-G4.**

Practical additions worth putting in the notes (all modern, so label them): bring the yoghurt to room temperature and whisk it smooth *before* the acid goes in; never let it reach a boil; and if it does grain, a second pass through the cloth after cooking recovers it. Adopting J-G1's higher curd ratio also helps — more dairy and less added acid means less reduction is needed to reach *lehya* thickness, so the sauce spends less time on the heat.

### Is a 2-hour cold citrus marinade plausible for the Śuṇṭhaka?

No, on both counts. Philologically it misreads `pari-svid` (S1). Practically it does nothing: 20 ml on 1 kg doesn't submerge the meat, acid reaches 1–3 mm in hours against 4 cm cubes, and 2 hours at fridge temperature does not touch collagen. The text's step, read as a simmer, is the one that actually improves the dish — it renders and softens the belly so that a 15–25 minute grill can finish it, which is currently the Śuṇṭhaka's weakest point.

---

## 4. The chain between the two recipes

### Confirmed: 1447 does take the śuṇṭhakas from 1427–1435

`प्रक्षिप्य शुण्ठकांस्तत्र मृदु कुर्याच्च पाकतः` — "having thrown the śuṇṭhakas in there, make them soft by cooking." Bare `शुण्ठकान्`, no qualifier, anaphoric to the preceding recipes. **The word `मांस` does not occur anywhere in 1442–1448.** 1436 likewise opens `स्विन्नानां शुण्ठकानां` with the same back-reference, and all four of Damon's published *Cakkalikās* recipes already carry `related: [roast-pork-sunthaka]`.

Consequences:

- The translation's "add **meat** śuṇṭhakas" inserts a word. Defensible (`शुण्ठक` is used generically for meat pieces at 1438 and 1458), but it loses the definiteness. Suggest "add the *śuṇṭhakas*".
- "Sour Meat Glaze" and "750 g cooked roast pork, **lamb, or goat**" generalize away the referent. The dish is the sauce for the pork śuṇṭhakas just described. Suggest keeping the generalization if Damon wants it, but leading the intro with the chain: this is the sauce the text puts the preceding roast pork into.
- **`sour-meat-glaze.md` has no `related` field.** Add `related: [roast-pork-sunthaka]`. `roast-pork-sunthaka.md` has none either, and has five children pointing at it (four *Cakkalikās*, plus this glaze) — it should point back at all five.
- The text names no dish here, unlike puryala (1461), bhaditraka (1465), nandyāvarta (1539), or kavacandī (1456). "Glaze" is the reconstructor's word. **`प्रलेहक`** is the text's own term and the one the existing note is already gesturing at — *Pralehaka* would be a source-anchored title.

### The quantities don't chain

Śuṇṭhaka starts from 1 kg raw skin-on belly. Yields:

| Route | Loss | Cooked, skin on | Cooked, skinless (skin ≈ 90 g on 1 kg) |
|---|---|---|---|
| As written: 4 cm cubes, grilled 15–25 min to 71 °C | ~22–28% | ~730–780 g | ~640–690 g |
| As the text implies: roast to `घृतबिन्दुस्रव`, fat freely dripping | ~32–40% | ~600–680 g | ~520–600 g |

The Glaze asks for **750 g cooked**. That is satisfiable only on the leanest reading with the skin left on, and impossible once you either render properly or remove the skin — a 1 kg belly roasted to the point the text names (`घृतबिन्दुस्रव`, fat freely dripping) and skinned as the *Cakkalikās* require lands around 520–600 g.

And **500 g cooked skinless belly is already the house unit for a child of this recipe, set four times over**: all four published *Cakkalikās* (sweet curd, mustard-citron curd, fried sweet, sour citron) open with "500 g cooked skinless roast pork belly, chilled". They are four alternative treatments of one batch, so a cook makes one — but the Glaze is the only child of the śuṇṭhaka asking for more than 500 g, and it asks for half again as much.

**Suggested change:** drop the Glaze to **500 g cooked meat**, which (a) matches the house unit Damon already set in the published *Cakkalikās*, (b) makes one 1 kg śuṇṭhaka batch a coherent parent for one child, and (c) fixes the sauce-to-meat ratio at the same time — ~190 ml of reduced sauce over 500 g is a glaze at ~0.4 ml/g, whereas over 750 g it is thin coverage at ~0.25 ml/g. One edit, two problems. Alternatively scale the Śuṇṭhaka up to 1.5 kg raw and say so.

Minor: the Glaze says "cut into bite-sized pieces". The śuṇṭhakas arrive already cut (1433) — no re-cutting needed.

### `प्रलेहकं` and the fivefold classification

1344–45 gives `भोज्यं भक्ष्यं तथा पेयं लेह्यं चोष्यं` — chewed food, morsels, drink, **licked preparations**, sucked things. `प्रलेहक` at 1446 is a deliberate placement in the fourth class, and the chapter's internal yardstick for it is 1375's `पायसं लेहने योग्यं` — thick milk-pudding consistency. So the sauce should be **thick enough to lick off the fingers**, and 1452's `शोषितेऽम्लरसे` ("when the sour juice has dried away") confirms the family cooks down to nearly dry. The existing note has the right instinct; naming the classification and the 1344–45 cross-reference would earn it. See G5.

---

## 5. Unresolved philology

Label these as uncertain rather than glossing them confidently.

| # | Term | Status |
|---|---|---|
| **U-S1** | **Verse 1432 in its entirety** — `आमूर्ध्नः प्रस्थापयति कर्तरिकापरिपाटितम् । सारीफलकररेखाभ्यां चित्तवत् स्यादायामशुण्ठकम्` | **Corrupt.** Three of four pādas are metrically defective (9, 9, 10 syllables against anuṣṭubh's 8). `प्रस्थापयति` is a present indicative amid a sea of optatives. `सारीफलक` is a board-game board and `कररेखा` the lines of the palm, so the sense is plausibly "scored in a grid like a game-board and the lines of the hand", but that reading rests on emending the pāda. `चित्तवत्` ("like a mind") is probably for `चित्रवत्` ("patterned"). What *is* legible is `आयामशुण्ठकम्` — "the long śuṇṭhaka" — which does support the strip reading, and `कर्तरिकापरिपाटितम्`, "split with a knife". **This is the verse that defines what a śuṇṭhaka is, and it is the least trustworthy verse in the passage.** Per `manasollasa.ts`'s own stated convention, this deserves a bracketed note in the translation: e.g. `[the reading of this verse is corrupt]`. |
| **U-G1** | `शशिधूप` (1448) | `शशिन्` is attested as a synonym for camphor (via the shared whiteness — cf. `शशिविशदकर्पूर` in the *Saundaryalaharī*), and the chapter uses camphor as a perfume elsewhere (`कर्पूर` at 1437, 1475). So "camphor smoke" is the best available reading, but it is an inference from a synonym, not a secure identification. Label it "probably camphor". |
| **U-G2** | `अम्लवेतस` (1442) | **The genuinely contested one** — described in the Ayurvedic literature as among the most disputed drugs in the corpus. *Garcinia pedunculata* fruit in Bengal and Assam; dried intertwined leaf-stalks of *Rheum emodi* (Himalayan rhubarb, "Gucchi") almost everywhere else. `वेतस` normally denotes a reed or cane, which favours the stalk reading. Keep it transliterated in the translation (as it already is — correct) and say in the notes that it is contested and omitted. Rhubarb stalk is the practical stand-in if Damon ever wants it. |
| **U-G3** | `नखधूप` (1448) | *Identifiable* but exotic: onycha, the dried operculum of a marine snail, burned as incense — sold as *nakhla* in South Asian and Middle Eastern spice shops. Confusable with Ayurvedic `नखी`, a land-snail drug. Worth naming in the translation rather than collapsing to "another aromatic smoke". |
| **U-S2** | `गण्डकेन सदण्डेन` (1428) | Some kind of long-handled vessel or dipper for pouring the scalding water. The exact implement is not pinned down; "a long-handled dipper" is safe. |

### Transcription integrity: metrical diagnostic

I scanned every pāda in both passages against anuṣṭubh's 8+8+8+8.

- **1442–1448 (Glaze): all 28 pādas scan clean.** The transcription is very likely sound.
- **1427–1435 (Śuṇṭhaka): 8 of 36 pādas are defective** — 1427d (9), 1429a (7), 1429b (10), 1432a (9), 1432b (9), 1432d (10), 1434c (7), 1435c (9).

Two of these have a probable resolution worth checking against the printed edition rather than accepting:

- **1428b `तावसिञ्चन्मुहुर्मुहुः`** doesn't parse — `असिञ्चन्` is an imperfect 3rd plural amid optatives. The next pāda opens `यावत्`, which demands a correlative `तावत्`. Reading **`तावत्सिञ्चेन्मुहुर्मुहुः`** restores the optative, supplies the `तावत्…यावत्` correlative, and scans at exactly 8. The translation's sense ("keep pouring until the bristles pull free") is right either way, but the Devanagari is probably wrong.
- **1434c `अथाम्लपरिस्विन्नान्`** is 7 syllables; dissolving the sandhi to `अथ अम्ल-` gives 8.

Caveat: anuṣṭubh in technical śāstra is often loose, and some of these may be readings in the printed edition rather than transcription slips. But a 0/28 versus 8/36 contrast between two adjacent passages is a real signal. **Recommendation: check 1427–1435 against Shrigondekar's GOS edition before flipping this recipe to `published`.** Per CLAUDE.md, original-language text must come from a verified source, and this passage looks like it has drifted.

---

## 6. Remaining translation omissions

Not individually decisive, but the translations are doing a lot of compressing. Listed for a single pass.

**Śuṇṭhaka (1427–1435).** The nine-verse carcass procedure is compressed to "Clean a pig by scalding or singeing and remove the bristles." Dropped: the white cloth laid over the pig (1427); the long-handled dipper and repeated pouring (1428); "until the bristles come out easily **by hand**" (1428); the **clay coating** before the straw fire (1429, `कर्दमालिप्तं` — this is a real technique, not just "singeing"); the separate straw-burning of the **lower legs, knee-joint to foot** (1430); washing "when it has hardened" until it is **pale like a lotus-stalk, laid flat on a mat** (1431); all of 1432 (see U-S1); `अमृतोपमान्` (1435). Damon's note already says the carcass work is omitted from the *method*, which is right — but the `translation` field is supposed to be the translation, and the neighbouring entries in `manasollasa.ts` (the 1417–26 anatomy list, the 1469–75 blood passage) keep this level of procedural detail. Recommend restoring the clay-coating alternative, the two-stage treatment of the legs, and the by-hand bristle test at minimum.

**Glaze (1442–1448).** Dropped: `गन्धार्थं` / `वर्णार्थं` / `रुच्यर्थं` — "for aroma", "for colour", "for relish". These three purpose-clauses are the distinctive rhetorical feature of the passage and they are *useful to a cook*: turmeric is in there for colour only, which is precisely why ½ tsp is the right amount. Also dropped: `सुसूक्ष्मं` (the ginger is to be very finely cut); `मृदः स्थाल्यां` (earthen pot); `पाकविशारदः` / `बुधः` (the formulaic "expert cook", which the file's other entries sometimes keep); `प्रलेहकं` as a classification (G5); three of the four fumigants (G3). Also: the reconstruction's finish — "an additional pinch of asafoetida dissolved in a teaspoon of hot ghee **if desired**" — understates `धूपयेत्`, which is an instruction, and should pick up cumin alongside the asafoetida.

---

## 7. House-style and metadata nits

- **Title asterisks.** CLAUDE.md marks loan words with `*asterisks*`. The published *Cakkalikās* titles do this; the drafts don't. `Roast Pork *Śuṇṭhaka*` on publication.
- **`**Notes**` → `## Notes`.** Both drafts use bold; the published Mānasollāsa recipes use an H2. Flip on publication.
- **`related`.** Missing on both files. `sour-meat-glaze.md` needs `related: [roast-pork-sunthaka]`; `roast-pork-sunthaka.md` should point at all four *Cakkalikās* and the glaze.
- **Glaze intro, sentence 2.** "Tamarind, yoghurt, pomegranate, and lemon produce the layered acidity requested by the source" — restates the ingredient list, and misdescribes the source (see J-G2). Cut it; replace with the chain (§4) or the *lehya* point (G5).
- **Śuṇṭhaka note 2** — "*śuṇṭhaka* here is a cut or preparation name and does not mean dried ginger" — is correct and worth keeping. It can be strengthened: the chapter uses `शुण्ठी` for actual dried ginger at 1449 and 1547, so both words genuinely coexist in the same text a few verses apart.
- **Citron.** The Glaze's `30 ml lemon juice` silently stands in for `रसं मातुलिङ्गस्य`, citron juice. The published citron-using *Cakkalikās* carry the note "Citron is hard to find; lemon pulp with a little finely grated peel is the closest substitute." The Glaze should carry the same note for consistency.
- **Square brackets.** Neither `translation` field uses the bracketed-uncertainty convention that `manasollasa.ts`'s own header promises. 1432 is the obvious place for one (U-S1).
- **`manasollasa.ts` duplication.** The 1436–1441 entry is repeated **four times** verbatim in the source-text array (lines 130–148), once per *Cakkalikās* recipe. Presumably an artifact of generating the file from the recipes rather than from the text. Cosmetic, but it will render as four identical blocks on the source page. Out of scope here; flagging in passing.
