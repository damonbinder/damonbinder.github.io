# Mānasollāsa 3.13.1476–1498 — translation and reconstruction audit (batch 6)

*Created 2026-07-25 12:09.*

Scope: the seven `status: draft` recipes covering 3.13.1476–1498 — the roast-meat salad, the *māṃsa-vaṭaka* trio, the stuffed vegetables, *vaṭimaka*, *pañcavarṇī*, *antra-śuṇṭhaka*, and *maṇḍalī*. All seven were edited; `src/data/sources/manasollasa.ts` was not touched and needs a re-sync of all seven translations afterwards.

## Summary

**All seven had substantive errors.** The single most consequential is a case-marking mistake in the *māṃsa-vaṭaka* trio that reversed the construction of the dish. 1480a–b reads `चूर्णीकृतं तु यन्मांसं गोलकैस्तद्विवेष्टयेत्` — "the meat which has been reduced to *cūrṇa*, **that** (`तद्`, accusative) one should envelop **with the balls** (`गोलकैः`, instrumental)". The translation had it the other way round: balls at the centre, mince wrapped round the outside, and a note conceding that "the source describes a filled centre but does not identify a separate filling". It does identify it. The text runs **two** meat preparations in parallel — one wet-ground on the stone until `पिष्टवच्चिकणं`, sticky like dough, the other only `चूर्णीकृत`, reduced to a crumb — and 1480c names the result `चूर्णगर्भान् वटकान्`, "*cūrṇa*-cored *vaṭakas*". The paste is the casing; the crumb is the filling.

That error propagated. The stuffed-vegetable recipe's ingredient list called for "seasoned meat **paste** from the māṃsa-vaṭaka recipe", but 1483d fills the eggplant with `तेन मांसेन`, "that meat", which 1485c then names `चूर्णमांसेन` — the crumb, not the paste. So 1485 independently corroborates the two-track reading, and the vegetables were being stuffed with the wrong one of the two.

Second: **`कालखण्ड` is the liver, securely.** The Sanskrit, Kannada, Marathi, and Nepali lexica all give the liver for this exact compound ("the black piece"), with an attested citation. The *Pañcavarṇī*'s note — "may be liver or another dark organ; the identification is not secure" — and its intro's "most plausible practical interpretation" both understated a settled word. This is the same defect the Glaze audit caught: uncertainty assigned to a term that has none. The genuinely open question in that recipe is different and was not mentioned at all (see below). **This also affects two files outside my set** — `varna-sunthaka-liver-and-fat-skewers.md` (1499–1501) and `kalakhanda-preparations.md` (1502–06) both turn on the same word.

Third: **the *Pañcavarṇī* as written ruins the liver.** All four materials go into one pot and simmer "until the intestine is tender". Lamb intestine wants 1½–2 hours; liver is grey and grainy after ten minutes. The method now holds the liver back and drops it into the already-reduced sauce for four to six minutes.

Fourth: **`दन्तशठ` was called "uncertain and omitted" in the *Maṇḍalī*** — the identical wrong note the Glaze audit flagged three weeks of verses earlier. It is the common lime (Monier-Williams, *Citrus acida*); 1494 asks for two separate citrus elements and the recipe carried only one.

**Before Damon cooks anything from this batch:** hold the liver back in the *Pañcavarṇī*; drop the *bhūṣikā* frying oil to 165°C and give it 8–10 minutes, because 1481 says `त एव वटकास्`, "those very same *vaṭakas*", so they are full-size filled balls and 175°C burns them before the core is safe; simmer the *antra-śuṇṭhaka* intestine 45–60 minutes, not 20; and split the stuffed-vegetable timings, because ridge gourd collapses in the window eggplant needs.

**Ruling on the 1478 boundary: the seam is mid-verse, at the hemistich.** 1476–1478ab is the salad; 1478cd–1482 is the *vaṭaka* trio. Both files claim 1478 correctly, both print the whole verse, and each translates only its own half. Argument below.

| Recipe | Confirmed | Judgement calls | Unresolved |
|---|---|---|---|
| Roast-Meat Salad (1476–78ab) | 3 | 2 | 2 |
| *Māṃsa-Vaṭaka* trio (1478cd–82) | 6 | 3 | 1 |
| Stuffed vegetables (1483–85) | 4 | 2 | 2 |
| *Vaṭimaka* (1486–87) | 2 | 2 | 1 |
| *Pañcavarṇī* (1488–91) | 4 | 2 | 1 |
| *Antra-śuṇṭhaka* (1492–93) | 3 | 1 | 0 |
| *Maṇḍalī* (1494–98) | 4 | 1 | 1 |

