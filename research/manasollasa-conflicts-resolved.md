# Mānasollāsa — the two audit conflicts adjudicated

*Created 2026-07-25 12:16.*

**Verdict 1 (ratio): 300 g yoghurt against ~100 ml of concentrated sours, for 500 g of meat — the committed inversion stands in direction, and the number comes down from 350 g.** Neither audit's reason for its number was sound, so the reasoning is replaced rather than the recipe: the deciding argument is that the text lets you use a *single* sour, so the curd must carry the body, and the constraint on the number is total time on the heat, not pH. **Verdict 2 (`धूप`): yes, it is smoke, 26 tokens out of 26 with no counterexample, and the `spiced-takra.md` note was a false translation claim — reworded, method untouched.** The chapter also has a genuine hot-ghee bloom, at 1459–60, so the substitution is period-appropriate rather than modern; and camphor is smoke at 1573 (the *majjikā* is unblocked) but is scattered on as powder at 1475 and 1416, so "camphor is never ingested" is false as a general claim.

Scope: `sour-meat-glaze.md`, `spiced-takra.md`, `roast-meat-salad-with-citron-and-ginger.md` edited. `src/data/sources/manasollasa.ts` read only, not touched. No build run; all three files' frontmatter parsed with `yaml.safe_load`, all `related` slugs resolve, and all three `original` Devanagari fields verified still present verbatim in `manasollasa.ts`.

---

## Question 1 — the curd-to-acid ratio

### Both audits were half right, and neither had a valid reason for its number

| Claim | Whose | Verdict |
|---|---|---|
| `दध्ना विमिश्रयेत्` puts the sours *into* the curd | pork audit | **Right** — direction confirmed |
| ...and therefore curd is the bulk base | pork audit | **Wrong** — the instrumental carries no proportion |
| The *vaṭaka* sauce (1405–07) is a ratio precedent | pork audit | **Wrong** — its stabilizer is rice starch |
| More curd means less reduction is needed | pork audit | **Wrong** — yoghurt is ~85% water; more curd means *more* to evaporate |
| The *vaṭaka* precedent is invalid | batch 3 | **Right**, and this is batch 3's real contribution |
| The inverted glaze sits at pH 4.0–4.3, near the isoelectric point | batch 3 | **Wrong** — that is the *vaṭaka* sauce's pH, imported into a different recipe |
| Therefore the original strongly-acidic version was safer | batch 3 | **Does not follow** — the original's problem was never pH |

**On the grammar.** `दध्ना विमिश्रयेच्चिञ्चां` (1442) is instrumental curd, accusative tamarind. That fixes the direction of the operation and nothing else. The decisive control is **1477, the Roast-Meat Salad**, which runs the same root `मिश्र्` the other way round: `आर्द्रकैः केसराम्लैश्च ... मिश्रयित्वा तु तन्मांसं` — instrumental for the seasonings, accusative for the meat, and the instrumental items there are 15 g of ginger against 500 g of meat. So `मिश्र्` + instrumental is a vehicle/accompaniment marker with no proportional force in this author's usage. Confirmed twice more: `किंचित्तैलं विमिश्रयेत्` (1445, four verses later, same verb — the accusative is an explicitly *small* quantity of oil) and `आर्द्रकस्य रसं स्तोकम् ... विमिश्रयेत्` (1490, accusative, "a little ginger juice").

**Every other `दध्न्` construction in the chapter, as asked.** Eight occurrences:

| Verse | Form | Case | Proportion implied? |
|---|---|---|---|
| 1405 | `दध्ना सुमथितेन` | instrumental, paired with `आरनालेन` | No — batch 3's own §S-J2 concedes the text licenses no number |
| 1437 | `मथिते ... दध्न्येला-` (= `दध्नि`) | **locative**, with `तत्र ... क्षिपेत्` | Yes — curd is a bath things are thrown into |
| 1439 | `धूपिते ... दध्नि ... क्षिपेत्` | **locative** | Yes — same |
| 1442 | `दध्ना विमिश्रयेत्` | instrumental | No |
| 1504 | `दध्ना राजिकया वा` | instrumental, alternating with mustard *paste* | No — a coating, not a bath |
| 1553 | `जम्बीराम्लेन दध्ना वा` | instrumental, alternating with lime juice | No |
| 1574, 1596 | `दधि` | accusative/nominative | n/a |

