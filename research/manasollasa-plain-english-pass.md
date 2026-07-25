# Mānasollāsa food chapter — plain-English pass over the translation

*Created 2026-07-25 14:52.*

## Summary

Editorial notes in `src/data/sources/manasollasa.ts` went from **162 to 80** — a 51% cut. (The brief said 161; the count depends on whether you count the two nested glosses inside the long 1426 textual note. My before/after numbers use the same counting rule throughout, so the delta is right either way.)

82 notes came out, in four kinds:

- **38 distinct Sanskrit terms** are now translated inline, their notes deleted — cowpea, coriander, liver, griddle, pea, lablab bean, rat, black mustard, and so on. Two more (`*amṛta*`, `*pāṭhīna*`) keep the term but take the gloss as a plain apposition instead of a bracket.
- **21 bracketed insertions** of ordinary English glue (`[thick]`, `[rice]`, `[of meat]`, `[the fire]`, `[Or]`) were absorbed into the sentences as plain prose.
- **9 repeat glosses** were removed under the gloss-once rule (`*takra*`, `*tīkṣṇa*`, `*kesara*`, `*āṇaka*` ×3, `*kāñjika*`, `*sāraṅga*`, plus a redundant `*khāra-khaṇḍa*` note at 1594).
- **7 literal-sense glosses of coined dish names** became appositions in the prose rather than notes — *kṛṣṇapāka*, "the black cooking"; *utkvāthita*, "boiled right up"; *khāra-khaṇḍa*, "salt-pieces"; *ghṛta-karkaṭa*, "ghee-crabs"; and the like. Plus two outright drops of glosses that the very next sentence or note already said (`[ember-*polikā*s]` at 1382, `[the scored grid of a game-board]` at 1432).
- **Every surviving note is textual/manuscript, a cross-reference, a contested identification, a food-class definition, or a single first-occurrence gloss of a term that stays transliterated.** Nothing was deleted that carried information not available elsewhere on the page.

Sanskrit untouched: all 74 `latin` fields byte-identical, all 74 `ref` fields byte-identical, header comment identical. The file parses, brackets balance, and `tsc --noEmit` is clean. Per the brief I did not run `npm run build`.

**Next action:** review the changed English, especially the four judgement calls in "Things I was unsure about" below.

## Terms translated inline

| Sanskrit | English | Verses |
|---|---|---|
| *kaṇaka* | grit and broken grains | 1349 |
| *māṇḍa* | the starchy cooking water | 1356 |
| *niṣpāva* | lablab (bean/pods/flour) | 1357, 1365, 1396, 1451, 1558 |
| *māṣa* | black gram | 1358, 1366 |
| *rājamāṣa* / *rāja-māṣa* | cowpea | 1358, 1359, 1393 |
| *vaṭṭāṇa* / *vaṭṭāṇaka* | pea | 1393, 1394 |
| *harimantha* | chickpea | 1391 |
| *nīvāra* | wild rice | 1374, 1555 |
| *kharpara* | earthenware griddle / earthenware pan | 1380, 1392 |
| *karpara* | earthenware pan | 1383 |
| *tāpī* / *tāpana* | griddle | 1383, 1386, 1390, 1393 |
| *sambhāra* | the seasoning-mix | 1398 |
| *dhānyāka* | coriander | 1406 |
| *tarasa* | invigorating | 1418 |
| *kālakhaṇḍa* | liver | 1425, 1488, 1500, 1502, 1504, 1505 |
| *kartrikā* | knife | 1429 |
| *bisasaṅkāśa* | resembling a lotus-stalk | 1431 |
| *kaṭa* | mat | 1431 |
| *śūla* | skewer | 1433 |
| *amṛta* | the drink of immortality (kept, gloss absorbed as apposition) | 1435 |
| *tāḍapatra* | palmyra leaf | 1436 |
| *āmalaka* | emblic myrobalan | 1442, 1457 |
| *viśva* | dried ginger | 1445 |
| *niśā* | turmeric | 1449 |
| *ghanasāra* | camphor | 1462 |
| *kīlāla* | blood | 1470 |
| *kaṇikā* | wheat flour (as dough) | 1482 |
| *kośātakī* | ridge gourd | 1485, 1558 |
| *ajājī* | cumin | 1503, 1519 |
| *rājikā* | black mustard | 1504 |
| *aṃsa-kīkasa* | shoulder bone | 1507 |
| *sthāla-vaktra* | a plate set over the pot's mouth as a lid | 1508 |
| *nalaka* | hollow bone | 1518 |
| *pāṭhīna* | sheatfish (kept, gloss absorbed as apposition) | 1526 |
| *mūṣaka* | rat | 1543, 1547 |
| *ketaka* | screw pine | 1554 |
| *pathyā* | chebulic myrobalan | 1554 |
| *dhātrī* | emblic myrobalan | 1557 |
| *kacora* | zedoary | 1563 |
| *amla-haridrakā* | sour turmeric, that is, mango ginger | 1563 |

Two consequential knock-ons. `*harimantha*` and `*caṇaka*` are both chickpea, so 1391–92 now opens two consecutive sentences with "Split chickpea" — that is what the text does, and "prepared in this same way" carries the repetition. And `*rājikā*` is now "black mustard" at 1504 where the pre-existing translation already had bare "mustard" at 1441, 1489 and 1559–60; I left those alone rather than restyle untouched sentences.

## Terms kept transliterated, and why