Transcription is in good shape: **95 of 96 pādas scan clean** as *anuṣṭubh*, the one exception being 1483a. Table in §9.

---

## 1. The 1478 boundary

The two recipes overlap on 1478 and the brief's guess was right: the pivot to `आमं मांसं` is the seam, and it falls at the hemistich break.

**1478a–b closes the salad.** `मिश्रयित्वा तु तन्मांसं हिङ्गुधूपेन वासयेत्` — "having mixed that meat, he should perfume it with asafoetida smoke." `तन्मांसं` is anaphoric to `अङ्गारभृष्टकं मांसं` at 1476a, the ember-roasted meat that has been chopped and dressed across the two intervening verses. Nothing in the trio has a `तत्` for it to point at.

**1478c–d opens the trio, and cannot stand alone.** `आमं मांसं च पेषण्यां हिङ्गुतोयेन सिञ्चितम्` — "and raw meat, on the grinding stone, sprinkled with asafoetida-water". `आमं मांसं` is accusative with two participles (`सिञ्चितम्` here, `सहितं` in 1479a) and **no finite verb until `पेषयेद्` in 1479b**. Syntactically the hemistich belongs to 1479, not to 1478a–b.

Three corroborations. `च` at 1478c is the connective introducing the new item. `आमं` (raw) is in explicit contrast with `अङ्गारभृष्टकं` (ember-roasted) — the salad starts from cooked meat, the trio from raw. And the two asafoetida constructions in adjacent pādas are the author's own distinction: `हिङ्गुधूपेन वासयेत्` (fumigated with asafoetida smoke) against `हिङ्गुतोयेन सिञ्चितम्` (sprinkled with asafoetida water). One is a finish, one is a wetting agent for grinding.

**What I did:** left both `source` fields alone (they are accurate at verse granularity, and trimming to "1476–1478ab" risks `citationNumber()`), left both `original` fields alone, and added a matching note to each file stating where the seam falls and that each recipe translates only its half. Anyone reading the salad page currently sees a hemistich of Devanagari with no English opposite it; the note is what makes that legible.

---

## 2. Roast-Meat Salad, 1476–1478ab

### Confirmed

**S1. `केसराम्ल` is the citron again, not a second sour fruit — and Damon has already ruled on this in a published file.** The translation had "citron pulp, fresh ginger, **sour citrus pulp**", making `केसराम्लैः` a separate ingredient. But `pork-cakkalikas-sour-citron.md` (published) renders the same word at 1440 as "*kesarāmla* [a second name for the citron]" and carries the note: "1440 names the citron twice, once as *mātuluṅga* and once as *kesarāmla*, which the lexica also gloss as the citron. There is no second, separate sour fruit in the verse."

1440 and 1477 are the **same triple in the same order**: `मातुलुङ्गस्य ... केसरैः । सूक्ष्मैरार्द्रकखण्डैश्च केसराम्लैर्मनोहरैः` (1440) against `मातुलिङ्गस्य केसरैः । आर्द्रकैः केसराम्लैश्च` (1476d–1477a). Citron *kesara*, finely cut fresh ginger, *kesarāmla*. Fixed to match the published gloss.

**S2. `तिलशः` does not mean strips.** The translation had "very small strips or sesame-seed-like pieces" and the method "very fine strips or mince it by hand". `तिलशः` is the distributive adverb from `तिल`, sesame — sesame-*grain*-wise, i.e. into tiny particles. There is no strip word in the verse, and "strips" undercuts the file's own lean-cut note, which turns on the surface area a sesame-fine cut produces. Both fixed to sesame-sized pieces.

**S3. `चूर्णकैः` and `कर्तर्या` restored.** 1477d has the asafoetida and rock salt as `चूर्णकैः`, powders, and 1476c specifies the knife (`कर्तर्या`). Small, but the `translation` field is meant to be a translation.

### Judgement calls

