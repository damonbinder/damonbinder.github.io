# Mānasollāsa 3.13.1533–1564 — collation against the print (part G)

*Created 2026-07-25 13:38.*

## Summary

**I reached the edition and read every line of my span off the page.** Source: Shrigondekar, ed., *Mānasollāsa of King Someśvara*, Vol. II (Gaekwad's Oriental Series LXXXIV), Oriental Institute, Baroda, 1939 — the DLI scan on archive.org, item **`in.ernet.dli.2015.208789`** ([metadata](https://archive.org/metadata/in.ernet.dli.2015.208789)), page images fetched as `https://archive.org/download/in.ernet.dli.2015.208789/page/n<N>.jpg` at 3560 × 5416 px. **Verses 1533–1564 occupy printed pp. 130–133 = archive leaves n182–n185** (leaf = printed page + 52). A local PDF of the same DLI item was cross-checked at 500 dpi; every disputed character was re-read on the archive JPEG, which is roughly 40% higher resolution, before being decided.

**21 differences from `src/data/sources/manasollasa.ts`, of which 18 are substantive** and 3 are orthographic (sandhi notation, avagraha, anusvāra-vs-conjunct); four further rows in the table below record Shrigondekar's own parenthetical corrections where our text already carried the corrected form or the sense is unchanged. Pure word-spacing differences are not counted. Two of our hemistichs were a syllable short (1563a, 1564a) and the print fixes both; three more had the right syllable count but a broken cadence (1550c, 1555d, 1561a) and the print fixes those too. **After correction the whole span scans clean: 64/64 half-verses at exactly 16 syllables, all 128 pādas at 8.** The printed text is metrically sound; where our version failed, the fault was ours.

**The four proposed single-character fixes: two confirmed exactly, two confirmed in substance but with a different printed form.**

| Proposed | Verdict |
|---|---|
| `विवर्जयेत्` → `विभर्जयेत्` (1540d) | **Confirmed, and not a conjecture at all** — Shrigondekar himself prints `तान्वि(भ)वर्जयेत्` with the corrective `भ` in parentheses (p. 131). |
| `खपरे` → `कर्परे` (1541a) | **Wrong letter.** The print reads **`खर्परे`** with `ख`, not `क` — a recognised variant of `कर्पर` (cf. Hindi *khappar*). Our `खपरे` was missing the repha; the fix is `ख` → `खर्`, not `ख` → `कर्`. |
| `शूलपोतान्` → `शूलप्रोतान्` (1546a) | **Confirmed.** The `प्र` ligature is unambiguous at high resolution (p. 131). |
| `पाटालम्` → `पाटलम्` (1555d) | **Diagnosis right, form wrong.** The print reads **`कपाटलिं`** — accusative of the feminine `पाटलि`, the trumpet-flower — not `पाटलम्`. D reads `-लिः`. Our `पाटालम्` did break the cadence, exactly as suspected. |

Three of these were flagged as "metre cannot see this" and that held: 1540d, 1541a, and 1546a all scan identically in both readings — `विवर्जयेत्`/`विभर्जयेत्`, `खपरे`/`खर्परे`, and `शूलपोतान्`/`शूलप्रोतान्` are each metrically indistinguishable. Only reading the page settled them. 1555d was the exception: there the cadence did give the error away, and the print then supplied a form nobody had guessed.

**1548–1549 was present on the site, not missing** — thin English, but both verses had Sanskrit. Nothing had to be transcribed from scratch. Both are now translated in full, including the cookable line at 1549: *vaṭakas* and *parpaṭas* roasted over coals.

**No dropped editorial sigla.** No question marks, ellipses, or obelisks anywhere on pp. 130–133 in my span. The only editorial apparatus is Shrigondekar's parenthetical corrections (four of them, all recorded below) and the MS variants in the footnotes, which I read on all four pages.

Deliverable: `research/collation/partG.json` — 10 entries, continuous 1533→1564, no gaps, no duplicates, verse-marker counts matching the ranges, JSON validated.

## Corrections

Verse references are global; `a`–`d` are pādas. "Ours" = the reading in `src/data/sources/manasollasa.ts` before this pass.

| Verse | Ours | Print | p. | Note |
|---|---|---|---|---|
| 1534a | `खरखण्डा` | `खारखण्डा` | 130 | The dish name is *khāra-khaṇḍa*, "salt-pieces", with long *ā*. Footnote 6: C, F read `खी-`. |
| 1535c | `दृढीभूते` | `दृढीभूते(तौ)` | 130 | Editor's parenthetical suggests the dual `दृढीभूतौ`, agreeing with the two roe-sacs (`कोशौ`). Sense unchanged; I keep the transmitted `दृढीभूते` and note it. |
| 1540d | `विवर्जयेत्` | `वि(भ)वर्जयेत्` → `विभर्जयेत्` | 131 | Editor's parenthetical. The two readings scan identically, so only sense decides: `विवर्जयेत्` means "he should shun", and the pāda needs a verb of roasting after "in a dry copper vessel, thoroughly heated". Adopted. |
| 1541a | `खपरे` | `खर्परे` | 131 | Repha restored. `खर्पर`/`कर्पर` here is the crab's **carapace**, not a vessel. |
| 1543a | `सम्भूता` | `संभूता` | 131 | Orthographic (anusvāra for the conjunct). |
| 1543a | `मूषकाः` | `मूख(ष)काः` | 131 | Editor's parenthetical; our text already has the corrected form. See the `ळ`/`ष` check below. |
| 1546a | `शूलपोतान्` | `शूलप्रोतान्` | 131 | "Pierced on a skewer." Confirmed. |
| 1547a | `सुपक्वेषु` | `सुपकेषु` | 131 | The print has no `व` subscript. Both scan; I follow the print and flag the expected `सुपक्वेषु`. |
| 1547b | `मूषकेषु` | `मूख(ष)केषु` | 131 | As 1543a. |
| 1547d | `शुण्ठीं` | `शुण्ठी` | 131 | No anusvāra in the print, though the list is otherwise accusative. |
| 1549a | `कल्पयेद्विविधैः` | `कल्पयेद्द्विविधैः` | 132 | **Sense change.** Not "in various ways" but "with vegetables *of the two kinds*" — picking up `पक्वापक्वविभेदतः` at 1548d. |
| 1550c | `कोपसी` | `कोपासि` | 132 | Our `-प-सी-` puts a light syllable in position 7 of an odd pāda, which is illegal; `-पा-सि` gives ⏑ – –. Plant unidentified either way. |
| 1553a | `संगृह्य` | `सङ्गृह्य` | 132 | Orthographic. |
| 1553b | `अम्लिकाम्लेन` | `अम्ल(म्लि)काम्लेन` | 132 | Editor's parenthetical; our text already has the corrected form. |
| 1555d | `कपाटालम्` | `कपाटलिं` | 132 | Accusative of feminine `पाटलि`. Footnote 6: D reads `लिः`. |
| 1556a | `मदं` | `मटं` | 132 | `ट`, not `द` — checked against the `कटं` immediately preceding, whose second letter has the identical glyph. |
| 1556d | `लवणाम्भसि` | `लवणाम्भासि` | 132 | Long *ā*. |
| 1557b | `कुहिरि` | `कुहिरी` | 132 | Long *ī*. Footnote 7: D reads `कू`, `गी`. |
| 1558d | `लवणाम्भसि` | `लवणाम्भासि` | 132 | Long *ā* again — so this is the edition's consistent reading in both places, not a one-off slip. |
| 1561a | `लघु` | `लघुं` | 133 | **Cadence fix.** Without the anusvāra, position 6 of the odd pāda is light, which is illegal. |
| 1562b | `वापि` | `वाऽपि` | 133 | Orthographic (avagraha). |
| 1563a | `मागिणीमाकं` | `मागिणीमार्द्रकं` | 133 | **Syllable-count fix**, 15 → 16. The word is `मागिणीम्` + `आर्द्रकं`: *māgiṇī* and **fresh ginger**. Our reading was meaningless as well as short. |
| 1563d | `हरिद्रकाम्` | `हरिद्रका` | 133 | Nominative in the print. |
| 1564a | `मधुशिग्रं` | `मधुशिग्रुं` | 133 | The stem is `शिग्रु` (drumstick tree), so the accusative is `शिग्रुं`. |
| 1564b | `बिलकन्दकम्` | `शंबलकन्दकम्` | 133 | **Syllable-count fix**, 15 → 16. Footnote 6: D reads `वष्ठ-`. |

### The `ळ` / `ष` check on *mūṣaka*

Flagged as critical, since another range's `मूषकैः` turned out to be the print's `मूळकैः` (radish). **It does not apply here.** At 1543a and 1547b the edition prints `मूख(ष)काः` / `मूख(ष)केषु` — base text `ख`, editor's correction `ष`. Read at ~9× on the archive JPEG, the parenthetical letter has the closed left bowl, top bar, and right vertical of `ष`, and sits entirely on the baseline; `ळ` would carry a descending loop below the baseline. The `ख` of the base text is likewise unmistakable (closed upper loop on the vertical), not `ळ`.

The content settles it independently: 1544 has the animal held **by the tail** (`पुच्छधारणात्`) and its **hairs** plucked (`रोमाणि उत्पाटयेत्`), 1545 cuts open the **belly** and clears the **entrails**, 1546 dries the **outer skin**. This is an animal, and `मूषक` is right. I have not tried to narrow it to a species — see below.

### Shrigondekar's parenthesis convention

Worth recording because it is not consistent. In `मूख(ष)काः`, `अम्ल(म्लि)का`, and `दृढीभूते(तौ)` the parenthetical replaces the **preceding** akṣara. In `वि(भ)वर्जयेत्` it must replace the **following** `व`, since replacing `वि` yields `भवर्जयेत्`, which is neither Sanskrit nor metrical. Both parses of 1540d converge on `विभर्जयेत्`, so the reading is not in doubt — only the typographic habit is.

### MS variants read (footnote apparatus, pp. 130–133)

p. 130: `१ A ल्य । २ A ध्या । ३ A दा । ४ D कन्हं करोष्ट बिडिशाः । ५ A ठा । ६ C F खी । ७ D र्से ।`
p. 131: `१ A रेव । २ A दौ । ३ D तेषु वि । ४ A ष्पा । ५ D णः । ६ A खं ।`
p. 132: `१ A खै । २ A क । ३ D ऋ । ४ D F C ण्डि । ५ D म्मालिका । ६ D लिः । ७ D कू गी । ८ A ति । ९ A वन्दरं । १० C ते F तें ।`
p. 133: `१ D व । २ D तालं, A तलं आर्द्रा । ३ A ...ण्ड । ४ F ये । ५ D रो । ६ D वष्ठ । ७ A ष । ८ A आर्द्रा । ९/१० A ष । ११ A आर्द्रा । १२ D तन्तु । १३ D तम् । १५ D ह्र । १६ A त्याद्धे । १७ A द्धिं ।`

None of these displaces the printed text. The three that touch disputed readings are noted in the table above (1534a, 1555d, 1564b).

## Species and material identifications

Confidence: **high** = standard, uncontested Sanskrit-botanical identification; **medium** = the usual identification, but with real competing candidates or an odd fit to a pickle/shoot list; **low / unidentified** = left transliterated and asterisked in the translation, per the brief.

### Animals

| Term | Verses | Identification | Confidence |
|---|---|---|---|
| `मत्स्य` | 1533–36 | fish (generic) | high |
| `मत्स्याण्डकोश` | 1535 | the paired roe-sacs of a fish | high |
| `कच्छप` | 1537–39 | turtle / freshwater terrapin | high |
| `नन्द्यावर्त` | 1539 | the **dish** name, not the animal — "*nandyāvarta*" | high (as a dish name) |
| `कर्कट` | 1540–42 | crab | high |
| `घृतकर्कट` | 1542 | the **dish** name, "ghee-crabs" | high |
| `मूषक` | 1543–47 | a rat — glyph and content both certain (see above). **"Bandicoot rat" (*Bandicota bengalensis*) is a plausible but unproven gloss** and I have not put it in the translation: `मूषक` is the generic Sanskrit word for rat/mouse, and nothing in the text names a species. What the text does say is diagnostic of habits, not taxon: field-bred, riverbank-dwelling, large, dark, well-fed. | high for "rat", **low** for any species |
| `मयिग` | 1543 | the local kind-name the text supplies for the above (`जात्या ते मयिगाः स्मृताः`). Not in the standard lexica; presumably a Kannada/Deccani vernacular term. | unidentified |

### Plants — 1550–53, the tender-shoot (`पल्लव`) list

| Term | Identification | Confidence |
|---|---|---|
| `आम्र` | mango, *Mangifera indica* | high |
| `आम्रातक` | hog plum, *Spondias pinnata* | high |
| `जम्बू` | *jāmun*, *Syzygium cumini* | high |
| `बीजपूर` | citron, *Citrus medica* | high |
| `अग्निमन्थ` | *Premna serratifolia* / *P. mucronata* | medium |
| `भल्लात(क)` | marking nut, *Semecarpus anacardium* | high |
| `अगस्त्य` | *Sesbania grandiflora* | high |
| `कोपासि` | — | **unidentified.** No lexical match. `कार्पासी` (cotton) is graphically close and its shoots are eaten, but that is a conjecture and I have not made it. |
| `द्राक्षा` | grape, *Vitis vinifera* | high |
| `भृङ्गक` | *Eclipta prostrata* (*bhṛṅgarāja*) | medium |
| `सल्लक` | *Boswellia serrata* (= `शल्लकी`) | medium |
| `पुनर्नवा` | *Boerhavia diffusa* | high |
| `मरी` | — | unidentified. Possibly a by-form of `मरिच`, but `मरिच` appears in its own right at 1554. |
| `तीक्ष्णा` | — | unidentified. Reads as a plant name in this list, but it is also the generic "the pungent one" (cf. `तीक्ष्णं` at 1542, a spice). |
| `अतसी` | linseed / flax, *Linum usitatissimum* | high |
| `सुरसाद्वयम्` | "the two *surasās*" — the two basils, *Ocimum* spp. (dark and light tulsī) | medium |
| `मरुक` | `मरुवक`, marjoram / *Origanum majorana*; sometimes an *Ocimum* | medium |
| `तालपर्णी` | — | unidentified. Several candidates in the nighaṇṭus; none secure. |
| `भिण्डुकी` | — | unidentified. `भिण्डी` (okra, *Abelmoschus esculentus*) is tempting but the suffix and the shoot-context both argue against forcing it. |
| `मुण्डका` | `मुण्डी`, *Sphaeranthus indicus* | medium |
| `ब्राह्मी` | *Bacopa monnieri* (or *Centella asiatica*) | medium |
| `अम्लपत्री` | "sour-leaf" — translated descriptively. *Rumex vesicarius*, *Oxalis*, and *Hibiscus sabdariffa* are all called this. | low as a species; the sense is secure |
| `कोकिलाक्षी` | *Hygrophila auriculata* / *Asteracantha longifolia* | medium |
| `कुसुम्भक` | safflower, *Carthamus tinctorius* — tender leaves eaten as greens | high |
| `अञ्जन` | — | unidentified as a plant. |
| `पद्मकोश` | the lotus calyx / bud, *Nelumbo nucifera* | high |
| `शेढक` | — | unidentified. |

### Plants — 1554–58, the brine-pickle list

| Term | Identification | Confidence |
|---|---|---|
| `श्रीफल` | bael, *Aegle marmelos* | high |
| `केतक` | screw pine, *Pandanus odorifer* | high |
| `चिञ्चा` | tamarind, *Tamarindus indica* | high |
| `मेषशृङ्गी` | "ram's horn" — *Gymnema sylvestre* in medical use, but *Helicteres isora* and *Dolichandrone falcata* also carry the name, and a pickled fruit fits the last two better | **medium at best**; left transliterated |
| `सुगन्धिज` | "the fragrance-born" — | unidentified |
| `कुटज` | *Holarrhena antidysenterica* | medium |
| `मरिच` | black pepper, *Piper nigrum* | high |
| `पथ्या` | chebulic myrobalan, *Terminalia chebula* (= `हरीतकी`) | high |
| `विषमुष्टिक` | the name normally denotes *Strychnos nux-vomica*, which is a poison; the text asks for its **pod** (`शिम्बिज`). Either a homonym or a different plant. | **low**; left transliterated with the difficulty noted |
| `एला` | cardamom, *Elettaria cardamomum* | high |
| `रामठ` | asafoetida, *Ferula* spp. | high |
| `नीवार` | wild rice, *Oryza* spp. | medium (odd in a pickle list) |
| `मेथिका` | fenugreek, *Trigonella foenum-graecum* | high |
| `पर्पट` | `पर्पटक`, *Fumaria*/*Oldenlandia* — but `पर्पट` is also the wafer of 1549, so the referent is genuinely ambiguous here | low; left transliterated |
| `अगस्त्य` | *Sesbania grandiflora* | high |
| `नन्दन` | — | unidentified |
| `राजमातुलिङ्ग` | "royal citron", a variety of *Citrus medica* | medium |
| `पाटलि` | trumpet-flower, *Stereospermum chelonoides* | medium |
| `कट`, `मट` | — | **unidentified**, both. `मट` is the print's reading (not `मद`). |
| `कर्कट` | a plant here, not the crab of 1540 | unidentified |
| `करीर` | *Capparis decidua* (*kair*) — its buds are a classic Indian brine pickle, which fits the context exactly | high |
| `टेण्टुक` | *tendu*, *Diospyros melanoxylon* | medium |
| `वेत्र` | rattan/cane, *Calamus* spp. — tender shoots pickled | high |
| `कारीफल` | — | unidentified. The compound `वेत्रकारीफलं` may divide otherwise. |
| `चूत` | mango (a synonym of `आम्र`) | high |
| `धात्री` | emblic myrobalan / *amla*, *Phyllanthus emblica* | high |
| `कुहिरी` | — | unidentified. Footnote 7 shows D already struggled with it. |
| `कर्कटी` | *Cucumis melo* var. *utilissimus*, the snake/*kakri* cucumber | medium. **Printed twice in 1557**, in b and in d; not a copying error in our text. |
| `कूष्माण्ड` | ash gourd, *Benincasa hispida* | high |
| `त्रपुस` | cucumber, *Cucumis sativus* | high |
| `बृहतीद्वय` | "the two *bṛhatīs*" — *Solanum indicum* and *S. virginianum* (or *bṛhatī*/*kaṇṭakārī*) | medium |
| `कोशातकी` | ridge gourd / luffa, *Luffa acutangula* | high |
| `निष्पाव` | lablab / hyacinth bean, *Lablab purpureus* — pods eaten whole and tender | high (per the brief; the lexica agree) |
| `करमर्दक` | *karonda*, *Carissa carandas* | high |
| `जम्बीर` | lime / lemon, *Citrus* × *aurantiifolia* or *limon* | high |
| `बिम्ब` | ivy gourd, *Coccinia grandis* | high |
| `वार्ताक` | eggplant, *Solanum melongena* | high |
| `कर्मर` | — | unidentified. `कर्मरङ्ग` (starfruit, *Averrhoa carambola*) is the obvious guess and I have not taken it. |

