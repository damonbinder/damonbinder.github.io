# Recipe attribution reconciliation (classical / ancient-Mediterranean)

*Created 2026-07-12 11:46.*

## TL;DR

- **172 recipe files edited**: every classical file that lacked an explicit `work:` now has one, and non-Apicius `source:` citations were rewritten into uniform Option B format.
- **4 files flagged** for human review (see bottom): `duck-with-hazelnuts.md`, `itrion.md`, `lentils-with-greens.md`, `cabbage-salad.md`.
- Mānasollāsa recipes (medieval India) and the Vinidarius files were left exactly as-is — they already carried correct `work:`/`source:`. `apricot-minutal.md` already had `work: Apicius`, so it was untouched too.
- The bulk (≈140 files) are Apicius, whose citations were already in `Apicius {loci}` form; those only needed `work: Apicius` added. A handful had prefixes/suffixes stripped (see notes).
- No systematic CSV-mismatch problems. Galen R-numbers, Heidelberg R./V. numbers, Anthimus chapters, Hierophilus January entries, Cato/Columella/Pliny loci all matched cleanly.

## Format applied (Option B)

- Direct works: `{Author}, {Work text} {Number}` — except Apicius/Vinidarius (author==work) which stay `{Work} {Number}`, and Heidelberg (anonymous) which is `Heidelberg papyrus {Number}`.
- Fragments: `{Author}, in {Container} {locus}`, container locus preserved from the existing string.

## Changes (non-Apicius + cleaned Apicius)

| File | Old source | New work | New source |
|---|---|---|---|
| afrutum.md | Anthimus 34 | Anthimus | Anthimus, On the Observance of Foods 34 |
| baked-fish-ala-mithaecus.md | Athenaeus 325f, quoting the cookbook of Mithaecus | Athenaeus | Mithaecus, in Athenaeus 325f |
| baked-fish-with-cumin-salt.md | Archestratus 14, preserved in Athenaeus | Archestratus | Archestratus 14, in Athenaeus |
| baked-horse-mackerel.md | Athenaeus 322c-d, quoting a lost play by Alexis | Athenaeus | Alexis, in Athenaeus 322c-d |
| barley-with-linseed.md | Pliny 18.73 | Pliny | Pliny, Naturalis Historia 18.73 |
| beef-stew-a-la-anthimus.md | Anthimus 3 | Anthimus | Anthimus, On the Observance of Foods 3 |
| boiled-cabbage-with-spiced-dry-soup.md | From Hierophilus, January | Hierophilus | Hierophilus, January 2 |
| carthaginian-porridge.md | Cato 85 | Cato | Cato, De agricultura 85 |
| catillus-ornatus.md | ...Chrysippus of Tyana, quoted in Athenaeus 647 | Chrysippus of Tyana | Chrysippus of Tyana, in Athenaeus 647 |
| cheese-patina.md | Tiropatinam — Apicius 7.11.7 | Apicius | Apicius 7.11.7 |
| chicken-in-sweet-sauce.md | Based on Anthimus 13 | Anthimus | Anthimus, On the Observance of Foods 13 |
| chickpeas-with-cheese.md | Galen On the Powers of Food R6 | Galen | Galen, On the Powers of Food R6 |
| conditum.md | Oribasius 5.33i | Oribasius | Oribasius, Medical Collections 5.33i |
| fenugreek-1.md | Apicius 5.7, see also Galen | Apicius | Apicius 5.7 |
| fish-broth.md | From the Heidelberg papyrus | Heidelberg | Heidelberg papyrus R.1 |
| fish-with-white-sauce.md | Galen On the Power of Foods R18 | Galen | Galen, On the Powers of Food R18 |
| garlic-sauce.md | Heidelberg papyrus V.3 | Heidelberg | Heidelberg papyrus V.3 |
| gastris.md | ...Chrysippus of Tyana, quoted in Athenaeus 647 | Chrysippus of Tyana | Chrysippus of Tyana, in Athenaeus 647 |
| globi.md | De Agricultura 79 | Cato | Cato, De agricultura 79 |
| kandaulos.md | Hegesippus of Tarentum, in Athenaeus 516d–517a | Athenaeus | Hegesippus of Tarentum, in Athenaeus 516d–517a |
| lamb-with-hyposphagma.md | Athenaeus 516c, quoting Erasistratus | Athenaeus | Erasistratus, in Athenaeus 516c |
| lentils-a-la-anthimus.md | Anthimus, 67 | Anthimus | Anthimus, On the Observance of Foods 67 |
| lentils-and-barley.md | Galen On the Powers of Food, R5 | Galen | Galen, On the Powers of Food R5 |
| lentils-with-chard.md | Galen On the Powers of Food, R1 | Galen | Galen, On the Powers of Food R1 |
| libum.md | De Agricultura 75 | Cato | Cato, De agricultura 75 |
| liver.md | From the Heidelberg papyrus | Heidelberg | Heidelberg papyrus R.6 |
| moretum.md | Pseudo-Virgil | Pseudo-Virgil | Pseudo-Virgil, Moretum |
| mustacei.md | De Agricultura 121 | Cato | Cato, De agricultura 121 |
| olive-relish.md | Cato De Agricultura 119 | Cato | Cato, De agricultura 119 |
| oxyporium-1.md | Columella 12.59e | Columella | Columella, De re rustica 12.59e |
| oxyporium-2.md | Columella 12.59f | Columella | Columella, De re rustica 12.59f |
| pancakes.md | Galen On the Powers of Food R2 | Galen | Galen, On the Powers of Food R2 |
| patina-of-pears.md | From Apicius 4.2.35 | Apicius | Apicius 4.2.35 |
| pig-trotters-with-barley.md | Galen R15 | Galen | Galen, On the Powers of Food R15 |
| poached-eggs.md | Galen On the Powers of Food R17 | Galen | Galen, On the Powers of Food R17 |
| pork-loin.md | From the Heidelberg papyrus | Heidelberg | Heidelberg papyrus R.7 |
| roast-lamb-shoulder-with-spiced-zomos.md | From Hierophilus, January | Hierophilus | Hierophilus, January 1 |
| salt-meat-stew.md | From the Heidelberg papyrus | Heidelberg | Heidelberg papyrus R.2 |
| savillum.md | De Agricultura 84 | Cato | Cato, De agricultura 84 |
| spiced-cream.md | Hierophilus, January | Hierophilus | Hierophilus, January 3 |
| stewed-prunes.md | Galen R11 | Galen | Galen, On the Powers of Food R11 |
| turnips-with-bacon.md | Anthimus 52 | Anthimus | Anthimus, On the Observance of Foods 52 |