**J-S1. Intro rewritten.** The old intro — "A finely chopped warm meat salad sharpened with citrus, ginger, allium, cumin, and pepper" — restated the ingredient list, which CLAUDE.md rules out. Replaced with the two facts a reader actually needs: the meat is already cooked when the recipe starts, and the cut is what makes the dish. Revert this one freely if the old line was deliberate.

**J-S2. Lemon juice relabelled rather than removed.** Under the corrected S1 reading the verse asks for one citrus, so the 15 ml of lemon juice no longer stands for a second one. Rather than delete it I labelled it a modern addition compensating for lemon being milder than citron, and added the citron-substitute note the published *cakkalikās* all carry.

### Unresolved

**U-S1. `गृञ्जन`.** The existing note ("garlic, onion, or another allium") holds up and I have strengthened rather than replaced it. Monier-Williams: "a kind of onion or garlic or a small red variety of it (prohibited as food)"; the Kannada lexica give *Allium sativum* outright; one Sanskrit-English gloss adds turnip. **I checked carrot and it is not there** — no lexicon in reach glosses `गृञ्जन` as *Daucus carota*, so despite the modern Ayurvedic habit of using it for carrot I did not put that in. The one thing worth adding: this chapter already has `लशुन` for garlic and `पलाण्डु` for onion (both at 1451 and 1460), so `गृञ्जन` is probably a third, distinct allium — a small red type — rather than either.

**U-S2. `पट्ट`.** Rendered "board", which is right for a cutting surface, but `पट्ट` is also cloth. `शुद्धे पट्टे निधापयेत्` with meat about to be knifed on it favours a slab or board. Not worth a note on the page.

---

## 3. *Māṃsa-Vaṭaka*, *Bhūṣikā*, and *Kośalī*, 1478cd–1482

The heaviest rewrite in the batch: translation, intro, ingredients, method, and all notes.

### Confirmed

**V1. The wrapping was inside out (case marking).** See the summary. `गोलकैः` is instrumental, `तद्` is accusative, and `वि-वेष्ट्` puts the enveloped thing in the accusative every other time this chapter uses it: 1492 winds the intestines (`अन्त्राणि`, accusative) onto a spit-rod (`शूलयष्ट्यां`, locative); 1482 has the *cūrṇita* meat `कणिकापरिवेष्टितम्`, wrapped round with dough; 1496 coils the filled intestine into the rings. So the paste balls are the wrapper. Under the old reading the sentence was also vacuous — `तु` marks a contrast, and if the crumb and the ball material were the same thing there is nothing to contrast.

**V2. The two preparations are distinguished by texture, not seasoning.** Worth stating because it is the obvious objection to V1: could `चूर्णीकृतं मांसं` just mean "the spiced meat"? No — 1479a has already put `चूर्णेन`, spice powder, into the paste, so `चूर्ण` cannot be what separates the two. The contrast is `पिष्टवच्चिकणं` (sticky like dough) against `चूर्णीकृत` (reduced to particles).

**V3. 1485 confirms it from outside the passage.** `चूर्णमांसेन` at 1485c names the stuffing material for the vegetables, and 1483d's `तेन मांसेन` points back here. The crumb is the chapter's standing stuffing.

**V4. Three praise epithets dropped.** 1481a–b: `ख्यातास्ते मांसवटका रुच्या दृश्या मनोहराः` — "these are the renowned *māṃsa-vaṭakas*: tasty, handsome to look at, and delightful." All three gone from the translation, and `दृश्य`/`मनोहर` are load-bearing, because `भूषिका` is transparently from `भूषा`, ornament: the fried version is plausibly named for how it looks. Also dropped: `शुभे` at 1480d (locative agreeing with `आणके` — a *good* pan, not the balls), `बुधः` at 1479b, and `पेषण्यां` at 1478c, the grinding stone.

**V5. `त एव वटकास्` means the same size, so "form smaller balls" was an invention.** The method's step 3 shrank the *bhūṣikās*. 1481c says "those very same *vaṭakas*", cooked in oil. This has a cooking consequence, which is V6.

**V6. 175°C is wrong for a full-size filled ball.** A 50 g stuffed ball needs 8–10 minutes to bring a crumb core to 71°C, and at 175°C the crust is black by then. Dropped to 165°C, with the pan-then-fry sequence offered as the alternative. (A second reading of 1481c is available and would solve this outright: "those very same *vaṭakas*" could mean the already-pan-cooked ones, then fried. I did not adopt it — the naming clause implies the cooking method is the differentiator — but the two-stage version is now in the method as an option.)

