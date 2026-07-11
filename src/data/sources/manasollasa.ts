// The surviving text of the Mānasollāsa's food chapter (Vimshati 3, Adhyaya
// 13) transcribed so far — independent of which entries have become recipe
// pages yet. Sanskrit and English are copied verbatim from each recipe's own
// \`original\`/\`translation\` fields (the source of truth), so this file stays in
// sync by re-generating from those, not by hand-editing. Entries for recipes
// Damon has cooked and edited are his own words; the rest are first-pass
// translation drafts for Damon to check and correct — they have not been
// reviewed the way the cooked ones have.
//
// Gaps in the verse numbering (e.g. 1416 to 1427) are verses not yet
// transcribed into any recipe file, not omissions.
export interface ManasollasaEntry {
  ref: string;
  latin: string;
  english: string;
}

export const manasollasaText: ManasollasaEntry[] = [
  {
    ref: "Mānasollāsa 3.13.1350–1356",
    latin: "यत्नादाकृष्यापनयेद्दासीभिस्तण्डुलस्थितान् । अखण्डान् शोधितानेव क्षालितान् बहुशो जलैः ॥ १३५० ॥ तण्डुलान् कुन्दसङ्काशांस्तोयान्तर्धारितांश्चिरम् । स्थाल्यां ताम्रकृतायां वा मृज्जातायामथापि वा ॥ ५१ ॥ तण्डुलत्रिगुणं तोयं निक्षिपेच्च पिधापयेत् । वाससा शशिशुभ्रेण धौतेन च घनेन च ॥ ५२ ॥ चुल्यां निधाय निधूमे वह्नौ तत् काथयेज्जलम् । सुतप्ते बुद्बुदोपेते स्वल्पबाष्पसमन्विते ॥ ५३ ॥ तण्डुलानावपेत्स्थाल्यां दर्व्या च परिघट्टयेत् । सिक्थं विमृश्य वीक्षेत वारं वारं विचक्षणः ॥ ५४ ॥ मृदुभूते च तत्सिक्थे किञ्चिद्वा कणगर्भिते । तत्र दुग्धं घृतं वापि निक्षिप्योत्तारयेत्ततः ॥ ५५ ॥ स्थाल्यास्ये पिटकं दत्त्वा मण्डं तं स्रावयेद्गुणी । ईषदुद्धारितं मण्डमूष्मणा परिशोषयेत् ॥ ५६ ॥",
    english: "Wash the whole, cleaned grains many times. Soak jasmine-white rice, then put three times as much water as rice in a copper or earthen pot and cover it with a dense clean cloth. Bring the water to a boil over a smokeless fire, add the rice, and stir. Test grains repeatedly. When they are soft but retain a slight firm core, add milk or ghee, remove from the fire, drain the starchy water, and let the remaining moisture dry in the retained heat.",
  },
  {
    ref: "Mānasollāsa 3.13.1357–1366",
    latin: "एवं भक्तं सुपकं यद्राजयोग्यं तदुत्तमम् । राजमुद्गास्तथा पीता निष्पावाश्चणका अपि ॥ ५७ ॥ कृष्णाढक्यस्तथा माषा मसूरा राजमाषकाः । सूपकर्मणि सप्तैते नियोज्याः सूपकारकैः ॥ ५८ ॥ दलिताऽदलिताश्चैते पचनीया यथारुचि । चणका राजमाषाश्च मसूरा राजमुद्गकाः ॥ ५९ ॥ घरट्रैर्दलिताः कार्याः पाकार्थं हि विचक्षणैः । किंचिद्दष्टास्तथाढक्यो यन्त्रावर्तैर्द्विधाकृताः ॥ १३६० ॥ विदलीकृताः सम्यक् शूर्पकैर्वितुषीकृताः । स्थाल्यां शीतोदकं क्षिप्त्वा विदलैः सममानतः ॥ ६१ ॥ आवपेद्विदलान् पश्चाच्चुल्यामारोपयेत्ततः । मन्दाग्निपच्यमानेऽन्तर्हिङ्गुतोयं विनिक्षिपेत् ॥ ६२ ॥ वर्णार्थं रञ्जनीचूर्णमीषत्तत्र नियोजयेत् । मुहुर्मुहुः क्षिपेत्तोयं यावत्पाकस्य पूर्णता ॥ ६३ ॥ सुश्लक्ष्णं सैन्धवं कृत्वा विंशत्यंशेन निक्षिपेत् । वर्णतः स्वादतो गन्धान्मार्दवाल्लाघवादपि ॥ ६४ ॥ एवं विदलपाकस्य सम्यक्सिद्धिरुदाहृता । निष्पावा मेचकाढक्यो हिङ्गुना परिवर्जिताः ॥ ६५ ॥ अभिन्नाः पूर्ववत् पाक्या हरिद्राचूर्णकं विना । मसूरमाषपाकेषु हिङ्गुतोयं विनिक्षिपेत् ॥ ६६ ॥",
    english: "Use rāja-mudga, yellow mung, niṣpāva, chickpeas, dark āḍhakī, black gram, lentils, or rāja-māṣa. Cook them split or whole according to taste. Put cold water in a pot in an amount equal to the split pulse, add the pulse, and cook over a low fire with asafoetida-water. Add a little colouring spice and water as needed. Add finely ground rock salt in the proportion of one part to twenty. Niṣpāva and dark āḍhakī are cooked whole without asafoetida or turmeric.",
  },
  {
    ref: "Mānasollāsa 3.13.1367–1372",
    latin: "इतरः पूर्ववत् कार्यः पाकः पाकविचक्षणैः । प्रक्षालितान् वरान्मुद्गान् समतोये विनिक्षिपेत् ॥ ६७ ॥ चुल्यां मन्दाग्निना पाकः कर्तव्यः सूपकारकैः । पच्यमानेषु मुद्गेषु हिङ्गुवारि विनिक्षिपेत् ॥ ६८ ॥ आर्द्रकस्य च खण्डानि सूक्ष्माणि च विनिक्षिपेत् । वार्ताकं पाटितं तैलभृष्टं तत्र विनिक्षिपेत् ॥ ६९ ॥ तैलभृष्टा मृदूभूताः क्षिपेद्वा बिसचक्रिकाः । बीजानि वा प्रियालस्य क्षिप्त्वा दर्व्या विवर्तयेत् ॥ १३७० ॥ पुनः पुनः क्षिपेत्तोयं स्तोकं स्तोकं विचक्षणः । केचिदिच्छन्ति रुच्यर्थं मेषमांसस्य खण्डकान् ॥ ७१ ॥ कान्यपि द्विधा भिन्नान्मेदसः शकलानि वा । मुहुः सूपे सुनिष्पन्ने चूर्णितं मरिचं क्षिपेत् ॥ ७२ ॥",
    english: "Wash superior mung beans and cook them slowly in an equal quantity of water. While they cook, add asafoetida-water and small pieces of fresh ginger. Add eggplant fried in oil, or fried lotus-stem discs, or priyāla kernels. Add water little by little. Some cooks add mutton pieces or pieces of fat. When fully cooked, add ground black pepper; after removing from the fire, add powdered dry ginger and stir.",
  },
  {
    ref: "Mānasollāsa 3.13.1373–1375",
    latin: "उत्तार्य नागरं चूर्णं क्षिप्त्वा दर्व्या विघट्टयेत् । श्यामाककङ्गुनीवारगन्धशालिसुतण्डुलैः ॥ ७३ ॥ सरवेष्टिकसेवाकैर्दिवसैर्लघुविस्तृतैः । चिरप्रसूतमहिषीपयसा पायसं पचेत् ॥ ७४ ॥ पायसं लेहने योग्यं स्वादुगन्धं मनोहरम् । गोधूमाः क्षालिताः शुभ्राः शोषिता रविरश्मिभिः ॥ ७५ ॥",
    english: "Cook fine grains of śyāmāka, kaṅgu, nīvāra, fragrant rice, or another good rice in the milk of a buffalo that calved long before. The pāyasa should become thick enough to lick, sweet-smelling, and pleasing.",
  },
  {
    ref: "Mānasollāsa 3.13.1376–1380",
    latin: "घरट्रैश्चूर्णिताः श्लक्ष्णाश्चालन्या वितुषीकृताः । गोधूमचूर्णकं श्लक्ष्णं किंचिद्घृतविमिश्रितम् ॥ ७६ ॥ लवणेन च संयुक्तं क्षीरनीरेण पिण्डितम् । सुमहत्यां काष्ठपात्र्यां करास्फालैर्विमर्दयेत् ॥ ७७ ॥ मर्दितं चिकणीभूतं गोलकान् परिकल्पयेत् । स्नेहाभ्यक्तैः करतलैः शालिचूर्णैर्विरूक्षितान् ॥ ७८ ॥ प्रसारयेद्गोलकांस्तान् करसञ्चारवर्तनैः । विस्तृता मण्डकाः श्लक्ष्णाः सितपट्टसमप्रभाः ॥ ७९ ॥ प्रयत्नान्निक्षिपेत्तज्ज्ञस्तप्तखर्परमस्तके । पक्वांश्चापनयेच्छीघ्रं यावत्कार्ण्यं न जायते ॥ १३८० ॥",
    english: "Wash wheat, dry it in the sun, grind it finely, and remove the husk. Mix the fine flour with a little ghee and salt, make a dough with milk and water, and knead vigorously until smooth. Make balls, grease the palms, dust the balls with rice flour, and spread them by turning them between the hands. Cook the broad, smooth breads on a hot earthen griddle and remove them before they blacken. Four may be stacked or joined for a superior serving.",
  },
  {
    ref: "Mānasollāsa 3.13.1381–1383",
    latin: "चतस्रश्च चतस्रो घटिता मण्डका वराः । गोलान् प्रसारितान् पाणावङ्गारेषु विनिक्षिपेत् ॥ ८१ ॥ अङ्गारपालिकाः शस्ताः किंचित्कृष्णत्वमागताः । गोलकान् पिष्टकालिप्तान् पेषण्या तान् प्रसारयेत् ॥ ८२ ॥ सुतप्ततापने क्षिप्तानीषत्पक्वान् विवर्तयेत् । खर्परेऽपि पचेदेवं पोलिकानामयं क्रमः ॥ ८३ ॥",
    english: "Flatten dough-balls by hand and place them among embers until they darken slightly; these are aṅgārapolikās. For polikās, coat dough-balls with flour, flatten them on a stone, place them on a thoroughly heated plate, turn them when partly cooked, and finish them on the plate or an earthen griddle.",
  },
  {
    ref: "Mānasollāsa 3.13.1384–1385",
    latin: "तैलपूर्णकटाहे तु सुतप्ते सोहला पचेत् । उत्तानपाकसंसिद्धाः कठिनाः सोहला मताः ॥ ८४ ॥ तैलमग्नाः पीतवर्णा मृदवः पाहलिकाः स्मृताः । तनुप्रसारितान् गोलान् ताप्य स्नेहेन पाचितान् ॥ ८५ ॥",
    english: "Cook sohalās in a very hot cauldron full of oil; they are firm and cook while floating with the upper surface exposed. Pāhalikās are submerged in oil, yellow in colour, and soft.",
  },
  {
    ref: "Mānasollāsa 3.13.1385–1386",
    latin: "तैलमग्नाः पीतवर्णा मृदवः पाहलिकाः स्मृताः । तनुप्रसारितान् गोलान् ताप्य स्नेहेन पाचितान् ॥ ८५ ॥ उपर्युपरि निक्षिप्ताः पत्रिकाः विपचेत्सुधीः । गोधूमचूर्णादुद्धृत्य शूर्पेणाभ्याहतान् कणान् ॥ ८६ ॥",
    english: "Spread dough-balls thin, cook them with fat, and lay the sheets one above another. Separate the coarse wheat particles from the flour by beating or winnowing.",
  },
  {
    ref: "Mānasollāsa 3.13.1386–1387",
    latin: "उपर्युपरि निक्षिप्ताः पत्रिकाः विपचेत्सुधीः । गोधूमचूर्णादुद्धृत्य शूर्पेणाभ्याहतान् कणान् ॥ ८६ ॥ दुग्धाक्तान् घृतपकांश्च सितया च विमिश्रितान् । एलामरिचचूर्णेन युक्तान् कीसारसंज्ञितान् ॥ ८७ ॥",
    english: "Moisten coarse wheat particles with milk, cook them in ghee, mix them with sugar, and season them with cardamom and black pepper. This is called kīsāra.",
  },
  {
    ref: "Mānasollāsa 3.13.1387–1388",
    latin: "दुग्धाक्तान् घृतपकांश्च सितया च विमिश्रितान् । एलामरिचचूर्णेन युक्तान् कीसारसंज्ञितान् ॥ ८७ ॥ गोलकेन समावेष्ट्य तैलेनोदुम्बरान् पचेत् । उत्क्वाथ्य विदलान् पिष्ट्वा चणकप्रभृतीन् शुभान् ॥ ८८ ॥",
    english: "A sweet preparation is enclosed in a ball of dough and fried in oil; it is called udumbara.",
  },
  {
    ref: "Mānasollāsa 3.13.1388–1390",
    latin: "गोलकेन समावेष्ट्य तैलेनोदुम्बरान् पचेत् । उत्क्वाथ्य विदलान् पिष्ट्वा चणकप्रभृतीन् शुभान् ॥ ८८ ॥ हिङ्गुसैन्धवसंयुक्तान् शर्करापरिमिश्रितान् । मरिचैलादिचूर्णेन युक्तान् गोलकवेष्टितान् ॥ ८९ ॥ किंचित्प्रसारिते तैले पूरिका विपचेच्छुभाः । एवं ताप्यां पचेदन्याः पूरिकाश्च विचक्षणः ॥ १३९० ॥",
    english: "Boil and grind split chickpeas or similar pulses. Mix the paste with asafoetida, rock salt, sugar, black pepper, cardamom, and other aromatics. Enclose it in a dough-ball, flatten it slightly, and fry it in oil. Other pūrikās may be cooked on a heated plate.",
  },
  {
    ref: "Mānasollāsa 3.13.1391–1394",
    latin: "हरिमन्थस्य विदलं हिङ्गुजीरकमिश्रितम् । लवणेन च संयुक्तमार्द्रकेण समन्वितम् ॥ ९१ ॥ वेष्टयित्वा गोलकेन वेष्टिका खर्परे पचेत् । विदलं चणकस्यैवं पूर्वसम्भारसंस्कृतम् ॥ ९२ ॥ ताप्यां तैलविलिप्तायां घोसकान् विपचेद्बुधः । माषस्य राजमाषस्य वट्टाणस्य च घोसकान् ॥ ९३ ॥ अनेनैव प्रकारेण विपचेत्पाकतत्त्ववित् । वट्टाणस्य विदलं विदलं चणकस्य च ॥ ९४ ॥",
    english: "Season split harimantha pulse with asafoetida, cumin, salt, and fresh ginger, wrap it in dough, and bake it on an earthen griddle as veṣṭikā. Chickpea filling prepared with the same seasonings is cooked on an oiled heated plate as ghosaka. Ghosakas may also be made from black gram, rāja-māṣa, or vaṭṭāṇa.",
  },
  {
    ref: "Mānasollāsa 3.13.1394–1396",
    latin: "अनेनैव प्रकारेण विपचेत्पाकतत्त्ववित् । वट्टाणस्य विदलं विदलं चणकस्य च ॥ ९४ ॥ चूर्णितं वारिणा सार्धं सर्पिषा परिभावितम् । सैन्धवेन च संयुक्तं कण्डुना परिघट्टितम् ॥ ९५ ॥ निष्पावचूर्णसंयुक्तं पेषण्यां च प्रसारितम् । कटाहे तैलसंपूर्णे कटकर्णान् प्रपाचयेत् ॥ ९६ ॥",
    english: "Grind split vaṭṭāṇa and chickpea with water, condition the mixture with ghee and rock salt, beat it with kaṇḍu, mix in niṣpāva flour, flatten it on a stone, and deep-fry it until the pieces are bubble-like and golden.",
  },
  {
    ref: "Mānasollāsa 3.13.1397–1401",
    latin: "यावद्बुद्बुदसंकाशा भवन्ति कनकत्विषः । माषस्य विदलान् क्लिन्नान्निस्तुषान् हस्तलोडनैः ॥ ९७ ॥ ततः सम्पेष्य पेषण्यां सम्भारेण विमिश्रितान् । स्थाल्यां विमर्द्य बहुशः स्थापयेत्तदहस्ततः ॥ ९८ ॥ आम्लीभूतं माषपिष्टं वैटिकासु विनिक्षिपेत् । गर्भाभिरन्याभिः पिधाय परिपाचयेत् ॥ ९९ ॥ अवतार्यात्र मरिचं चूर्णितं विकिरेदनु । घृताक्तान् हिङ्गुसर्पिर्भ्यां जीरकेण च धूपयेत् ॥ १४०० ॥ सुशीताः धवलाः श्लक्ष्णा एता इडेरिका वराः । तस्यैव माषपिष्टस्य गोलकान् विस्तृतान् घनान् ॥ १ ॥",
    english: "Soak split black gram, remove the skins by rubbing, grind it, mix in seasonings, knead or beat it repeatedly in a pot, and leave it for the day. When the batter has soured, place it in small moulds, cover with other moulds, and cook. Remove the cakes, scatter ground pepper over them, smear them with ghee, and perfume or temper them with asafoetida, ghee, and cumin. When cool, white, and smooth, they are called iḍerikās.",
  },
  {
    ref: "Mānasollāsa 3.13.1401–1403",
    latin: "सुशीताः धवलाः श्लक्ष्णा एता इडेरिका वराः । तस्यैव माषपिष्टस्य गोलकान् विस्तृतान् घनान् ॥ १ ॥ पञ्चभिः सप्तभिर्वापि छिद्रैश्च परिशोभितान् । तप्ततैले पचेद्यावल्लौहित्यं तेषु जायते ॥ २ ॥ घारिकासंज्ञया ख्याता भक्ष्येषु सुमनोहराः । निच्छिद्रा घारिकाः पक्वा मथिते शर्करायुते ॥ ३ ॥",
    english: "From the same black-gram batter make broad, thick discs ornamented with five or seven holes. Fry them in hot oil until reddish; these attractive snacks are called ghārikās.",
  },
  {
    ref: "Mānasollāsa 3.13.1403–1404",
    latin: "घारिकासंज्ञया ख्याता भक्ष्येषु सुमनोहराः । निच्छिद्रा घारिकाः पक्वा मथिते शर्करायुते ॥ ३ ॥ एलामरिचसंयुक्ते निक्षिप्ता वटिकाभिधाः । त एव वटकाः क्षिप्ताः काञ्जिके काञ्जिकाभिधाः ॥ ४ ॥",
    english: "Cook ghārikās without holes and place them in churned curd or buttermilk sweetened with sugar and seasoned with cardamom and pepper; they are then called vaṭikās. If the same vaṭakas are put in kāñjika, they are called kāñjika-vaṭakas. In general, a vaṭaka takes the name of the liquid in which it is served.",
  },
  {
    ref: "Mānasollāsa 3.13.1405–1407",
    latin: "यत्र यत्र द्रवद्रव्ये तन्नाम्ना वटकास्तु ते । आरनालेन सान्द्रेण दध्ना सुमथितेन च ॥ ५ ॥ सैन्धवार्द्रकधान्याकजीरकं च विमिश्रयेत् । मरिचानि द्विधा कृत्वा क्षिपेत्तत्र तु पाकवित् ॥ ६ ॥ दर्व्या विघट्टयन् सर्वं पचेद्यावद्घनीभवेत् । उत्तार्य वटकान् क्षिप्त्वा विकिरेन्मारिचं रजः ॥ ७ ॥",
    english: "Mix thick sour ārānāla with well-churned curd, rock salt, fresh ginger, coriander, cumin, and split peppercorns. Stir and cook until thick. Remove from the fire, add the vaṭakas, scatter pepper powder over them, and perfume with asafoetida.",
  },
  {
    ref: "Mānasollāsa 3.13.1408–1410",
    latin: "हिङ्गुना धूपयेत्सम्यग् वटकास्ते मनोहराः । दुग्धमुत्क्वाथ्य तन्मध्ये तक्रमम्लं विनिक्षिपेत् ॥ ८ ॥ हित्वा तोयं घनीभूतं वस्त्रबद्धं पृथक्कृतम् । शालितण्डुलपिष्टेन मिश्रितं परिपेषितम् ॥ ९ ॥ नानाकारैः सुघटितं सर्पिषा परिपाचितम् । पक्वशर्करया सिक्तमेलाचूर्णेन वासितम् ॥ १४१० ॥",
    english: "Boil milk and add sour buttermilk so that it separates. Discard the whey, tie the curds in cloth, and mix and grind them with rice flour. Shape the paste into varied forms, fry them in ghee, soak or coat them in cooked sugar syrup, and scent them with cardamom.",
  },
  {
    ref: "Mānasollāsa 3.13.1411–1416",
    latin: "क्षीरप्रकारनामेदं भक्ष्यं मृष्टं मनोहरम् । शर्करां वारिसंयुक्तां ताम्रपात्रे विपाचयेत् ॥ ११ ॥ अर्धपाके क्षिपेद्दुग्धं सकं वापि यथारुचि । तेन मुञ्चेन्मलं सा तु शर्करा कथिता सती ॥ १२ ॥ निर्मलेन च वस्त्रेण गालयेत्तां मुहुर्मुहुः । मृदौ पाके द्रुता पेया मध्यमे मधुसन्निभा ॥ १३ ॥ खरे तु कठिना भक्ष्या साधिके शर्करा भवेत् । खरपाके सुसिद्धायाः सितायाः सम्पुटे ॥ १४ ॥ नानारूपाणि कुर्वीत खण्डपाकविशारदः । शोधितायां सितायां तु क्षीरं संमिश्रयेत्समम् ॥ १५ ॥ खरपाकावधिर्यावत्तावत्तापयेत्पुनः । उत्तार्य नागरं तीक्ष्णमेलाकर्पूरकेसरैः ॥ १६ ॥",
    english: "Cook sugar with water in a copper vessel. At half-cooking add milk to separate the scum, then filter repeatedly through clean cloth. At the soft stage the syrup is liquid, at the middle stage honey-like, and at the hard stage it becomes a firm sweet. Mix an equal quantity of milk with purified sugar and heat again to the hard stage. Remove from the fire, add dry ginger, pungent spice, cardamom, camphor, and saffron, and shape into balls called varṣolakas.",
  },
  {
    ref: "Mānasollāsa 3.13.1427–1435",
    latin: "एतेषु मांसवर्गेषु केषाञ्चित्किंचिदुत्तमम् । वराहं सितवस्त्रेण प्रच्छाद्योत्क्वथितवारिणा ॥ २७ ॥ गण्डकेन सदण्डेन तावसिञ्चन्मुहुर्मुहुः । यावत्तज्जातरोमाणि प्रोन्मूल्यन्ते सुखं करैः ॥ २८ ॥ पश्चात्कर्तरिकया रोमाण्युद्धृष्टान्यपसारयेत् । अथवा कर्दमालिप्तं दहेत्तं तृणवह्निना ॥ २९ ॥ सुखोत्पाट्यानि रोमाणि पूर्ववच्चापसारयेत् । आजानुसन्धिमूलाङ्घ्रीं तृणैः प्रच्छाद्य तं दहेत् ॥ १४३० ॥ कठिनत्वमुपायातं क्षालयेन्निर्मलजलैः । पाण्डुरं बिससङ्काशं समं संस्थापितं कटे ॥ ३१ ॥ आमूर्ध्नः प्रस्थापयति कर्तरिकापरिपाटितम् । सारीफलकररेखाभ्यां चित्तवत् स्यादायामशुण्ठकम् ॥ ३२ ॥ चतुरस्रीकृतान् खण्डान् शूलपोतान् प्रतापयेत् । अङ्गारेषु प्रभूतेषु घृतबिन्दुस्रवावधि ॥ ३३ ॥ पश्चान्मरिचचूर्णेन विकिरेत्सैन्धवं ततः । अथाम्लपरिस्विन्नान् पूर्ववत्परिकल्पयेत् ॥ ३४ ॥ अथवा दारितान् कृत्वा त्वक्शेषान् लवणान्वितान् । भर्जयेदङ्गारपुञ्जेषु शुण्ठकानमृतोपमान् ॥ ३५ ॥",
    english: "Clean a pig by scalding or singeing and remove the bristles. Cut the flesh into long śuṇṭhakas, then make square pieces, thread them on skewers, and roast over abundant embers until drops of fat begin to fall. Scatter ground pepper and rock salt over them. Alternatively, first cook the pieces in a sour liquid, or leave the skin on split pieces, salt them, and roast them in a heap of embers.",
  },
  {
    ref: "Mānasollāsa 3.13.1436–1441",
    latin: "स्विन्नानां शुण्ठकानां च मेदोभागं प्रगृह्य च । ताडपत्रसमाकाराः कृत्वा चक्कलिकाः शुभाः ॥ ३६ ॥ मथिते शर्करायुक्ते दध्न्येलाविमिश्रिते । कर्पूरवासिते तत्र रुच्याश्चक्कलिकाः क्षिपेत् ॥ ३७ ॥ मांसमेदोमयान् शुण्ठान् पूर्ववच्चक्कलीकृतान् । मथिते राजिकायुक्ते मातुलिङ्गकसरे ॥ ३८ ॥ धूपिते हिङ्गुना सम्यग् दध्नि चक्कलिकाः क्षिपेत् । घृते वा चक्कलीं भृष्ट्वा किरेदेला सशर्कराम् ॥ ३९ ॥ अथवा मातुलुङ्गस्य सुपकस्य च केसरैः । सूक्ष्मैरार्द्रकखण्डैश्च केसराम्लैर्मनोहरैः ॥ १४४० ॥ चूर्णितं मरिचं राजीसैन्धवैर्मिश्रयेत्ततः । हिङ्गुना धूपिताः साम्ला हृद्याश्चक्कलिका वराः ॥ ४१ ॥",
    english: "Cut the fatty portion of cooked *śuṇṭhakas* into thin palmyra-leaf-shaped slices called *cakkalikās*. Put them in churned curd with sugar, cardamom, and camphor; or in curd with mustard and citron pulp, perfumed with asafoetida. Alternatively fry them in ghee and scatter cardamom and sugar over them. A sour version combines citron pulp, fresh ginger, sour citrus, pepper, mustard, rock salt, and asafoetida.",
  },
  {
    ref: "Mānasollāsa 3.13.1436–1441",
    latin: "स्विन्नानां शुण्ठकानां च मेदोभागं प्रगृह्य च । ताडपत्रसमाकाराः कृत्वा चक्कलिकाः शुभाः ॥ ३६ ॥ मथिते शर्करायुक्ते दध्न्येलाविमिश्रिते । कर्पूरवासिते तत्र रुच्याश्चक्कलिकाः क्षिपेत् ॥ ३७ ॥ मांसमेदोमयान् शुण्ठान् पूर्ववच्चक्कलीकृतान् । मथिते राजिकायुक्ते मातुलिङ्गकसरे ॥ ३८ ॥ धूपिते हिङ्गुना सम्यग् दध्नि चक्कलिकाः क्षिपेत् । घृते वा चक्कलीं भृष्ट्वा किरेदेला सशर्कराम् ॥ ३९ ॥ अथवा मातुलुङ्गस्य सुपकस्य च केसरैः । सूक्ष्मैरार्द्रकखण्डैश्च केसराम्लैर्मनोहरैः ॥ १४४० ॥ चूर्णितं मरिचं राजीसैन्धवैर्मिश्रयेत्ततः । हिङ्गुना धूपिताः साम्ला हृद्याश्चक्कलिका वराः ॥ ४१ ॥",
    english: "Cut the fatty portion of cooked *śuṇṭhakas* into thin palmyra-leaf-shaped slices called *cakkalikās*. Put them in churned curd with sugar, cardamom, and camphor; or in curd with mustard and citron pulp, perfumed with asafoetida. Alternatively fry them in ghee and scatter cardamom and sugar over them. A sour version combines citron pulp, fresh ginger, sour citrus, pepper, mustard, rock salt, and asafoetida.",
  },
  {
    ref: "Mānasollāsa 3.13.1436–1441",
    latin: "स्विन्नानां शुण्ठकानां च मेदोभागं प्रगृह्य च । ताडपत्रसमाकाराः कृत्वा चक्कलिकाः शुभाः ॥ ३६ ॥ मथिते शर्करायुक्ते दध्न्येलाविमिश्रिते । कर्पूरवासिते तत्र रुच्याश्चक्कलिकाः क्षिपेत् ॥ ३७ ॥ मांसमेदोमयान् शुण्ठान् पूर्ववच्चक्कलीकृतान् । मथिते राजिकायुक्ते मातुलिङ्गकसरे ॥ ३८ ॥ धूपिते हिङ्गुना सम्यग् दध्नि चक्कलिकाः क्षिपेत् । घृते वा चक्कलीं भृष्ट्वा किरेदेला सशर्कराम् ॥ ३९ ॥ अथवा मातुलुङ्गस्य सुपकस्य च केसरैः । सूक्ष्मैरार्द्रकखण्डैश्च केसराम्लैर्मनोहरैः ॥ १४४० ॥ चूर्णितं मरिचं राजीसैन्धवैर्मिश्रयेत्ततः । हिङ्गुना धूपिताः साम्ला हृद्याश्चक्कलिका वराः ॥ ४१ ॥",
    english: "Cut the fatty portion of cooked *śuṇṭhakas* into thin palmyra-leaf-shaped slices called *cakkalikās*. Put them in churned curd with sugar, cardamom, and camphor; or in curd with mustard and citron pulp, perfumed with asafoetida. Alternatively fry them in ghee and scatter cardamom and sugar over them. A sour version combines citron pulp, fresh ginger, sour citrus, pepper, mustard, rock salt, and asafoetida.",
  },
  {
    ref: "Mānasollāsa 3.13.1436–1441",
    latin: "स्विन्नानां शुण्ठकानां च मेदोभागं प्रगृह्य च । ताडपत्रसमाकाराः कृत्वा चक्कलिकाः शुभाः ॥ ३६ ॥ मथिते शर्करायुक्ते दध्न्येलाविमिश्रिते । कर्पूरवासिते तत्र रुच्याश्चक्कलिकाः क्षिपेत् ॥ ३७ ॥ मांसमेदोमयान् शुण्ठान् पूर्ववच्चक्कलीकृतान् । मथिते राजिकायुक्ते मातुलिङ्गकसरे ॥ ३८ ॥ धूपिते हिङ्गुना सम्यग् दध्नि चक्कलिकाः क्षिपेत् । घृते वा चक्कलीं भृष्ट्वा किरेदेला सशर्कराम् ॥ ३९ ॥ अथवा मातुलुङ्गस्य सुपकस्य च केसरैः । सूक्ष्मैरार्द्रकखण्डैश्च केसराम्लैर्मनोहरैः ॥ १४४० ॥ चूर्णितं मरिचं राजीसैन्धवैर्मिश्रयेत्ततः । हिङ्गुना धूपिताः साम्ला हृद्याश्चक्कलिका वराः ॥ ४१ ॥",
    english: "Cut the fatty portion of cooked *śuṇṭhakas* into thin palmyra-leaf-shaped slices called *cakkalikās*. Put them in churned curd with sugar, cardamom, and camphor; or in curd with mustard and citron pulp, perfumed with asafoetida. Alternatively fry them in ghee and scatter cardamom and sugar over them. A sour version combines citron pulp, fresh ginger, sour citrus, pepper, mustard, rock salt, and asafoetida.",
  },
  {
    ref: "Mānasollāsa 3.13.1442–1448",
    latin: "दध्ना विमिश्रयेच्चिञ्चां किंवा दाडिमसारकम् । अथवामलकं पिष्टं मेलयेद्वाम्लवेतसम् ॥ ४२ ॥ रसं वा मातुलिङ्गस्य रसं दन्तशठस्य च । मिश्रयेद्वा रसानेतान् द्वित्रान्वापि यथारुचि ॥ ४३ ॥ गन्धार्थं धान्यकं हिङ्गु जीरकं तत्र निक्षिपेत् । हरिद्रां चैव वर्णार्थं सुसूक्ष्मं च तथार्द्रकम् ॥ ४४ ॥ रुच्यर्थं विश्वमरिचं सैन्धवं च विनिक्षिपेत् । गालयेत्सितवस्त्रेण किंचित्तैलं विमिश्रयेत् ॥ ४५ ॥ मृदः स्थाल्यां विनिक्षिप्य दर्वीघट्टनपूर्वकम् । प्रलेहकं मृदावग्नौ पचेत्पाकविशारदः ॥ ४६ ॥ प्रक्षिप्य शुण्ठकांस्तत्र मृदु कुर्याच्च पाकतः । भावितांश्च रसैः सर्वैः सिद्धानुत्तारयेद्बुधः ॥ ४७ ॥ धूपयेद्धिङ्गुना वापि नखधूपेन वा पुनः । धूपेन जीरकस्यापि शशिधूपेन कोविदः ॥ ४८ ॥",
    english: "Mix tamarind with curd, or use pomegranate juice; alternatively combine ground āmalaka with amlavetasa, citron juice, or dantaśaṭha juice. Use two or three sour juices according to taste. Add coriander, asafoetida, cumin, turmeric, fresh ginger, black pepper, and rock salt. Strain and mix in a little oil. Cook over a low fire while stirring until it becomes a thick sauce, add meat śuṇṭhakas, and cook until tender and saturated. Perfume the finished dish with asafoetida or another aromatic smoke.",
  },
  {
    ref: "Mānasollāsa 3.13.1449–1452",
    latin: "चणकस्य समान् खण्डान् कल्पयित्वा विचक्षणः । निशाजीरकतीक्ष्णाद्यैः शुण्ठीधान्यकहिङ्गुभिः ॥ ४९ ॥ चूर्णितैर्मेलयित्वा तांस्तप्ततैले विनिक्षिपेत् । समानार्द्रकखण्डांश्च चणकान् हरितानपि ॥ १४५० ॥ श्लक्ष्णमांसैः क्षिपेत्कोलं निष्पावान् कोमलानपि । पलाण्डुशकलान् वापि लशुनं वापि निक्षिपेत् ॥ ५१ ॥ एवं पूर्वोदितं सूदः प्रयुञ्जीत यथारुचि । शोषितेऽम्लरसे पश्चात्सिद्धमुत्तार्य धूपयेत् ॥ ५२ ॥",
    english: "Make equal-sized pieces of chickpea preparation, season them with turmeric, cumin, pungent spices, dry ginger, coriander, and asafoetida, and put them in hot oil. Add equal-sized fresh ginger and green chickpeas, tender meat, kola, soft niṣpāva beans, onion, or garlic. Add the previously described sour sauce according to taste. When the sour liquid has dried away, remove and perfume the dish.",
  },
  {
    ref: "Mānasollāsa 3.13.1453–1456",
    latin: "बदराकारकान् खण्डान् पूर्ववच्चूर्णमिश्रितान् । आर्द्रकांस्तत्प्रमाणांश्च पक्वतैले विपाचयेत् ॥ ५३ ॥ वार्ताकशकलांश्चैव मूलकस्य च खण्डकान् । पलाण्ड्वार्द्रकसम्भूतान् मुद्गाङ्कुरविनिर्मितान् ॥ ५४ ॥ वटकान् निक्षिपेत्तत्र मेषकस्य च चूर्णकम् । कासमर्देन संयुक्तं पलान्यन्यानि कानिचित् ॥ ५५ ॥ सुसिद्धं वासयेद्धूपैर्नानारसविमिश्रितम् । नानाद्रव्यसमेता सा कवचन्दी भवेच्छुभा ॥ ५६ ॥",
    english: "Cut meat into pieces the size of jujubes, season as before, and fry in well-heated oil with equal-sized pieces of ginger. Add eggplant, radish, onion, ginger, mung sprouts, vaṭakas, meṣaka powder, kāsamarda, and any other suitable meats or vegetables. Cook thoroughly, combine with several sauces or tastes, and perfume with aromatic smoke. Because it contains many substances, it is called kavacandī.",
  },
  {
    ref: "Mānasollāsa 3.13.1457–1461",
    latin: "स्थूलामलकसङ्काशान् शुद्धमांसस्य खण्डकान् । काथयेद्राजिकातोयैर्नागरार्द्रकसंयुतैः ॥ ५७ ॥ स्थापयेत्तज्जलं पात्रे रिक्ते चाम्लैर्विपाचयेत् । तत्समान् शुण्ठकान् क्षिप्त्वा सैन्धवं तत्र योजयेत् ॥ ५८ ॥ मेथकचूर्णकं तत्र धान्यकस्य च पूलिकाम् । निक्षिप्योत्तारयेत्सूदो घृतं वान्यत्र तापयेत् ॥ ५९ ॥ सुतप्ते च घृते पलाण्डुं लशुनं हिङ्गुना सह । प्रक्षिप्य संस्कृतं मांसं तस्यां स्थाल्यां प्रवेशयेत् ॥ १४६० ॥ पिहितं च ततः कुर्यात्किंचित्कालं प्रतीक्ष्य च । उत्तारयेत्ततः सिद्धं पुर्यलाख्यमिदं वरम् ॥ ६१ ॥",
    english: "Cut clean meat into pieces the size of large āmalakas. Boil them in mustard-water with dry and fresh ginger. Reserve the liquid, add equal-sized śuṇṭhaka pieces, rock salt, fenugreek powder, and coriander, then remove the meat. Heat ghee separately; put onion, garlic, and asafoetida into the hot ghee, return the prepared meat, cover briefly, and remove when done. The dish is called purya or puryala.",
  },
  {
    ref: "Mānasollāsa 3.13.1462–1465",
    latin: "पृष्ठवंशसमुद्भूतं शुद्धं मांसं प्रगृह्य च । घनसारप्रमाणानि कृत्वा खण्डानि मूषकैः ॥ ६२ ॥ विध्वा तु बहुशस्तानि बहुरन्ध्राणि कारयेत् । हिङ्ग्वार्द्रकरसैर्युक्तं सैन्धवेन च पेषयेत् ॥ ६३ ॥ शूलपोतानि कृत्वा तान्यङ्गारेषु प्रतापयेत् । घृतेन सिञ्चेत्पाकज्ञो वारं वारं विवर्तयेत् ॥ ६४ ॥ सिद्धेषु मरिचं चूर्णं विकिरेत्सैन्धवान्वितम् । नाम्ना भडित्रकं रुच्यं लघु पथ्यं मनोहरम् ॥ ६५ ॥",
    english: "Take clean meat from beside the spine, cut it into pieces, and pierce the pieces many times. Rub them with asafoetida-water, ginger juice, and rock salt. Thread them on skewers and roast over embers, turning repeatedly and basting with ghee. When cooked, scatter ground black pepper and rock salt over them. This preparation is called bhaditraka.",
  },
  {
    ref: "Mānasollāsa 3.13.1466–1468",
    latin: "अनेनैव प्रकारेण जर्जरीकृत्य खण्डकान् । स्थाल्यामम्लेन संयोज्य पाचयेद्धिङ्गुना सह ॥ ६६ ॥ आर्द्रकस्य रसेनापि धान्यकस्य रसेन च । जीरकस्य च चूर्णेन मेथकस्य च मिश्रयेत् ॥ ६७ ॥ शोषयित्वा द्रवं सर्वं घृतेन परिभोजयेत् । क्षिपेच्च मरिचं भृष्टे सूदो भण्डे भडित्रके ॥ ६८ ॥",
    english: "Roughen or shred meat pieces, put them in a pot with sour liquid and asafoetida, and add ginger juice, coriander juice, ground cumin, and fenugreek. Dry away all the liquid, finish with ghee, and add pepper after frying.",
  },
  {
    ref: "Mānasollāsa 3.13.1469–1475",
    latin: "मेषस्य कन्धरां छित्त्वा स्थाल्यां रक्तं विधारयेत् । मर्दयेत्करशाखाभिर्निक्षिप्य लवणं मनाक् ॥ ६९ ॥ मृद्यमाने तु रुधिरे सिराजालविनिःसृते । अपनीय तथा शुद्धं कीलालं पिहितं न्यसेत् ॥ १४७० ॥ क्रोडदेशात्समारभ्य कर्तरिकाग्रेण पाटिताम् । त्वचं विभज्य गात्रेभ्यो हरेदाभ्यन्तरास्थिताम् ॥ ७१ ॥ पूर्वोद्दिष्टप्रदेशेषु स्थितं मांसमथाहरेत् । स्नायुग्रन्थिविनिर्मुक्तं खण्डशः परिकल्पयेत् ॥ ७२ ॥ पूगीफलप्रमाणानि कृत्वा खण्डानि पूर्ववत् । संस्कुर्यात्पूर्ववच्चूर्णैरम्लैश्च परिपाचयेत् ॥ ७३ ॥ स्तोकावशेषपाकेऽस्मिन्न्यस्तं रक्तं विनिक्षिपेत् । पूर्णे पाके समुत्तार्य धूपयेद्धिङ्गुजीरकैः ॥ ७४ ॥ कर्पूरचूर्णकं तस्मिन्नेलाचूर्णेन संयुतम् । विकिरेन्मरिचयुक्तं कृष्णपाकमिदं वरम् ॥ ७५ ॥",
    english: "Catch sheep’s blood in a pot, add a little salt, stir it, and remove clotted fibres. Cut cleaned mutton into areca-nut-sized pieces, season it with the previously described powders, and cook it in sour liquids. When almost done, add the reserved blood. Remove when fully cooked, perfume with asafoetida and cumin, and scatter camphor, cardamom, and black pepper over it. This is called kṛṣṇapāka.",
  },
  {
    ref: "Mānasollāsa 3.13.1476–1478",
    latin: "अङ्गारभृष्टकं मांसं शुद्धे पट्टे निधापयेत् । कर्तर्या तिलशः कृत्वा मातुलिङ्गस्य केसरैः ॥ ७६ ॥ आर्द्रकैः केसराम्लैश्च गृञ्जनैस्तत्प्रमाणकैः । जीरकैर्मरिचैः पिष्टैर्हिङ्गुसैन्धवचूर्णकैः ॥ ७७ ॥ मिश्रयित्वा तु तन्मांसं हिङ्गुधूपेन वासयेत् । आमं मांसं च पेषण्यां हिङ्गुतोयेन सिञ्चितम् ॥ ७८ ॥",
    english: "Place ember-roasted meat on a clean board and cut it into very small strips or sesame-seed-like pieces. Mix it with citron pulp, fresh ginger, sour citrus pulp, gṛñjana, ground cumin and pepper, asafoetida, and rock salt. Perfume the mixed meat with asafoetida smoke.",
  },
  {
    ref: "Mānasollāsa 3.13.1478–1482",
    latin: "मिश्रयित्वा तु तन्मांसं हिङ्गुधूपेन वासयेत् । आमं मांसं च पेषण्यां हिङ्गुतोयेन सिञ्चितम् ॥ ७८ ॥ लवणेन च चूर्णेन सहितं पेषयेद्बुधः । पिष्टवच्चिकणं कृत्वा गोलकानि प्रकल्पयेत् ॥ ७९ ॥ चूर्णीकृतं तु यन्मांसं गोलकैस्तद्विवेष्टयेत् । चूर्णगर्भांश्च वटकान् निक्षिपेदाणके शुभे ॥ १४८० ॥ ख्यातास्ते मांसवटका रुच्या दृश्या मनोहराः । त एव वटकास्तैले पक्वाः स्युर्भूषिकाभिधाः ॥ ८१ ॥ तदेव चूर्णितं मांसं कणिकापरिवेष्टितम् । अङ्गारेषु तथा भृष्टं कोशलीति निगद्यते ॥ ८२ ॥",
    english: "Grind raw meat smooth with asafoetida-water, salt, and spice powder. Shape it into balls and wrap each with further minced meat so that the centre is filled; cook the balls in a pan as māṃsa-vaṭakas. The same balls fried in oil are called bhūṣikās. Wrap the same minced meat in dough and roast it among embers; this is called kośalī.",
  },
  {
    ref: "Mānasollāsa 3.13.1483–1485",
    latin: "वार्ताकान्तदेशस्य समीपे कृतरन्ध्रकम् । निष्कासितेषु बीजेषु तेन मांसेन पूरितम् ॥ ८३ ॥ तैलेन पाचितं किंचिदाणके परिपाचयेत् । पूरभट्टाकसंज्ञं तत्स्वादुना परिपाचयेत् ॥ ८४ ॥ कोशातकीफलेऽप्येवं मूलकस्य च कन्दके । पूरिते चूर्णमांसेन तत्तन्नाम्ना तु कथ्यते ॥ ८५ ॥",
    english: "Make a hole near the end of an eggplant, remove the seeds, and fill it with seasoned minced meat. Cook it first in oil and then finish it in a pan; this is called pūra-bhaṭṭāka. The same procedure may be used for kośātakī gourd or radish root, each dish taking the name of the vegetable.",
  },
  {
    ref: "Mānasollāsa 3.13.1486–1487",
    latin: "आमं मांसं सुपिष्टं तु केसरादिविमिश्रितम् । वटकीकृत्य तैलेन तप्तेन परिपाचयेत् ॥ ८६ ॥ आणके च क्षिपेत्तज्ज्ञस्तापयेद्वा विभावसौ । नाम्ना वटिमकं तत्तु त्रिप्रकारमुदीरितम् ॥ ८७ ॥",
    english: "Grind raw meat very fine and mix it with saffron and other seasonings. Shape it into small cakes. Fry them in hot oil, cook them in a pan, or heat them directly at the fire. This preparation is called vaṭimaka and has three forms.",
  },
  {
    ref: "Mānasollāsa 3.13.1488–1491",
    latin: "अन्त्राणि खण्डशः कृत्वा कालखण्डं तथा कृतम् । वारिप्रक्षालितं कृत्वा खण्डितान् समरूपतः ॥ ८८ ॥ मेदसः शकलास्तद्वन्मांसखण्डांस्तथैव च । राजिकाकल्कदिग्धांस्तांस्तोयमिश्रान् विपाचयेत् ॥ ८९ ॥ आर्द्रकस्य रसं स्तोकमम्लमल्पं विमिश्रयेत् । प्रमाणाल्लवणं क्षिप्त्वा हिङ्गुतोयं च मेलयेत् ॥ १४९० ॥ किंचिच्छेषं द्रवं तत्तु समुत्तार्य विधूपयेत् । पञ्चवर्णीति विख्याता नानारूपरसावहा ॥ ९१ ॥",
    english: "Cut cleaned intestines and kālakhaṇḍa into equal pieces. Add pieces of fat and ordinary meat, smear everything with mustard paste, and cook with water. Add a little ginger juice and sour liquid, salt, and asafoetida-water. When only a little liquid remains, remove and perfume the dish. It is called pañcavarṇī, the five-coloured one.",
  },
  {
    ref: "Mānasollāsa 3.13.1492–1493",
    latin: "अन्त्राणि जलधौतानि शूलयष्ट्यां विवेष्टयेत् । तापयेच्च तथाङ्गारैर्यावत्कठिनतां ययुः ॥ ९२ ॥ पश्चाद्विचूर्णितं श्लक्ष्णं सैन्धवं तेषु योजयेत् । अन्त्रशुण्ठकमाख्यातं चर्वणे मर्मरारवम् ॥ ९३ ॥",
    english: "Wash intestines with water, wind them around a skewer, and roast them over embers until firm. Add finely powdered rock salt. The dish makes a crisp, crackling sound when chewed.",
  },
  {
    ref: "Mānasollāsa 3.13.1494–1498",
    latin: "पूर्ववच्छोधिते रक्ते बीजपूरस्य केसरम् । रसमार्द्रकसम्भूतं रसं दन्तशठस्य च ॥ ९४ ॥ जीरकं हिङ्गु मरिचं धान्यकं सैन्धवं क्षिपेत् । मेदसः श्लक्ष्णखण्डानि क्षिप्त्वा सर्वं विलोडयेत् ॥ ९५ ॥ अन्त्रं प्रक्षालितं यत्नात्तेन रक्तेन पूरितम् । पेटकाकृतियुक्तासु कम्रासु परिवेष्टयेत् ॥ ९६ ॥ कम्रामुखानि बध्नीयात्केवलैरन्त्रकैस्तथा । तैरेव रज्जुसङ्काशैर्गृहीत्वोपरि तापयेत् ॥ ९७ ॥ अङ्गारैः किंशुकाकारैर्यावत्काठिन्यमाप्नुयुः । मण्डलीयं समाख्याता राजवृक्षफलोपमा ॥ ९८ ॥",
    english: "Mix purified blood with citron pulp, ginger juice, dantaśaṭha juice, cumin, asafoetida, black pepper, coriander, rock salt, and finely cut fat. Fill a carefully washed intestine, coil it into circular forms, tie the ends, and heat it until firm and red like kiṃśuka flowers. The ring-shaped sausage is called maṇḍalī.",
  },
  {
    ref: "Mānasollāsa 3.13.1499–1501",
    latin: "पञ्चाङ्गपट्टद्वेष्ट्या वर्तिबद्धोज्ज्वला वपा । अङ्गुलद्वयमानेन खण्डांस्तस्याः प्रकल्पयेत् ॥ ९९ ॥ खण्डानि कालखण्डस्य तत्प्रमाणानि चान्तरा । शूलपोतानि कृत्वा तानङ्गारेषु प्रतापयेत् ॥ १५०० ॥ सैन्धवं विकिरेत्तत्र सुश्लक्ष्णं मरिचान्वितम् । वर्णशुण्ठकनामेदं वर्णितं सोमभूभुजा ॥ १ ॥",
    english: "Cut a bright roll of fat into pieces two finger-widths long. Cut kālakhaṇḍa into pieces of the same size, alternate the pieces on skewers, roast them over embers, and scatter very fine rock salt and pepper over them. This preparation is called varṇa-śuṇṭhaka.",
  },
  {
    ref: "Mānasollāsa 3.13.1502–1506",
    latin: "अङ्गारेषु तथा भृष्ट्वा कालखण्डं विकृत्य च । पूगीफलप्रमाणेन खण्डान् कृत्वा विचक्षणः ॥ २ ॥ तैलेनाभ्यज्य तान् सर्वान्मरिचाजाजिसैन्धवैः । चूर्णितैर्विकिरेत्पश्चाद्धिङ्गुधूपेन धूपयेत् ॥ ३ ॥ अनेन विधिना भृष्ट्वा राजिकाकल्कलेपितान् । कालखण्डान् प्रकुर्वीत दध्ना राजिकयाथवा ॥ ४ ॥ भृष्टस्य कालखण्डस्य कृत्वा चक्कलिकाः शुभाः । केसरैर्मातुलिङ्गस्य सैन्धवाद्यैश्च मिश्रयेत् ॥ ५ ॥ समेदस्कौ द्विधा भक्तौ कृत्वा लवणमिश्रितौ । आम्लकैर्भावयित्वा तौ तैलेन परिपाचयेत् ॥ ६ ॥",
    english: "Roast kālakhaṇḍa over embers, cut it into areca-nut-sized pieces, smear with oil, and season with pepper, ajājī, and rock salt, then perfume with asafoetida. It may instead be coated with mustard paste or dressed with curd and mustard. Thin slices may be mixed with citron pulp and salt. Fatty pieces may be split, salted, steeped in sour liquids, and fried in oil.",
  },
  {
    ref: "Mānasollāsa 3.13.1507–1509",
    latin: "क्रोडदेशोद्भवं मांसमंस्या सह विखण्डितम् । अंसकीकससंयुक्तं पार्श्वकुल्या समन्वितम् ॥ ७ ॥ मृद्भाण्डे स्थाल्यवक्त्रे तन्निक्षिप्य बहलोदके । हिङ्गुना चाम्लकेनापि सैन्धवेन च संयुतम् ॥ ८ ॥ काथयेत्सुचिरं कालं यावत्तन्मार्दवं भजेत् । उत्क्वाथितमिदं सूपं ख्यातं शास्त्रविशारदैः ॥ ९ ॥",
    english: "Cut flesh from the chest, shoulder, adjacent bones, and ribs. Put it in an earthen pot with abundant water, asafoetida, a souring agent, and rock salt. Boil it for a long time until the meat becomes tender. This is called an utkvāthita soup.",
  },
  {
    ref: "Mānasollāsa 3.13.1513–1517",
    latin: "समेदस्कानि मांसानि कृत्वा दीर्घाणि कर्तनैः । हिङ्गुतोयेन संसिच्य लवणेन विलोडयेत् ॥ १३ ॥ छायायां तानि खण्डानि वायुना परिशोषयेत् । एकद्वित्रिदिनान्तेषु भृष्टान्यङ्गारपुञ्जके ॥ १४ ॥ स्थूलीकृतानि यावच्च स्वादुरुच्यानि यन्नृणाम् । उपखण्डकनामानि सर्वशाकोत्तमानि च ॥ १५ ॥ हरिणस्य तथा खण्डांश्चक्कलीः परिकल्पितान् । सम्भारसहितान् प्राज्यलवणेन विमिश्रितान् ॥ १६ ॥ शोषितानपि चात्यर्थमग्निना परिभर्जितान् । हृद्यान् पथ्यान् सुगन्धांश्च कल्पयेदुपखण्डकान् ॥ १७ ॥",
    english: "Cut fatty meat into long strips, sprinkle them with asafoetida-water, rub with salt, and dry them in shade and moving air. After one, two, or three days, roast them in a heap of embers until they swell and become tasty. Venison may likewise be cut thin, mixed with plentiful salt and seasonings, dried thoroughly, and roasted.",
  },
  {
    ref: "Mānasollāsa 3.13.1518–1519",
    latin: "रुरुशम्बरसराङ्गच्छागस्य नलकं पृथु । अग्नौ भृष्ट्वा शिलाघातैः स्फोटयित्वा प्रयत्नतः ॥ १८ ॥ मज्जानं तु ततो हृत्वा लवणाम्लेन हिङ्गुना । मरिचाजाजिचूर्णेन पचेत्स्थाल्यां विचक्षणः ॥ १९ ॥",
    english: "Roast a large marrow bone from deer or goat, crack it, remove the marrow, and cook it in a pot with salt, sour liquid, asafoetida, pepper, and powdered ajājī.",
  },
  {
    ref: "Mānasollāsa 3.13.1520–1521",
    latin: "यस्य कस्यापि मेषादेः शिरो भृष्ट्वा विभिद्य च । आददीत च मस्तिष्कं काञ्जिकेन विपाचयेत् ॥ १५२० ॥ आणके तैलमध्ये वा यथारुचि पुनः पचेत् । चूर्णैः संयोज्य तत्पश्चाद्धिङ्गुधूपेन धूपयेत् ॥ २१ ॥",
    english: "Roast and split the head of a sheep or another animal, remove the brain, and cook it in kāñjika. It may then be cooked again in a pan or in oil, mixed with spice powders, and perfumed with asafoetida.",
  },
  {
    ref: "Mānasollāsa 3.13.1524–1531",
    latin: "सशल्कानां च मत्स्यानां शल्कं स्फोट्यं प्रयत्नतः । स्थूलाश्चेत्खण्डशः कार्याः लघवश्चेत्सरूपतः ॥ २४ ॥ मत्स्यानां छेदयेच्छीर्षं पुच्छं तेषां च पक्षिणाम् । विपाट्य जठरं तस्मादन्त्राण्यपसारयेत् ॥ २५ ॥ कण्टकष्टबडिशादग्धाः खवलाचुकैः ... । पाठीनैश्च तथैतेषां पृथक्कृत्वा शिरः पचेत् ॥ २६ ॥ मत्स्यानां घर्षणं कार्यं तैलेन लवणेन च । यावत्पिच्छलतां याति मत्स्यगन्धश्च नश्यति ॥ २७ ॥ क्षालयेदुदकैः पश्चाद्धरिद्राकल्कमिश्रितैः । वस्त्रे धृत्वा निपीड्यैतान् स्रावयेत्सङ्गतं जलम् ॥ २८ ॥ क्षिपेत्पूर्वप्रसिद्धेषु प्रपवेष्वाणकेषु तान् । स्वल्पे काले गते सूदः स्थालीमुत्तार्य धूपयेत् ॥ २९ ॥ मत्स्यखण्डानि धौतानि चिञ्चाम्लेन विपाचयेत् । ततो गोधूमचूर्णं तु विकिरेत्तेषु सर्वतः ॥ १५३० ॥ तप्ततैले क्षिपेत्तानि पिङ्गान्युत्तारयेत्ततः । एलामरिचचूर्णेन सैन्धवेन च भावयेत् ॥ ३१ ॥",
    english: "Scale large fish and cut them into pieces; leave small fish whole. Remove head, tail, fins, and intestines. Rub the fish with oil and salt until the slime and fish smell disappear, wash in turmeric-water, and drain in cloth. Cook washed pieces in tamarind souring liquid, scatter wheat flour over all sides, and fry in hot oil until brown. Season with cardamom, black pepper, and rock salt.",
  },
  {
    ref: "Mānasollāsa 3.13.1533–1534",
    latin: "मत्स्यांश्च खण्डशः कृत्वा चतुरङ्गुलसम्मितान् । लवणेन समायुक्तान् कुम्भेषु परिपूरयेत् ॥ ३३ ॥ खरखण्डा इति ख्याताश्चिरकालं वसन्ति ते । भोजनावसरे सूदो वह्निना परिभर्जयेत् ॥ ३४ ॥",
    english: "Cut fish into pieces four finger-widths long, mix them with salt, and pack them into jars. These long-keeping pieces are called khara-khaṇḍas. At mealtime the cook roasts them over fire.",
  },
  {
    ref: "Mānasollāsa 3.13.1535–1536",
    latin: "मत्स्याण्डकोशावादाय वह्निना परिभर्जयेत् । दृढीभूते ततः पश्चात्खण्डशः परिकल्पयेत् ॥ ३५ ॥ विपच्य तप्ततैले तान्येलामरिचकादिभिः । विकीर्य सैन्धवेनापि हिङ्गुना परिधूपयेत् ॥ ३६ ॥",
    english: "Roast fish roe-sacs in the fire. Once firm, cut them into pieces, fry them in hot oil, scatter cardamom, pepper, and related spices over them, add rock salt, and perfume with asafoetida.",
  },
  {
    ref: "Mānasollāsa 3.13.1537–1539",
    latin: "कच्छपान् वह्निना भृष्ट्वा पादांश्छल्कांश्च मोचयेत् । शिरश्चैव पृथक्कृत्वा पक्वरम्भाफलोपमान् ॥ ३७ ॥ अम्लकैश्च विपच्याथ तैलेनाज्येन वा पुनः । पाचयेच्च सुसिद्धांस्तान् चूर्णकैरवचूर्णयेत् ॥ ३८ ॥ आणके वा पचेत्तज्ज्ञो निधूमे वा हुताशने । नन्द्यावर्ता इति ख्याता मृदुरुच्या मनोहराः ॥ ३९ ॥",
    english: "Roast turtle, remove the feet and shell, separate the head, and cut the flesh into pieces like ripe banana fruit. Cook the pieces with sour ingredients, then cook them again in oil or ghee until thoroughly done and dust with spice powders. They may also be cooked in a pan or over a smokeless fire. The dish is called nandyāvarta.",
  },
  {
    ref: "Mānasollāsa 3.13.1540–1542",
    latin: "कर्कटांस्तु लघून् स्थूलान् हस्तपादवियोजितान् । रूक्षे ताम्रमये पात्रे सुतप्ते तान् विवर्जयेत् ॥ १५४० ॥ स्फोटिते खपरे तांस्तु मृदो भाण्डे विनिक्षिपेत् । विपचेल्लवणाम्लैश्च पुनः सर्पिषि पाचयेत् ॥ ४१ ॥ जीरकं लवणं तीक्ष्णं चूर्णितं तेषु निक्षिपेत् । वृष्या बलकरा हृद्या मृष्टास्ते घृतकर्कटाः ॥ ४२ ॥",
    english: "Remove the limbs from small or large crabs. Heat them in a dry, very hot copper vessel until their shells crack. Transfer them to an earthen pot, cook them with salt and souring agents, then cook them again in ghee. Add ground cumin, salt, and pungent spice. These are called ghṛta-karkaṭas.",
  },
  {
    ref: "Mānasollāsa 3.13.1543–1547",
    latin: "मूषकाः क्षेत्रसम्भूता नदीकूलेषु संस्थिताः । स्थूलाः श्यामास्तथा पुष्टा जात्या ते मयिगाः स्मृताः ॥ ४३ ॥ प्रतप्ते सलिले तांस्तु निक्षिपेत्पुच्छधारणात् । उद्धृत्य तस्मात्सलिलाद्रोमाण्युत्पाटयेत्ततः ॥ ४४ ॥ विभेद्य जठरं तेषां स्फोटयेदन्त्रकाणि तु । सम्भारसहितैरम्लैः पचेच्च लवणान्वितैः ॥ ४५ ॥ शूलपोतांस्ततः कृत्वा तानङ्गारैः प्रतापयेत् । यावद्बहिस्त्वचस्तेषां शोषमायान्ति तापनात् ॥ ४६ ॥ सुपक्वेषु तथा तेषु मूषकेषु किरेदनु । लवणं मरिचं शुण्ठीं जीरकं च विचूर्णितम् ॥ ४७ ॥",
    english: "A thick, dark, well-fleshed field or river animal called mūṣaka or mayiga is scalded, skinned, gutted, cooked with seasoned sour liquids and salt, threaded on skewers, and roasted until the outer skin dries. Ground salt, pepper, dry ginger, and cumin are scattered over it.",
  },
  {
    ref: "Mānasollāsa 3.13.1550–1553",
    latin: "आम्राम्रातकजम्बूश्च बीजपूराग्निमन्थकैः । भल्लातागस्त्यकोपसीद्राक्षाभृङ्गकसल्लकैः ॥ ५० ॥ पुनर्नवा मरी तीक्ष्णा अतसी सुरसाद्वयम् । मरुकं तालपर्णी च भिण्डुकी मुण्डका तथा ॥ ५१ ॥ ब्राह्मी चैवाम्लपत्री च कोकिलाक्षी कुसुम्भकम् । अञ्जनं पद्मकोशश्च शेढकं च तथापरम् ॥ ५२ ॥ संगृह्य पल्लवानेषामम्लिकाम्लेन मिश्रयेत् । जम्बीराम्लेन दध्ना वा लवणेन च संयुतान् ॥ ५३ ॥",
    english: "Gather tender shoots from a long list of trees, herbs, vines, and greens, including mango, *jambu*, citron, grape, *punarnavā*, flax, *surasā*, *brahmī*, sour-leaf, safflower, and lotus. Mix the shoots with tamarind sourness, citron or lime juice, or curd, together with salt.",
  },
  {
    ref: "Mānasollāsa 3.13.1554–1558",
    latin: "श्रीफलं केतकं चिञ्चा मेषशृङ्गी सुगन्धिजम् । कुटजं मरिचं पथ्या विषमुष्टिकशिम्बिजम् ॥ ५४ ॥ एलारामठनीवारमेथिकापर्पटं तथा । अगस्त्यं नन्दनं राजमातुलिङ्गकपाटालम् ॥ ५५ ॥ कटं मदं कर्कटं च करीरं टेण्टुकं तथा । वेत्रकारीफलं चैव लवणाम्भसि निक्षिपेत् ॥ ५६ ॥ चूतमाम्रातकं धात्री कुहिरि कर्कटी तथा । कूष्माण्डं त्रपुसं द्राक्षा कर्कटी बृहतीद्वयम् ॥ ५७ ॥ कोशातकी बीजपूरं निष्पावं करमर्दकम् । जम्बीरबिम्बवार्ताककर्मरं लवणाम्भसि ॥ ५८ ॥",
    english: "A long list of fruits, pods, aromatics, gourds, grapes, eggplants, limes, citron, āmalaka, mango, niṣpāva, and other produce is to be placed in salt water.",
  },
  {
    ref: "Mānasollāsa 3.13.1559–1560",
    latin: "अथवा राजिकाचूर्णे सतैले लवणान्विते । प्रक्षाल्य वृन्तसहितं फलं चूतादिकं न्यसेत् ॥ ५९ ॥ कारवेल्लं सपनसं कदलीफलमेव च । सतैले राजिकाचूर्णे निक्षिपेल्लवणान्विते ॥ १५६० ॥",
    english: "Wash mangoes and related fruits with their stalks attached and place them in mustard powder mixed with oil and salt. Bitter gourd, jackfruit, and banana are preserved in the same oil, mustard, and salt mixture.",
  },
  {
    ref: "Mānasollāsa 3.13.1561–1564",
    latin: "वंशाङ्कुरं लघु चक्रीं शतावर्यास्तथैव च । पातालटेण्टुकानां च प्ररोहान् क्षालितान् मृदून् ॥ ६१ ॥ सलिले लवणोपेते तैले वापि सराजिके । लवणेन समायुक्ते प्रक्षिपेदङ्कुरानिमान् ॥ ६२ ॥ मागिणीमाकं पैष्टुं कचोरं वनमागिणीम् । कर्पूरमागिणीमूलं तथैवाम्लहरिद्रकाम् ॥ ६३ ॥ सूरणं मधुशिग्रं च तथा बिलकन्दकम् । एतानि पूर्ववत्कृत्वा तैले वापि विनिक्षिपेत् ॥ ६४ ॥",
    english: "Wash and soften bamboo shoots, cakrī, śatāvarī shoots, and pātāla and tendu sprouts. Put them in salted water or in oil with mustard and salt. A further group of roots and tubers, including kacora, sour turmeric, elephant-foot yam, and bilakanda, is prepared in the same way and placed in oil.",
  },
  {
    ref: "Mānasollāsa 3.13.1565–1567",
    latin: "गव्यं वा माहिषं वापि क्षीरं नीरविवर्जितम् । पचेत्स्थाल्यां मृदावग्नौ दर्वीघट्टनसंयुतम् ॥ ६५ ॥ अर्धावशेषं कुर्वीत त्रिभागेनावशेषितम् । षड्भागशेषितं वापि कुर्यादष्टावशेषिकम् ॥ ६६ ॥ अर्धावशिष्टं पाने स्यात्त्रिभागं लेह्यकं भवेत् । षड्भागं पिण्डतामेति शर्करा स्यादथाष्टमे ॥ ६७ ॥",
    english: "Cook undiluted cow’s or buffalo’s milk over a low fire while continually stirring. Reduce it to one-half, one-third, one-sixth, or one-eighth of the original amount. At one-half it remains drinkable; at one-third it is spoonable; at one-sixth it forms a solid mass; at one-eighth it becomes a sugar-like milk confection.",
  },
  {
    ref: "Mānasollāsa 3.13.1568–1570",
    latin: "अर्धावशेषिते दुग्धे तक्रमीषद्विनिक्षिपेत् । नवस्थाल्यां न्यसेत्तत्तु निवाते स्थापयेच्च ताम् ॥ ६८ ॥ शर्करामिश्रितं वापि एलयापि विमिश्रयेत् । यामषट्कोषितं क्षीरमम्लतां घनतां भजेत् ॥ ६९ ॥ दधीति नाम प्राप्नोति पथ्यं मृष्टं मनोहरम् । हीनकाले तथा पथ्यं चिरकालेऽम्लता बहु ॥ १५७० ॥",
    english: "Add a little buttermilk to milk reduced by half, put it in a new pot, and leave it in a windless place. It may also be mixed with sugar or cardamom. After six yāmas the milk becomes sour and thick and is called dadhi. If left too long it becomes excessively sour.",
  },
  {
    ref: "Mānasollāsa 3.13.1571–1572",
    latin: "मन्थानेन मथित्वा तन्नवनीतमथो हरेत् । निर्जलं मथितं प्रोक्तमुदश्वित् स्याज्जलार्धकम् ॥ ७१ ॥ पादाम्बु तक्रमुद्दिष्टं धूपितं हिङ्गुजीरकैः । आर्द्रकेण समायुक्तमेलासैन्धवचूर्णितम् ॥ ७२ ॥",
    english: "Churn curd and remove the butter. The undiluted churned product is called mathita; with half its volume of water it is udaśvit; with one-quarter water it is takra. Takra is perfumed with asafoetida and cumin and seasoned with fresh ginger, cardamom, and powdered rock salt.",
  },
  {
    ref: "Mānasollāsa 3.13.1573",
    latin: "मथितं शर्करायुक्तमेलाचूर्णविमिश्रितम् । कर्पूरधूपितं नाम्ना मज्जिकेत्यभिधीयते ॥ ७३ ॥",
    english: "Churned curd or buttermilk mixed with sugar and cardamom powder and perfumed with camphor smoke is called majjikā.",
  },
  {
    ref: "Mānasollāsa 3.13.1574",
    latin: "निष्पीड्य दधि वस्त्रेण स्रावयेत्तद्रुतं जलम् । शर्करैलासमायुक्ता सूदैः शिखरिणी मता ॥ ७४ ॥",
    english: "Press curd in a cloth and allow the liquid whey to drain out. Mix the thick curd with sugar and cardamom; cooks call this śikhariṇī.",
  },
  {
    ref: "Mānasollāsa 3.13.1575",
    latin: "स्रावितं यद्धृतं तोयं जीरकाज्यसैन्धवैः । संयुक्तं हिङ्गुधूपेन धूपितं मस्तु कीर्तितम् ॥ ७५ ॥",
    english: "The liquid retained after curd has drained, mixed with cumin, ghee, and rock salt and perfumed with asafoetida, is called mastu.",
  },
  {
    ref: "Mānasollāsa 3.13.1576–1577",
    latin: "नवनीतं नवं धौतं नीरलेशविवर्जितम् । तापयेदग्निना सम्यङ्मृदुना घृतभाण्डके ॥ ७६ ॥ पाके संपूर्णतां याते क्षिपेद्गोधूमबीजकम् । क्षिपेत्ताम्बूलपत्रं च पश्चादुत्तारयेद्घृतम् ॥ ७७ ॥",
    english: "Wash fresh butter until no trace of water remains. Heat it over a low fire in a ghee-pot. When clarification is complete, add a grain of wheat and a betel leaf, then remove the ghee from the fire.",
  },
  {
    ref: "Mānasollāsa 3.13.1578–1579",
    latin: "तण्डुलक्षालितं तोयं चिञ्चाम्लेन विमिश्रितम् । ईषत्तक्रेण संयुक्तं सितया सह योजितम् ॥ ७८ ॥ एलाचूर्णसमायुक्तमार्द्रकस्य रसेन च । धूपितं हिङ्गुना सम्यग्व्यञ्जनं परिकीर्तितम् ॥ ७९ ॥",
    english: "Mix rice-washing water with tamarind sourness, a little buttermilk, sugar, cardamom powder, and ginger juice, then perfume with asafoetida. This is called a vyañjana or liquid accompaniment.",
  },
  {
    ref: "Mānasollāsa 3.13.1580",
    latin: "सौवीरनिर्मलं साम्लं लवणेन च संयुतम् । हिङ्गुना जीरकेणापि धूपितं धूपकाञ्जिकम् ॥ १५८० ॥",
    english: "Clear, sour sauvīra mixed with salt and perfumed with asafoetida and cumin is called dhūpa-kāñjika.",
  },
  {
    ref: "Mānasollāsa 3.13.1581–1584",
    latin: "शङ्कुद्वयं समास्थाप्य बध्नीयादुज्ज्वलाम्बरम् । प्रसार्य यष्टिभिः किंचित्क्षीरमम्लेन भेदितम् ॥ ८१ ॥ सितया च समायुक्तमेलाचूर्णविमिश्रितम् । क्षिपेत्प्रसारिते वस्त्रे स्रावयेत्पेषयेत्समम् ॥ ८२ ॥ पुनः पुनः क्षिपेत्तत्र यावन्निर्मलतां व्रजेत् । पक्वचिञ्चाफलं भृष्टं वर्णार्थं तत्र निक्षिपेत् ॥ ८३ ॥ यस्य कस्य फलस्यापि रसेन परिमिश्रयेत् । तत्तन्नामसमाख्यातं पानकं पेयमुत्तमम् ॥ ८४ ॥",
    english: "Stretch a clean cloth between supports. Curdle milk with a souring agent, mix it with sugar and cardamom, pour it onto the cloth, let it drain, and press or grind it repeatedly until the liquid becomes clear. Add roasted ripe tamarind for colour. Mix with the juice of any desired fruit; the drink takes that fruit’s name and is an excellent pānaka.",
  },
];