The pattern is clean and it cuts against the pork audit's argument: **when this chapter means "curd is the bulk medium you immerse things in", it uses the locative** (1437, 1439, the *cakkalikā* baths). 1442 uses the instrumental. Don't lean on the case marking at all.

### What does settle it: the text lets you use one sour

1442–43 offers **six alternatives** — `किंवा`, `अथवा`, `वा`, `वा`, `वा` — and only then licenses combining `द्वित्रान्`, two or three. So the minimum legal instantiation is **curd plus one sour plus the spices**, and 1446 requires that to reduce to a `प्रलेहक`, a lickable mass. Curd plus `रसं दन्तशठस्य` — lime juice — plus a teaspoon each of coriander, cumin, and turmeric cannot become a lickable mass unless the curd is the body of it. The recipe only works at its minimal instantiation if curd is the bulk. Neither audit made this argument, and it is the only one that does the job.

So the committed inversion is right in direction. It is right for a reason the pork audit did not give.

### The chemistry, worked

**pH.** Yoghurt 4.2–4.4, tamarind concentrate 2.5–3.0 (tartaric), pomegranate molasses 2.5–3.0, lemon 2.2–2.4 (≈5.5% citric).

| Mixture | Titratable acid | Estimated pH |
|---|---|---|
| Original: 100 g yoghurt + 30 g tamarind + 100 ml pom juice + 30 ml lemon | ~7 g in 260 g, little buffering | **~3.0** |
| Committed: 350 g yoghurt + 30 g tamarind + 40 ml molasses + 30 ml lemon | ~7–8 g in 460 g, heavy casein/phosphate buffering | **~3.5** |
| Batch 3's claimed figure for the committed version | — | 4.0–4.3 |

Batch 3's number is too high by most of a pH unit, and the reason is that it computed for its own recipe. The *vaṭaka* sauce is yoghurt plus a *mildly* sour rice ferment, and that genuinely does land near 4.2 — right at casein's isoelectric point, which is batch 3's valid finding about its own dish. The Glaze's sours are tamarind concentrate, pomegranate molasses, and lemon; 100 ml of those into 350 g of yoghurt still drives you to ~3.5. **Both candidate glaze ratios sit well below the isoelectric point. The pH difference between them is not the operative consideration.**

**Casein.** Aggregation is maximal at the isoelectric point, pH 4.6 — that is why yoghurt sets. Below it casein takes net positive charge and partially re-disperses, so in principle the more acidic mixture is the more stable one, which is what the pork audit noticed and then argued past. Three things spoil that as a design principle here:

1. **Salt.** 1½ tsp ≈ 9 g is ~2% of the mixture, ≈0.34 M — enough ionic screening to collapse exactly the electrostatic repulsion that the low pH was supplying. The acid-stabilization route is unavailable in a salted sauce.
2. **Heat is irreversible.** Denatured β-lactoglobulin complexes with κ-casein and coarsens aggregates regardless of pH, and a reduction holds the sauce there for tens of minutes.
3. **The endpoint is a paste, not a pourable sauce.** `प्रलेहक` is the `लेह्य` class of 1344–45, and the chapter's yardstick is 1375's `पायसं लेहने योग्यं`. At ~50% solids in a spice- and tamarind-loaded paste, aggregate size is invisible. The "split sauce" failure mode is a failure mode of a pourable curd sauce. Both audits stress-tested the wrong dish.

**So what is the stabilizer, with no starch?** The oil, and only because the endpoint is a paste. `किंचित्तैलं विमिश्रयेत्` (1445, and note it is `तैल`, oil, not ghee) after the strain gives a continuous fat phase that holds the protein solids in suspension — the same reason a *dahi* masala reads smooth once it has cooked out into its fat. The rest of the protocol is a competent particle-size control rather than a thermodynamic stabilizer, and it is sufficient at either ratio:

| Element | What it actually does |
|---|---|
| `गालयेत्सितवस्त्रेण` | Breaks the gel to a homogeneous fluid so heat-set aggregation happens uniformly and small, and removes fibre/grit that would be *mistaken* for curds |
| `किंचित्तैलं विमिश्रयेत्` (after) | The real safeguard — coats aggregates, and provides the fat phase the finished paste is suspended in |
| `मृदावग्नौ` | Below the boil; boiling is what makes coarse curds |
| `दर्वीघट्टनपूर्वकम्` | Shear keeps aggregates small; prevents a scorched layer that locally boils |
| `मृदः स्थाल्यां` | Low conductivity, no hot spots, no metal reacting with a pH-3 sauce |