### Judgement calls

**J-V1. The 400/200 split and the light salting of the crumb are mine.** The text gives no proportions and says nothing about seasoning the core. Both are labelled as mine in the notes.

**J-V2. "Wheat dough" replaces "maṇḍaka dough".** `कणिका` (1482) is glossed "wheaten flour, whether fine flour or meal" (Marathi) and "dough made of wheat flour, a premix for making different food items" (Kannada) — a Kannada gloss being about as apt as it gets for a Kalyāṇī Cālukya text. So plain wheat dough is what the word says; *maṇḍaka* is a specific named bread elsewhere in the Mānasollāsa and importing it here was an inference. The dough reading also explains the dish name: `कोश` is a sheath or pod.

**J-V3. Stated that the three dishes are alternatives.** The ingredient list reads as one shopping trip (600 g meat, 20 g ghee, 500 ml oil, 250 g dough) when a cook makes one of the three — and *kośalī* needs no paste at all. Same point the Glaze audit made about the four *cakkalikās*.

### Unresolved

**U-V1. `आणक`.** Rendered "pan" throughout the chapter, and I left it that way, but the term is not securely identified and the notes now say so. The lexica give `आणक`/`आनक` as a large drum, and as an adjective "low, inferior" — no vessel sense in reach. What pins the function down is that the chapter always sets it against exactly two other options: deep oil, and the bare fire. Four instances — 1487, 1521, 1532, 1539 — and at 1532 and 1539 the fire is specified as **smokeless** (`वह्नौ धूमवर्जिते`, `निधूमे हुताशने`). So `आणक` is a closed or drum-shaped vessel used with little fat, and a *covered* pan is closer than a bare one. The method's step 4 (brown, add water, cover) is what I take it to be.

### Title

**Keep it.** *Māṃsa-Vaṭaka, Bhūṣikā, and Kośalī* names the three dishes the text names, in order. On publication the loan words want asterisks, per house style.

---

## 4. Meat-Stuffed Eggplant, Gourd, or Radish, 1483–1485

### Confirmed

**E1. The filling was the wrong one of the two meat preparations.** "400 g seasoned meat paste from the māṃsa-vaṭaka recipe" → the crumbly *cūrṇa* meat. See V3.

**E2. `पूरभट्टाक` means "stuffed eggplant", and that is the whole point of 1485d.** `भट्टाक` is for `भण्टाक`/`भण्टकी`, which the Bhāvaprakāśa lists among the synonyms of `वार्ताक`, the eggplant — the same word as Hindi *bhaṇṭā* and the ancestor of English "brinjal". So the naming rule at 1485d (`तत्तन्नाम्ना`, "by the name of each") is: prefix `पूर-` to the vegetable's own name. A stuffed *kośātakī* is a *pūra-kośātakī*, a stuffed radish a *pūra-mūlaka*. The old translation stated the rule without letting the reader see that the flagship name already obeys it.

Note for the central re-sync: the Devanagari has `भट्टाक` with a doubled *ṭ* where the lexica have `भण्टाक`. Sense is unaffected; flagging as a possible transcription slip, not to be emended here.

**E3. `स्वादुना परिपाचयेत्` (1484d) was dropped entirely** — an instrumental, "cook it through with something savoury". This is the textual warrant for the recipe's braising liquid, so the "150 ml water or light stock" is now just stock, and the note says why.

**E4. The text bores a hole; it does not cut a lid.** `अन्तदेशस्य समीपे कृतरन्ध्रकम्` — a hole made near the end region — then `निष्कासितेषु बीजेषु`, the seeds pushed out. The method's "cut a cap … secure it with a toothpick" is a modern substitute. Realigned to the text, which also removes the toothpick.

### Judgement calls

**J-E1. Timings split by vegetable.** The single 20–35 minute window suited eggplant and destroyed ridge gourd. Now 25–35 eggplant, 30–40 parboiled daikon, 12–18 ridge gourd, with 71°C in the filling as the actual endpoint.

**J-E2. Filling reduced to "300–400 g".** Four small hollowed eggplants take roughly 60–80 g each.

### Unresolved