Plus ~131 Apicius files whose `source:` was already in `Apicius {loci}` form: `work: Apicius` added, source unchanged (includes compound loci like `Apicius 4.2.14/15`, `Apicius 2.1.3 and 2.2.7`, `Apicius 1.29/9.1.3/9.7`).

### Notes on individual judgment calls

- **fenugreek-1.md**: dropped the trailing cross-reference "see also Galen" to fit the uniform format. If that pointer matters, re-add it as a body note rather than in `source:`.
- **chicken-in-sweet-sauce.md**: labelled "Based on Anthimus 13"; CSV entry 13 is "Hare". Kept the explicit citation number (13); the recipe is an adaptation to chicken. Worth a glance.
- **kandaulos.md**: existing locus `516d–517a` preserved, though the CSV lists Hegesippus at `516c` (as does Erasistratus). Consistent with the "preserve existing locus" rule but the CSV disagrees on the exact letter.

## FLAGGED — needs human review

| File | Source (left unchanged unless noted) | Reason |
|---|---|---|
| **duck-with-hazelnuts.md** | `Modified from The Classical Cookbook, page 133` (unchanged) | Cites a modern reconstruction book, not an ancient locus. Every duck in the CSV is Apicius 6.2.x, so `work: Apicius` was set, but the exact Apicius number is unknown — source left as-is. |
| **itrion.md** | `From Athenaeus, also Galen R9` (unchanged, no `work:` added) | Cites two containers (Athenaeus and Galen R9 = "Sesame cakes"). Ambiguous which is primary; no confident single match, so left entirely untouched. Candidate rewrites: `..., in Athenaeus` or `Galen, On the Powers of Food R9`. |
| **lentils-with-greens.md** | `Heidelberg papyrus` (unchanged) | `work: Heidelberg` set, but no Heidelberg entry cleanly matches "lentils with greens" (R.3 = lentils-with-laganon, R.4 = plain lentils). Couldn't pin a confident R-number. |
| **cabbage-salad.md** | rewritten to `Mnesitheus, in Oribasius, Medical Collections 4.4.1`, `work: Oribasius` | Original cited TWO works: Mnesitheus-in-Oribasius (4.4.1) AND Cato De Agricultura 157. Picked the Oribasius container per the fragment rule and dropped the Cato cross-reference from `source:` — confirm that's the intended primary attribution. |
