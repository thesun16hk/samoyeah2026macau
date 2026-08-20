// ============================================================
// 澳門食嘢 Map — 你日後主要改呢個檔案
// ============================================================
//
// 最常改：
//   name       餐廳名
//   category   分類
//   emoji      圖示
//   address    地址
//   mapsUrl    你原本保存的 Google Maps link
//
// lat / lng 可選：
//   - 有準確座標就填，地圖會直接出 pin，最快。
//   - 冇填就會用 Google Geocoding 按 address / geocodeQuery 搵位置。
//
// 每間 id 必須唔同。
// ============================================================

const restaurants = [

  // 🍗 嚤囉雞飯
  {
    id: "choi-heung-yuen",
    name: "彩香園",
    category: "嚤囉雞飯",
    emoji: "🍗",
    address: "澳門關閘馬路133號海南花園第二座地下",
    geocodeQuery: "彩香園咖啡美食 澳門 關閘馬路133號 海南花園第二座",
    mapsUrl: "https://maps.app.goo.gl/6k4FoaXddBvU48FL7?g_st=ic",
    lat: 22.211259,
    lng: 113.553760
  },

  // 🍜 咖哩雞米線
  {
    id: "kam-lei-ouvidor",
    name: "金利食店（雅廉訪）",
    category: "咖哩雞米線",
    emoji: "🍜",
    address: "澳門雅廉訪大馬路85號C",
    geocodeQuery: "金利食店 雅廉訪 澳門 雅廉訪大馬路85號C",
    mapsUrl: "https://maps.app.goo.gl/EZ1TyVfdFQ9eJbDV7?g_st=ic",
    lat: 22.204566,
lng: 113.546989
  
  },
  {
    id: "kam-lei-birds-yard",
    name: "金利食店（雀仔園）",
    category: "咖哩雞米線",
    emoji: "🍜",
    address: "澳門馬大臣街17B號益豐大廈地下A1座",
    geocodeQuery: "金利食店 雀仔園 澳門 馬大臣街17B號 益豐大廈",
    mapsUrl: "https://maps.app.goo.gl/UedXaxfG8NcXpTwdA?g_st=ic",
    lat: 22.195275,
lng: 113.545371
  },
  {
    id: "kam-seng-two",
    name: "金城二食店（金城食店～分店）",
    category: "咖哩雞米線",
    emoji: "🍜",
    address: "澳門哪咤廟斜巷18號",
    geocodeQuery: "金城二食店 澳門 哪咤廟斜巷18號",
    mapsUrl: "https://maps.app.goo.gl/geCtR24DiC4S6jAUA?g_st=ic"
  },

  // 🥖 豬扒包
  {
    id: "sei-kee-ruins",
    name: "世記咖啡（大三巴）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門乾草圍15號",
    geocodeQuery: "世記咖啡 大三巴店 澳門 乾草圍15號",
    mapsUrl: "https://maps.app.goo.gl/rjg7rPtCftb8dfmp7?g_st=ic",
    lat: 22.195109,
lng: 113.540480
  },
  {
    id: "sei-kee-nam-van",
    name: "世記咖啡（南灣）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門南灣湖景大馬路",
    geocodeQuery: "世記咖啡快餐 南灣店 澳門 南灣湖景大馬路",
    mapsUrl: "https://maps.app.goo.gl/g8rUpH7K8NztgZiE9?g_st=ic",
    lat: 22.189948,
lng: 113.539354
  },
  {
    id: "sei-kee-taipa",
    name: "世記咖啡（氹仔）",
    category: "豬扒包",
    emoji: "🥖",
    address: "澳門柯打蘇沙街37號",
    geocodeQuery: "世記咖啡 氹仔內用店 澳門 柯打蘇沙街37號",
    mapsUrl: "https://maps.app.goo.gl/ZCWJi5jmVXFAuSPi8?g_st=ic",
    lat: 22.153620,
lng: 113.557450
  },

  // 🍌 香蕉糕
  {
    id: "leung-tai",
    name: "梁太小食店",
    category: "香蕉糕",
    emoji: "🍌",
    address: "澳門陳樂巷",
    geocodeQuery: "梁太小食店 澳門 陳樂巷",
    mapsUrl: "https://maps.app.goo.gl/JpMamviMCy52zqiQ8?g_st=ic",
    lat: 22.192820,
lng: 113.535050
  },

  // 🍦 牛奶雪糕
  {
    id: "cotiz-praia-grande",
    name: "COTIZ",
    category: "牛奶雪糕",
    emoji: "🍦",
    address: "澳門南灣大馬路343號",
    geocodeQuery: "COTIZ 澳門 南灣大馬路343號",
    mapsUrl: "https://maps.app.goo.gl/dnEuCo3jQ4b1HVg39?g_st=ic",
    lat: 22.191167,
lng: 113.539222
  },

  // 🥧 葡撻
  {
    id: "porto-egg-tarts",
    name: "波爾圖",
    category: "葡撻",
    emoji: "🥧",
    address: "澳門關前正街44A號",
    geocodeQuery: "波爾圖葡撻 澳門 關前正街44A號",
    mapsUrl: "https://maps.app.goo.gl/gvF97SUq4uWP69meA?g_st=ic",
    lat: 22.196169,
lng: 113.539877
  },
  
  // 🎰 賭場免費珍奶
  {
    id: "mgm-macau",
    name: "澳門美高梅娛樂場",
    category: "賭場免費珍奶",
    emoji: "🎰",
    address: "澳門外港新填海區孫逸仙大馬路1101號 澳門美高梅",
    geocodeQuery: "MGM Macau Casino 澳門美高梅娛樂場",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=MGM%20Macau%20Casino&query_place_id=ChIJfQD_Aup6ATQRQF5o0Hl6UGM",
    lat: 22.185810,
    lng: 113.547880
  }
];


// ============================================================
// 新增餐廳範本
// ============================================================
//
// {
//   id: "new-shop",
//   name: "新餐廳",
//   category: "水蟹粥",
//   emoji: "🦀",
//   address: "澳門完整地址",
//   geocodeQuery: "新餐廳 澳門 完整地址",
//   mapsUrl: "https://maps.app.goo.gl/xxxxx"
// },