**U-E1. `कोशातकी`.** Luffa acutangula (ridged/angled luffa, Hindi *torai*) is the dominant identification and I kept it. But the lexica also give Luffa cylindrica and **Trichosanthes dioica**, the pointed gourd — which is the vegetable Indian cooks actually stuff with spiced mince today. Now in the notes as an alternative worth trying. The old note ("usually identified as a ridged or angled gourd") was not wrong, just thin.

**U-E2. 1484d is the least reliable line in the passage.** `परिपाचयेत्` ends both 1484b and 1484d, which has the shape of scribal repetition, and it makes `स्वादुना` hard to place with confidence — is it "cook it with something savoury" or "with its own tasty [juice]"? I went with the former, and the note flags the repetition. Scans clean at 8, so this is a suspicion rather than a metrical finding.

---

## 5. *Vaṭimaka*, 1486–1487

### Confirmed

**T1. `केसर` here is saffron, but the recipe gave a reader no way to know why** — and this is a real trap, because the recipe on either side uses `केसर` for citron pulp. The discriminator: where the chapter means citron it puts a citrus in the genitive or in compound (`मातुलिङ्गस्य केसरैः` 1476 and 1505, `बीजपूरस्य केसरम्` 1494, `मातुलिङ्गकसरे` 1438). 1486 has the word bare, heading an `-आदि` list of seasonings — exactly as 1416 does, `नागरं तीक्ष्णमेलाकर्पूरकेसरैः`, in a milk-and-sugar sweet where it stands beside cardamom and camphor and can only be saffron. Note added.

**T2. `तज्ज्ञः` restored, and the method reordered to the text's sequence.** The text leads with hot oil (`तैलेन तप्तेन परिपाचयेत्`), then the pan, then the fire; the method led with the pan. All three are still there.

### Judgement calls

**J-T1. Intro rewritten** to say the one non-obvious thing: this is the unfilled sibling of the *māṃsa-vaṭaka*, opening with the same `आमं मांसं` wet-ground raw meat. The old line restated the title.

**J-T2. The third method is embers, not flame.** `विभावसौ` is just "at the fire", but the same formula at 1532 and 1539 specifies a smokeless fire, so I read the third method as coals burned past the flame and said so in the notes. The recipe's "grill over charcoal" was already right; now it has a reason.

### Unresolved

**U-T1. `वटिमक` versus `वटक`.** Why the different suffix for what looks like the same object? Possibly a vernacular form, possibly a diminutive. Not worth a page note.

### Metre and title

8/8 clean. Title *Vaṭimaka Meat Cakes* is accurate — `वटकीकृत्य`, "having made it into *vaṭakas*". Asterisks on publication.

---

## 6. *Pañcavarṇī*, 1488–1491

### Confirmed

**P1. `कालखण्ड` is the liver and the hedge should go.** See the summary. The lexica are unanimous across four languages and the compound is self-explanatory. Both the intro sentence ("the most plausible practical interpretation") and the note ("the identification is not secure") are gone. The word recurs at 1500, 1502, 1504, and 1505, always treated as one large organ that can be skewered whole and later sliced thin — consistent with liver and with nothing else in the carcass.

**P2. `नानारूपरसावहा` (1491d) was dropped, and it is the text's own gloss on the dish name** — "bringing manifold forms and tastes". Restored. Dropping it is what made the "five colours" look like a countable claim.

**P3. The doubled quantifiers at 1490 were flattened to one.** `आर्द्रकस्य रसं स्तोकम्` — "a little ginger juice" — and `अम्लमल्पं`, "a little sour". The neighbouring recipes pour sour liquid in freely; this one marks *both* additions as small, which makes it a mustard dish rather than a sour one. Halved the ginger juice (30 → 15 ml) and the tamarind (30 → 15 g).

**P4. The liver was being cooked for the intestine's time.** Method restaged: intestine and shoulder simmered 1½–2 hours, fat in, reduce, and only then the liver for 4–6 minutes. Labelled as mine, since the text puts all four in together.

### The five colours

**The text names four materials, not five.** `अन्त्राणि` (intestine), `कालखण्ड` (liver), `मेदसः शकलाः` (slices of fat), `मांसखण्डान्` (pieces of meat), all cut `समरूपतः`, to a uniform shape. Nothing else solid enters the pot; the rest of the passage is ginger juice, sour, salt, and asafoetida water.

Two ways to make five, and I put the first in the notes as the likelier:

