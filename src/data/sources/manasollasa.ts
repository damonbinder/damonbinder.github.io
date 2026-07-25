// The surviving text of the Mānasollāsa's food chapter (Vimshati 3, Adhyaya
// 13, "Annabhoga"), verses 1342–1600 — the complete section. Entries that
// correspond to a cooked recipe copy that recipe's own `original`/`translation`
// fields verbatim (the source of truth), so this file stays in sync by
// re-generating from those, not by hand-editing; entries for recipes Damon has
// cooked and edited are his own words. Entries with no matching recipe yet
// (the chapter's framing, the meat and vegetable classifications, the passage
// on cleaning birds, and the closing material on serving and seasonal diet)
// are first-pass drafts from a working philological transcription, not reviewed
// the way the cooked ones have been; where the source itself is corrupt or
// uncertain, that is noted in square brackets rather than smoothed over.
export interface ManasollasaEntry {
  ref: string;
  latin: string;
  english: string;
}

export const manasollasaText: ManasollasaEntry[] = [
  {
    ref: "Mānasollāsa 3.13.1342–1349",
    latin: "अन्नभोगोऽयमधुना द्वयोरन्त्यो निगद्यते । बान्धवान्मण्डपाधीशान्सामन्तान् मान्यकान् भटान् ॥ ४२ ॥ आश्रितान् सुहृदो भृत्यान् गीतवाद्यविशारदान् । आहूय स्वोचिते स्थाने निर्वेश्याग्रे तु भोजयेत् ॥ ४३ ॥ पुत्रैः पौत्रैः प्रपौत्रैश्च सह भुञ्जीत पार्थिवः । भोज्यं भक्ष्यं तथा पेयं लेह्यं चोष्यं तथैव च ॥ ४४ ॥ इति पञ्चविधं हृद्यं पथ्यं भुञ्जीत भूपतिः । रक्तशालिर्महाशालिर्गन्धशालिः कलिङ्गकः ॥ ४५ ॥ मुण्डशालिः स्थूलशालिः सूक्ष्मशालिः सषष्टिकः । रक्तत्वाद्रक्तशालिः स्यान्महाशालिर्महाकृतिः ॥ ४६ ॥ सुगन्धिर्गन्धशालिः स्यात्कलिङ्गोत्थः कलिङ्गकः । शूकशून्यो मुण्डशालिः स्थूलशालिस्तदाकृतिः ॥ ४७ ॥ सौक्ष्म्यात्तु सूक्ष्मशालिः स्याद् द्विमासः षष्टिकः स्मृतः । एतान् शालीन् पृथक् सर्वान्मुसलैर्वितुषीकृतान् ॥ ४८ ॥ निक्षिप्य तण्डुलान् पट्टे विचिनुयात्कणकांस्ततः । पाषाणमृत्तिकाशूकतृणपर्णं तुषं तथा ॥ ४९ ॥",
    english: "Now the enjoyment of food, the second of the two enjoyments under discussion, is described. The king should summon his relatives, the superintendents of the dining pavilion, feudatory chiefs, honoured persons, soldiers, dependants, friends, servants, and experts in song and instrumental music. Having seated each in the place appropriate to his rank, he should first have them fed. The king himself should eat with his sons, grandsons, and great-grandsons. Food is fivefold: bhojya, substantial food that is chewed; bhakṣya, morsels or snack-like foods; peya, drink; lehya, preparations that are licked; and coṣya, things whose juice is sucked. The ruler should eat food of these five kinds that is pleasing and wholesome. The rice varieties named are raktasāli, mahāsāli, gandhasāli, kaliṅgaka, muṇḍasāli, sthūlasāli, sūkṣmasāli, and ṣaṣṭika. Raktasāli is so called from its red colour; mahāsāli from its large form; gandhasāli from its fragrance; kaliṅgaka because it comes from Kaliṅga; muṇḍasāli because it lacks an awn; sthūlasāli because of its thick grain; sūkṣmasāli because of its fineness; and ṣaṣṭika because it matures rapidly [here the printed reading appears to describe a two-month crop]. Each variety is to be handled separately. Dehusk it with pestles, spread the rice on a cloth or board, and have the maidservants carefully remove stones, earth, awns, grass, leaves, husk, and every other foreign particle.",
  },
  {
    ref: "Mānasollāsa 3.13.1350–1356",
    latin: "यत्नादाकृष्यापनयेद्दासीभिस्तण्डुलस्थितान् । अखण्डान् शोधितानेव क्षालितान् बहुशो जलैः ॥ १३५० ॥ तण्डुलान् कुन्दसङ्काशांस्तोयान्तर्धारितांश्चिरम् । स्थाल्यां ताम्रकृतायां वा मृज्जातायामथापि वा ॥ ५१ ॥ तण्डुलत्रिगुणं तोयं निक्षिपेच्च पिधापयेत् । वाससा शशिशुभ्रेण धौतेन च घनेन च ॥ ५२ ॥ चुल्यां निधाय निधूमे वह्नौ तत् काथयेज्जलम् । सुतप्ते बुद्बुदोपेते स्वल्पबाष्पसमन्विते ॥ ५३ ॥ तण्डुलानावपेत्स्थाल्यां दर्व्या च परिघट्टयेत् । सिक्थं विमृश्य वीक्षेत वारं वारं विचक्षणः ॥ ५४ ॥ मृदुभूते च तत्सिक्थे किञ्चिद्वा कणगर्भिते । तत्र दुग्धं घृतं वापि निक्षिप्योत्तारयेत्ततः ॥ ५५ ॥ स्थाल्यास्ये पिटकं दत्त्वा मण्डं तं स्रावयेद्गुणी । ईषदुद्धारितं मण्डमूष्मणा परिशोषयेत् ॥ ५६ ॥",
    english: "[The opening half-verse completes the previous one: with care, the maidservants are to draw out and remove everything foreign lodged in the rice.] Take grains unbroken and cleaned, washed many times with water, white as *kunda* jasmine, and held under water a long while. In a pot made of copper, or else of clay, put water three times the rice, and have it covered with a cloth as white as the moon, washed, and thick. Set it on the stove and boil that water over a smokeless fire. When the water is thoroughly hot, covered in bubbles, and giving off a little steam, scatter the rice into the pot and stir it with a ladle. The discerning cook should press a grain and inspect it again and again. When the grain has gone soft, or still holds a little core, put in milk, or else ghee, and then take the pot off the fire. Setting a woven lid over the mouth of the pot, the skilled cook should pour off the *māṇḍa*, the starchy water, and dry off what little of it remains in the retained heat.",
  },
  {
    ref: "Mānasollāsa 3.13.1357–1366",
    latin: "एवं भक्तं सुपकं यद्राजयोग्यं तदुत्तमम् । राजमुद्गास्तथा पीता निष्पावाश्चणका अपि ॥ ५७ ॥ कृष्णाढक्यस्तथा माषा मसूरा राजमाषकाः । सूपकर्मणि सप्तैते नियोज्याः सूपकारकैः ॥ ५८ ॥ दलिताऽदलिताश्चैते पचनीया यथारुचि । चणका राजमाषाश्च मसूरा राजमुद्गकाः ॥ ५९ ॥ घरट्रैर्दलिताः कार्याः पाकार्थं हि विचक्षणैः । किंचिद्दष्टास्तथाढक्यो यन्त्रावर्तैर्द्विधाकृताः ॥ १३६० ॥ विदलीकृताः सम्यक् शूर्पकैर्वितुषीकृताः । स्थाल्यां शीतोदकं क्षिप्त्वा विदलैः सममानतः ॥ ६१ ॥ आवपेद्विदलान् पश्चाच्चुल्यामारोपयेत्ततः । मन्दाग्निपच्यमानेऽन्तर्हिङ्गुतोयं विनिक्षिपेत् ॥ ६२ ॥ वर्णार्थं रञ्जनीचूर्णमीषत्तत्र नियोजयेत् । मुहुर्मुहुः क्षिपेत्तोयं यावत्पाकस्य पूर्णता ॥ ६३ ॥ सुश्लक्ष्णं सैन्धवं कृत्वा विंशत्यंशेन निक्षिपेत् । वर्णतः स्वादतो गन्धान्मार्दवाल्लाघवादपि ॥ ६४ ॥ एवं विदलपाकस्य सम्यक्सिद्धिरुदाहृता । निष्पावा मेचकाढक्यो हिङ्गुना परिवर्जिताः ॥ ६५ ॥ अभिन्नाः पूर्ववत् पाक्या हरिद्राचूर्णकं विना । मसूरमाषपाकेषु हिङ्गुतोयं विनिक्षिपेत् ॥ ६६ ॥",
    english: "Rice cooked in this way, fit for a king, is the best. Use *rāja-mudga*, yellow mung, *niṣpāva*, chickpeas, dark *āḍhakī*, black gram, lentils, or *rāja-māṣa*: these are the seven that soup-cooks employ [the list as transmitted gives eight names — \"yellow\" is probably a description of the *rāja-mudga* rather than a pulse of its own, since the seven that recur later in the passage do not include it]. Cook them split or whole according to taste. Chickpeas, *rāja-māṣa*, lentils, and *rāja-mudga* are split on the quern; the *āḍhakī* is first bruised a little and then halved by turning the mill. Split them properly and winnow off the husks. Put cold water in a pot in an amount equal to the split pulse, add the pulse, set it on the stove, and cook over a low fire, throwing in asafoetida-water while it cooks. For colour, add a little turmeric powder, and add water again and again until the cooking is complete. Add finely ground rock salt in the proportion of one part to twenty. So is declared the proper perfection of split-pulse cooking, judged by colour, taste, aroma, softness, and lightness. *Niṣpāva* and dark *āḍhakī* are cooked whole, as before, without asafoetida or turmeric. In cooking lentils and black gram, put in asafoetida-water.",
  },
  {
    ref: "Mānasollāsa 3.13.1367–1372",
    latin: "इतरः पूर्ववत् कार्यः पाकः पाकविचक्षणैः । प्रक्षालितान् वरान्मुद्गान् समतोये विनिक्षिपेत् ॥ ६७ ॥ चुल्यां मन्दाग्निना पाकः कर्तव्यः सूपकारकैः । पच्यमानेषु मुद्गेषु हिङ्गुवारि विनिक्षिपेत् ॥ ६८ ॥ आर्द्रकस्य च खण्डानि सूक्ष्माणि च विनिक्षिपेत् । वार्ताकं पाटितं तैलभृष्टं तत्र विनिक्षिपेत् ॥ ६९ ॥ तैलभृष्टा मृदूभूताः क्षिपेद्वा बिसचक्रिकाः । बीजानि वा प्रियालस्य क्षिप्त्वा दर्व्या विवर्तयेत् ॥ १३७० ॥ पुनः पुनः क्षिपेत्तोयं स्तोकं स्तोकं विचक्षणः । केचिदिच्छन्ति रुच्यर्थं मेषमांसस्य खण्डकान् ॥ ७१ ॥ कान्यपि द्विधा भिन्नान्मेदसः शकलानि वा । मुहुः सूपे सुनिष्पन्ने चूर्णितं मरिचं क्षिपेत् ॥ ७२ ॥",
    english: "The next preparation is to be made as before by cooks skilled in cooking. Wash superior mung beans and cook them slowly in an equal quantity of water. While they cook, add asafoetida-water and small pieces of fresh ginger. Add split eggplant fried in oil, or lotus-stem discs fried in oil until soft, or *priyāla* kernels, and turn them through with the ladle. Add water again and again, little by little. Some cooks, for relish, want mutton pieces — some of them split in two — or pieces of fat. When fully cooked, add ground black pepper; after removing from the fire, add powdered dry ginger and stir.",
  },
  {
    ref: "Mānasollāsa 3.13.1373–1375",
    latin: "उत्तार्य नागरं चूर्णं क्षिप्त्वा दर्व्या विघट्टयेत् । श्यामाककङ्गुनीवारगन्धशालिसुतण्डुलैः ॥ ७३ ॥ सरवेष्टिकसेवाकैर्दिवसैर्लघुविस्तृतैः । चिरप्रसूतमहिषीपयसा पायसं पचेत् ॥ ७४ ॥ पायसं लेहने योग्यं स्वादुगन्धं मनोहरम् । गोधूमाः क्षालिताः शुभ्राः शोषिता रविरश्मिभिः ॥ ७५ ॥",
    english: "[The opening half-verse completes the preceding mung soup: having taken it off the fire, put in powdered dried ginger and stir it with the ladle.] Cook a *pāyasa* in the milk of a buffalo that calved long before, with the fine grains of *śyāmāka*, *kaṅgu*, *nīvāra*, or fragrant *śāli* rice — or with *sara*, *veṣṭika*, and *sevāka*, thinly drawn out over some days [the reading of this half-verse is obscure]. The *pāyasa* should become thick enough to lick, sweet-smelling, and pleasing. [The closing half-verse begins the following *maṇḍaka* recipe: wheat, washed white and dried by the sun's rays.]",
  },
  {
    ref: "Mānasollāsa 3.13.1376–1380",
    latin: "घरट्रैश्चूर्णिताः श्लक्ष्णाश्चालन्या वितुषीकृताः । गोधूमचूर्णकं श्लक्ष्णं किंचिद्घृतविमिश्रितम् ॥ ७६ ॥ लवणेन च संयुक्तं क्षीरनीरेण पिण्डितम् । सुमहत्यां काष्ठपात्र्यां करास्फालैर्विमर्दयेत् ॥ ७७ ॥ मर्दितं चिकणीभूतं गोलकान् परिकल्पयेत् । स्नेहाभ्यक्तैः करतलैः शालिचूर्णैर्विरूक्षितान् ॥ ७८ ॥ प्रसारयेद्गोलकांस्तान् करसञ्चारवर्तनैः । विस्तृता मण्डकाः श्लक्ष्णाः सितपट्टसमप्रभाः ॥ ७९ ॥ प्रयत्नान्निक्षिपेत्तज्ज्ञस्तप्तखर्परमस्तके । पक्वांश्चापनयेच्छीघ्रं यावत्कार्ण्यं न जायते ॥ १३८० ॥",
    english: "[The opening half-verse completes the previous one: wheat, washed white and dried by the sun's rays.] Grind it fine on the quern and sift the bran out through a sieve. Mix the fine wheat flour with a little ghee, add salt, and work it into a lump with milk and water. Knead it in a very large wooden vessel, beating it with the flat of the hands. When it has been kneaded until it turns smooth and glossy, form it into balls. With palms smeared with fat, dust the balls dry with rice flour and stretch them out by passing and turning them between the hands. Spread broad, the *maṇḍakas* are smooth and as lustrous as white silk. The expert should lay them carefully on the crown of a heated earthen griddle, and take them off as soon as they are done, before any blackness appears.",
  },
  {
    ref: "Mānasollāsa 3.13.1381–1383",
    latin: "चतस्रश्च चतस्रो घटिता मण्डका वराः । गोलान् प्रसारितान् पाणावङ्गारेषु विनिक्षिपेत् ॥ ८१ ॥ अङ्गारपालिकाः शस्ताः किंचित्कृष्णत्वमागताः । गोलकान् पिष्टकालिप्तान् पेषण्या तान् प्रसारयेत् ॥ ८२ ॥ सुतप्ततापने क्षिप्तानीषत्पक्वान् विवर्तयेत् । खर्परेऽपि पचेदेवं पोलिकानामयं क्रमः ॥ ८३ ॥",
    english: "[The opening half-verse belongs with the preceding recipe: *maṇḍakas* fitted together four and four are the best.] Spread the dough-balls out on the palm and throw them among the embers. The *aṅgārapālikās* are at their best when they have taken on a little blackness. Coat the balls with flour and spread them out with a rolling stone; put them on a thoroughly heated plate and turn them when they are partly cooked. They may equally be cooked on an earthen griddle. This is the procedure for *polikās*.",
  },
  {
    ref: "Mānasollāsa 3.13.1384–1385",
    latin: "तैलपूर्णकटाहे तु सुतप्ते सोहला पचेत् । उत्तानपाकसंसिद्धाः कठिनाः सोहला मताः ॥ ८४ ॥ तैलमग्नाः पीतवर्णा मृदवः पाहलिकाः स्मृताः । तनुप्रसारितान् गोलान् ताप्य स्नेहेन पाचितान् ॥ ८५ ॥",
    english: "Cook *sohalās* in a very hot cauldron full of oil. Brought to completion face-up — floating with the upper surface out of the oil — they are held to be firm. *Pāhalikās* are sunk in the oil, yellow in colour, and soft. [The closing half-verse begins the following recipe: balls spread out thin, heated, and cooked in fat.]",
  },
  {
    ref: "Mānasollāsa 3.13.1385–1386",
    latin: "तैलमग्नाः पीतवर्णा मृदवः पाहलिकाः स्मृताः । तनुप्रसारितान् गोलान् ताप्य स्नेहेन पाचितान् ॥ ८५ ॥ उपर्युपरि निक्षिप्ताः पत्रिकाः विपचेत्सुधीः । गोधूमचूर्णादुद्धृत्य शूर्पेणाभ्याहतान् कणान् ॥ ८६ ॥",
    english: "Spread the dough-balls thin and cook them with fat on the heated griddle; laid one above another, the wise cook should cook them as *patrikās*.",
  },
  {
    ref: "Mānasollāsa 3.13.1386–1387",
    latin: "उपर्युपरि निक्षिप्ताः पत्रिकाः विपचेत्सुधीः । गोधूमचूर्णादुद्धृत्य शूर्पेणाभ्याहतान् कणान् ॥ ८६ ॥ दुग्धाक्तान् घृतपकांश्च सितया च विमिश्रितान् । एलामरिचचूर्णेन युक्तान् कीसारसंज्ञितान् ॥ ८७ ॥",
    english: "Take from the wheat flour the coarse grains beaten out with a winnowing basket. Moistened with milk, cooked in ghee, mixed with white sugar, and joined with powder of cardamom and pepper, they are called *kīsāra*.",
  },
  {
    ref: "Mānasollāsa 3.13.1387–1388",
    latin: "दुग्धाक्तान् घृतपकांश्च सितया च विमिश्रितान् । एलामरिचचूर्णेन युक्तान् कीसारसंज्ञितान् ॥ ८७ ॥ गोलकेन समावेष्ट्य तैलेनोदुम्बरान् पचेत् । उत्क्वाथ्य विदलान् पिष्ट्वा चणकप्रभृतीन् शुभान् ॥ ८८ ॥",
    english: "Wrapping them [the *kīsāra* grains] up completely in a dough-ball, one should cook the *udumbaras* with oil.",
  },
  {
    ref: "Mānasollāsa 3.13.1388–1390",
    latin: "गोलकेन समावेष्ट्य तैलेनोदुम्बरान् पचेत् । उत्क्वाथ्य विदलान् पिष्ट्वा चणकप्रभृतीन् शुभान् ॥ ८८ ॥ हिङ्गुसैन्धवसंयुक्तान् शर्करापरिमिश्रितान् । मरिचैलादिचूर्णेन युक्तान् गोलकवेष्टितान् ॥ ८९ ॥ किंचित्प्रसारिते तैले पूरिका विपचेच्छुभाः । एवं ताप्यां पचेदन्याः पूरिकाश्च विचक्षणः ॥ १३९० ॥",
    english: "Boil and grind fine split chickpeas or similar pulses. Mix the paste with asafoetida, rock salt, sugar, black pepper, cardamom, and other aromatics. Enclose it in a dough-ball and fry the excellent *pūrikās* in a little oil spread over the pan. The discerning cook may cook other *pūrikās* on a heated plate.",
  },
  {
    ref: "Mānasollāsa 3.13.1391–1394",
    latin: "हरिमन्थस्य विदलं हिङ्गुजीरकमिश्रितम् । लवणेन च संयुक्तमार्द्रकेण समन्वितम् ॥ ९१ ॥ वेष्टयित्वा गोलकेन वेष्टिका खर्परे पचेत् । विदलं चणकस्यैवं पूर्वसम्भारसंस्कृतम् ॥ ९२ ॥ ताप्यां तैलविलिप्तायां घोसकान् विपचेद्बुधः । माषस्य राजमाषस्य वट्टाणस्य च घोसकान् ॥ ९३ ॥ अनेनैव प्रकारेण विपचेत्पाकतत्त्ववित् । वट्टाणस्य विदलं विदलं चणकस्य च ॥ ९४ ॥",
    english: "Split *harimantha* — chickpea — mixed with asafoetida and cumin, combined with salt, and accompanied by fresh ginger: having wrapped it up in a dough-ball, one should cook the *veṣṭikā* on an earthen griddle. Split chickpea, prepared in the same way with the seasonings named above, the wise cook should cook into *dhosakas* on a griddle smeared with oil [the printed edition reads *dhosaka*, the Sanskritized *dosa*, where the transcription above has *ghosaka*]. *Dhosakas* of black gram, of *rāja-māṣa*, and of *vaṭṭāṇa* the knower of the essence of cooking should cook by this very same method.",
  },
  {
    ref: "Mānasollāsa 3.13.1394–1396",
    latin: "अनेनैव प्रकारेण विपचेत्पाकतत्त्ववित् । वट्टाणस्य विदलं विदलं चणकस्य च ॥ ९४ ॥ चूर्णितं वारिणा सार्धं सर्पिषा परिभावितम् । सैन्धवेन च संयुक्तं कण्डुना परिघट्टितम् ॥ ९५ ॥ निष्पावचूर्णसंयुक्तं पेषण्यां च प्रसारितम् । कटाहे तैलसंपूर्णे कटकर्णान् प्रपाचयेत् ॥ ९६ ॥",
    english: "Split *vaṭṭāṇa* and split chickpea, milled to a powder and slaked with water, worked through with ghee, combined with rock salt, stirred with a *kaṇḍu* [an implement, most likely a pan], joined with *niṣpāva* flour, and spread out on the grinding stone: in a cauldron brimming with oil one should fry the *kaṭakarṇas*, until they come out like bubbles, with the sheen of gold.",
  },
  {
    ref: "Mānasollāsa 3.13.1397–1401",
    latin: "यावद्बुद्बुदसंकाशा भवन्ति कनकत्विषः । माषस्य विदलान् क्लिन्नान्निस्तुषान् हस्तलोडनैः ॥ ९७ ॥ ततः सम्पेष्य पेषण्यां सम्भारेण विमिश्रितान् । स्थाल्यां विमर्द्य बहुशः स्थापयेत्तदहस्ततः ॥ ९८ ॥ आम्लीभूतं माषपिष्टं वैटिकासु विनिक्षिपेत् । गर्भाभिरन्याभिः पिधाय परिपाचयेत् ॥ ९९ ॥ अवतार्यात्र मरिचं चूर्णितं विकिरेदनु । घृताक्तान् हिङ्गुसर्पिर्भ्यां जीरकेण च धूपयेत् ॥ १४०० ॥ सुशीताः धवलाः श्लक्ष्णा एता इडेरिका वराः । तस्यैव माषपिष्टस्य गोलकान् विस्तृतान् घनान् ॥ १ ॥",
    english: "Soak split black gram and rub the husks off it by hand. Then grind it on the grinding stone, mix it with the seasonings, work it many times over in a pot, and set it aside for the day. Once the black-gram paste has turned sour, put it into *vaiṭikā* moulds, cover them over with other moulds lined with cloth, and cook them right through. Take them off the fire, scatter powdered pepper over them, and, smeared with ghee, perfume them with asafoetida in ghee and with cumin. Well cooled, white, and smooth, these are the excellent *iḍerikās*.",
  },
  {
    ref: "Mānasollāsa 3.13.1401–1403",
    latin: "सुशीताः धवलाः श्लक्ष्णा एता इडेरिका वराः । तस्यैव माषपिष्टस्य गोलकान् विस्तृतान् घनान् ॥ १ ॥ पञ्चभिः सप्तभिर्वापि छिद्रैश्च परिशोभितान् । तप्ततैले पचेद्यावल्लौहित्यं तेषु जायते ॥ २ ॥ घारिकासंज्ञया ख्याता भक्ष्येषु सुमनोहराः । निच्छिद्रा घारिकाः पक्वा मथिते शर्करायुते ॥ ३ ॥",
    english: "From that very same black-gram batter [the soured batter of the *iḍerikās*] make balls, spread out broad and thick, adorned with five holes, or else with seven. Fry them in hot oil until a red color appears in them. Renowned by the name *ghārikā*, they are the most delightful of *bhakṣyas*.",
  },
  {
    ref: "Mānasollāsa 3.13.1403–1404",
    latin: "घारिकासंज्ञया ख्याता भक्ष्येषु सुमनोहराः । निच्छिद्रा घारिकाः पक्वा मथिते शर्करायुते ॥ ३ ॥ एलामरिचसंयुक्ते निक्षिप्ता वटिकाभिधाः । त एव वटकाः क्षिप्ताः काञ्जिके काञ्जिकाभिधाः ॥ ४ ॥",
    english: "*Ghārikās* cooked without holes, put into *mathita* combined with sugar and joined with cardamom and pepper, are named *vaṭikās*. Those same *vaṭakas*, put into *kāñjika*, are named *kāñjika*[-*vaṭakas*].",
  },
  {
    ref: "Mānasollāsa 3.13.1405–1407",
    latin: "यत्र यत्र द्रवद्रव्ये तन्नाम्ना वटकास्तु ते । आरनालेन सान्द्रेण दध्ना सुमथितेन च ॥ ५ ॥ सैन्धवार्द्रकधान्याकजीरकं च विमिश्रयेत् । मरिचानि द्विधा कृत्वा क्षिपेत्तत्र तु पाकवित् ॥ ६ ॥ दर्व्या विघट्टयन् सर्वं पचेद्यावद्घनीभवेत् । उत्तार्य वटकान् क्षिप्त्वा विकिरेन्मारिचं रजः ॥ ७ ॥",
    english: "In whatever liquid substance they are put, the *vaṭakas* take their name from it. Into thick *āranāla* and well-churned curd, mix rock salt, fresh ginger, coriander, and cumin; and the cook who knows his craft should split the peppercorns in two and throw them in there. Stirring the whole of it with a ladle, he should cook it until it becomes thick. Then, having taken it off the fire and thrown in the *vaṭakas*, he should scatter pepper powder over them. [1408 continues: perfume them well with asafoetida; those *vaṭakas* are delightful.]",
  },
  {
    ref: "Mānasollāsa 3.13.1408–1410",
    latin: "हिङ्गुना धूपयेत्सम्यग् वटकास्ते मनोहराः । दुग्धमुत्क्वाथ्य तन्मध्ये तक्रमम्लं विनिक्षिपेत् ॥ ८ ॥ हित्वा तोयं घनीभूतं वस्त्रबद्धं पृथक्कृतम् । शालितण्डुलपिष्टेन मिश्रितं परिपेषितम् ॥ ९ ॥ नानाकारैः सुघटितं सर्पिषा परिपाचितम् । पक्वशर्करया सिक्तमेलाचूर्णेन वासितम् ॥ १४१० ॥",
    english: "Perfume them well with asafoetida; those *vaṭakas* are delightful. Boil up milk and throw sour *takra* into the middle of it. The whey abandoned, the thickened mass is tied in cloth and set aside, mixed with the flour of *śāli* rice and thoroughly ground, well formed into various shapes, thoroughly cooked in ghee, drenched with cooked sugar, and scented with cardamom powder. [1411 names it: this *bhakṣya* is called *kṣīraprakāra*, delicious and delightful.]",
  },
  {
    ref: "Mānasollāsa 3.13.1411–1416",
    latin: "क्षीरप्रकारनामेदं भक्ष्यं मृष्टं मनोहरम् । शर्करां वारिसंयुक्तां ताम्रपात्रे विपाचयेत् ॥ ११ ॥ अर्धपाके क्षिपेद्दुग्धं सकं वापि यथारुचि । तेन मुञ्चेन्मलं सा तु शर्करा कथिता सती ॥ १२ ॥ निर्मलेन च वस्त्रेण गालयेत्तां मुहुर्मुहुः । मृदौ पाके द्रुता पेया मध्यमे मधुसन्निभा ॥ १३ ॥ खरे तु कठिना भक्ष्या साधिके शर्करा भवेत् । खरपाके सुसिद्धायाः सितायाः सम्पुटे ॥ १४ ॥ नानारूपाणि कुर्वीत खण्डपाकविशारदः । शोधितायां सितायां तु क्षीरं संमिश्रयेत्समम् ॥ १५ ॥ खरपाकावधिर्यावत्तावत्तापयेत्पुनः । उत्तार्य नागरं तीक्ष्णमेलाकर्पूरकेसरैः ॥ १६ ॥",
    english: "This *bhakṣya*, named *kṣīraprakāra*, is delicious and delightful. Cook *śarkarā* mixed with water in a copper vessel. At half-cooking throw in milk, or else *saka*, as preferred [the second term is unclear]; by this it releases its impurity, and that sugar is then declared *sitā*, refined. Strain it through a spotless cloth again and again. At the soft cooking it is fluid, a drink; at the middle, it resembles honey; at the hard, it is firm, a *bhakṣya*; and cooked beyond that, it becomes *śarkarā* again — it grains. Out of *sitā* well perfected at the hard cooking, in a *sampuṭa* [a closed two-part mould; the line is defective here], the expert in *khaṇḍa*-cooking should make various forms. But into purified *sitā* he should mix an equal quantity of milk and heat it again up to the limit of the hard cooking. Taking it off the fire, throw in dry ginger, *tīkṣṇa*, cardamom, camphor, and saffron. [1417 continues: balls are then to be made, and those are called *varṣolakas*.]",
  },
  {
    ref: "Mānasollāsa 3.13.1417–1426",
    latin: "निक्षिप्य गोलकाः कार्या नाम्ना वर्षोलकास्तु ते । वराहपललं स्निग्धं मृष्टं सारङ्गजं पलम् ॥ १७ ॥ हरिणस्यामिषं पथ्यं रूक्षं मांसं शशोद्भवम् । आविकं तरसं रुच्यं लघु क्रव्यमजोद्भवम् ॥ १८ ॥ मत्स्यमांसं भवेद्वृष्यं शाकुनं लघु कीर्तितम् । रुरुसम्बरसंभूतं पुष्टं चेद्रुच्यमीरितम् ॥ १९ ॥ मांसान्यन्यानि बल्यानि रसनाप्रीतिदानि च । कृशस्य व्याधियुक्तस्य जराजर्जरितस्य च ॥ १४२० ॥ शावकस्य च शुष्कस्य विषसन्दूषितस्य च । वारिणा निहतस्यापि श्रमशोषमृतस्य च ॥ २१ ॥ क्लिन्नस्य पूतिगन्धस्य मांसानि परिवर्जयेत् । पृष्ठवंशस्य पार्श्वस्थं बहिरन्तश्च संस्थितम् ॥ २२ ॥ जघनस्य घनं पिण्डं पुच्छमूलसमुद्भवम् । क्रोडदेशोद्भवं चैव कक्षाभागस्य पूरकम् ॥ २३ ॥ पार्श्वयोः संस्थितं चैव कुक्षिसन्धिविलेपकम् । अंसपूर्वांशसम्भूतं मुकुलं हृदयोद्भवम् ॥ २४ ॥ कालखण्डं तथा वृक्कौ गुदान्त्रं च तथान्त्रकम् । अक्षिणी रसना कर्णावूधो वृषणकर्णकम् ॥ २५ ॥ पशुकायां सुसंलग्नं वपामस्तिष्कमज्जकम् । पादाः शृङ्गं खुरास्त्वक् च श्रेष्ठमेतत्पलं मतम् ॥ २६ ॥",
    english: "The text characterizes the meats. Boar is fatty and rich; sāraṅga meat is praised; deer is wholesome; hare is dry; mutton is juicy and tasty; goat meat is light; fish is aphrodisiac; bird meat is light; and the flesh of ruru and sambar deer is nourishing and palatable. Other meats may also strengthen the body and please the tongue. Avoid the meat of an emaciated, diseased, decrepit, very young, dried-out, poisoned, drowned, exhausted, wasted, putrid, or foul-smelling animal. The anatomical list begins with meat beside the spine, lying both outside and within; the dense mass of the rump and tail-root; the chest; the flesh filling the armpit; the sides and the junction of the abdomen; the shoulder region; and a bud-shaped portion associated with the heart. The list of edible parts continues with the kālakhaṇḍa, kidneys, rectum and intestines, eyes, tongue, ears, udder, testicles, fat attached within the carcass, brain, marrow, feet, horns, hooves, and skin. The text calls these meat portions valuable, while allowing that among the various classes some are better than others. Several cut-names are technical and not securely identifiable from the verse alone; kālakhaṇḍa is probably a dark organ such as liver [the identification remains uncertain].",
  },
  {
    ref: "Mānasollāsa 3.13.1427–1435",
    latin: "एतेषु मांसवर्गेषु केषाञ्चित्किंचिदुत्तमम् । वराहं सितवस्त्रेण प्रच्छाद्योत्क्वथितवारिणा ॥ २७ ॥ गण्डकेन सदण्डेन तावसिञ्चन्मुहुर्मुहुः । यावत्तज्जातरोमाणि प्रोन्मूल्यन्ते सुखं करैः ॥ २८ ॥ पश्चात्कर्तरिकया रोमाण्युद्धृष्टान्यपसारयेत् । अथवा कर्दमालिप्तं दहेत्तं तृणवह्निना ॥ २९ ॥ सुखोत्पाट्यानि रोमाणि पूर्ववच्चापसारयेत् । आजानुसन्धिमूलाङ्घ्रीं तृणैः प्रच्छाद्य तं दहेत् ॥ १४३० ॥ कठिनत्वमुपायातं क्षालयेन्निर्मलजलैः । पाण्डुरं बिससङ्काशं समं संस्थापितं कटे ॥ ३१ ॥ आमूर्ध्नः प्रस्थापयति कर्तरिकापरिपाटितम् । सारीफलकररेखाभ्यां चित्तवत् स्यादायामशुण्ठकम् ॥ ३२ ॥ चतुरस्रीकृतान् खण्डान् शूलपोतान् प्रतापयेत् । अङ्गारेषु प्रभूतेषु घृतबिन्दुस्रवावधि ॥ ३३ ॥ पश्चान्मरिचचूर्णेन विकिरेत्सैन्धवं ततः । अथाम्लपरिस्विन्नान् पूर्ववत्परिकल्पयेत् ॥ ३४ ॥ अथवा दारितान् कृत्वा त्वक्शेषान् लवणान्वितान् । भर्जयेदङ्गारपुञ्जेषु शुण्ठकानमृतोपमान् ॥ ३५ ॥",
    english: "Clean a pig by scalding or singeing and remove the bristles, then wash it until it is pale like a lotus-stalk. Cut the flesh into long *śuṇṭhakas* [the verse defining the cut is corrupt], then make square pieces, thread them on skewers, and roast over abundant embers until drops of fat begin to fall. Scatter ground pepper and rock salt over them. Or else sweat the pieces in sour liquid and then prepare them as before. Or else split them, leave the skin on, salt them, and roast them in heaps of embers: *śuṇṭhakas* like ambrosia.",
  },
  {
    ref: "Mānasollāsa 3.13.1436–1441",
    latin: "स्विन्नानां शुण्ठकानां च मेदोभागं प्रगृह्य च । ताडपत्रसमाकाराः कृत्वा चक्कलिकाः शुभाः ॥ ३६ ॥ मथिते शर्करायुक्ते दध्न्येलाविमिश्रिते । कर्पूरवासिते तत्र रुच्याश्चक्कलिकाः क्षिपेत् ॥ ३७ ॥ मांसमेदोमयान् शुण्ठान् पूर्ववच्चक्कलीकृतान् । मथिते राजिकायुक्ते मातुलिङ्गकसरे ॥ ३८ ॥ धूपिते हिङ्गुना सम्यग् दध्नि चक्कलिकाः क्षिपेत् । घृते वा चक्कलीं भृष्ट्वा किरेदेला सशर्कराम् ॥ ३९ ॥ अथवा मातुलुङ्गस्य सुपकस्य च केसरैः । सूक्ष्मैरार्द्रकखण्डैश्च केसराम्लैर्मनोहरैः ॥ १४४० ॥ चूर्णितं मरिचं राजीसैन्धवैर्मिश्रयेत्ततः । हिङ्गुना धूपिताः साम्ला हृद्याश्चक्कलिका वराः ॥ ४१ ॥",
    english: "Taking the fatty portion of the cooked *śuṇṭhakas*, make fine *cakkalikās*, slices of the same shape as a palmyra leaf. Throw the appetizing *cakkalikās* into churned curd [*mathita*, from which the butter has been removed] combined with sugar, mixed with cardamom, and perfumed with camphor. Or take *śuṇṭhas* of meat and fat, made into *cakkalikās* as before, and throw them into churned curd combined with mustard and citron pulp and thoroughly perfumed with asafoetida smoke. Alternatively fry them in ghee and scatter cardamom with sugar over them. Or else, with the pulp of a well-ripened citron, with finely cut pieces of fresh ginger, and with delightful *kesarāmla* [a second name for the citron], then mix in powdered pepper together with mustard and rock salt; perfumed with asafoetida, sour and heart-pleasing, these *cakkalikās* are excellent.",
  },
        {
    ref: "Mānasollāsa 3.13.1442–1448",
    latin: "दध्ना विमिश्रयेच्चिञ्चां किंवा दाडिमसारकम् । अथवामलकं पिष्टं मेलयेद्वाम्लवेतसम् ॥ ४२ ॥ रसं वा मातुलिङ्गस्य रसं दन्तशठस्य च । मिश्रयेद्वा रसानेतान् द्वित्रान्वापि यथारुचि ॥ ४३ ॥ गन्धार्थं धान्यकं हिङ्गु जीरकं तत्र निक्षिपेत् । हरिद्रां चैव वर्णार्थं सुसूक्ष्मं च तथार्द्रकम् ॥ ४४ ॥ रुच्यर्थं विश्वमरिचं सैन्धवं च विनिक्षिपेत् । गालयेत्सितवस्त्रेण किंचित्तैलं विमिश्रयेत् ॥ ४५ ॥ मृदः स्थाल्यां विनिक्षिप्य दर्वीघट्टनपूर्वकम् । प्रलेहकं मृदावग्नौ पचेत्पाकविशारदः ॥ ४६ ॥ प्रक्षिप्य शुण्ठकांस्तत्र मृदु कुर्याच्च पाकतः । भावितांश्च रसैः सर्वैः सिद्धानुत्तारयेद्बुधः ॥ ४७ ॥ धूपयेद्धिङ्गुना वापि नखधूपेन वा पुनः । धूपेन जीरकस्यापि शशिधूपेन कोविदः ॥ ४८ ॥",
    english: "Mix curd with tamarind, or with pomegranate essence, or with ground *āmalaka*, or with *amlavetasa*, or with the juice of citron, or with the juice of *dantaśaṭha*. Or mix two or three of these juices, as you like. For aroma put in coriander, asafoetida, and cumin; turmeric for colour; and very finely cut fresh ginger. For relish put in dried ginger, black pepper, and rock salt. Strain it through a white cloth and mix in a little oil. Put it in an earthen pot and, stirring with a ladle, cook it over a gentle fire into a *pralehaka*. Throw the *śuṇṭhakas* in and cook them soft, saturated with all the flavours. Perfume it with asafoetida, or with onycha, or with cumin smoke, or with camphor smoke.",
  },
  {
    ref: "Mānasollāsa 3.13.1449–1452",
    latin: "चणकस्य समान् खण्डान् कल्पयित्वा विचक्षणः । निशाजीरकतीक्ष्णाद्यैः शुण्ठीधान्यकहिङ्गुभिः ॥ ४९ ॥ चूर्णितैर्मेलयित्वा तांस्तप्ततैले विनिक्षिपेत् । समानार्द्रकखण्डांश्च चणकान् हरितानपि ॥ १४५० ॥ श्लक्ष्णमांसैः क्षिपेत्कोलं निष्पावान् कोमलानपि । पलाण्डुशकलान् वापि लशुनं वापि निक्षिपेत् ॥ ५१ ॥ एवं पूर्वोदितं सूदः प्रयुञ्जीत यथारुचि । शोषितेऽम्लरसे पश्चात्सिद्धमुत्तार्य धूपयेत् ॥ ५२ ॥",
    english: "Having made pieces [of meat] the size of a chickpea, the discerning cook should mix them with powdered turmeric, cumin, pepper and the like, with dried ginger, coriander, and asafoetida, and throw them into hot oil, together with pieces of fresh ginger cut to the same size, and green chickpeas as well. Along with the finely cut meats he should put in *kola* and tender *niṣpāva* pods; or else he may put in slices of onion, or garlic. Thus the cook should apply the sour preparation described earlier, according to taste. When the sour juice has dried away he should take the finished dish off the fire and perfume it.",
  },
  {
    ref: "Mānasollāsa 3.13.1453–1456",
    latin: "बदराकारकान् खण्डान् पूर्ववच्चूर्णमिश्रितान् । आर्द्रकांस्तत्प्रमाणांश्च पक्वतैले विपाचयेत् ॥ ५३ ॥ वार्ताकशकलांश्चैव मूलकस्य च खण्डकान् । पलाण्ड्वार्द्रकसम्भूतान् मुद्गाङ्कुरविनिर्मितान् ॥ ५४ ॥ वटकान् निक्षिपेत्तत्र मेषकस्य च चूर्णकम् । कासमर्देन संयुक्तं पलान्यन्यानि कानिचित् ॥ ५५ ॥ सुसिद्धं वासयेद्धूपैर्नानारसविमिश्रितम् । नानाद्रव्यसमेता सा कवचन्दी भवेच्छुभा ॥ ५६ ॥",
    english: "Having made [the meat into] pieces shaped like jujubes, mixed with the powders as before, cook them in well-heated oil together with pieces of fresh ginger of that same measure. Into that throw slices of eggplant and pieces of radish, and *vaṭakas* made from mung sprouts with onion and fresh ginger, and powder of *meṣaka* [most likely *methaka*, fenugreek — see the notes] combined with *kāsamarda*, and some other meats. When it is thoroughly cooked and mixed with the various juices, perfume it with aromatic smoke. Endowed with many substances, that *kavacandī* is excellent.",
  },
  {
    ref: "Mānasollāsa 3.13.1457–1461",
    latin: "स्थूलामलकसङ्काशान् शुद्धमांसस्य खण्डकान् । काथयेद्राजिकातोयैर्नागरार्द्रकसंयुतैः ॥ ५७ ॥ स्थापयेत्तज्जलं पात्रे रिक्ते चाम्लैर्विपाचयेत् । तत्समान् शुण्ठकान् क्षिप्त्वा सैन्धवं तत्र योजयेत् ॥ ५८ ॥ मेथकचूर्णकं तत्र धान्यकस्य च पूलिकाम् । निक्षिप्योत्तारयेत्सूदो घृतं वान्यत्र तापयेत् ॥ ५९ ॥ सुतप्ते च घृते पलाण्डुं लशुनं हिङ्गुना सह । प्रक्षिप्य संस्कृतं मांसं तस्यां स्थाल्यां प्रवेशयेत् ॥ १४६० ॥ पिहितं च ततः कुर्यात्किंचित्कालं प्रतीक्ष्य च । उत्तारयेत्ततः सिद्धं पुर्यलाख्यमिदं वरम् ॥ ६१ ॥",
    english: "Cut clean meat into pieces the size of large *āmalakas*. Boil them in mustard-water combined with dried and fresh ginger. Transfer the cooking liquor to an empty vessel and cook it with sour ingredients. Return the same-sized meat *śuṇṭhakas* and add rock salt, fenugreek powder, and a small bundle of coriander. Take the preparation off the fire and heat ghee separately. Into the very hot ghee put onion, garlic, and asafoetida; then place the prepared meat in that pot. Cover it, wait a short time, and remove it when done. This excellent preparation is called *puryala*.",
  },
  {
    ref: "Mānasollāsa 3.13.1462–1465",
    latin: "पृष्ठवंशसमुद्भूतं शुद्धं मांसं प्रगृह्य च । घनसारप्रमाणानि कृत्वा खण्डानि मूषकैः ॥ ६२ ॥ विध्वा तु बहुशस्तानि बहुरन्ध्राणि कारयेत् । हिङ्ग्वार्द्रकरसैर्युक्तं सैन्धवेन च पेषयेत् ॥ ६३ ॥ शूलपोतानि कृत्वा तान्यङ्गारेषु प्रतापयेत् । घृतेन सिञ्चेत्पाकज्ञो वारं वारं विवर्तयेत् ॥ ६४ ॥ सिद्धेषु मरिचं चूर्णं विकिरेत्सैन्धवान्वितम् । नाम्ना भडित्रकं रुच्यं लघु पथ्यं मनोहरम् ॥ ६५ ॥",
    english: "Take clean meat from beside the spine, cut it into pieces the size of lumps of camphor, and pierce them many times with *mūṣakas* [the implement is not identifiable — see the notes] so that they are full of holes. Work the juices of asafoetida and fresh ginger, and rock salt, into them. Thread them on skewers and roast over embers, turning repeatedly and basting with ghee. When cooked, scatter ground black pepper and rock salt over them. By name this is *bhaditraka* — tasty, light, wholesome, and delightful.",
  },
  {
    ref: "Mānasollāsa 3.13.1466–1468",
    latin: "अनेनैव प्रकारेण जर्जरीकृत्य खण्डकान् । स्थाल्यामम्लेन संयोज्य पाचयेद्धिङ्गुना सह ॥ ६६ ॥ आर्द्रकस्य रसेनापि धान्यकस्य रसेन च । जीरकस्य च चूर्णेन मेथकस्य च मिश्रयेत् ॥ ६७ ॥ शोषयित्वा द्रवं सर्वं घृतेन परिभोजयेत् । क्षिपेच्च मरिचं भृष्टे सूदो भण्डे भडित्रके ॥ ६८ ॥",
    english: "In this very same way, riddle the pieces with holes; join them with sour liquid in a pot and cook them with asafoetida. Mix in also the juice of fresh ginger and the juice of coriander, with powdered cumin and fenugreek. When all the liquid has dried away, feed the pieces with ghee; and the cook should throw pepper on the *bhaditraka* once it has fried in the pan.",
  },
  {
    ref: "Mānasollāsa 3.13.1469–1475",
    latin: "मेषस्य कन्धरां छित्त्वा स्थाल्यां रक्तं विधारयेत् । मर्दयेत्करशाखाभिर्निक्षिप्य लवणं मनाक् ॥ ६९ ॥ मृद्यमाने तु रुधिरे सिराजालविनिःसृते । अपनीय तथा शुद्धं कीलालं पिहितं न्यसेत् ॥ १४७० ॥ क्रोडदेशात्समारभ्य कर्तरिकाग्रेण पाटिताम् । त्वचं विभज्य गात्रेभ्यो हरेदाभ्यन्तरास्थिताम् ॥ ७१ ॥ पूर्वोद्दिष्टप्रदेशेषु स्थितं मांसमथाहरेत् । स्नायुग्रन्थिविनिर्मुक्तं खण्डशः परिकल्पयेत् ॥ ७२ ॥ पूगीफलप्रमाणानि कृत्वा खण्डानि पूर्ववत् । संस्कुर्यात्पूर्ववच्चूर्णैरम्लैश्च परिपाचयेत् ॥ ७३ ॥ स्तोकावशेषपाकेऽस्मिन्न्यस्तं रक्तं विनिक्षिपेत् । पूर्णे पाके समुत्तार्य धूपयेद्धिङ्गुजीरकैः ॥ ७४ ॥ कर्पूरचूर्णकं तस्मिन्नेलाचूर्णेन संयुतम् । विकिरेन्मरिचयुक्तं कृष्णपाकमिदं वरम् ॥ ७५ ॥",
    english: "Cut the sheep's neck and catch the blood in a pot. Put in a little salt and work it with the fingers. When, under the kneading, the net of fibres has come out of the blood, take that away and set the clean *kīlāla* down, covered. Beginning at the chest, split the hide with the point of a knife, separate it from the limbs, and take away the inner-lying skin. Then take the meat lying in the regions indicated earlier, free it of sinew and gristle, and divide it into pieces. Having made the pieces of areca-nut measure, as before, season them with the powders as before and cook them thoroughly with sour liquids. When only a little of the cooking is left, throw in the blood that was set aside. When the cooking is complete, take it off the fire and perfume it with asafoetida and cumin. Over it scatter camphor powder combined with cardamom powder and with pepper. This excellent dish is *kṛṣṇapāka*.",
  },
  {
    ref: "Mānasollāsa 3.13.1476–1478",
    latin: "अङ्गारभृष्टकं मांसं शुद्धे पट्टे निधापयेत् । कर्तर्या तिलशः कृत्वा मातुलिङ्गस्य केसरैः ॥ ७६ ॥ आर्द्रकैः केसराम्लैश्च गृञ्जनैस्तत्प्रमाणकैः । जीरकैर्मरिचैः पिष्टैर्हिङ्गुसैन्धवचूर्णकैः ॥ ७७ ॥ मिश्रयित्वा तु तन्मांसं हिङ्गुधूपेन वासयेत् । आमं मांसं च पेषण्यां हिङ्गुतोयेन सिञ्चितम् ॥ ७८ ॥",
    english: "Place ember-roasted meat on a clean board and cut it with a knife into pieces as fine as sesame seeds. Mix it with the pulp of citron, with fresh ginger, with *kesarāmla* [a second name for the citron], with *gṛñjana* cut to the same size, with ground cumin and pepper, and with powdered asafoetida and rock salt. Perfume the mixed meat with asafoetida smoke.",
  },
  {
    ref: "Mānasollāsa 3.13.1478–1482",
    latin: "मिश्रयित्वा तु तन्मांसं हिङ्गुधूपेन वासयेत् । आमं मांसं च पेषण्यां हिङ्गुतोयेन सिञ्चितम् ॥ ७८ ॥ लवणेन च चूर्णेन सहितं पेषयेद्बुधः । पिष्टवच्चिकणं कृत्वा गोलकानि प्रकल्पयेत् ॥ ७९ ॥ चूर्णीकृतं तु यन्मांसं गोलकैस्तद्विवेष्टयेत् । चूर्णगर्भांश्च वटकान् निक्षिपेदाणके शुभे ॥ १४८० ॥ ख्यातास्ते मांसवटका रुच्या दृश्या मनोहराः । त एव वटकास्तैले पक्वाः स्युर्भूषिकाभिधाः ॥ ८१ ॥ तदेव चूर्णितं मांसं कणिकापरिवेष्टितम् । अङ्गारेषु तथा भृष्टं कोशलीति निगद्यते ॥ ८२ ॥",
    english: "Raw meat, on the grinding stone, sprinkled with asafoetida-water: the wise cook should grind it together with salt and spice powder. Having made it sticky like dough, he should form it into balls. The meat that has been reduced to *cūrṇa* [a crumb, as against the sticky paste] — that he should envelop with the balls, and put the *cūrṇa*-cored *vaṭakas* into a good pan. These are the renowned *māṃsa-vaṭakas*: tasty, handsome to look at, and delightful. Those same *vaṭakas*, cooked in oil, are the ones called *bhūṣikās*. That same *cūrṇa*-meat, wrapped around with wheat dough and roasted likewise among embers, is called *kośalī*.",
  },
  {
    ref: "Mānasollāsa 3.13.1483–1485",
    latin: "वार्ताकान्तदेशस्य समीपे कृतरन्ध्रकम् । निष्कासितेषु बीजेषु तेन मांसेन पूरितम् ॥ ८३ ॥ तैलेन पाचितं किंचिदाणके परिपाचयेत् । पूरभट्टाकसंज्ञं तत्स्वादुना परिपाचयेत् ॥ ८४ ॥ कोशातकीफलेऽप्येवं मूलकस्य च कन्दके । पूरिते चूर्णमांसेन तत्तन्नाम्ना तु कथ्यते ॥ ८५ ॥",
    english: "Make a hole in an eggplant near its end and, the seeds having been taken out, fill it with that meat. Cooked a little in oil, one should cook it through in a pan; that is named *pūra-bhaṭṭāka* [*bhaṭṭāka* is a synonym of *vārtāka*, so the name means \"filled eggplant\"] — cook it through with something savoury. Likewise too in the fruit of the *kośātakī* gourd, and in the root of the radish, filled with the crumbled meat: each is spoken of by the name of its own vegetable.",
  },
  {
    ref: "Mānasollāsa 3.13.1486–1487",
    latin: "आमं मांसं सुपिष्टं तु केसरादिविमिश्रितम् । वटकीकृत्य तैलेन तप्तेन परिपाचयेत् ॥ ८६ ॥ आणके च क्षिपेत्तज्ज्ञस्तापयेद्वा विभावसौ । नाम्ना वटिमकं तत्तु त्रिप्रकारमुदीरितम् ॥ ८७ ॥",
    english: "Raw meat, very finely ground and mixed with saffron and the rest: having made it into *vaṭakas*, one should cook them through in hot oil. Or one who knows the art may put them in a pan, or heat them at the fire. That is called *vaṭimaka* by name, and it is said to have three forms.",
  },
  {
    ref: "Mānasollāsa 3.13.1488–1491",
    latin: "अन्त्राणि खण्डशः कृत्वा कालखण्डं तथा कृतम् । वारिप्रक्षालितं कृत्वा खण्डितान् समरूपतः ॥ ८८ ॥ मेदसः शकलास्तद्वन्मांसखण्डांस्तथैव च । राजिकाकल्कदिग्धांस्तांस्तोयमिश्रान् विपाचयेत् ॥ ८९ ॥ आर्द्रकस्य रसं स्तोकमम्लमल्पं विमिश्रयेत् । प्रमाणाल्लवणं क्षिप्त्वा हिङ्गुतोयं च मेलयेत् ॥ १४९० ॥ किंचिच्छेषं द्रवं तत्तु समुत्तार्य विधूपयेत् । पञ्चवर्णीति विख्याता नानारूपरसावहा ॥ ९१ ॥",
    english: "Cut intestines into pieces, and *kālakhaṇḍa* [the liver] cut the same way and washed with water, all of them cut to a uniform shape. Slices of fat likewise, and pieces of meat in the same way. Smear them with mustard paste, mix them with water, and cook. Mix in a little ginger juice and a little sour liquid; put in salt in due measure and stir in asafoetida-water. When only a little liquid is left, take it off the fire and perfume it. It is renowned as *pañcavarṇī*, the five-coloured one, and it brings manifold forms and tastes.",
  },
  {
    ref: "Mānasollāsa 3.13.1492–1493",
    latin: "अन्त्राणि जलधौतानि शूलयष्ट्यां विवेष्टयेत् । तापयेच्च तथाङ्गारैर्यावत्कठिनतां ययुः ॥ ९२ ॥ पश्चाद्विचूर्णितं श्लक्ष्णं सैन्धवं तेषु योजयेत् । अन्त्रशुण्ठकमाख्यातं चर्वणे मर्मरारवम् ॥ ९३ ॥",
    english: "Wash intestines with water and wind them around a spit-rod. Heat them over embers likewise, until they turn firm. Afterwards apply very finely powdered rock salt to them. This is called *antra-śuṇṭhaka*; it has a rustling sound in the chewing.",
  },
  {
    ref: "Mānasollāsa 3.13.1494–1498",
    latin: "पूर्ववच्छोधिते रक्ते बीजपूरस्य केसरम् । रसमार्द्रकसम्भूतं रसं दन्तशठस्य च ॥ ९४ ॥ जीरकं हिङ्गु मरिचं धान्यकं सैन्धवं क्षिपेत् । मेदसः श्लक्ष्णखण्डानि क्षिप्त्वा सर्वं विलोडयेत् ॥ ९५ ॥ अन्त्रं प्रक्षालितं यत्नात्तेन रक्तेन पूरितम् । पेटकाकृतियुक्तासु कम्रासु परिवेष्टयेत् ॥ ९६ ॥ कम्रामुखानि बध्नीयात्केवलैरन्त्रकैस्तथा । तैरेव रज्जुसङ्काशैर्गृहीत्वोपरि तापयेत् ॥ ९७ ॥ अङ्गारैः किंशुकाकारैर्यावत्काठिन्यमाप्नुयुः । मण्डलीयं समाख्याता राजवृक्षफलोपमा ॥ ९८ ॥",
    english: "When the blood has been purified as before, throw into it the pulp of citron, juice made from fresh ginger, the juice of *dantaśaṭha*, cumin, asafoetida, black pepper, coriander, and rock salt; put in finely cut pieces of fat and stir the whole together. An intestine, washed with care and filled with that blood, is to be coiled into lovely rounds shaped like baskets. Tie the mouths of the rounds with plain lengths of gut alone and, taking them up by these, which look like ropes, heat them above embers glowing like *kiṃśuka* blossoms [*Butea monosperma*, the flame-of-the-forest] until they turn firm. This is called *maṇḍalī*, and it resembles the pod of the *rājavṛkṣa* [Cassia fistula].",
  },
  {
    ref: "Mānasollāsa 3.13.1499–1501",
    latin: "पञ्चाङ्गपट्टद्वेष्ट्या वर्तिबद्धोज्ज्वला वपा । अङ्गुलद्वयमानेन खण्डांस्तस्याः प्रकल्पयेत् ॥ ९९ ॥ खण्डानि कालखण्डस्य तत्प्रमाणानि चान्तरा । शूलपोतानि कृत्वा तानङ्गारेषु प्रतापयेत् ॥ १५०० ॥ सैन्धवं विकिरेत्तत्र सुश्लक्ष्णं मरिचान्वितम् । वर्णशुण्ठकनामेदं वर्णितं सोमभूभुजा ॥ १ ॥",
    english: "Take the glistening caul fat [*vapā*, the omentum], bound into a roll by wrapping it with a *pañcāṅga* band [the compound is corrupt], and make pieces of it by the measure of two finger-widths. Set pieces of *kālakhaṇḍa* [liver] of that same measure in between them. Thread them on the spit and roast them over embers. Scatter over them very finely ground rock salt together with pepper. This is named *varṇa-śuṇṭhaka*, as described by King Soma.",
  },
  {
    ref: "Mānasollāsa 3.13.1502–1506",
    latin: "अङ्गारेषु तथा भृष्ट्वा कालखण्डं विकृत्य च । पूगीफलप्रमाणेन खण्डान् कृत्वा विचक्षणः ॥ २ ॥ तैलेनाभ्यज्य तान् सर्वान्मरिचाजाजिसैन्धवैः । चूर्णितैर्विकिरेत्पश्चाद्धिङ्गुधूपेन धूपयेत् ॥ ३ ॥ अनेन विधिना भृष्ट्वा राजिकाकल्कलेपितान् । कालखण्डान् प्रकुर्वीत दध्ना राजिकयाथवा ॥ ४ ॥ भृष्टस्य कालखण्डस्य कृत्वा चक्कलिकाः शुभाः । केसरैर्मातुलिङ्गस्य सैन्धवाद्यैश्च मिश्रयेत् ॥ ५ ॥ समेदस्कौ द्विधा भक्तौ कृत्वा लवणमिश्रितौ । आम्लकैर्भावयित्वा तौ तैलेन परिपाचयेत् ॥ ६ ॥",
    english: "Roast the *kālakhaṇḍa* [liver] over embers in the same way and cut it up; then the discerning cook, having made pieces of the measure of an areca nut, should anoint them all with oil and scatter powdered pepper, *ajājī* [cumin], and rock salt over them, and afterwards perfume them with asafoetida smoke. Or, having roasted them by this same method, he should make the *kālakhaṇḍas* smeared with mustard paste — or else with curd and mustard. Or, having made fine *cakkalikās* of the roasted *kālakhaṇḍa* [thin slices shaped like a palmyra leaf, as at 1436], he should mix them with the pulp of citron and with rock salt and the rest. The two fatty ones [*samedaskau*, dual, so a paired organ; probably the kidneys], split in two and mixed with salt, he should steep in sour liquids and then cook through in oil.",
  },
  {
    ref: "Mānasollāsa 3.13.1507–1509",
    latin: "क्रोडदेशोद्भवं मांसमंस्या सह विखण्डितम् । अंसकीकससंयुक्तं पार्श्वकुल्या समन्वितम् ॥ ७ ॥ मृद्भाण्डे स्थाल्यवक्त्रे तन्निक्षिप्य बहलोदके । हिङ्गुना चाम्लकेनापि सैन्धवेन च संयुतम् ॥ ८ ॥ काथयेत्सुचिरं कालं यावत्तन्मार्दवं भजेत् । उत्क्वाथितमिदं सूपं ख्यातं शास्त्रविशारदैः ॥ ९ ॥",
    english: "Flesh arising from the chest region, cut up together with the shoulder, joined with the shoulder bones and accompanied by the rib bones: put it into an earthen vessel closed at the mouth [*sthālyavaktre*; the compound is obscure, but it restricts the vessel's opening either way], in abundant water, together with asafoetida, with a sour agent, and with rock salt. Decoct it for a very long time, until it attains tenderness. This soup, called *utkvāthita*, is renowned among those skilled in the treatises.",
  },
  {
    ref: "Mānasollāsa 3.13.1510–1512",
    latin: "विशैस्तस्य च मेषस्य जठरं पाटयेदनु । आन्तरं सर्वमुत्सार्य बध्नीयादपराङ्घ्रिकौ ॥ १५१० ॥ शिरश्च रज्ज्वा दृढया ज्वालायां परितापयेत् । यावद्रोमाणि गच्छन्ति यावत्कृष्णत्वमेति च ॥ ११ ॥ ततः प्रक्षाल्य तोयेन शेषं क्रोडवदाचरेत् । अन्येषां श्वापदानां च शेषं मेषवदाचरेत् ॥ १२ ॥",
    english: "Open the sheep’s belly with a knife, remove all the internal contents, and bind the hind legs. Tie the head securely with a rope and expose it to flame until the hair is gone and the surface blackens. Wash it with water and treat the remainder as the pig was treated. Other wild animals are to be cleaned in the same general manner as sheep.",
  },
  {
    ref: "Mānasollāsa 3.13.1513–1517",
    latin: "समेदस्कानि मांसानि कृत्वा दीर्घाणि कर्तनैः । हिङ्गुतोयेन संसिच्य लवणेन विलोडयेत् ॥ १३ ॥ छायायां तानि खण्डानि वायुना परिशोषयेत् । एकद्वित्रिदिनान्तेषु भृष्टान्यङ्गारपुञ्जके ॥ १४ ॥ स्थूलीकृतानि यावच्च स्वादुरुच्यानि यन्नृणाम् । उपखण्डकनामानि सर्वशाकोत्तमानि च ॥ १५ ॥ हरिणस्य तथा खण्डांश्चक्कलीः परिकल्पितान् । सम्भारसहितान् प्राज्यलवणेन विमिश्रितान् ॥ १६ ॥ शोषितानपि चात्यर्थमग्निना परिभर्जितान् । हृद्यान् पथ्यान् सुगन्धांश्च कल्पयेदुपखण्डकान् ॥ १७ ॥",
    english: "Having made fatty meats long by cutting, sprinkle them with asafoetida-water and toss them about with salt. Dry those pieces thoroughly in the shade, in moving air. At the end of one, two, or three days they are roasted in a heap of embers, until they swell up and become tasty and appetizing to men. Named *upakhaṇḍakas*, they are the best of all *śākas* [side dishes]. Likewise make pieces of deer meat into *cakkalīs* [thin slices shaped like a palmyra leaf, as at 1436], together with seasonings and mixed with abundant salt; dried also exceedingly and thoroughly roasted with fire, one should prepare the *upakhaṇḍakas* — pleasing to the heart, wholesome [*pathya*, the Ayurvedic dietetic category], and fragrant.",
  },
  {
    ref: "Mānasollāsa 3.13.1518–1519",
    latin: "रुरुशम्बरसराङ्गच्छागस्य नलकं पृथु । अग्नौ भृष्ट्वा शिलाघातैः स्फोटयित्वा प्रयत्नतः ॥ १८ ॥ मज्जानं तु ततो हृत्वा लवणाम्लेन हिङ्गुना । मरिचाजाजिचूर्णेन पचेत्स्थाल्यां विचक्षणः ॥ १९ ॥",
    english: "Take a broad hollow bone of the *ruru* deer, the sambar, the *sāraṅga* deer, or the goat. Having roasted it in the fire and carefully burst it open with blows of a stone, and having then drawn out the marrow, the discerning cook should cook it in a pot with salt and sour, with asafoetida, and with powdered pepper and *ajājī* [cumin].",
  },
  {
    ref: "Mānasollāsa 3.13.1520–1521",
    latin: "यस्य कस्यापि मेषादेः शिरो भृष्ट्वा विभिद्य च । आददीत च मस्तिष्कं काञ्जिकेन विपाचयेत् ॥ १५२० ॥ आणके तैलमध्ये वा यथारुचि पुनः पचेत् । चूर्णैः संयोज्य तत्पश्चाद्धिङ्गुधूपेन धूपयेत् ॥ २१ ॥",
    english: "Having roasted and split the head of any animal whatever, beginning with the sheep, he should take out the brain and cook it through with *kāñjika*. Then he should cook it again, as he likes, in an *āṇaka* [pan] or in the midst of oil. Afterwards, having combined it with the spice powders, he should perfume it with asafoetida smoke.",
  },
  {
    ref: "Mānasollāsa 3.13.1522–1523",
    latin: "पक्षिणामपि सर्वेषां पिच्छानुत्सार्य सर्वतः । चञ्चुपादौ पृथक्कृत्वा पाटयित्वा ततोदरम् ॥ २२ ॥ निष्कृष्यान्त्रादिकं सर्वं पूर्ववत्परिपाचयेत् । यथा सूकरमेषाणां क्रियाः प्रोक्ता विपाचने ॥ २३ ॥",
    english: "For birds, remove all feathers, separate the beak and feet, and open the belly. Remove the intestines and all other internal parts of the bird and cook it by the methods already prescribed for pig and sheep.",
  },
  {
    ref: "Mānasollāsa 3.13.1524–1531",
    latin: "सशल्कानां च मत्स्यानां शल्कं स्फोट्यं प्रयत्नतः । स्थूलाश्चेत्खण्डशः कार्याः लघवश्चेत्सरूपतः ॥ २४ ॥ मत्स्यानां छेदयेच्छीर्षं पुच्छं तेषां च पक्षिणाम् । विपाट्य जठरं तस्मादन्त्राण्यपसारयेत् ॥ २५ ॥ कण्टकष्टबडिशादग्धाः खवलाचुकैः ... । पाठीनैश्च तथैतेषां पृथक्कृत्वा शिरः पचेत् ॥ २६ ॥ मत्स्यानां घर्षणं कार्यं तैलेन लवणेन च । यावत्पिच्छलतां याति मत्स्यगन्धश्च नश्यति ॥ २७ ॥ क्षालयेदुदकैः पश्चाद्धरिद्राकल्कमिश्रितैः । वस्त्रे धृत्वा निपीड्यैतान् स्रावयेत्सङ्गतं जलम् ॥ २८ ॥ क्षिपेत्पूर्वप्रसिद्धेषु प्रपवेष्वाणकेषु तान् । स्वल्पे काले गते सूदः स्थालीमुत्तार्य धूपयेत् ॥ २९ ॥ मत्स्यखण्डानि धौतानि चिञ्चाम्लेन विपाचयेत् । ततो गोधूमचूर्णं तु विकिरेत्तेषु सर्वतः ॥ १५३० ॥ तप्ततैले क्षिपेत्तानि पिङ्गान्युत्तारयेत्ततः । एलामरिचचूर्णेन सैन्धवेन च भावयेत् ॥ ३१ ॥",
    english: "Of scaly fish the scales are to be knocked off carefully. If the fish are large they are to be made into pieces; if small, kept in their own form. Cut off the head of the fish, and their tail and fins; slit the belly and draw the intestines out of it. [One and a half pādas are corrupt here.] … and with *pāṭhīna* [sheatfish, which carry no scales]: having separated their heads, cook them apart. The fish are to be rubbed with oil and salt until they turn slimy and the fishy smell is destroyed. Then wash them in water mixed with turmeric paste, hold them in a cloth and press them, and let the gathered water run off. Throw them into the *prapavas* and pans described earlier; when a little time has passed the cook should lift the pot off the fire and perfume it. Or else cook the washed fish pieces in tamarind sour, then scatter wheat flour over them on every side, throw them into hot oil, and take them out when they are tawny. Finish them with powdered cardamom and pepper and with rock salt.",
  },
  {
    ref: "Mānasollāsa 3.13.1532",
    latin: "आणके वा तथा तैले वह्नौ वा धूमवर्जिते । पूर्वोक्तविधिना मत्स्यान् यथारुचि विपाचयेत् ॥ ३२ ॥",
    english: "Fish may alternatively be cooked in a pan, in oil, or over a smokeless fire by the preceding methods and according to taste.",
  },
  {
    ref: "Mānasollāsa 3.13.1533–1534",
    latin: "मत्स्यांश्च खण्डशः कृत्वा चतुरङ्गुलसम्मितान् । लवणेन समायुक्तान् कुम्भेषु परिपूरयेत् ॥ ३३ ॥ खरखण्डा इति ख्याताश्चिरकालं वसन्ति ते । भोजनावसरे सूदो वह्निना परिभर्जयेत् ॥ ३४ ॥",
    english: "Cut fish into pieces measuring four fingerbreadths, mix them with salt, and pack them into jars. They are known as *khara-khaṇḍas*, and they keep for a long time. At mealtime the cook roasts them over the fire.",
  },
  {
    ref: "Mānasollāsa 3.13.1535–1536",
    latin: "मत्स्याण्डकोशावादाय वह्निना परिभर्जयेत् । दृढीभूते ततः पश्चात्खण्डशः परिकल्पयेत् ॥ ३५ ॥ विपच्य तप्ततैले तान्येलामरिचकादिभिः । विकीर्य सैन्धवेनापि हिङ्गुना परिधूपयेत् ॥ ३६ ॥",
    english: "Take the pair of roe-sacs from the fish and roast them in the fire. Once firm, cut them into pieces and fry them in hot oil. Scatter cardamom, pepper, and the like over them, and rock salt as well, and perfume them with asafoetida.",
  },
  {
    ref: "Mānasollāsa 3.13.1537–1539",
    latin: "कच्छपान् वह्निना भृष्ट्वा पादांश्छल्कांश्च मोचयेत् । शिरश्चैव पृथक्कृत्वा पक्वरम्भाफलोपमान् ॥ ३७ ॥ अम्लकैश्च विपच्याथ तैलेनाज्येन वा पुनः । पाचयेच्च सुसिद्धांस्तान् चूर्णकैरवचूर्णयेत् ॥ ३८ ॥ आणके वा पचेत्तज्ज्ञो निधूमे वा हुताशने । नन्द्यावर्ता इति ख्याता मृदुरुच्या मनोहराः ॥ ३९ ॥",
    english: "Roast turtles in the fire and free the feet and the shell-plates; separate the head as well, so that they resemble ripe plantains. Then cook them with sour liquids, and cook them again in oil or in ghee; when they are thoroughly done, dust them with spice powders. One who knows the work may instead cook them in a pan, or over a smokeless fire. These are known as *nandyāvartas*: tender, appetizing, and delightful.",
  },
  {
    ref: "Mānasollāsa 3.13.1540–1542",
    latin: "कर्कटांस्तु लघून् स्थूलान् हस्तपादवियोजितान् । रूक्षे ताम्रमये पात्रे सुतप्ते तान् विवर्जयेत् ॥ १५४० ॥ स्फोटिते खपरे तांस्तु मृदो भाण्डे विनिक्षिपेत् । विपचेल्लवणाम्लैश्च पुनः सर्पिषि पाचयेत् ॥ ४१ ॥ जीरकं लवणं तीक्ष्णं चूर्णितं तेषु निक्षिपेत् । वृष्या बलकरा हृद्या मृष्टास्ते घृतकर्कटाः ॥ ४२ ॥",
    english: "Take crabs, small or large, with their claws and legs detached, and roast them in a dry copper vessel, very hot [the verb as transmitted, *vivarjayet*, \"he should shun\", cannot be right; probably *vibharjayet*, \"he should roast\"]. When the shell has cracked, put them into an earthen pot and cook them with salt and sour liquids; then cook them again in ghee. Throw powdered cumin, salt, and *tīkṣṇa* over them. These *ghṛta-karkaṭas* are aphrodisiac, strengthening, good for the heart, and delicious.",
  },
  {
    ref: "Mānasollāsa 3.13.1543–1547",
    latin: "मूषकाः क्षेत्रसम्भूता नदीकूलेषु संस्थिताः । स्थूलाः श्यामास्तथा पुष्टा जात्या ते मयिगाः स्मृताः ॥ ४३ ॥ प्रतप्ते सलिले तांस्तु निक्षिपेत्पुच्छधारणात् । उद्धृत्य तस्मात्सलिलाद्रोमाण्युत्पाटयेत्ततः ॥ ४४ ॥ विभेद्य जठरं तेषां स्फोटयेदन्त्रकाणि तु । सम्भारसहितैरम्लैः पचेच्च लवणान्वितैः ॥ ४५ ॥ शूलपोतांस्ततः कृत्वा तानङ्गारैः प्रतापयेत् । यावद्बहिस्त्वचस्तेषां शोषमायान्ति तापनात् ॥ ४६ ॥ सुपक्वेषु तथा तेषु मूषकेषु किरेदनु । लवणं मरिचं शुण्ठीं जीरकं च विचूर्णितम् ॥ ४७ ॥",
    english: "*Mūṣakas* are bred in the fields and live along the river banks; large, dark, and well-fed, they are called *mayigas* after their kind. Holding one by the tail, throw it into heated water; lift it out of that water and then pluck out the hairs. Cut open the belly and clear out the entrails. Cook them with sour liquids, seasoned and salted. Then thread them on skewers and roast them over coals, until their outer skin dries from the heat. When the *mūṣakas* are well cooked, scatter over them powdered salt, pepper, dried ginger, and cumin.",
  },
  {
    ref: "Mānasollāsa 3.13.1548–1549",
    latin: "फलशाकं पत्रशाकं कन्दशाकं च मूलकम् । पुष्पशाकं शिम्बिशाकं पक्वापक्वविभेदतः ॥ ४८ ॥ कल्पयेद्विविधैः शाकैर्मांसवत्पाककोविदः । वटकान् पर्पटान् हृद्यानङ्गारैः परिभर्जयेत् ॥ ४९ ॥",
    english: "Vegetables are classified as fruit vegetables, leafy vegetables, tubers, roots, flowers, and pod-bearing legumes, each of which may be used in ripe or unripe form. A skilled cook should prepare vegetables in varied ways analogous to meat cookery, and pleasing vaṭakas and crisp parpaṭas may be roasted over embers.",
  },
  {
    ref: "Mānasollāsa 3.13.1550–1553",
    latin: "आम्राम्रातकजम्बूश्च बीजपूराग्निमन्थकैः । भल्लातागस्त्यकोपसीद्राक्षाभृङ्गकसल्लकैः ॥ ५० ॥ पुनर्नवा मरी तीक्ष्णा अतसी सुरसाद्वयम् । मरुकं तालपर्णी च भिण्डुकी मुण्डका तथा ॥ ५१ ॥ ब्राह्मी चैवाम्लपत्री च कोकिलाक्षी कुसुम्भकम् । अञ्जनं पद्मकोशश्च शेढकं च तथापरम् ॥ ५२ ॥ संगृह्य पल्लवानेषामम्लिकाम्लेन मिश्रयेत् । जम्बीराम्लेन दध्ना वा लवणेन च संयुतान् ॥ ५३ ॥",
    english: "Gather tender shoots from a long list of trees, herbs, vines, and greens, including mango, hog plum, *jambu*, citron, *agnimantha*, *bhallātaka*, *agasti*, grape, *bhṛṅga*, *punarnavā*, flax, both kinds of *surasā*, *muṇḍī*, *brahmī*, sour-leaf, *kokilākṣī*, safflower, and lotus, and others besides. Mix the shoots with tamarind sourness, citron or lime juice, or curd, together with salt.",
  },
  {
    ref: "Mānasollāsa 3.13.1554–1558",
    latin: "श्रीफलं केतकं चिञ्चा मेषशृङ्गी सुगन्धिजम् । कुटजं मरिचं पथ्या विषमुष्टिकशिम्बिजम् ॥ ५४ ॥ एलारामठनीवारमेथिकापर्पटं तथा । अगस्त्यं नन्दनं राजमातुलिङ्गकपाटालम् ॥ ५५ ॥ कटं मदं कर्कटं च करीरं टेण्टुकं तथा । वेत्रकारीफलं चैव लवणाम्भसि निक्षिपेत् ॥ ५६ ॥ चूतमाम्रातकं धात्री कुहिरि कर्कटी तथा । कूष्माण्डं त्रपुसं द्राक्षा कर्कटी बृहतीद्वयम् ॥ ५७ ॥ कोशातकी बीजपूरं निष्पावं करमर्दकम् । जम्बीरबिम्बवार्ताककर्मरं लवणाम्भसि ॥ ५८ ॥",
    english: "Bael, *ketaka* [screw pine], tamarind, *meṣaśṛṅgī*, *sugandhija*, *kuṭaja*, pepper, *pathyā* [chebulic myrobalan], the pods of *viṣamuṣṭika* [the name normally denotes the poisonous *Strychnos nux-vomica*; the identification here is not secure], cardamom, asafoetida, *nīvāra* [wild rice], fenugreek, *parpaṭa*, *agasti*, *nandana*, royal citron, *pāṭala* [the transmitted form does not scan; *pāṭala*, the trumpet-flower, is the likely reading], *kaṭa*, *mada*, *karkaṭa*, *karīra*, tendu, cane, and *kārīphala* — put these into salt water. Mango, hog plum, *āmalaka*, *kuhiri*, snake cucumber, ash gourd, cucumber, grapes, snake cucumber again [the repetition inside the verse may be a copying error], the two *bṛhatīs*, luffa, citron, *niṣpāva*, *karamardaka*, lime, ivy gourd, eggplant, and *karmara* — into salt water.",
  },
  {
    ref: "Mānasollāsa 3.13.1559–1560",
    latin: "अथवा राजिकाचूर्णे सतैले लवणान्विते । प्रक्षाल्य वृन्तसहितं फलं चूतादिकं न्यसेत् ॥ ५९ ॥ कारवेल्लं सपनसं कदलीफलमेव च । सतैले राजिकाचूर्णे निक्षिपेल्लवणान्विते ॥ १५६० ॥",
    english: "Or else, having washed it, one should place the fruit together with its stalk — mango and the like — in powdered mustard mixed with oil and salt. Bitter gourd, jackfruit, and banana too one should put into the same powdered mustard with oil and salt.",
  },
  {
    ref: "Mānasollāsa 3.13.1561–1564",
    latin: "वंशाङ्कुरं लघु चक्रीं शतावर्यास्तथैव च । पातालटेण्टुकानां च प्ररोहान् क्षालितान् मृदून् ॥ ६१ ॥ सलिले लवणोपेते तैले वापि सराजिके । लवणेन समायुक्ते प्रक्षिपेदङ्कुरानिमान् ॥ ६२ ॥ मागिणीमाकं पैष्टुं कचोरं वनमागिणीम् । कर्पूरमागिणीमूलं तथैवाम्लहरिद्रकाम् ॥ ६३ ॥ सूरणं मधुशिग्रं च तथा बिलकन्दकम् । एतानि पूर्ववत्कृत्वा तैले वापि विनिक्षिपेत् ॥ ६४ ॥",
    english: "Bamboo shoot, small *cakrī*, and likewise the shoots of *śatāvarī*, and the sprouts of *pātāla* and *ṭeṇṭuka* — tender ones, washed: one should put these sprouts into water mixed with salt, or else into oil with mustard and joined with salt. *Māgiṇī-māka*, *paiṣṭu* [this pāda is metrically defective], *kacora*, wild *māgiṇī*, the root of camphor *māgiṇī*, and likewise sour turmeric; elephant-foot yam, sweet *śigru*, and *bilakanda* — having prepared these as before, one should put them into oil as well.",
  },
  {
    ref: "Mānasollāsa 3.13.1565–1567",
    latin: "गव्यं वा माहिषं वापि क्षीरं नीरविवर्जितम् । पचेत्स्थाल्यां मृदावग्नौ दर्वीघट्टनसंयुतम् ॥ ६५ ॥ अर्धावशेषं कुर्वीत त्रिभागेनावशेषितम् । षड्भागशेषितं वापि कुर्यादष्टावशेषिकम् ॥ ६६ ॥ अर्धावशिष्टं पाने स्यात्त्रिभागं लेह्यकं भवेत् । षड्भागं पिण्डतामेति शर्करा स्यादथाष्टमे ॥ ६७ ॥",
    english: "Cow's milk, or else buffalo's, free of water, one should cook in a pot over a gentle fire, stirring it with a ladle. One should reduce it to a half remaining, or to a third remaining, or to a sixth remaining, or one should make it reduced to an eighth. The half-remaining is for drinking; the third becomes a *lehya*, a thing to be licked; the sixth attains the state of a solid mass; and at the eighth it becomes *śarkarā* [granular, like sugar].",
  },
  {
    ref: "Mānasollāsa 3.13.1568–1570",
    latin: "अर्धावशेषिते दुग्धे तक्रमीषद्विनिक्षिपेत् । नवस्थाल्यां न्यसेत्तत्तु निवाते स्थापयेच्च ताम् ॥ ६८ ॥ शर्करामिश्रितं वापि एलयापि विमिश्रयेत् । यामषट्कोषितं क्षीरमम्लतां घनतां भजेत् ॥ ६९ ॥ दधीति नाम प्राप्नोति पथ्यं मृष्टं मनोहरम् । हीनकाले तथा पथ्यं चिरकालेऽम्लता बहु ॥ १५७० ॥",
    english: "Into milk reduced to a half one should throw a little *takra*. One should set it in a new pot, and keep the pot in a windless place. Or one may mix it with sugar, or with cardamom as well. Having stood for six *yāmas*, the milk takes on sourness and thickness, and obtains the name *dadhi* — wholesome, delicious, and charming. In a shorter time it is likewise wholesome; over a long time the sourness is great.",
  },
  {
    ref: "Mānasollāsa 3.13.1571–1572",
    latin: "मन्थानेन मथित्वा तन्नवनीतमथो हरेत् । निर्जलं मथितं प्रोक्तमुदश्वित् स्याज्जलार्धकम् ॥ ७१ ॥ पादाम्बु तक्रमुद्दिष्टं धूपितं हिङ्गुजीरकैः । आर्द्रकेण समायुक्तमेलासैन्धवचूर्णितम् ॥ ७२ ॥",
    english: "Having churned it with a churning-stick, one should then remove the butter. The undiluted churned product is called *mathita*; with half its volume of water it is *udaśvit*; with one-quarter water it is *takra*. *Takra* is perfumed with asafoetida and cumin and seasoned with fresh ginger, cardamom, and powdered rock salt.",
  },
  {
    ref: "Mānasollāsa 3.13.1573",
    latin: "मथितं शर्करायुक्तमेलाचूर्णविमिश्रितम् । कर्पूरधूपितं नाम्ना मज्जिकेत्यभिधीयते ॥ ७३ ॥",
    english: "*Mathita* [the undiluted churned curd of 1571] mixed with sugar and cardamom powder and perfumed with camphor smoke is called *majjikā*.",
  },
  {
    ref: "Mānasollāsa 3.13.1574",
    latin: "निष्पीड्य दधि वस्त्रेण स्रावयेत्तद्रुतं जलम् । शर्करैलासमायुक्ता सूदैः शिखरिणी मता ॥ ७४ ॥",
    english: "Having pressed the *dadhi* in a cloth, one should drain off its liquid. Joined with sugar and cardamom, it is reckoned by cooks to be *śikhariṇī*.",
  },
  {
    ref: "Mānasollāsa 3.13.1575",
    latin: "स्रावितं यद्धृतं तोयं जीरकाज्यसैन्धवैः । संयुक्तं हिङ्गुधूपेन धूपितं मस्तु कीर्तितम् ॥ ७५ ॥",
    english: "The water that was drained off and kept back, joined with cumin, ghee, and rock salt, and fumigated with asafoetida-incense, is declared to be *mastu*.",
  },
  {
    ref: "Mānasollāsa 3.13.1576–1577",
    latin: "नवनीतं नवं धौतं नीरलेशविवर्जितम् । तापयेदग्निना सम्यङ्मृदुना घृतभाण्डके ॥ ७६ ॥ पाके संपूर्णतां याते क्षिपेद्गोधूमबीजकम् । क्षिपेत्ताम्बूलपत्रं च पश्चादुत्तारयेद्घृतम् ॥ ७७ ॥",
    english: "Fresh butter, newly churned, washed, and rid of every trace of water: heat it properly over a gentle fire in a ghee-pot. When the cooking has reached completion, throw in wheat grain, and throw in a betel leaf; afterwards take the ghee off the fire.",
  },
  {
    ref: "Mānasollāsa 3.13.1578–1579",
    latin: "तण्डुलक्षालितं तोयं चिञ्चाम्लेन विमिश्रितम् । ईषत्तक्रेण संयुक्तं सितया सह योजितम् ॥ ७८ ॥ एलाचूर्णसमायुक्तमार्द्रकस्य रसेन च । धूपितं हिङ्गुना सम्यग्व्यञ्जनं परिकीर्तितम् ॥ ७९ ॥",
    english: "Water in which rice has been washed, mixed with tamarind sour, joined with a little *takra*, combined with sugar, together with cardamom powder and the juice of fresh ginger, and thoroughly fumigated with asafoetida, is declared to be a *vyañjana*.",
  },
  {
    ref: "Mānasollāsa 3.13.1580",
    latin: "सौवीरनिर्मलं साम्लं लवणेन च संयुतम् । हिङ्गुना जीरकेणापि धूपितं धूपकाञ्जिकम् ॥ १५८० ॥",
    english: "Clarified *sauvīra*, sour, joined with salt, and fumigated with asafoetida and with cumin as well, is *dhūpa-kāñjika* — the smoked *kāñjika*.",
  },
  {
    ref: "Mānasollāsa 3.13.1581–1584",
    latin: "शङ्कुद्वयं समास्थाप्य बध्नीयादुज्ज्वलाम्बरम् । प्रसार्य यष्टिभिः किंचित्क्षीरमम्लेन भेदितम् ॥ ८१ ॥ सितया च समायुक्तमेलाचूर्णविमिश्रितम् । क्षिपेत्प्रसारिते वस्त्रे स्रावयेत्पेषयेत्समम् ॥ ८२ ॥ पुनः पुनः क्षिपेत्तत्र यावन्निर्मलतां व्रजेत् । पक्वचिञ्चाफलं भृष्टं वर्णार्थं तत्र निक्षिपेत् ॥ ८३ ॥ यस्य कस्य फलस्यापि रसेन परिमिश्रयेत् । तत्तन्नामसमाख्यातं पानकं पेयमुत्तमम् ॥ ८४ ॥",
    english: "Having planted two stakes firmly, one should tie a bright cloth to them and spread it out somewhat with rods. Milk split with a sour agent, joined with sugar and mixed with cardamom powder, he should throw onto the stretched cloth; he should let it drain and press it evenly. Again and again he should pour it back in there, until it comes clear. Roasted ripe tamarind fruit he should put into it for the sake of colour. He should mix it with the juice of whatever fruit one likes; named after that fruit, it is a *pānaka*, an excellent *peya*.",
  },
  {
    ref: "Mānasollāsa 3.13.1585–1597",
    latin: "सौवर्णे राजते पात्रे रीतियन्त्रविधारिते । भोजयेन्मण्डलेशादीन् यथायोग्यप्रदेशतः ॥ ८५ ॥ विशाले काञ्चने पात्रे स्वर्णकञ्चोलसंयुते । लोहगङ्गालकैर्युक्ते रुक्मपिङ्गालकैस्तथा ॥ ८६ ॥ भृङ्गारशुक्तिसमोपेते कनकस्थालसंयुते । जलप्रक्षालिते सम्यक्सितवस्त्रप्रमार्जिते ॥ ८७ ॥ वर्धयेत्पूर्वकथितमन्नपक्वान्नपानकम् । ऊरुनाभिप्रदेशान्तं संछाद्य सितवाससा ॥ ८८ ॥ गद्दिकायां समासीनः पूर्वाशासम्मुखो नृपः । अन्नं मुद्रसमोपेतं भुञ्जीतोष्णं घृतप्लुतम् ॥ ८९ ॥ प्राचीमुखस्तु भुञ्जान आयुश्च लभते बहु । यशश्च लभतेऽत्यर्थमश्नन्दक्षिणदिङ्मुखः ॥ १५९० ॥ श्रियं तु लभते पुष्टां भुञ्जानः पश्चिमाननः । सत्यवाक्यफलं प्राप्नोत्यश्नन् धनददिङ्मुखः ॥ ९१ ॥ श्लक्ष्णमांससमायुक्तं विदलैर्वा विमिश्रितम् । लेहैर्विविधैर्हृद्यैर्लेपितं वा तथोदनम् ॥ ९२ ॥ मांसप्रकारकैर्मृष्टैरम्लमिश्रैश्च पल्लवैः । नानाविधैस्तथा शाकैः फलपत्रसमुद्भवैः ॥ ९३ ॥ वटकैः पर्पटैर्हृद्यैः खरखण्डोपखण्डकैः । यथारुचि यथासात्म्यं सुखं भुञ्जीत भूपतिः ॥ ९४ ॥ पक्वान्नं पायसं मध्ये शर्कराघृतमिश्रितम् । ततः फलानि भुञ्जीत मधुराम्लरसानि च ॥ ९५ ॥ पिबेच्च पानकं हृद्यं लिह्याच्छिखरिणीमपि । चूषेन्मज्जिकां पश्चाद्दधि चाद्यात्ततो घनम् ॥ ९६ ॥ ततस्तक्रमश्नीयात्सैन्धवेन च संयुतम् । क्षीरं वापि पिबेत्पश्चात्पिबेद्वा काञ्जिकं वरम् ॥ ९७ ॥",
    english: "Food is to be served to feudatory chiefs and others in gold or silver vessels supported or arranged by the appropriate serving apparatus, each person being placed according to rank. The royal service uses a large golden vessel with a golden cup or cover, metal ladles and small gold-coloured implements, ewers or pouring vessels, shell-shaped spoons, and golden dishes. Everything is washed with water and wiped with white cloth. Arrange in these vessels the cooked foods, prepared rice, and drinks described earlier. The king covers himself with white cloth from the thighs up to the navel, sits on a cushion facing east, and eats hot rice flooded with ghee and accompanied by mudra [the exact food meant by mudra here is uncertain]. Eating while facing east is said to give long life; facing south, great fame; facing west, abundant prosperity; facing the direction of the wealth-god Kubera, the reward of truthful speech. Rice may be combined with tender meat, split pulses, or various pleasing sauces and linctuses. It may be served with rich meat preparations, sour-dressed shoots, vegetables made from fruits and leaves, vaṭakas, crisp parpaṭas, salted fish khara-khaṇḍas, and dried meat upakhaṇḍakas. The king should eat comfortably according to his taste and what agrees with his constitution. In the middle of the meal he should take cooked sweets and pāyasa mixed with sugar and ghee. Then he should eat sweet and sour fruits, drink a pleasing pānaka, lick śikhariṇī, and afterwards sip or suck majjikā. He may then eat curd and a dense milk preparation, followed by takra mixed with rock salt. At the end he may drink milk or excellent kāñjika.",
  },
  {
    ref: "Mānasollāsa 3.13.1598–1600",
    latin: "मांसमम्लेन भुञ्जीत दुग्धं वा शर्करायुतम् । लवणेन तथा चाम्लं क्षारं कटुकषायकैः ॥ ९८ ॥ वसन्ते कटु चाश्नीयाद्ग्रीष्मे मधुरशीतलम् । वर्षासु च तथा क्षारं मधुरं शरदि स्मृतम् ॥ ९९ ॥ हेमन्ते स्निग्धमुष्णं च शिशिरेऽप्युष्णमम्लकम् । एवं भुञ्जीत यद्भूपोऽन्नभोगः स कथ्यते ॥ १६०० ॥ अन्नभोगः समाख्यातः सोमेश्वरमहीभुजा । इत्यन्नभोगः ॥ १३ ॥",
    english: "Meat should be eaten with sour accompaniments; milk with sugar. Sour preparations are paired with salt, and alkaline foods with pungent and astringent tastes. In spring one should eat pungent foods; in summer, sweet and cooling foods; in the rainy season, alkaline or sharp foods; in autumn, sweet foods. In early winter one should eat rich, unctuous, and hot food, and in late winter hot and sour food. When a king eats in this manner, it is called the enjoyment of food. Thus the chapter on Annabhoga has been set forth by King Someśvara. Here ends Annabhoga, chapter 13.",
  },
];
