export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  location: string;
  image: string;
  description: string;
  longDescription?: string;
  highlights: string[];
  itinerary?: { day: number; title: string; description: string }[];
  category: 'Sikkim' | 'Darjeeling';
}

export const packages: TourPackage[] = [
  {
    id: 'gangtok-03nights',
    title: 'Gangtok 03Nights',
    duration: '03 Nights / 04 Days',
    location: 'Gangtok',
    image: '/images/dest_gangtok.png',
    description: 'A perfect short getaway to the capital of Sikkim, exploring monasteries, lakes, and local culture.',
    longDescription: 'Gangtok the capital city of Sikkim state in North Eastern Himalayan part of India settled at an altitude of 5600ft. The name GANGTOK means ``place on the hilltop" in local Bhutia language. The area of city Started from Ranipool at bottom up to the former Royal palace on a ridge top approx 15km area, Gangtok is clean and pollution free hill station with mix of traditional and modern hospitality and cosmopolitan outlook with safe and friendly care and guidance of administration local peoples are very polite and hospitable variety of Buddhism culture can be feel in and around of Gangtok, picturesque view of nature and excellent climate is another attraction of this place.',
    highlights: ['Baba Mandir', 'Tsomgo Lake', 'Gangtok Local Sightseeing'],
    itinerary: [
      {
        day: 1,
        title: 'Welcome at Gangtok',
        description: 'Welcome at New Jalpaiguri Rly Station/Bagdogra Airport & drive to Gangtok (135km, approx 4.30hrs hill drive) crossing through beautiful Mahananda wild life sanctuary, from the foot hill point `Sevoke’ you will feel the thrill of hilly drive in accompany of river Teesta along with the road. While reach at ``Rangpo’’ the entrance point of Sikkim state, take a tea break at Rangpo and proceed to Gangtok with enjoying the scenic view of steep cultivation and tiny village of Sikkim’s own identity. On arrival at Gangtok the capital of Sikkim check in at hotel, overnight relax at hotel.'
      },
      {
        day: 2,
        title: 'In Gangtok',
        description: 'After breakfast start city tour of Gangtok covering Banjhakri Waterfall, Do-Drul Chorten (Buddha Stupa), Institute of Tibetology, Flower show, Sikkim cottage industry, and Inchey Monastery Ganesh tok, back to hotel. Evening free for shopping or walking tour in M.G.Marg area, over night at hotel'
      },
      {
        day: 3,
        title: 'Excursion to Tsomgo Lake & Baba Mandir',
        description: 'After breakfast around 9.00A.M start for day excursion trip to Tsomgo Lake (45 km hill drive) at an altitude of 12,400ft, the lake is almost 01km long and 15 meters depth. The lake is considered sacred by the local people, you can take photograph at the backdrop of lake also can enjoy a ride on the back of Yak, next go to Tukla at a distance of 18 Km from the Lake for visit Baba Mandir (the shrine in memory of disappeared Indian army personal Baba Harbhajan Singh) and back to Gangtok. Evening free over night at hotel'
      },
      {
        day: 4,
        title: 'Back to Home',
        description: 'Morning free for packing after breakfast transfer to New Jalpaiguri Rly Station or Bagdogra Airport for your return journey'
      }
    ],
    category: 'Sikkim'
  },
  {
    id: 'pelling-gangtok-darjeeling-kalimpong',
    title: 'Pelling Gangtok Darjeeling Kalimpong',
    duration: '05 Nights / 06 Days',
    location: 'Pelling • Gangtok • Darjeeling • Kalimpong',
    image: '/images/dest_pelling.png',
    description: 'The ultimate Himalayan journey covering the major gems of North Bengal and Sikkim.',
    longDescription: 'Pelling is a small hill station settled at an altitude of 7,200ft on a hilltop of eastern Himalayas region in west Sikkim, this place is one of the closest Motorable points to Himalayan peak’s. Pelling also a combination of heritage past and modern future as the 1st and 2nd capital of Sikkim Royal dynasty been settled near this place.\n\nGangtok the capital city of Sikkim state in North Eastern Himalayan part of India settled at an altitude of 5600ft. The name GANGTOK means ``place on the hilltop" in local Bhutia language. The area of city Started from Ranipool at bottom up to the former Royal palace on a ridge top approx 15km area.\n\nDarjeeling is a well known tourist destination, settled at an altitude of 6,710 ft on the eastern Himalayan Hill of India in the state of West Bengal. It is famous in the world for its unique climate condition, charming flavor of world’s best tea leaf producing and eye soothing green valleys;\n\nKalimpong is a peace full quite hill station in the lap of Eastern Himalayan region of India in West Bengal State. The town is settled at an altitude of 4,100ft on the ridge of hill like a saddle in between two hill points Delo and Durpin.',
    highlights: ['Kanchenjunga Views', 'Tea Estates', 'Monasteries', 'Alpine Lakes'],
    itinerary: [
      {
        day: 1,
        title: 'Welcome on Arrival and drive to Pelling',
        description: 'Welcome at New Jalpaiguri Rail Station or Bagdogra Airport and drive to Pelling a calm & quite hill station in West Sikkim (140km approx 05hrs hill drive) you will enjoy the drive crossing through beautiful Mahananda wild life sanctuary, from the foot hill point `Sevoke’ you will feel the thrill of hilly drive in accompany of River Teesta up to Sikkim & West Bengal border ‘Malli’ here another hill River’ Rangeet’ will welcome you and continue with you like a road guide. On arrival at Pelling check-in at hotel and free for relax'
      },
      {
        day: 2,
        title: 'Pelling sightseeing and drive to Gangtok',
        description: 'At morning be ready and complete your breakfast then start Pelling sightseeing covering Darap Village, Rimbi Waterfalls, Khangchendzonga waterfalls , Khechupelri lake, subsequent drive to Gangtok ‘The capital city of Sikkim’ (130km approx 4.30hrs hill drive) at West Sikkim, via Rabangla,Singtam. On arrival at Gangtok Check-in at hotel and stay in relax.'
      },
      {
        day: 3,
        title: 'Day Excursion to Tsomgo Lake & Baba Mandir',
        description: 'After breakfast around 9.00A.M start for day excursion trip to Tsomgo Lake (45 km hill drive) at an altitude of 12,400ft, the lake is almost 01km long and 15 meters depth. The lake is considered sacred by the local people, you can take photograph at the backdrop of lake also can enjoy a ride on the back of Yak, next go to Tukla at a distance of 18 Km from the Lake for visit Baba Mandir (the shrine in memory of disappeared Indian army personal Baba Harbahajan Singh) and back to Gangtok. Evening free over night at hotel'
      },
      {
        day: 4,
        title: 'Gangtok to Darjeeling & Darjeeling Sightseeing',
        description: 'After breakfast you will be pick up as per time and drive to Darjeeling the world famous hill station In West Bengal via Peshok road (98km approx 3.30hrs hill drive) On arrival Check in at hotel, subsequent proceed for visit covering Himalayan Mountaineering Institute & Padwaja Naidu Zoological Park (both closed on Thursday) Tenzing Rock, Tibetan Self Help handicraft Centre (closed on Sunday), happy valley Tea Garden (outer view), Peace Pagoda and back to hotel and free for walking tour or shopping at the ‘Mall’ area ,overnight stay at hotel.'
      },
      {
        day: 5,
        title: 'Visit Tiger hill & drive to Kalimpong & Sightseeing in Kalimpong.',
        description: 'Be ready early morning, at 04.00A.M you will be pick up for visit Tiger Hill (24km hill drive) at an altitude of 8500ft for spectacular view of color full sunrise over Mt. Khangchendzonga, on way back visit Ghoom Monastery, Batasia loop. After breakfast transfer to Kalimpong after check-in at hotel and proceed for sightseeing visit of Dello hill top, Orchid Nursery, Dr. Grahams Homes Campus, Mangal Dham temple, and Nature Interpretation Center and back to hotel & relax.'
      },
      {
        day: 6,
        title: 'Back to Home',
        description: 'Morning free for packing after breakfast transfer to New Jalpaiguri Rly Station or Bagdogra Airport (78km approx 03hrs hill drive) for your return journey'
      }
    ],
    category: 'Sikkim'
  },
  {
    id: 'pelling-gangtok',
    title: 'Pelling Gangtok',
    duration: '05 Nights / 06 Days',
    location: 'Pelling • Gangtok',
    image: '/images/pkg_sikkim.png',
    description: 'A beautiful journey through the majestic landscapes of Pelling and the vibrant culture of Gangtok.',
    longDescription: 'Pelling is a small hill station settled at an altitude of 7,200ft on a hill top of eastern Himalaya region in west Sikkim, this place is one of the closest Motorable point to Himalayan peak’s . Pelling also a combination of heritage past and modern future as the 1st and 2nd capital of Sikkim Royal dynasty been settled near this place.\n\nGangtok the capital city of Sikkim state in North Eastern Himalayan part of India settled at an altitude of 5600ft. The name GANGTOK means ``place on the hilltop" in local Bhutia language. The area of city Started from Ranipool at bottom up to the former Royal palace on a ridge top approx 15km area.',
    highlights: ['Kanchenjunga Waterfalls', 'Tsomgo Lake', 'Monasteries'],
    itinerary: [
      {
        day: 1,
        title: 'Welcome and drive to Pelling',
        description: 'Welcome at New Jalpaiguri Rail Station or Bagdogra Airport and drive to Pelling a calm & quite hill station in West Sikkim (140km approx 05hrs hill drive) you will enjoy the drive crossing through beautiful Mahananda wild life sanctuary from the foot hill point `Sevoke’ you will feel the thrill of hilly drive in accompany of River Teesta up to Sikkim & West Bengal border ‘Malli’ here another hill River ‘Rangeet’ will welcome you and continue with you. On arrival at Pelling check-in at hotel and free for relax'
      },
      {
        day: 2,
        title: 'visit in Pelling',
        description: 'After breakfast start a full day sightseeing in Pelling with the oldest Monastery in Sikkim Pemayangtse Monastery, Rimbi waterfall, and Kanchenjunga waterfall, Khecheopalri Lake (it is believed that birds do not permit even a single leaf to float on the lake ) Darap village ( famous for its Alpine Cheese Making ) and Changey waterfalls Also can enjoy sky walk (by own Cost) at Sanga choling & back to hotel . Evening relax at your own style, overnight at hotel'
      },
      {
        day: 3,
        title: 'Drive to Gangtok',
        description: 'At morning be ready after complete your breakfast and drive to Gangtok ‘The capital city of Sikkim’ (130km approx 4.30hrs hill drive) at West Sikkim via Rabang-la, Singtham. On arrival at Gangtok Check-in at hotel, rest of the time free for relax or enjoy waking tour & shopping at M.G Marg area, Overnight stay at hotel'
      },
      {
        day: 4,
        title: 'visit in Gangtok',
        description: 'After breakfast start for city tour , covering Tashi view Point , Banjakhri Waterfall, Do-Drul Chorten (Buddha Stupa), Institute of Tibetology, Flower show, Sikkim Handicrafts industry(Sunday closed), Inchey Monastery Ganesh tok, Hanuman tok also can enjoy Ropeway ride (by own cost) & back to hotel, over night at hotel'
      },
      {
        day: 5,
        title: 'Excursion to Tsomgo Lake & Baba Mandir',
        description: 'After breakfast around 9.00A.M start for day excursion trip to Tsomgo Lake (45 km hill drive) at an altitude of 12,400ft, the lake is almost 01km long and 15 meters depth. The lake is considered sacred by the local people, you can take photograph at the backdrop of lake also can enjoy a ride on the back of Yak, next go to Tukla at a distance of 18 Km from the Lake for visit Baba Mandir (the shrine in memory of disappeared Indian army personal Baba Harbhajan Singh) and back to Gangtok. Evening free over night at hotel'
      },
      {
        day: 6,
        title: 'Back to Home',
        description: 'Morning free for packing after breakfast transfer to NewJalpaiguri Rly Station or Bagdogra Airport (135km, approx 4.30hrs hill drive) for your return journey'
      }
    ],
    category: 'Sikkim'
  },
  {
    id: 'darjeeling-to-gangtok',
    title: 'Darjeeling to Gangtok',
    duration: '04 Nights / 05 Days',
    location: 'Darjeeling • Gangtok',
    image: '/images/pkg_darjeeling.png',
    description: 'Experience the best of both worlds with this comprehensive tour covering the tea gardens of Darjeeling and the vibrant capital of Sikkim.',
    longDescription: 'Traveling from Darjeeling to Gangtok offers a scenic journey through the rolling hills, winding mountain roads, and charming towns of the Eastern Himalayas. Whether you\'re heading to Gangtok for its vibrant culture or returning to Darjeeling for its colonial charm, our Darjeeling and Gangtok taxi service ensures a smooth, comfortable, and hassle-free ride. Covering a distance of approximately 100 kilometers in about 4–5 hours, the route takes you through picturesque landscapes, tea gardens, and views of the Teesta River. With professional drivers, well-maintained vehicles, and flexible booking options, we make your intercity travel between Sikkim and West Bengal easy and enjoyable. Book your taxi today and experience the beauty of the Himalayas at your own pace.',
    highlights: ['Tiger Hill Sunrise', 'Tsomgo Lake Excursion', 'Darjeeling Himalayan Railway'],
    itinerary: [
      {
        day: 1,
        title: 'Bagdogra/NJP –Darjeeling 93 kms 3 hours approx.',
        description: 'Assistance at the airport/station on arrival and drive to Darjeeling. DARJEELING: Standing high in the Himalayas at an altitude of 2134m, ‘Dorje Ling’, or place of the Thunderbolt, offers breathtaking views of snow-capped mountain peaks, with the Kanchendzonga rising higher than all the others. Often referred to as the “Queen of the Hills”, it remains just as alluring with its tiny waterfalls, little villages and a narrow gauge railway track. Surrounded by World Famous Tea Gardens and snow capped mountains, Darjeeling remains one of the most exotic destinations. Graeme Westlake in his book ‘An introduction to hill stations on India’ refers to Darjeeling as having “A view Scarcely Unrivalled on Earth”. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Darjeeling',
        description: 'Early morning visit Tiger Hill to see a beautiful sunrise and HimalayanRange like Kanchandzonga, Mount Everest etc. One can see the horizon changing colors just before sunrise and then the entire Himalayan range turn golden. It is truly a majestic sight and Ghoom Monastery which is oldest Monastery in the area which was built in 1875 and one can see the image of Mythey Buddha 15ft. height on the way back from Tiger Hill. Breakfast at the hotel and proceed for city tour visiting Himalayan Mountaineering Institute(closed on Thursday) which was started by Tenzing Norgay after he climbed Mt. Everest, Zoological Park(closed on Thursday), Tibetan Refugee Centre(closed on Sunday), Tenzing Rock, Gombu Rock and Tea Estate(from outside). Overnight at hotel.'
      },
      {
        day: 3,
        title: 'Darjeeling – Gangtok 98 kms 4 hours approx.',
        description: 'Breakfast at the hotel and drive to Gangtok GANGTOK: At an altitude of 1750m, Gangtok became the state capital in the mid 19th century and has undergone rapid development since then.The downtown area is dominated by huge government buildings decorated with traditional Buddhist symbols. Gangtok is also a resting ground for people traveling to North Sikkim. Surrounded by Monasteries and Orchids, Gangtok is truly a travellers delight. Overnight at hotel.'
      },
      {
        day: 4,
        title: 'Gangtok',
        description: 'Breakfast at the hotel and full day excursion to Changu Lake which is 35 Kms from Gangtok at an altitude of 12,400 feet. The lake derives its waters from melting snows off the surrounding mountains Legends say that lamas could forecast the future by studying the color of the lake’s waters. Also visit Baba Mandir Overnight at hotel.'
      },
      {
        day: 5,
        title: 'Gangtok – Bagdogra/NJP 125 kms 4 hours approx.',
        description: 'Breakfast at the hotel and drive to Bagdogra/NJP in time for flight/train to onward destination.'
      }
    ],
    category: 'Sikkim'
  },
  {
    id: 'darjeeling-03nights',
    title: 'Darjeeling 03Nights',
    duration: '03 Nights / 04 Days',
    location: 'Darjeeling',
    image: '/images/dest_darjeeling.png',
    description: 'Immerse yourself in the Queen of the Hills with this dedicated Darjeeling tour.',
    longDescription: 'Darjeeling is a well known tourist destination, settled at an altitude of 6,710 ft on the eastern Himalayan Hill of India in the state of West Bengal. It is famous in the world for its unique climate condition, charming flavor of world’s best tea leaf producing and eye soothing green valleys; Majestic Snow clad Mountains and an impression of British colonial past with color full life style and smiling hospitality of local peoples.',
    highlights: ['Tiger Hill', 'Batasia Loop', 'Tea Estate Visit'],
    itinerary: [
      {
        day: 1,
        title: 'Welcome at Darjeeling',
        description: 'Welcome on arrival at New Jalpaiguri Rly Station / Bagdogra Airport & transfer to Darjeeling at an altitude of 6700ft (75km, approx 3hrs hill Drive) via the pretty Hill Station Kurseong. Take a tea break at Kurseong and proceed through Hill cart road playing hide & seek along with very nostalgic Darjeeling Himalayan Railways. The narrow gauge (2ft width) “Toy train” track, passing over the station’s like Tung, Sonada and Ghoom and reach at one of the most magnificent hill resorts in the world, check in at hotel, Evening free for enjoy walking tour or pony ride at ‘Mall’ area or just see the color full lifestyle of local hill people’s in the mall area, Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Full Day enjoy in Darjeeling',
        description: 'Be ready early morning, at 04.00A.M you will be pick up for visit Tiger Hill (24km hill drive) at an altitude of 8500ft for spectacular view of color full sunrise over Mt. Khangchendzonga, on way back visit Ghoom Monastery, Batasia Loop . After breakfast visit Himalayan Mountaineering Institute, Padwaja Naidu Zoological Park (both are closed on Thursday) Tenzing Rock, Ropeway view point (Ropeway ride on own cost) Tibetans Refuge handicraft Centre (closed on Sunday), Happy valley Tea Garden (outer view), Lloyd Botanical garden, Peace Pagoda & back to hotel.'
      },
      {
        day: 3,
        title: 'Day Excursion to Mirik',
        description: 'After breakfast go for a excursion trip to Mirik (40km hill drive) a picturesque place, nestled in Pine and Conifer forested hills at an altitude of 5800ft, it is famous for its Sumendu Lake; known as ‘Mirik Lake’ surrounded by orange orchards, cardamom plantations and tea estates .one can enjoy boating at lake. On return take a break at Indo- Nepal Border ‘Pashupati’ take a walk at in side of neighbor country Nepal and back to Darjeeling. Stay in Darjeeling'
      },
      {
        day: 4,
        title: 'Back to Home',
        description: 'Morning free for packing, after breakfast transfer to New Jalpaiguri Rly Station or Bagdogra Airport for your return journey'
      }
    ],
    category: 'Darjeeling'
  },
  {
    id: 'welcome-darjeeling',
    title: 'Welcome at Darjeeling',
    duration: '03 Nights / 04 Days',
    location: 'Darjeeling',
    image: '/images/pkg_darjeeling.png',
    description: 'A warm introduction to the heritage and natural beauty of Darjeeling.',
    longDescription: 'Darjeeling is a well known tourist destination, settled at an altitude of 6,710 ft on the eastern Himalayan Hill of India in the state of West Bengal. It is famous in the world for its unique climate condition, charming flavor of world’s best tea leaf producing and eye soothing green valleys; Majestic Snow clad Mountains and an impression of British colonial past with color full life style and smiling hospitality of local peoples.\n\nGangtok the capital city of Sikkim state in North Eastern Himalayan part of India settled at an altitude of 5600ft. The name GANGTOK means ``place on the hilltop" in local Bhutia language. The area of city Started from Ranipool at bottom up to the former Royal palace on a ridge top approx 15km area, Gangtok is clean and pollution free hill station with mix of traditional and modern hospitality and cosmopolitan outlook.',
    highlights: ['Peace Pagoda', 'Himalayan Mountaineering Institute', 'Local Markets'],
    itinerary: [
      {
        day: 1,
        title: 'Welcome at Darjeeling',
        description: 'Welcome on arrival at New Jalpaiguri Rly Station / Bagdogra Airport & transfer to Darjeeling at an altitude of 6700ft (75km, approx 3hrs hill Drive) via the pretty Hill Station Kurseong. Take a tea break at Kurseong and proceed through Hill cart road playing hide & seek along with very nostalgic Darjeeling Himalayan Railways. The narrow gauge (2ft width) “Toy train” track, passing over the station’s like Tung, Sonada and Ghoom and reach at one of the most magnificent hill resorts in the world, check in at hotel, Evening free for enjoy walking tour or pony ride at ‘Mall’ area or just see the color full lifestyle of local hill people’s in the mall area, Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Visit in Darjeeling & Drive to Gangtok',
        description: 'Be ready early morning, at 04.00A.M you will be pick up for visit Tiger Hill (24km hill drive) at an altitude of 8500ft for spectacular view of color full sunrise over Mt. Khangchendzonga, on way back visit Ghoom Monastery, Batasia Loop . After breakfast visit Himalayan Mountaineering Institute, ,Padwaja Naidu Zoological Park (both are closed on Thursday) Tenzing Rock subsequent transfer to Gangtok via Peshok road (98km approx 3.30hrs hill drive) on arrival at Gangtok check-in at hotel & free for relax.'
      },
      {
        day: 3,
        title: 'Day Excursion to Tsomgo Lake & Baba Mandir',
        description: 'After breakfast around 9.00A.M start for day excursion trip to Tsomgo Lake (45 km hill drive) at an altitude of 12,400ft, the lake is almost 01km long and 15 meters depth. The lake is considered sacred by the local people, you can take photograph at the backdrop of lake also can enjoy a ride on the back of Yak, next go to Tukla at a distance of 18 Km from the Lake for visit Baba Mandir (the shrine in memory of disappeared Indian army personal Baba Harbhajan Singh) and back to Gangtok. Evening free over night at hotel'
      },
      {
        day: 4,
        title: 'Back to Home',
        description: 'Morning free for packing after breakfast transfer to New Jalpaiguri Rly Station or Bagdogra Airport (135km, approx 4.30hrs hill drive)'
      }
    ],
    category: 'Darjeeling'
  }
];