1. **The mustard paste is the fifth.** `राजिकाकल्कदिग्धान्` — everything is smeared with mustard paste, and it is the only other thing in the pot with a colour of its own. Pale gut, dark liver, white fat, red meat, yellow coat.
2. **`वर्ण` means "kind" and the count is nominal.** `वर्ण` is "class, category" as readily as "colour" — it is the word in *cāturvarṇya*. The chapter's own gloss (`नानारूपरसावहा`) is about variety rather than arithmetic, and at 1501 a skewer alternating nothing but fat and liver is a `वर्णशुण्ठक`, which shows `वर्ण` in this section tracking the visible materials being combined.

Either way, **nothing licenses adding a fifth solid**, which is the practical conclusion: the reconstruction's four meats plus mustard already match the text. What was wrong was the silence — the title said five and the intro listed four.

### Judgement calls

**J-P1. Concrete intestine-cleaning added to step 1** (strip, invert, salt-and-flour scrub, repeated rinse), replacing "according to the butcher's instructions". `वारिप्रक्षालितं` is only "washed with water", so all of this is modern, but it is the difference between edible and not.

**J-P2. Intro rewritten** to state the four-versus-five gap plainly instead of hedging the liver.

### Unresolved

**U-P1. `शकलास्` at 1489a is nominative where the syntax wants accusative.** `मेदसः शकलास्तद्वत्` — the parallel `मांसखण्डांस्` in the next pāda is accusative, and 1489c resumes everything with accusative `तान्`. `शकलांस्तद्वत्` scans identically at 8, so a dropped anusvāra in transcription is the cheapest explanation. **Not emended.** One for the collation list.

### Title

*Pañcavarṇī Five-Coloured Offal Stew* is the text's own name plus a literal gloss, so it stays. If Damon wants the four/five tension off the title, *Pañcavarṇī Mustard Offal Stew* would do it, but the current title is what the text says.

---

## 7. *Antra-Śuṇṭhaka*, 1492–1493

Translation was in the best shape of the seven; the reconstruction was not.

### Confirmed

**A1. The ghee is invented.** 1492–93 adds no fat at all, and the chapter says `घृतेन सिञ्चेत्`, "baste with ghee", at 1464 when it means basting — so the silence here is meaningful, and intestine carries plenty of its own fat. The prior Śuṇṭhaka audit made the identical finding about the same invented ingredient at 1433. Removed the 15 g of ghee and the brushing step, with a note.

**A2. A 20-minute parboil leaves lamb intestine rubbery.** Chitterling-type offal wants 45–60 minutes of simmering before it will crisp rather than toughen on a grill. Also added a drying step (uncovered in the fridge), since dryness is what produces `मर्मर`, and a longer, gentler grill — the text's `तापयेत्` is "heat", not fry, and 20–30 minutes over burnt-down coals is what actually hardens the coils without scorching them.

**A3. Restored `पश्चात्`, `शूलयष्ट्याम्`, and `तेषु योजयेत्`.** `पश्चात्` is not decorative: it makes this dish structurally identical to the roast pork *śuṇṭhaka*, which also salts and peppers `पश्चात्`, after roasting (1434a–b). Together with 1432's `आयामशुण्ठकम्`, "the long *śuṇṭhaka*", the name is doing real work — something long, wound on a spit, hardened over embers, salted afterwards. Added as a note and as `related: [roast-pork-sunthaka]`.

### Judgement calls

**J-A1. Intro rewritten** around the *śuṇṭhaka*-family point and `मर्मर` (the rustle of dry leaves, so crackling-dry rather than merely browned), replacing a line that restated the title.

### Title

*Antra-Śuṇṭhaka Roasted Intestine* is accurate. Asterisks on publication.

---

## 8. *Maṇḍalī*, 1494–1498

The `किंशुकाकारैः` anchoring from the earlier sweep is preserved: it is instrumental plural agreeing with `अङ्गारैः`, so it describes the embers. Confirmed independently — and it turns out to be a useful cooking instruction (see M4).

### Confirmed

**M1. `दन्तशठ` is not uncertain and should not be omitted.** Monier-Williams glosses it — literally "tooth-blunting" — as the common lime, *Citrus acida*; the minority glosses (wood-apple, orange, carambola) are all sour fruit. 1494 asks for **two** citrus elements, `बीजपूरस्य केसरम्` and `रसं दन्तशठस्य`, and the recipe carried only one. Added 20 ml lime juice and rewrote the note. This is verbatim the same defect the Glaze audit found on the same word.

