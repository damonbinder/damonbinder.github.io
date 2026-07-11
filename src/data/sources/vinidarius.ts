// The complete surviving text of the Vinidarius excerpta (the numbered
// recipe section, "Vinidarius brevis ciborum" — the preceding pantry/spice
// list is a separate, unnumbered preface and isn't included here).
//
// Latin text transcribed from Damon's source (Grocock & Grainger edition,
// Vinidarius_GG.txt) — verbatim, not reconstructed. English translations for
// the ten recipes already cooked are copied from their recipe files verbatim
// (Damon has edited these into his own words). The rest are a first-pass
// translation draft for Damon to check and correct — they have not been
// reviewed the way the cooked ones have.
export interface VinidariusEntry {
  ref: string;
  latin: string;
  english: string;
}

export const vinidariusText: VinidariusEntry[] = [
  {
    ref: 'Vinidarius 1',
    latin: 'cacabina minore: olera diuersa elixa compone et pullina inter se, si uolueris; condis liquamine et oleo et bulliat. teres piper modicum et folium et cum tritura conmisces ouum et tribulas.',
    english: 'A simple *caccabina*: layer various boiled vegetables together with chicken, if you like; season with fish sauce and oil and let it boil. Grind a little pepper and tejpat, and into the ground mixture mix in egg and beat it together.',
  },
  {
    ref: 'Vinidarius 1a',
    latin: 'alia tritura unde perfundes caccabina: teres ergo folium quantum conpedat cum cerifolio uno et quarta parte de lauri baca, et medium caulis elixi et folia coriandri, et solues de iuscello eius et uaborabis in cinere calido; et adornas antequam fundas in uasculo; perfundis conditum et sic ponis.',
    english: "Another dressing to pour over a *caccabina*: grind as much tejpat as is fitting with one clove and a quarter of a bay berry, along with the heart of a boiled cabbage stalk and coriander leaves; thin it with some of the dish's own broth and warm it through in hot ashes; garnish it before pouring it into the dish; pour over the seasoning and serve it so.",
  },
  {
    ref: 'Vinidarius 2',
    latin: 'caccabina fusile: malbas porros betas siue coliclos elixatos turdos atque esicia de pullu copadia porcina siue pullina et cetera que in presenti habere poteris conpones uariatim. teres piper lygisticum cum uini ueteris pondo duo, liquamen pondo I, mel pondo I, olei aliquantu. gustata, idem permixta et temperatam mittis in patinam et fac ut modice fereueat, et cum quoquitur adicies lactes sextario uno, oua dissoluta cum lacte; perfundes patinam; mox constrinxerit, inferes.',
    english: 'A set *caccabina*: arrange in layers boiled mallows, leeks, beets or cabbage shoots, thrushes and forcemeat balls of chicken, pieces of pork or chicken, and whatever else you happen to have. Grind pepper and lovage with two pounds of old wine, one pound of fish sauce, one pound of honey, and a little oil. Taste it, and when it is well mixed and seasoned put it in a dish and let it boil gently; and as it cooks add a pint of milk and eggs beaten with milk; pour this over the dish, and as soon as it has set, serve.',
  },
  {
    ref: 'Vinidarius 3',
    latin: 'ofellas garatas: ponis ofellas in sartagine, adices liquamen libra I, olei similiter, mellis aliquantum et sic frigis.',
    english: '*Ofellae* in fish-sauce: put the *ofellae* in a frying pan, add a pound of fish sauce, the same amount of oil, and a good amount of honey, and fry them like this.',
  },
  {
    ref: 'Vinidarius 4',
    latin: 'ofellas assas: exbromabis diligenter et in sartagine mittis. friges inogaru, postea simul cum ipsu inogaru inferes et piper aspargis.',
    english: "Roasted *ofellae*: blanch [?] them thoroughly and put them in a frying pan. Fry them in *oenogarum*, then serve them together with that same *oenogarum* and sprinkle with pepper.",
  },
  {
    ref: 'Vinidarius 5',
    latin: 'aliter ofellas: [si] in liquamine frigantur et calide melle unguantur et sic inferantur.',
    english: '*Ofellae* another way: fry them in fish sauce and coat them with warm honey while hot, and serve them so.',
  },
  {
    ref: 'Vinidarius 6',
    latin: 'ofellas garaton: lasar zingiber cardamomum et uno acitabulo liquamen misces cum his omnibus tritis et ibi ofellas quoques.',
    english: '*Ofellae* in fish-sauce: mix asafoetida, ginger, and cardamom, all ground, with a small measure of fish sauce, and cook the *ofellae* in it.',
  },
  {
    ref: 'Vinidarius 7',
    latin: 'pisces scorpiones rapulatos: cocis in liquamen et oleo et cum mediauerint coctura tolles. rapas elixas madidas et minutissime concisas manibus depressabis ut umorem non habeant et cum pisce obligas et bulliat cum oleo abunde. et cum bulliuerit teres ciminum lauri baca dimidia, addes propter colore crocu. amulabis de oridia propter spissitudinem. superfundes et tunc inferes. addes modicum acetu.',
    english: 'Scorpion fish with turnips: cook the fish in fish sauce and oil, and when they are half cooked take them out. Take boiled turnips, wet and very finely chopped, and press them by hand so they hold no moisture; bind them with the fish and let it boil with plenty of oil. When it has boiled, grind cumin and half a bay berry, and add saffron for color. Thicken with rice starch. Pour over and then serve. Add a little vinegar.',
  },
  {
    ref: 'Vinidarius 8',
    latin: 'pisces frixos cuiuscumque generis sic facies: teres piper coriandri semen lasaris radices origanu ruta cariotam; suffundes acetum oleum liquamen, adicies defritum. hec omnia temperabis et in caccabulo mittis et ferbeat. cum calefeceris eosdem pisces superfundes. asparso piper et inferes.',
    english: 'Fried fish of any kind, prepare it like this: grind pepper, coriander seed, asafoetida roots, oregano, rue, and a date; moisten with vinegar, oil, and fish sauce, and add reduced must. Blend all this together, put it in a small pot, and let it come to the boil. Once it is heated through, pour it over the same fish. Sprinkle with pepper and serve.',
  },
  {
    ref: 'Vinidarius 9',
    latin: 'item pisces frixos sic facies: teres piper ligisticu baca lauri coriandrum mel liquamen uinu; passu uel carenu temperas. coques igni lentu, amulo orizie obligas et inferes.',
    english: 'Fried fish, another way: grind pepper, lovage, bay berry, coriander, honey, fish sauce, and wine; blend in raisin wine or reduced must. Cook it over a gentle fire, thicken with rice starch, and serve.',
  },
  {
    ref: 'Vinidarius 10',
    latin: 'pisces assos: teres piper ligisticum saturegia cipam siccam; suffundes acetu, adicies cariota anetu ouorum uitella mel acetum liquamen oleu defritu. hec omnia in uno mixta perfundes.',
    english: 'Roasted fish: grind pepper, lovage, savory, and dried onion; moisten with vinegar, add a date, dill, egg yolks, honey, vinegar, fish sauce, oil, and reduced must. Mix all this together and pour it over.',
  },
  {
    ref: 'Vinidarius 11',
    latin: 'pisces inotocano: friges pisces; teres piper ligisticum rutam condimenta uiridia cepa sicca. adicies oleo <uinum> liquamen et inferes.',
    english: 'Fish in a wine pan sauce: fry the fish; grind pepper, lovage, rue, fresh herbs, and dried onion. Add oil, wine, and fish sauce, and serve.',
  },
  {
    ref: 'Vinidarius 12',
    latin: 'sardas sic facies: teres piper ligistici semen origanu cepam siccam ouorum cottorum uitella acetu oleum. hec in unum temperas et perfundes.',
    english: 'Prepare salted bonito like this: grind pepper, lovage seed, oregano, dried onion, and the yolks of hard-boiled eggs, vinegar, and oil. Blend this together and pour it over.',
  },
  {
    ref: 'Vinidarius 13',
    latin: 'pisces inotogono: a crudo pisces quos uolueris labas, conponis in patinam; mittis oleum liquamen uinum fasciculos porri et coriandri; coquitur. teres piper origanu ligisticum et fasciculos quos elixasti teres et suffundes inpesa de patina. facis ut obliget. cum bene tenuerit, piper asparso inferebis.',
    english: 'Fish in a wine pan sauce: wash whichever raw fish you like and lay them in a dish; add oil, fish sauce, wine, and bundles of leek and coriander; let it cook. Grind pepper, oregano, and lovage, along with the bundles you boiled, and moisten with some of the sauce mixture from the dish. Let it thicken. Once it has set well, sprinkle with pepper and serve.',
  },
  {
    ref: 'Vinidarius 14',
    latin: 'mullos anetatos sic facies: rades pisces, lababis, in patinam conponis; adicies oleum liquamen uinu fasciculos porri et coriandri; mittes ut coquatur. adicies piper <anethi semen> in mortario, fricabis; adicies oleum et parte aceti; uino passo temperauis, traicies in caccabo, ponis ut ferueat. amolo obligabis et patinam piscium perfundis. insuper piper aspargis.',
    english: "Prepare mullets with dill like this: scale the fish, wash them, and lay them in a dish; add oil, fish sauce, wine, and bundles of leek and coriander; put it on to cook. Grind pepper and dill seed together in a mortar; add oil and a little vinegar, blend in raisin wine, transfer it to a pot, and bring it to the boil. Thicken with starch and pour it over the dish of fish. Sprinkle with pepper on top.",
  },
  {
    ref: 'Vinidarius 15',
    latin: 'aliter mullos: rades, labas, conponis in patinam. adicies oleo liquamen uinu, in coctura fasciculum porri et coriandri. inponis ut coquatur. teres piper ligisticum origanum, adicies de iure suo – hec de patella – uino passo temperas; mittis in caccabo, ponis ut ferueat; amulo obligabis et patella postea perfundes. piper aspargis et inferes.',
    english: "Mullets another way: scale, wash, and lay them in a dish. Add oil, fish sauce, wine, and while it cooks, a bundle of leek and coriander. Set it to cook. Grind pepper and lovage, add some of the dish's own cooking liquor, and blend it with raisin wine; put it in a pot and bring it to the boil; thicken with starch and pour it back over the dish afterward. Sprinkle with pepper and serve.",
  },
  {
    ref: 'Vinidarius 16',
    latin: 'murenas aut anguilas uel mullos sic facies: purgabis, conponis in patinam diligenter. adicies in mortario piper legisticum origanum menta cepam arida, effundes uini acetabulum, liquaminis dimidium, mellis tertiam partem, modice defritu ad cucliare. debent autem hoc iure coperiri, ut super cocturam supersit aliquid iuris.',
    english: 'Moray eels, eels, or mullets, prepare like this: clean them and lay them carefully in a dish. In a mortar grind pepper, lovage, oregano, mint, and dried onion; pour in a small measure of wine, half as much fish sauce, a third as much honey, and a spoonful of reduced must. They should be covered with this liquid so that some of it remains once cooked.',
  },
  {
    ref: 'Vinidarius 17',
    latin: 'locustas <et isquillas>: teres piper ligisticum api semen, effundes acetum liquamen ouorum uitella et mixta in unum perfundis et inferes.',
    english: 'Lobsters and prawns: grind pepper, lovage, and celery seed; pour in vinegar, fish sauce, and egg yolks, mix it all together, pour it over, and serve.',
  },
  {
    ref: 'Vinidarius 18',
    latin: 'in piscibus elexis: teres piper ligisticum appi semen origanum; suffundes acetum, adicies nucleos pineus, gariota quod satis sit, mel acetu liquamen sinapem. temperabis et uteris.',
    english: 'For boiled fish: grind pepper, lovage, celery seed, and oregano; moisten with vinegar, add pine nuts, enough dates, honey, vinegar, fish sauce, and mustard. Blend it together and use it.',
  },
  {
    ref: 'Vinidarius 19',
    latin: 'patina soliarum ex obis: rades, purgas, conponis in patinam; adicies liquamen oleum uinum fasciculum porri et coriandri [semen]; mittis ut quoquatur. teres piper modicum origanum, suffundis iux suo sibi; adicies iuri dicem cruda oua; dissoluis et in unum corpus facies. traicies in patinam super solias. ad ignem lentum pones ut decoquat, et cum duxerit piper adspargis.',
    english: '*Patina* of sole with eggs: scale and clean the fish, and lay them in a dish; add fish sauce, oil, wine, and a bundle of leek and coriander; put it on to cook. Grind a little pepper and oregano, moisten with some of the cooking liquor; add raw eggs to the liquid; beat them and work into a single body. Pour over the sole in the dish. Set it over a gentle fire to cook down, and when it has set sprinkle with pepper.',
  },
  {
    ref: 'Vinidarius 20',
    latin: 'porcellum coriandratum: assas porcellum diligenter; facies mortarium sic in quo teres piper anetu origanum coriandrum uiride; admisces mel uinum liquamen oleum acetum defritum. hec omnia calefacta perfundes et aspargis uua passa nucleos pineos et cepam concisam, et sic inferes.',
    english: 'Suckling pig with coriander: roast the pig carefully; make a sauce in the mortar in which you grind pepper, dill, oregano, and fresh coriander; blend in honey, wine, fish sauce, oil, vinegar, and reduced must. Heat all this and pour it over, then scatter raisins, pine nuts, and chopped onion on top, and serve.',
  },
  {
    ref: 'Vinidarius 21–22',
    latin: 'porcello unocoto: porcellum accipies, ornauis, quoque in oleo et liquamen. cum quoquitur adicies in mortario piper ruta baca lauri liquamen, passu siue carenu, uino uetus; simul omnia teres. temperas et traicies in patinam heneam. mittis eum [XXII] porcellum eo iure, perquoque; cum autem leuas, amulo oblicabis et sic in uas transfers et inferes.',
    english: 'Pig *unocoto*: take the pig, dress it, and cook it in oil and fish sauce. As it cooks, grind together in the mortar pepper, rue, bay berry, fish sauce, raisin wine or reduced must, and old wine; grind it all together. Season it and pour it into a bronze pan. Put the pig into that sauce and cook it through; and when you take it up, thicken with starch, then transfer it to a serving dish and serve.',
  },
  {
    ref: 'Vinidarius 23',
    latin: 'porcellum timo sparsum: porcellum lactentem pridie occisum elixas sale et anetu, et in aqua frigida adsidue intingis ut candorem habeat. deinde condimenta uiridia timmum polleium modicum oba dura ciba concisa minuta; ea omnia superspargis, et condis liquamen emina una olei pondo uno passo pondo uno et sic ministras.',
    english: 'Suckling pig sprinkled with thyme: take a milk-fed pig killed the day before and boil it with salt and dill, dipping it repeatedly in cold water so that it stays white. Then take fresh herbs, thyme, a little pennyroyal, and hard-boiled eggs finely chopped; scatter all this over it, and dress it with a pint of fish sauce, a pound of oil, and a pound of raisin wine, and serve it so.',
  },
  {
    ref: 'Vinidarius 24',
    latin: 'porcello exodiomum: porcellum accuratum ornauis et mittis in iuscellum sic condito: aicies in mortario piper grana L, mellis quantum conpedat, cepas siccas III coriandri uiridis siue sicci modicum, liquaminis emina, olei sextarium I, aque emina I; simul temperas in caccabulo. mittis in eo porcellum. dum bullire ceperit, sepius agitauis ut spissum fiat. si aliquid minus iuris facere ceperit, tunc adicies emina I aque. sic perquoque et sic porcellum inferes.',
    english: 'Suckling pig in broth: take a well-prepared pig, dress it, and put it into a broth seasoned thus: put into the mortar fifty grains of pepper, as much honey as needed, three dried onions, a little fresh or dried coriander, a pint of fish sauce, one *sextarius* of oil, and a pint of water; blend it all together in a pot. Put the pig into it. Once it begins to boil, stir it often so that it thickens. If it starts to run short of liquid, add another pint of water. Cook it through in this way and serve the pig so.',
  },
  {
    ref: 'Vinidarius 25',
    latin: 'porcellum laseratum: teres in mortario piper ligisticum careum; misces ciminum paululum, lasar uiuum lasaris radicem; suffundis acetum, addis nucleos pineos cariotam mel acetum liquamen senape factu. oleo omnia temperas et perfundis.',
    english: 'Suckling pig with asafoetida: grind pepper, lovage, and caraway in a mortar; mix in a little cumin, fresh asafoetida, and asafoetida root; moisten with vinegar, add pine nuts, a date, honey, vinegar, fish sauce, and prepared mustard. Blend it all with oil and pour it over.',
  },
  {
    ref: 'Vinidarius 26',
    latin: 'porcellu iuscellatu: mittis in mortario piper ligisticum aut anesum coriandrum ruta baca lauri, fricauis; suffundis liquamen, porro, passi siue mellis modicum, uinum modicum olei aliquantum. cum coxeris amulo oblicauis.',
    english: 'Suckling pig in broth: put pepper, lovage or anise, coriander, rue, and bay berry in a mortar, and grind them; moisten with fish sauce, leek, a little raisin wine or honey, a little wine, and some oil. Once it is cooked, thicken with starch.',
  },
  {
    ref: 'Vinidarius 27',
    latin: 'agnu simplice: de agno decoriato facies cupadiola, lababis diligenter, mittes in cacabo. adicies oleum liquamen uinum porrum coriandrum cultro concisum. cum bullire ceperit, sepius agitabis et inferes.',
    english: 'Simple lamb: from a skinned lamb cut small pieces, wash them carefully, and put them in a pot. Add oil, fish sauce, wine, leek, and coriander chopped with a knife. Once it begins to boil, stir it often, and serve.',
  },
  {
    ref: 'Vinidarius 28',
    latin: 'edum lasaratum: edi intestinas bene purgatas imples piper liquamen lasar oleum et intra edum mittes et bene consues et cum edo simul cocuntur; et cum decoxerit, adicies in mortario ruta baca lauri, et lebato edo adque exugato ipso iure perfundis et sic ponis.',
    english: 'Kid with asafoetida: fill the well-cleaned intestines of a kid with pepper, fish sauce, asafoetida, and oil, put them back inside the kid, sew it up well, and cook them together with the kid; once it has cooked through, grind rue and bay berry in a mortar, and once the kid is lifted out and drained, pour that same liquid over it and serve it so.',
  },
  {
    ref: 'Vinidarius 29',
    latin: 'turdos apantomenos: teres piper lasar baca lauri, admisces cum inogaro, et sic turdos per guttor imples et filo ligauis; et facies ei impesa in qua decocantur, que habeat oleum sales aqua anetu et capita porrorum.',
    english: 'Thrushes *apantomenos* [the name is obscure]: grind pepper, asafoetida, and bay berry, mix it with *oenogarum*, and fill the thrushes through the throat with it, tying them with thread; make a poaching liquid for them to cook in, with oil, salt, water, dill, and the tops of leeks.',
  },
  {
    ref: 'Vinidarius 30',
    latin: 'turtures: aperies, ornauis diligenter; teres piper lasar liquamen modicum; infundis ipsas turtures ut conbibant siui et sic assas.',
    english: 'Turtledoves: open them up and dress them carefully; grind pepper, asafoetida, and a little fish sauce; soak the turtledoves in it so they absorb it, and then roast them.',
  },
  {
    ref: 'Vinidarius 31',
    latin: 'ius in perdices: teres in mortario piper apio menta et rutam; suffundis acetum, addis cariotam mel acetum liquamen oleum. simul coques et inferes.',
    english: 'A sauce for partridges: grind pepper, celery, mint, and rue in a mortar; moisten with vinegar, add a date, honey, vinegar, fish sauce, and oil. Cook it together and serve.',
  },
];