**Dish and preparation names the text coins.** *śuṇṭhaka*, *śuṇṭhikā*, *antra-śuṇṭhaka*, *varṇa-śuṇṭhaka*, *cakkalikā*/*chakkalī*, *bhaḍitraka*, *huṇḍa-bhaḍitraka*, *iḍerikā*, *ghārikā*, *kośalī*, *bhūṣikā*, *kavacandī*, *puryala*, *kṛṣṇapāka*, *nandyāvarta*, *majjikā*, *śikhariṇī*, *mastu*, *pralehaka*, *maṇḍaka*, *polikā*, *aṅgārapolikā*, *patrikā*, *kāsāra*, *udumbara*, *pūrikā*, *veṣṭikā*, *dhosaka*, *kaṭakarṇa*, *vaṭaka*/*vaṭikā*, *kṣīraprakāra*, *varṣolaka*, *māṃsa-vaṭaka*, *pūra-bhaṭṭāka*, *vaṭṭimaka*, *pañcavarṇī*, *maṇḍalī*, *upakhaṇḍaka*, *khāra-khaṇḍa*, *ghṛta-karkaṭa*, *utkvāthita*, *pāyasa*, *pānaka*, *vyañjana*, *dhūpa-kāñjika*, *sohalā*, *pāhalikā*. The verses announce "this is called X".

**Dairy grades.** *mathita*, *udaśvit*, *takra* — the technical dilution series defined at 1571–72. `*takra*` keeps its one gloss "[buttermilk]" at its first occurrence (1409) and loses the duplicate at 1412; the full series is set out in the 1404 note and again in the verse itself.

**Fivefold food classes.** *bhojya*, *bhakṣya*, *peya*, *lehya*, *coṣya*, plus *leha* and the *pralehaka* consistency note at 1446 and the verb note at 1596.

**Contested identifications, note retained.** *amlavetasa*, *kola*, *meṣaka*, *gṛñjana*, *kesarāmla*, *kaṇḍu*, *vaiṭikā*, *kamrā*, *prapaka*, *pañcāṅga-paṭṭa*, *mūlaka* (at 1463), *sara*/*veṣṭika*/*sevāka*, *mano-abhidhāḥ*, *vṛdho*, *viśais*, *mudra*, *bhaṃma*, *kaccola*, *gaṇḍaka*, the corrupt fish names of 1526, and the unidentified plants of 1550–58.

**Kept with one first-occurrence gloss.** *kesara* (1438), *āṇaka* (1480), *śambara* (1518), *sāraṅga* (1418), *dantaśaṭha* (1494), *tīkṣṇa* (1449), *nakhadhūpa* and *śaśidhūpa* (1448), *kāsamarda* (1455), *pathya* (1517), *pārśva-kulyā* (1507), *kiṃśuka* and *rājavṛkṣa* (1497–98).

**All textual and manuscript notes retained**, including every page citation, every carried-through siglum, and every "the editor could not restore this" — 44 of the 80 surviving notes are of this kind. Cross-references ("this half-verse completes the sentence begun at 1349") are all retained.

## Things I was unsure about

1. **Un-noted transliterations I did not touch.** I applied a rule: translate a term only if it carried a note, or if the same term is translated elsewhere in the file and leaving it would be inconsistent. That leaves *āḍhakī* (pigeon pea), *rājamudga*, *pītā*, *śyāmāka*, *kaṅgu*, and *priyāla* transliterated and unglossed in the pulse and millet lists at 1357–66 and 1374. *āḍhakī* = pigeon pea is secure and could go inline; I left it because it never carried a note and translating it means rewriting sentences the brief told me to leave alone. Easy to change if you want it.

2. **`*śarkarā*`, `*sitā*`, `*khaṇḍa*` at 1411–17.** These read as ordinary "sugar", but the passage is a technical taxonomy of boiling stages that distinguishes them, so translating any of them would collapse the distinction the same way "buttermilk" collapses the dairy grades. Kept.

3. **`*māṇḍa*` → "the starchy cooking water".** A phrase rather than a single word, and *māṇḍa* is a named substance in Indian cookery (conjee). I judged the identification secure and the gloss plainly ordinary, so it went inline, and the 1356 textual note now says "cooking water" instead of "*māṇḍa*".

4. **`*sāraṅga*` and `*tarasa*` at 1418.** Both were glossed confidently by the translators. I translated *tarasa* → "invigorating" inline but kept *sāraṅga* transliterated with its "[the spotted antelope]" gloss, on the grounds that *sāraṅga* is a notoriously slippery animal name and sits in a set with *ruru*, *hariṇa*, and *śambara* that stay transliterated. The duplicate gloss at 1518 is gone; the ms note there now reads "likewise a word for 'spotted'" so it stands on its own.

5. **Round-parenthesis lexical tags left alone.** `(*cūrṇa*)` at 1480, `(*svādu*)` at 1484, `(*vapā*)` at 1499, `(*mukula*)` at 1424. These are not square-bracket notes and were outside the brief; they follow the "English word, Sanskrit in parentheses" pattern and could go in a later pass. I did drop `(*kharpara*)` and `(*tāpī*)` at 1392–93 because griddles and pans were named explicitly in the brief.

6. **Spelling inconsistency I did not fix.** 1419 has "*sambara* deer", 1518 has "*śambara*". Pre-existing; flagging rather than silently normalising.

## Unrelated working-tree changes

`git status` at the start of the session was clean. It now also shows `src/data/book-recommendations.md` and `src/pages/books/index.astro` modified and `project-copy.md` untracked. **These are not mine** — another agent or a manual edit touched them during this session. I did not read or change them.