**M2. `पूर्ववत्` was dropped, and it names a procedure the site already has.** `पूर्ववच्छोधिते रक्ते` refers back to 1469–70, where the blood is caught in a pot, lightly salted, worked with the fingers, and the fibrous clots lifted out — which is `krsnapaka-blood-finished-mutton.md`. Restored to the translation, added as step 1 (strain through a fine sieve), and added `related: [krsnapaka-blood-finished-mutton]`. Not cosmetic: un-defibrinated blood gives a grainy sausage.

**M3. `कम्रासु` flattened to "forms".** `कम्र` is "lovely, desirable"; `कम्रासु` is a substantivized adjective, and the noun it implies is almost certainly `मण्डली` itself, the ring the dish is named for. That also makes 1497's `कम्रामुखानि` legible — the "mouths" of the rings, i.e. the two open ends, tied together with gut. Restored as "lovely rounds shaped like baskets", and `गृहीत्वा ... उपरि तापयेत्` restored too, since the whole point of the gut-rope is that you pick the coil up by it and hold it above the coals. (The recipe's existing note already had the suspension right; the translation didn't.)

**M4. `किंशुक` identified and bracketed.** *Butea monosperma*, the flame-of-the-forest, whose flowers are brilliant orange-red — so the comparison specifies the **ember state**: glowing red-orange charcoal with no flame left. Bracketed like the file already brackets `राजवृक्ष` [Cassia fistula], and put in the notes as a cooking instruction rather than an ornament.

### Judgement calls

**J-M1. Food safety and technique made concrete.** Added: keep the blood at or below 4°C and use it within a day or two; add the citrus **last** and fill promptly, because citrus juice standing in raw blood starts to set it; tie with a length of casing as the text does, or twine. Also noted that the passage has **no filler at all** — no rice, groats, or bread — so the result is dense and firm, and that 200 g fat to 500 ml blood is on the lean side of traditional practice. The existing poach-then-grill method is right and I left it; it is the one place in the batch where the reconstruction was already ahead of the text.

### Unresolved

**U-M1. `पेटकाकृतियुक्तासु कम्रासु`.** "Basket-shaped" is secure (`पेटक` = basket, box) and I read it as describing the concentric coils, which is what a coiled-grass basket and a coiled sausage have in common. But `कम्रा` as a feminine noun is not standard — the lexica give the adjective, plus an unrelated `कम्रा` as a percussion instrument. The implied-`मण्डली` reading is the best available; the note says as much without overclaiming.

### Title

*Maṇḍalī Blood Sausage* is accurate. `मण्डली` is "ring, coil", and `राजवृक्षफलोपमा` — like a Cassia fistula pod, long and dark — describes exactly that.

---

## 9. Transcription integrity: metrical scan

Every pāda in the seven passages scanned against *anuṣṭubh* 8+8+8+8.

| Passage | Recipe | Pādas | Clean | Defective |
|---|---|---|---|---|
| 1476–1478 | Roast-Meat Salad | 12 | 12 | — |
| 1478–1482 | *Māṃsa-Vaṭaka* trio | 20 | 20 | — |
| 1483–1485 | Stuffed vegetables | 12 | 11 | **1483a (7)** |
| 1486–1487 | *Vaṭimaka* | 8 | 8 | — |
| 1488–1491 | *Pañcavarṇī* | 16 | 16 | — |
| 1492–1493 | *Antra-śuṇṭhaka* | 8 | 8 | — |
| 1494–1498 | *Maṇḍalī* | 20 | 20 | — |
| **Total** | | **96** | **95** | **1** |

1478a–b is counted in two passages, so the unique-pāda total is 94.

**This stretch sits with the clean passages, not the corrupt one.** Prior results were 1442–48 at 28/28, 1449–52 at 16/16, and 1427–35 at 28/36. 95/96 here is the strongest run yet, and it matters for two of my arguments: `गोलकैस्तद्विवेष्टयेत्` and `श्लक्ष्ण`-style morphology are not plausibly transcription noise when every pāda around them lands on 8.