**Time on heat, which is the real constraint and the reason the number comes down.** Yoghurt is ~85% water, so the pork audit's "more dairy means less reduction is needed" is arithmetically backwards:

| Version | Water to evaporate | Gentle simmer, wide pan | Finished sauce on 500 g meat |
|---|---|---|---|
| Original (100 g curd) | ~120 ml | 20–25 min | ~140 g (0.28 g/g) |
| Committed (350 g curd) | ~300 ml | 45–70 min | ~250 g (0.50 g/g) |
| **Settled (300 g curd)** | ~250 ml | **30–45 min** | **~200 g (0.40 g/g)** |

Then 1447 adds 15–25 minutes with the meat in. The committed version puts the curd on the heat for over an hour, which is the one respect in which it is worse than what it replaced. 300 g plus the two concentration steps the file already has (pomegranate reduced separately, tamarind as concentrate rather than soaked pulp) holds it to about half an hour, and lands the finished sauce at the 0.4 g/g the pork audit itself identified as a glaze. 1447's `भावितांश्च रसैः सर्वैः` — the meat *saturated* with all the juices — is the reason not to cut further than that.

### Āmalaka and the other five, as asked

No starch anywhere in the list. Three pulps bring body, three juices do not.

| Sour | Body | Notes |
|---|---|---|
| `चिञ्चा` tamarind | Pulp, ~2–3% pectin, high soluble solids | Best body of the six; the text's first option |
| `दाडिमसारक` pomegranate | Sugar-based viscosity only | No pectin worth counting |
| `आमलकं पिष्टं` amla | Pulp, ~1–2% pectin | See below |
| `अम्लवेतस` | Pulp or stalk either way | Contested identity; body either way |
| `मातुलिङ्ग रस` citron | None — the text says `रस`, juice | The albedo would bring pectin; the text doesn't ask for it |
| `दन्तशठ रस` lime | None | |

**Āmalaka cuts both ways and is not the missing stabilizer.** Its pectin is a real stabilizer for acidified dairy — high-methoxyl pectin below pH 4 is the industrial answer for exactly this problem. But amla is heavily tannic (emblicanin, gallic and ellagic acid), and polyphenol–casein complexation is the astringency mechanism: it binds the protein and drags the sauce dry and puckering. Its titratable acidity is also modest (~1.5–2%), so much of its perceived sourness is astringency rather than acid. And `पिष्टं` is a *fresh ground pulp* — dried amla powder, which the old note offered as a substitute, is mostly tannin and fibre with the pectin degraded. **Keep the omission**; the note now says why. The honest conclusion is that the *protocol* is the stabilizer, not any ingredient in the list.

### Verdict and what was applied

**The committed change stands in direction and is trimmed in magnitude — a third option, not a revert.** Settled ratio: **300 g yoghurt : ~100 ml concentrated sours (30 g tamarind concentrate, 40 ml pomegranate molasses, 30 ml lemon), reducing to ~200 g of sauce for 500 g of meat, 30–45 minutes off the water before the meat goes in, never boiling, oil in after the strain, off the heat before the finish.**

Is the text underdetermined? **Partly, and it matters to say which part.** The text determines the *direction* (sours into curd) and, via the single-sour licence plus `प्रलेहक`, that curd is the bulk. It determines nothing about the number. The number is a kitchen answer, and its governing constraint is minutes on the heat and finished sauce per gram of meat — not pH, and not the *vaṭaka* precedent.

Changes to `sour-meat-glaze.md`:

- Ingredients: `350 g plain yoghurt` → `300 g plain yoghurt`. Sours unchanged.
- Method step 5: added the 30–45 minute range and the cooked-out doneness cue (oil beading at the edges).
- Method step 7: now takes the pan off the heat first, per 1447's `उत्तारयेत्` preceding 1448's `धूपयेत्`, and offers fumigation as the alternative finish.
- Notes: the "Curd is the base" bullet rewritten — the invalid instrumental and *vaṭaka* arguments removed, the single-sour argument and the 1477 counter-control put in their place.
- Notes: new bullet on time-on-heat, the yoghurt-is-85%-water point, and the salt (with holding a third back as optional insurance, labelled as a deviation from 1445's order).
- Notes: the oil sentence in the straining bullet corrected to the actual mechanism, and `तैल` flagged as oil not ghee.
- Notes: the *āmalaka* clause replaced with the tannin/pectin reasoning and the pulps-versus-juices split.
- Notes: smoke bullet rewritten (see Question 2).

---

## Question 2 — is `धूप` smoke?

### Yes. 26 tokens, 19 verses, no counterexample

Batch 10 is right, and the case is stronger than it argued. My counts, taken sandhi-aware over all 260 verses (batch 10's raw counts are slightly off in both directions, because `पश्चात् + हिङ्गु → पश्चाद्धिङ्गु` hides the `ह`, and because verse 1478 is quoted in two entries):

| Construction | Batch 10 said | Actual | Verses |
|---|---|---|---|
| `हिङ्गुतोय` | 6 | **5** | 1362, 1366, 1478, 1490, 1513 |
| `हिङ्गुधूप` | 3 | **4** | 1478, 1503, 1521, **1575** |
| `हिङ्गुसर्पिस्` | 1 | 1 | 1400 |
| all `धूप` tokens | "about thirty" | **26** (19 verses) | — |

Evidence, strongest first:

1. **`धूपेन जीरकस्यापि` (1448) — "with the smoke *of* cumin", genitive.** The instrumental head noun is `धूप` and cumin is a genitive hanging off it. There is no reading on which this means "with cumin". This is in the Glaze's own verse, and it is better evidence than anything either audit cited, because it isolates `धूप` as a substance in its own right.
2. **`हिङ्गुधूपेन धूपयेत्` (1503, 1521).** A cognate instrumental. If `हिङ्गुधूप` were asafoetida-as-condiment the phrase is empty; as "asafoetida incense" it is ordinary.
3. **The lexical split is total across ten occurrences.** `हिङ्गुतोय` (5×) takes only verbs of putting in — `विनिक्षिपेत्` ×2, `मेलयेत्`, `संसिच्य`, `सिञ्चितम्`. `हिङ्गुधूप` (4×) takes only verbs of scenting — `वासयेत्`, `धूपयेत्` ×2, `धूपितं`. Zero crossovers. 1478 puts one of each in adjacent pādas, which is batch 10's argument and it holds.
4. **`उत्तार्य ... धूपयेत्`, four times** (1452, 1474, 1491, 1529) — lift the pot off the fire, *then* fumigate. That is the *dhūngar* sequence, and it is not how you would describe a tempering.
5. **`नखधूप` (1448) is inedible** — onycha, a snail operculum. Batch 10's point; it holds.
6. **Case assignment is invariant.** The aromatic is always instrumental, the food always accusative (`घृताक्तान् ... धूपयेत्`, 1400). "Fumigate X with Y", never "add Y".

Asafoetida as an ordinary ingredient is much the commonest use of all — bare `हिङ्गु`/`हिङ्गुना` in 30 verses, e.g. 1466 `पाचयेद्धिङ्गुना सह`, 1519, 1508, 1365. So batch 10's three-way table slightly over-organizes. The precise claim, and the one that is airtight: **wherever the word `धूप` is present it is smoke, 26 times out of 26.**

### The chapter does have a hot-ghee bloom — but it is not `हिङ्गुसर्पिस्`

The brief asked whether the single `हिङ्गुसर्पिस्` shows a separate ghee-tempering technique. **It does not, and something better does.**

`हिङ्गुसर्पिर्भ्याम्` (1400) is an instrumental **dual** of a dvandva हिङ्गु + सर्पिस्, grouped with `जीरकेण च` under `धूपयेत्`, and the accusative objects are `घृताक्तान्` — already ghee-smeared. Ghee-on-the-food is stated separately with its own word; the ghee in the instrumental is a second ghee, inside the fumigation clause. Batch 10's reading (ghee dripped on the fumigant to make it smoke) is correct, and it is exactly the modern *dhūngar*.

But **1459–60, the puryala, is an unambiguous hot-ghee bloom with asafoetida in it**, and neither audit found it:

> `निक्षिप्योत्तारयेत्सूदो घृतं वान्यत्र तापयेत् ॥ ५९ ॥ सुतप्ते च घृते पलाण्डुं लशुनं हिङ्गुना सह । प्रक्षिप्य संस्कृतं मांसं तस्यां स्थाल्यां प्रवेशयेत् ॥ १४६० ॥`
>
> "...the cook should take it off the fire and heat ghee separately elsewhere. Into the well-heated ghee, having thrown onion and garlic together with asafoetida, put the prepared meat in that pot."

`घृतं वान्यत्र तापयेत्` / `सुतप्ते घृते ... हिङ्गुना सह प्रक्षिप्य` is a *tadka*, in this chapter, with asafoetida, described in wholly different vocabulary from `धूप`, and used exactly once against fumigation's 19 verses. 1468 (`घृतेन परिभोजयेत्`) and 1355 add ghee at the end by yet another construction.

**Consequences, and they run in opposite directions:**

- The notes are **wrong as translation claims**, and more wrong than batch 10 said: they don't merely mistranslate `धूप`, they attribute the meaning of a technique the chapter describes elsewhere, under other words, to a word that never means it.
- The notes are **right as cooking**, and better founded than "modern shortcut": the hot-ghee bloom is *in the chapter*, at 1459–60. Substituting it for fumigation borrows a period technique from four verses away rather than importing a modern one. **No method needed changing on any of the three files.** That is the whole shape of the fix — reword the claim, keep the pan.

### Was there really a disagreement between batches 9 and 10?

**No.** Batch 9 reached batch 10's conclusion independently, two verses later: its §1573 finding is "`कर्पूरधूपितं` is smoke, and the method stirs it in", and it added a note to `majjika-sweet-spiced-buttermilk.md` saying so. What it did was fail to carry that back one verse to the `takra` note it had just edited — a propagation gap, not a contradiction. Batch 3 propagated the wrong reading forward in the meantime (its §S5 blooms asafoetida in ghee "following the house reading already used in `spiced-takra.md`"), so the error had begun to spread from the published page outward. Worth a sweep of `spiced-sour-vatakas.md` and `ksira-prakara-milk-curd-sweets.md` by whoever owns them — outside my scope, not touched.

### Fumigation in practice

- **Vessel and method for a solid dish** (`dhūngar`): stand a small metal or earthen cup on the food in its pot, drop in a lump of glowing hardwood charcoal, put the aromatic on the coal, add a few drops of ghee to sustain the smoke, cover tightly 2–15 minutes, lift the cup out. This is what 1448, 1452, 1474, 1478, 1491, 1503, 1521, 1529 and 1536 describe — all of them dishes, most of them taken off the fire first.
- **Vessel-seasoning for a liquid**: smoke the *empty* vessel, then pour the liquid in and cover. This is the practical method for `धूपित` liquids — the *takra* (1572), *majjikā* (1573), *mastu* (1575), *vyañjana* (1579), *dhūpa-kāñjika* (1580) — since you cannot stand a coal cup in a drink. The text does not distinguish, but the constraint does.
- **What is burned**: the aromatic itself, on a coal. The coal is the heat source, not a flavor; the ghee is there to make the aromatic smoke rather than merely scorch. Hardwood or coconut lump charcoal, never briquettes with binders or accelerant.
- **Safety**: it produces carbon monoxide. Ventilate, do it briefly, and do not do it in a sealed room.

### Camphor — is it ever ingested?

**Dish by dish, and the general claim is false.** This matters because the good news is real but narrower than the finding invites:

| Verse | Construction | Reading | Damon's blocker |
|---|---|---|---|
| **1573** *majjikā* | `कर्पूरधूपितं` | **Smoke.** Explicit. | **Unblocked** — nothing is dosed in |
| **1437** *cakkalikās* | `कर्पूरवासिते` | "Scented with camphor", means unspecified. Smoke is the better reading, since wherever this chapter specifies the means of `वासित` it is smoke (1456 `वासयेद्धूपैः`, 1478 `हिङ्गुधूपेन वासयेत्`) — but a speck stirred into a curd bath also fits. | **Probably unblocked, not airtight** |
| **1475** *kṛṣṇapāka* | `कर्पूरचूर्णकं ... विकिरेत्` | **Powder, scattered on.** Ingested. | **Still blocked** |
| **1416** *varṣolaka* | `एलाकर्पूरकेसरैः` after `उत्तार्य` | Into the sugar mass. Ingested. | **Still blocked** |

1474–75 is the decisive pair: **one dish, consecutive verses, fumigation and then scattering.** `समुत्तार्य धूपयेद्धिङ्गुजीरकैः` — take it off and fumigate with asafoetida and cumin — then `कर्पूरचूर्णकं ... विकिरेत्`, scatter powdered camphor over it. The author distinguishes the two operations inside a single recipe, and he does eat camphor.

So: **`कर्पूरधूपित` at 1573 does mean the camphor is never added as an ingredient** — what reaches the food is vapor deposition from a speck on a coal under a cover, which is two to three orders of magnitude below a stirred-in pinch. Strictly it is still ingested, as an aroma rather than a dose; the route changes, the exposure collapses, it is not literally zero. The *majjikā* and probably the sweet-curd *cakkalikās* become makeable. The *kṛṣṇapāka* and the *varṣolaka* do not, and both files are right to treat camphor as a food-grade sourcing problem. `majjika-sweet-spiced-buttermilk.md` and `pork-cakkalikas-sweet-curd.md` are outside my scope and untouched; batch 9 has already put the smoke note on the *majjikā*.

---

## Verbatim log — the published file

`spiced-takra.md`, `status: published`, one note bullet changed, nothing else.

**Before:**

```
* Blooming the cumin and asafoetida in ghee follows the source's *dhūpita* ("perfumed"), which points to aromatics carried on hot fat rather than stirred in raw.  
```

**After:**

```
* Blooming the cumin and asafoetida in ghee stands in for the source's *dhūpita* ("perfumed"), which points to aromatics carried to the drink as smoke rather than stirred in raw. To do it as written, smoke the empty jug — a lump of glowing charcoal in a small cup, the cumin and asafoetida on the coal, the jug held over it for a minute — then pour the *takra* in and cover it.  
```

Damon's structure and wording are kept: `follows` → `stands in for`, and `on hot fat` → `to the drink as smoke`. Everything else in the sentence is his. **Untouched:** `title`, `status`, `original`, `translation`, all other frontmatter, the intro paragraph, the entire Ingredients and Method sections, and all four other notes. The ghee bloom in method step 1 is deliberately left alone — it is a good substitute and he has cooked it.

`roast-meat-salad-with-citron-and-ginger.md` (draft), one note bullet expanded — `Pouring hot ghee over asafoetida gives a practical equivalent to aromatic fumigation.` now names the 1478 `हिङ्गुधूप`/`हिङ्गुतोय` contrast, the 1459–60 puryala precedent, and how to fumigate. Its `translation` field already said "Perfume the mixed meat with asafoetida smoke", so nothing there needed correcting.

---

## What would falsify each verdict

**Verdict 1 (ratio).**

- A printed edition reading `दध्नि` (locative) for `दध्ना` at 1442 would put the Glaze in the 1437/1439 immersion pattern and argue for *more* curd, not less. Worth checking, since 1427–35 is demonstrably corrupt in this transcription — the pork audit found 8 defective pādas out of 36 there, and 1442–48 scanning clean is reassurance about the metre, not about case endings.
- A demonstration that any of the six sours is habitually used at a scale that makes it the bulk — a parallel recipe elsewhere in the Mānasollāsa or in the Ayurvedic *rasa* literature where `चिञ्चा` or `दाडिमसारक` is the base and curd the accessory — would reopen the direction question.
- Kitchen falsification, and the cheap one: cook it at 300 g and see whether ~200 g of finished sauce actually coats 500 g of meat to a lickable finish. If it comes up short, the number goes up and the reasoning does not change. If it grains despite the strain and the oil, the missing element is a hydrocolloid and the amla pulp becomes worth trying after all — accepting the astringency.
- A measured pH would settle my ~3.5 estimate against batch 3's 4.0–4.3 in five minutes with a strip. My figure is a calculation, not a measurement.

**Verdict 2 (`धूप`).**

- One clear instance of `धूप` governing an accusative aromatic, or of a `धूप` compound taking a verb of mixing or throwing, would break the lexical split. I found none in 26 tokens; a corrected edition supplying one would matter.
- An alternative identification of `नखधूप` as something edible would remove batch 10's inedibility argument — but not `धूपेन जीरकस्य`, which stands alone.
- The *camphor* verdict is the fragile one, and it is fragile in the direction of *less* good news: `कर्पूरवासित` at 1437 is genuinely ambiguous, and if `वासित` turns out to be steeping rather than smoke in that verse, the sweet-curd *cakkalikās* go back to needing edible camphor. 1573's `कर्पूरधूपित` is not at risk.
- Nothing here rests on `शशिधूप` (1448) being camphor. That identification is an inference from a synonym and the pork audit was right to label it "probably".
