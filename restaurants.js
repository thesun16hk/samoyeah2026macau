// ============================================================
// 🎂小琪 2026 生日 - 薩摩耶覓食地圖☃️📍
// restaurants.js
// ============================================================

function buildRestaurant({
  id,
  name,
  category,
  emoji,
  address,
  geocodeQuery,
  openRiceQuery,
  lat,
  lng
}) {
  const query = geocodeQuery || `${name} 澳門 ${address || ""}`;

  const item = {
    id,
    name,
    category,
    emoji,
    address,
    geocodeQuery: query,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
    openRiceUrl: `https://www.openrice.com/zh/macau/restaurants?whatwhere=${encodeURIComponent(openRiceQuery || name)}`
  };

  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    item.lat = lat;
    item.lng = lng;
  }

  return item;
}

const restaurants = [

  // ========================================================
  // 🍗 嚤囉雞飯
  // ========================================================

  buildRestaurant({
    id: "choi-heung-yuen",
    name: "彩香園",
    category: "嚤囉雞飯",
    emoji: "🍗",
    address: "澳門關閘馬路133號海南花園第二座地下",
    geocodeQuery: "彩香園咖啡美食 澳門 關閘馬路133號 海南花園第二座",
    lat: 22.211259,
    lng: 113.553760
  }),

  buildRestaurant({
    id: "many-cafe",
    name: "滿來雅敍",
    category: "嚤囉雞飯",
    emoji: "🍗",
    address: "澳門俾利喇街73A地下",
    geocodeQuery: "滿來雅敍 Many Café 澳門 俾利喇街73A"
  }),

  buildRestaurant({
    id: "san-hung-coffee-nape",
    name: "新鴻咖啡（皇朝）",
    category: "嚤囉雞飯",
    emoji: "🍗",
    address: "澳門宋玉生廣場倫敦街17號東南亞商業中心地下J舖",
    geocodeQuery: "新鴻咖啡 皇朝 澳門 倫敦街17號 東南亞商業中心"
  }),

  buildRestaurant({
    id: "san-hung-coffee-ha-wan",
    name: "新鴻咖啡（下環）",
    category: "嚤囉雞飯",
    emoji: "🍗",
    address: "澳門水手斜巷7A號威福大廈地下A座",
    geocodeQuery: "新鴻咖啡 下環 澳門 水手斜巷7A號"
  }),

  buildRestaurant({
    id: "san-hung-coffee-hortelaos",
    name: "新鴻咖啡（菜園路）",
    category: "嚤囉雞飯",
    emoji: "🍗",
    address: "澳門菜園路583號友利花園第一座地下A座",
    geocodeQuery: "新鴻咖啡 菜園路583號 澳門"
  }),


  // ========================================================
  // 🍜 咖哩雞米線
  // ========================================================

  buildRestaurant({
    id: "kam-lei-ouvidor",
    name: "金利食店（雅廉訪）",
    category: "咖哩雞米線",
    emoji: "🍜",
    address: "澳門雅廉訪大馬路85號C",
    geocodeQuery: "金利食店 雅廉訪 澳門 雅廉訪大馬路85號C"
  }),

  buildRestaurant({
    id: "kam-lei-birds-yard",
    name: "金利食店（雀仔園）",
    category: "咖哩雞米線",
    emoji: "🍜",
    address: "澳門馬大臣街17B號益豐大廈地下A1座",
    geocodeQuery: "金利食店 雀仔園 澳門 馬大臣街17B號 益豐大廈"
  }),

  buildRestaurant({
    id: "kam-seng-two",
    name: "金城二食店",
    category: "咖哩雞米線",
    emoji: "🍜",
    address: "澳門哪咤廟斜巷18號",
    geocodeQuery: "金城二食店 澳門 哪咤廟斜巷18號"
  }),


  // ========================================================
  // 🥖 豬扒包
  // ========================================================

  buildRestaurant({
    id: "coffee-lo-iohon",
    name: "咖啡佬小坊",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門祐漢小販大樓熟食中心2樓2-05檔",
    geocodeQuery: "咖啡佬小坊 澳門 祐漢小販大樓 2-05"
  }),

  buildRestaurant({
    id: "san-hung-fat-costa",
    name: "新鴻發咖啡美食（賈伯樂）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門賈伯樂提督街55A號地舖",
    geocodeQuery: "新鴻發咖啡美食 澳門 賈伯樂提督街55A號"
  }),

  buildRestaurant({
    id: "san-hung-fat-lin-sing",
    name: "新鴻發美食（連勝）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門連勝馬路45號地下",
    geocodeQuery: "新鴻發美食 澳門 連勝馬路45號"
  }),

  buildRestaurant({
    id: "san-hung-fat-galhardo",
    name: "新鴻發美食（嘉野度）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門嘉野度將軍街13號地下",
    geocodeQuery: "新鴻發美食 澳門 嘉野度將軍街13號"
  }),

  buildRestaurant({
    id: "san-hung-fat-fai-chi-kei",
    name: "新鴻發美食（寶翠）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門船澳街192-196號寶翠花園地下AA-AB舖",
    geocodeQuery: "新鴻發美食 寶翠 澳門 船澳街196號"
  }),

  buildRestaurant({
    id: "wai-kei-tong-wa",
    name: "偉記豬仔飽（東華）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門東北大馬路170號東華新邨第13座A舖",
    geocodeQuery: "偉記豬仔飽 東華 澳門 東北大馬路170號"
  }),

  buildRestaurant({
    id: "wai-kei-la-marina",
    name: "偉記豬仔飽茶餐廳（海上居）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門勞動節街455號海上居地下Z舖",
    geocodeQuery: "偉記豬仔飽 海上居 澳門 勞動節街455號"
  }),

  buildRestaurant({
    id: "wai-kei-taipa",
    name: "偉記豬仔飽（氹仔）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門氹仔布拉干薩街273號",
    geocodeQuery: "偉記豬仔飽 氹仔 澳門 布拉干薩街273號"
  }),

  buildRestaurant({
    id: "hong-heng-tai-lin-sing",
    name: "雄興泰咖啡室（連勝）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門連勝馬路151-B號地下及閣樓A座",
    geocodeQuery: "雄興泰咖啡室 澳門 連勝馬路151B號"
  }),

  buildRestaurant({
    id: "hong-heng-tai-nam-van",
    name: "雄興泰咖啡室（南灣）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門南灣大馬路719號永利大廈地下C座",
    geocodeQuery: "雄興泰咖啡室 南灣 澳門 南灣大馬路719號"
  }),

  buildRestaurant({
    id: "lok-kei-coffee",
    name: "樂記咖啡",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門提督馬路88號地下",
    geocodeQuery: "樂記咖啡 澳門 提督馬路88號"
  }),

  buildRestaurant({
    id: "siu-je-bbq-ha-wan",
    name: "下環笑姐燒烤",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門下環街市熟食中心3-11檔",
    geocodeQuery: "笑姐燒烤 澳門 下環街市 3-11"
  }),

  buildRestaurant({
    id: "chou-kei-fai-chi-kei",
    name: "青洲灶記咖啡（筷子基）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門和樂大馬路宏建大廈一帶",
    geocodeQuery: "青洲灶記咖啡 筷子基 澳門 和樂大馬路"
  }),

  buildRestaurant({
    id: "chou-kei-tai-heng",
    name: "青洲灶記咖啡（大興街）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門大興街75號",
    geocodeQuery: "青洲灶記咖啡 大興街75號 澳門"
  }),

  buildRestaurant({
    id: "sei-kee-original",
    name: "世記咖啡（崗頂總店）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門新馬路崗頂吉祥里地下",
    geocodeQuery: "世記咖啡 崗頂總店 澳門 吉祥里"
  }),

  buildRestaurant({
    id: "sei-kee-ruins",
    name: "世記咖啡（大三巴）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門乾草圍15號",
    geocodeQuery: "世記咖啡 大三巴 澳門 乾草圍15號"
  }),

  buildRestaurant({
    id: "sei-kee-nam-van",
    name: "世記咖啡快餐（南灣）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門南灣湖景大馬路",
    geocodeQuery: "世記咖啡快餐 南灣 澳門 南灣湖景大馬路"
  }),

  buildRestaurant({
    id: "sei-kee-taipa-dinein",
    name: "世記咖啡（氹仔堂食店）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門氹仔柯打蘇沙街37號",
    geocodeQuery: "世記咖啡 氹仔堂食店 澳門 柯打蘇沙街37號"
  }),

  buildRestaurant({
    id: "sei-kee-taipa-takeaway",
    name: "世記咖啡（氹仔外賣店）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門氹仔消防局前地1號",
    geocodeQuery: "世記咖啡 氹仔外賣店 澳門 消防局前地1號"
  }),


  // ========================================================
  // 🍌 香蕉糕
  // ========================================================

  buildRestaurant({
    id: "leung-tai",
    name: "梁太小食店",
    category: "香蕉糕",
    emoji: "🍌",
    address: "澳門陳樂巷",
    geocodeQuery: "梁太小食店 澳門 陳樂巷"
  }),


  // ========================================================
  // 🍦 牛奶雪糕
  // ========================================================

  buildRestaurant({
    id: "cotiz-praia-grande",
    name: "COTIZ",
    category: "牛奶雪糕",
    emoji: "🍦",
    address: "澳門南灣大馬路343號",
    geocodeQuery: "COTIZ 澳門 南灣大馬路343號"
  }),


  // ========================================================
  // 🥧 葡撻
  // ========================================================

  buildRestaurant({
    id: "porto-egg-tarts",
    name: "波爾圖葡撻",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門關前正街44-A號金勝大廈地下A1號舖",
    geocodeQuery: "波爾圖葡撻 澳門 關前正街44-A號",
    lat: 22.196169,
    lng: 113.539877
  }),

  buildRestaurant({
    id: "lord-stows-original",
    name: "安德魯餅店（路環原店）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門路環市區戴紳禮街1號地下",
    geocodeQuery: "安德魯餅店 路環原店 澳門"
  }),

  buildRestaurant({
    id: "lord-stows-cafe-coloane",
    name: "安德魯咖啡店（路環）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門路環市區屠場前地9號地下",
    geocodeQuery: "安德魯咖啡店 路環 澳門"
  }),

  buildRestaurant({
    id: "lord-stows-garden-cafe",
    name: "安德魯花園咖啡店（路環）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門路環屠場前地21C康靈閣地下",
    geocodeQuery: "安德魯花園咖啡店 路環 澳門"
  }),

  buildRestaurant({
    id: "lord-stows-express-coloane",
    name: "安德魯蛋撻外賣專門店（路環）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門路環市區屠場前地康靈閣17及19號地下",
    geocodeQuery: "安德魯蛋撻外賣專門店 路環 澳門"
  }),

  buildRestaurant({
    id: "lord-stows-venetian",
    name: "安德魯餅店及咖啡店（威尼斯人）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門威尼斯人購物中心臉譜街870及308號舖",
    geocodeQuery: "安德魯餅店 威尼斯人 澳門"
  }),

  buildRestaurant({
    id: "lord-stows-taipa",
    name: "安德魯餅店（氹仔官也街）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門氹仔官也街9號栢鴻大廈地下E座",
    geocodeQuery: "安德魯餅店 官也街 澳門"
  }),

  buildRestaurant({
    id: "lord-stows-londoner",
    name: "安德魯餅店及咖啡店（倫敦人）",
    category: "葡撻",
    emoji: "🥧",
    address: "路氹連貫公路澳門倫敦人購物中心2樓2113舖",
    geocodeQuery: "安德魯餅店 倫敦人 澳門"
  }),

  buildRestaurant({
    id: "margarets-cafe-e-nata",
    name: "瑪嘉烈蛋撻店",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門馬統領街金利來大廈17B地舖",
    geocodeQuery: "瑪嘉烈蛋撻店 澳門"
  }),

  buildRestaurant({
    id: "jim-sai-bakery",
    name: "占西餅店",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門風順堂街31號",
    geocodeQuery: "占西餅店 澳門 風順堂街31號"
  }),

  buildRestaurant({
    id: "bamu-holland-garden",
    name: "BAMU 八目烘焙（荷蘭園）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門沙嘉都喇賈罷麗街16A號寶勝閣地下H",
    geocodeQuery: "BAMU 八目烘焙 荷蘭園 澳門"
  }),

  buildRestaurant({
    id: "bamu-rua-da-tercena",
    name: "BAMU 八目烘焙（果欄街總店）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門果欄街25號德富大廈地下B舖",
    geocodeQuery: "BAMU 八目烘焙 果欄街 澳門"
  }),

  buildRestaurant({
    id: "bamu-taipa",
    name: "BAMU 八目烘焙（氹仔）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門氹仔南京街36號曼克頓地下B座",
    geocodeQuery: "BAMU 八目烘焙 氹仔 南京街 澳門"
  }),

  buildRestaurant({
    id: "bamu-st-pauls",
    name: "BAMU 八目烘焙（大三巴）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門大三巴巷1號",
    geocodeQuery: "BAMU 八目烘焙 大三巴 澳門"
  }),

  buildRestaurant({
    id: "bamu-guia",
    name: "BAMU 八目烘焙（東望洋）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門東望洋新街74號明輝大廈地下B座",
    geocodeQuery: "BAMU 八目烘焙 東望洋 澳門"
  }),

  buildRestaurant({
    id: "manteigaria-nam-van",
    name: "曼撻格利亞 Manteigaria（南灣）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門南灣大馬路598號萬勝大廈地下E座",
    geocodeQuery: "Manteigaria Macau 南灣"
  }),

  buildRestaurant({
    id: "manteigaria-taipa",
    name: "曼撻格利亞 Manteigaria（氹仔）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門氹仔地堡街22號",
    geocodeQuery: "Manteigaria Macau 氹仔 地堡街22號"
  }),

  buildRestaurant({
    id: "goat-bakers-horta-costa",
    name: "Goat Bakers（高士德）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門永聯台52號永聯大廈地下C",
    geocodeQuery: "Goat Bakers 高士德 澳門 永聯台52號"
  }),

  buildRestaurant({
    id: "goat-bakers-taipa",
    name: "Goat Bakers（氹仔）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門氹仔巴波沙總督街80號地下C",
    geocodeQuery: "Goat Bakers 氹仔 巴波沙總督街80號"
  }),

  buildRestaurant({
    id: "goat-bakers-nam-van",
    name: "Goat Bakers（南灣）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門商業大馬路185號W舖",
    geocodeQuery: "Goat Bakers 南灣 澳門 商業大馬路185號"
  }),

  buildRestaurant({
    id: "celeste-artisan-taipa",
    name: "Céleste Artisan 天羽",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門氹仔飛能便度街21號地下",
    geocodeQuery: "Céleste Artisan 天羽 澳門 氹仔"
  }),

  buildRestaurant({
    id: "san-hou-lei-taipa",
    name: "新好利咖啡餅店",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門氹仔生央街15A-B號地舖",
    geocodeQuery: "新好利咖啡餅店 澳門 氹仔"
  }),

  buildRestaurant({
    id: "chuen-pou-ha-wan",
    name: "鑽葡咖啡美食（下環）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門下環街60號地下及閣樓",
    geocodeQuery: "鑽葡咖啡美食 下環 澳門"
  }),

  buildRestaurant({
    id: "chuen-pou-polida",
    name: "鑽葡咖啡美食（保利達）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門黑沙環中街155號保利達花園地下BN舖",
    geocodeQuery: "鑽葡咖啡美食 保利達 澳門"
  }),

  buildRestaurant({
    id: "chuen-pou-guanqian",
    name: "鑽葡咖啡美食（關前街）",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門關前後街49A號",
    geocodeQuery: "鑽葡咖啡美食 關前街 澳門"
  }),

  buildRestaurant({
    id: "yat-kin-egg-tart",
    name: "一見葡撻",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門冼星海大馬路245號地下T舖",
    geocodeQuery: "一見葡撻 澳門 冼星海大馬路245號"
  }),

  buildRestaurant({
    id: "portuguese-bakery-po-cafe",
    name: "葡啡",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門下環鹽里22號地舖",
    geocodeQuery: "葡啡 澳門 鹽里"
  }),


  // ========================================================
  // 🧋 免費珍奶
  // ========================================================

  buildRestaurant({
    id: "mgm-macau-free-bubble-tea",
    name: "澳門美高梅 MGM MACAU",
    category: "免費珍奶",
    emoji: "🧋",
    address: "澳門孫逸仙大馬路1101號",
    geocodeQuery: "MGM MACAU 澳門 孫逸仙大馬路1101號"
  }),


  // ========================================================
  // 🍚 乾免牛飯
  // ========================================================

  buildRestaurant({
    id: "macau-boy-cafe",
    name: "馬交仔咖啡室",
    category: "乾免牛飯",
    emoji: "🍚",
    address: "澳門海灣南街151號寶翠花園地下C號舖",
    geocodeQuery: "馬交仔咖啡室 澳門 海灣南街151號"
  }),

  buildRestaurant({
    id: "nga-kai-cha-chaan-teng",
    name: "雅佳茶餐廳",
    category: "乾免牛飯",
    emoji: "🍚",
    address: "澳門渡船街54號地下",
    geocodeQuery: "雅佳茶餐廳 澳門 渡船街54號"
  }),

  buildRestaurant({
    id: "subtropical-cafe",
    name: "亞熱帶咖啡美食",
    category: "乾免牛飯",
    emoji: "🍚",
    address: "澳門友誼大馬路747D號中裕大廈地下E座",
    geocodeQuery: "亞熱帶咖啡美食 澳門 友誼大馬路747D號"
  })
];

// ============================================================
// 新增餐廳範本
// ============================================================
//
// restaurants.push(buildRestaurant({
//   id: "new-shop",
//   name: "新餐廳",
//   category: "新分類",
//   emoji: "🍴",
//   address: "澳門完整地址",
//   geocodeQuery: "新餐廳 澳門 完整地址"
// }));