### Plants — 1559–64, mustard-oil pickles and shoots

| Term | Identification | Confidence |
|---|---|---|
| `राजिका` | mustard, *Brassica juncea* — the powdered pickling medium | high |
| `कारवेल्ल` | bitter gourd, *Momordica charantia* | high |
| `पनस` | jackfruit, *Artocarpus heterophyllus* | high |
| `कदलीफल` | banana/plantain, *Musa* spp. | high |
| `वंशाङ्कुर` | bamboo shoot | high |
| `चक्री` | — | unidentified |
| `शतावरी` | *Asparagus racemosus* | high |
| `पातालटेण्टुक` | a `टेण्टुक` (*Diospyros*) variety qualified `पātāla-` | low; left partly transliterated |
| `मागिणी`, `वनमागिणी`, `कर्पूरमागिणी` | — | **unidentified**, all three. Presumably a vernacular name with wild and camphor-scented varieties; the last is used for its root. |
| `आर्द्रक` | fresh ginger, *Zingiber officinale* | high — and this is the 1563a correction |
| `पैष्टु` | — | unidentified |
| `कचोर` | zedoary / white turmeric, *Curcuma zedoaria* (Hindi *kacūr*) | medium–high |
| `अम्लहरिद्रका` | "sour turmeric" = mango ginger, *Curcuma amada* | medium–high |
| `सूरण` | elephant-foot yam, *Amorphophallus paeoniifolius* | high |
| `मधुशिग्रु` | "sweet *śigru*" — a named variety of the drumstick tree, *Moringa oleifera* | medium (the genus is secure; "sweet variety" is the text's own qualifier) |
| `शंबलकन्दक` | — | **unidentified**, and this is the 1564b correction. D reads `वष्ठ-`. |

### Vessels, techniques, and dish terms

| Term | Rendering | Note |
|---|---|---|
| `आणक` | *āṇaka* | a cooking vessel, apparently a pan; left transliterated with a gloss |
| `खर्पर` | carapace | `कर्पर` covers "potsherd", "pan", and "shell of a tortoise or crab"; the crab's shell is what bursts here |
| `भाण्ड` (`मृदो भाण्डे`) | vessel of clay | the second of the recipe's two vessels |
| `ताम्रमय पात्र` | copper vessel | the first, used dry (`रूक्षे`) and very hot |
| `शूल` | skewer | `शूलप्रोत` = "pierced on a skewer" |
| `तीक्ष्ण` | *tīkṣṇa* | "the pungent" — a specific spice is meant but not named |
| `सम्भार` | seasonings | |
| `वटक`, `पर्पट` | *vaṭaka*, *parpaṭa* | fried lentil cakes and thin crisps; left transliterated |
| `खारखण्ड` | *khāra-khaṇḍa* | dish name, "salt-pieces" |
| `सूद`, `पाककोविद`, `तज्ज्ञ` | "the cook", "the cook expert in cooking", "one who knows the work" | the agent-epithets are kept, and the optative is rendered "he should …" throughout |

No terms from the fivefold `भोज्य / भक्ष्य / पेय / लेह्य / चोष्य` scheme of 1344–45 appear anywhere in 1533–1564, so nothing was lost on that front.

## Comparison with the published paraphrase

The brief asked me to compare the circulating English of the *mūṣaka* passage, which traces to P. Arundhati, *Royal Life in Mānasollāsa* (Sundeep Prakashan, 1994). The version in circulation reads roughly: *select a strong rat found in fields and river banks; fry it in hot oil holding it by the tail till the hair is removed; after washing with hot water, cut open the stomach and cook the inner parts with sour mango and salt; alternatively, skewer the rat and roast it over red-hot coals.*

Four departures from the printed Sanskrit, and they compound:

1. **`सलिल` is water, not oil.** 1544 has `प्रतप्ते सलिले … निक्षिपेत्` and then `उद्धृत्य तस्मात्सलिलात्` — dropped into heated **water** and lifted out of that **water**. The paraphrase's "hot oil" is a misreading, as suspected.
2. **The order is inverted.** The paraphrase frying first and washing second reverses the text, where the scald *is* the hair-loosening step and nothing is washed afterwards.
3. **The entrails are discarded, not cooked.** 1545 `स्फोटयेदन्त्रकाणि` clears them out; what is then cooked is the animal, and "cook the inner parts" inverts it.
4. **The skewer-roast is the next step, not an alternative.** 1546 opens `शूलप्रोतांस्ततः कृत्वा` — "then, having got them pierced on a skewer". There is no `वा`.

Also: the sour agent at 1545 is `अम्लैः … सम्भारसहितैः`, sour liquids with seasonings — not "sour mango" specifically. The printed Sanskrit is the authority and my translation follows it.

## Unresolved

- **`कोपासि` (1550c)** — the one place where the print's reading is legible, metrically necessary, and still unidentifiable. Left as *kopāsi*.
- **`लवणाम्भासि` (1556d, 1558d)** — the print has the long *ā* in both places, so it is the edition's reading rather than a slip, but `अम्भस्` has locative singular `अम्भसि`. Either Shrigondekar's copy-text had a non-standard form, or both instances are the same compositor's error. I have kept the print and flagged it rather than silently normalising.
- **`सुपकेषु` (1547a)** and **`शुण्ठी` (1547d)** — both printed forms are grammatically off (`सुपक्वेषु`, `शुण्ठीं` expected) and both scan either way. Kept as printed, flagged.
- **`कर्कटी` twice in 1557** — printed, not our error. Whether the poet repeated himself or his source was already corrupt is not decidable from this edition.
- **Species precision on `मूषक`** — "bandicoot rat" is a reasonable guess about which rat a twelfth-century Deccan kitchen would have been trapping in irrigated fields, but the text names no species and I have not written a species into the translation. If Damon wants the identification on the site it should be flagged as inference, not translation.
- **`मयिग` (1543)** — a vernacular kind-name the text itself supplies. Someone with Kannada could probably place it; I could not.

## Method note

The DLI PDF has no text layer and the OCR sidecar covers only the Latin-script front matter, so every line was read visually. Working procedure: render/fetch the page, segment it into text bands by horizontal ink projection, read each band, then re-crop any doubtful akṣara at 4–9× on the 3560 px archive JPEG. Three readings were ambiguous at 500 dpi and were only settled on the archive JPEG: `कोपासि` (1550c), `कपाटलिं` (1555d), and the `ष` inside the parentheses at 1543a. That is consistent with what the other agents reported about low-resolution reads going the wrong way. Scripts and crops are in the session scratchpad under `partG/`.