**1483a, `वार्ताकान्तदेशस्य`, is a syllable short** (7 against 8): *vār-tā-kān-ta-de-śa-sya*. `वार्ताकान्तप्रदेशस्य` would give exactly 8, and the chapter does use `प्रदेश` at 1472 (`पूर्वोद्दिष्टप्रदेशेषु`) — but that is a guess and I have not emended anything. **Recommend collating 1483–1485 against Shrigondekar's GOS edition** before this recipe goes public. Two other lines are worth putting on the same collation list without being metrical failures: 1484 ends both its hemistiches with `परिपाचयेत्` (possible dittography, and it is the pāda carrying `स्वादुना`), and 1489a has `शकलास्` where the syntax wants `शकलांस्`.

---

## 10. Files edited

All seven in `src/content/recipes/`. YAML frontmatter on all seven re-parsed with `yaml.safe_load` after editing — all valid, all required keys present. Every `original` field byte-compared against `HEAD` — **all seven unchanged**. No `status` changed. `npm run build` not run, per the brief.

| File | What changed |
|---|---|
| `roast-meat-salad-with-citron-and-ginger.md` | `translation` (S1–S3); intro; method step 1; `gṛñjana` note extended; three notes added (*kesarāmla*, citron substitute, 1478 seam). Today's lean-cut note and meat line untouched; `गृञ्जनैस्तत्प्रमाणकैः` → "*gṛñjana* cut to the same size" preserved. |
| `mamsa-vataka-bhusika-and-kosali.md` | `translation` rewritten (V1–V5); intro; ingredients split 400 g paste / 200 g crumb; method rebuilt to 6 steps with temperatures; all notes replaced; `related` added. |
| `meat-stuffed-eggplant-gourd-or-radish.md` | `translation` (E2–E4); intro; filling changed to the *cūrṇa* meat; method realigned to boring a hole, timings split by vegetable; notes replaced; `related` added. |
| `vatimaka-meat-cakes.md` | `translation` (T2); intro; method reordered to lead with oil and to grind first; two notes added (*kesara*, the three-method formula); `related` added. |
| `pancavarni-five-coloured-offal-stew.md` | `translation` (P2, P3, `samarūpataḥ`); intro; ginger juice and tamarind halved; method restaged to protect the liver, with cleaning; all notes replaced; `related` added. |
| `antra-sunthaka-roasted-intestine.md` | `translation` (A3); intro; ghee removed; method rebuilt (cleaning, 45–60 min simmer, drying, longer grill); notes extended; `related` added. |
| `mandali-blood-sausage.md` | `translation` (M2–M4); intro; lime juice added; straining step added; all notes replaced or extended; `related` added. `किंशुकाकारैः` → embers anchoring preserved. |

### Knock-ons outside my set

Flagging for whoever holds these files or does the central re-sync — I did not touch any of them.

- **`src/data/sources/manasollasa.ts` needs all seven English entries re-synced.** They currently carry the old translations.
- **`varna-sunthaka-liver-and-fat-skewers.md` (1499–1501)** and **`kalakhanda-preparations.md` (1502–06)** both turn on `कालखण्ड`. If either hedges the liver, the hedge should go — the lexica are unanimous.
- **`krsnapaka-blood-finished-mutton.md` (1469–75)** is now pointed at by `mandali-blood-sausage.md` and should point back; it is the source of the `पूर्ववत्` blood purification that two later recipes depend on.
- **`roast-pork-sunthaka.md`** is now pointed at by `antra-sunthaka-roasted-intestine.md` and should point back. Per the earlier audit it already has five other children waiting for a reciprocal link.
- **`related` is inert.** It is in the schema and in twelve content files, but nothing under `src/pages/` or `src/lib/` reads it, so none of these links render yet. Safe to add; worth wiring up if the cross-references are meant to be visible.

### House-style item: UK spelling in the recipe corpus

The recipe files run 32 British `colour*`/`flavour*` against 9 US `color*`/`flavor*` (several of those Latin), and `labelled` appears 20 times. My new prose is US, except in `pancavarni-five-coloured-offal-stew.md`, where the **title and slug** are "Five-Coloured", so I kept the body British for internal consistency rather than have the page contradict its own heading. **Recommending rather than doing:** retitle to *Pañcavarṇī Five-Colored Offal Stew* and rename the file, then normalize that file's body. `centre` is also throughout the corpus, including in text I preserved, so I left it alone. Worth one dedicated sweep across the whole `recipes/` directory rather than piecemeal fixes from ten concurrent agents.
