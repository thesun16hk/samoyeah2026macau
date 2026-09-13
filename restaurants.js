// ============================================================
// 🎂 小琪 2026 生日 - 薩摩耶覓食地圖 ☃️📍
// 你日後主要改呢個檔案
// ============================================================
//
// 最常改：
//   name          地點名
//   category      分類
//   emoji         圖示
//   address       地址
//   mapsUrl       Google Maps link
//   openRiceUrl   OpenRice 店舖頁
//
// lat / lng 可選：
//   - 有準確座標就填，地圖會直接出 pin，最快。
//   - 冇填就會用 Google Geocoding 按 address / geocodeQuery 搵位置。
//
// 每個 id 必須唔同。
// ============================================================

const restaurants = [

  // ==========================================================
  // 🍗 嚤囉雞飯
  // ==========================================================

  {
    id: "choi-heung-yuen",
    name: "彩香園",
    category: "嚤囉雞飯",
    emoji: "🍗",

    address: "澳門關閘馬路133號海南花園第二座地下",
    geocodeQuery: "彩香園咖啡美食 澳門 關閘馬路133號 海南花園第二座",

    mapsUrl: "https://maps.app.goo.gl/6k4FoaXddBvU48FL7?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-%E5%BD%A9%E9%A6%99%E5%9C%92%E5%92%96%E5%95%A1%E7%BE%8E%E9%A3%9F-%E9%97%9C%E9%96%98-%E5%8F%B0%E5%B1%B1-%E6%B8%AF%E5%BC%8F-r462845",

    lat: 22.211259,
    lng: 113.553760
  },


  // ==========================================================
  // 🍜 咖哩雞米線
  // ==========================================================

  {
    id: "kam-lei-ouvidor",
    name: "金利食店（雅廉訪）",
    category: "咖哩雞米線",
    emoji: "🍜",

    address: "澳門雅廉訪大馬路85號C",
    geocodeQuery: "金利食店 雅廉訪 澳門 雅廉訪大馬路85號C",

    mapsUrl: "https://maps.app.goo.gl/EZ1TyVfdFQ9eJbDV7?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-%E9%87%91%E5%88%A9%E9%A3%9F%E5%BA%97-%E6%96%B0%E6%A9%8B-%E4%B8%89%E7%9B%9E%E7%87%88-%E7%99%BD%E9%B4%BF%E5%B7%A2-%E6%B8%AF%E5%BC%8F-%E7%B2%89%E9%BA%B5-%E7%B1%B3%E7%B7%9A-r32447",

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

    // OpenRice 暫時未有可核實嘅雀仔園獨立店舖頁，
    // 所以開 OpenRice 搜尋結果，避免錯誤連去雅廉訪分店。
    openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=%E9%87%91%E5%88%A9%E9%A3%9F%E5%BA%97%20%E9%9B%80%E4%BB%94%E5%9C%92",

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

    mapsUrl: "https://maps.app.goo.gl/geCtR24DiC4S6jAUA?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-%E9%87%91%E5%9F%8E%E9%A3%9F%E5%BA%97-%E6%96%B0%E6%A9%8B-%E4%B8%89%E7%9B%9E%E7%87%88-%E7%99%BD%E9%B4%BF%E5%B7%A2-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E7%B2%89%E9%BA%B5-%E7%B1%B3%E7%B7%9A-r536557"
  },


  // ==========================================================
  // 🥖 豬扒包
  // ==========================================================

  {
    id: "sei-kee-ruins",
    name: "世記咖啡（大三巴）",
    category: "豬扒包",
    emoji: "🥖",

    address: "澳門乾草圍15號",
    geocodeQuery: "世記咖啡 大三巴店 澳門 乾草圍15號",

    mapsUrl: "https://maps.app.goo.gl/rjg7rPtCftb8dfmp7?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-%E4%B8%96%E8%A8%98%E5%92%96%E5%95%A1-%E6%96%B0%E9%A6%AC%E8%B7%AF-%E6%B8%AF%E5%BC%8F-%E9%BA%B5%E5%8C%85%E5%BA%97-r100528",

    lat: 22.195109,
    lng: 113.540480
  },

  {
    id: "sei-kee-nam-van",
    name: "世記咖啡（南灣）",
    category: "豬扒包",
    emoji: "🥖",

    address: "澳門南灣湖景大馬路744F號湖景豪庭地下E號舖",
    geocodeQuery: "世記咖啡快餐 南灣 澳門 南灣湖景大馬路744F號 湖景豪庭",

    mapsUrl: "https://maps.app.goo.gl/g8rUpH7K8NztgZiE9?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-%E4%B8%96%E8%A8%98%E5%92%96%E5%95%A1%E5%BF%AB%E9%A4%90-%E5%8D%97%E7%81%A3-%E6%B8%AF%E5%BC%8F-r620816",

    lat: 22.189948,
    lng: 113.539354
  },

  {
    id: "sei-kee-taipa",
    name: "世記咖啡（氹仔）",
    category: "豬扒包",
    emoji: "🥖",

    address: "澳門柯打蘇沙街37號地下至2樓",
    geocodeQuery: "世記咖啡 氹仔內用店 澳門 柯打蘇沙街37號",

    mapsUrl: "https://maps.app.goo.gl/ZCWJi5jmVXFAuSPi8?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-%E4%B8%96%E8%A8%98%E5%92%96%E5%95%A1-%E6%B0%B9%E4%BB%94%E8%88%8A%E5%9F%8E%E5%8D%80-%E6%B8%AF%E5%BC%8F-r791838",

    lat: 22.153620,
    lng: 113.557450
  },


  // ==========================================================
  // 🍌 香蕉糕
  // ==========================================================

  {
    id: "leung-tai",
    name: "梁太小食檔",
    category: "香蕉糕",
    emoji: "🍌",

    address: "澳門司打口河邊新街（陳道巷口）",
    geocodeQuery: "梁太小食檔 澳門 河邊新街 陳道巷",

    mapsUrl: "https://maps.app.goo.gl/JpMamviMCy52zqiQ8?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-%E6%A2%81%E5%A4%AA%E5%B0%8F%E9%A3%9F%E6%AA%94-%E4%B8%8B%E7%92%B0-%E6%B8%AF%E5%BC%8F-%E7%94%9C%E5%93%81-%E7%B3%96%E6%B0%B4-r477322",

    lat: 22.192820,
    lng: 113.535050
  },


  // ==========================================================
  // 🍦 牛奶雪糕
  // ==========================================================

  {
    id: "cotiz-praia-grande",
    name: "COTIZ",
    category: "牛奶雪糕",
    emoji: "🍦",

    address: "澳門南灣大馬路343號",
    geocodeQuery: "The Cotiz 澳門 南灣大馬路343號",

    mapsUrl: "https://maps.app.goo.gl/dnEuCo3jQ4b1HVg39?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-the-cotiz-%E5%8D%97%E7%81%A3-%E8%A5%BF%E5%BC%8F-%E8%A5%BF%E5%BC%8F%E7%B3%95%E9%BB%9E-r716897",

    lat: 22.191167,
    lng: 113.539222
  },


  // ==========================================================
  // 🥧 葡撻
  // ==========================================================

  {
    id: "porto-egg-tarts",
    name: "波爾圖葡撻",
    category: "葡撻",
    emoji: "🥧",

    address: "澳門關前正街44-A號金勝大廈地下A1號舖",
    geocodeQuery: "波爾圖葡撻 澳門 關前正街44-A號",

    mapsUrl: "https://maps.app.goo.gl/gvF97SUq4uWP69meA?g_st=ic",

    openRiceUrl: "https://www.openrice.com/zh/macau/r-%E6%B3%A2%E7%88%BE%E5%9C%96%E8%91%A1%E6%92%BB-%E6%96%B0%E6%A9%8B-%E4%B8%89%E7%9B%9E%E7%87%88-%E7%99%BD%E9%B4%BF%E5%B7%A2-%E8%91%A1%E5%9C%8B%E8%8F%9C-%E8%A5%BF%E5%BC%8F%E7%B3%95%E9%BB%9E-r896289",

    lat: 22.196169,
    lng: 113.539877
  },

  // ===== 安德魯 Lord Stow's：7 間 =====

{
  id: "lord-stows-original",
  name: "安德魯餅店（路環原店）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門路環市區戴紳禮街1號地下",
  geocodeQuery: "安德魯餅店 路環原店 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=安德魯餅店+路環原店+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=安德魯餅店+路環"
},

{
  id: "lord-stows-cafe-coloane",
  name: "安德魯咖啡店（路環）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門路環市區屠場前地9號地下",
  geocodeQuery: "安德魯咖啡店 路環 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=安德魯咖啡店+路環+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=安德魯咖啡店"
},

{
  id: "lord-stows-garden-cafe",
  name: "安德魯花園咖啡店（路環）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門路環屠場前地21C康靈閣地下",
  geocodeQuery: "安德魯花園咖啡店 路環 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=安德魯花園咖啡店+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=安德魯花園咖啡店"
},

{
  id: "lord-stows-express-coloane",
  name: "安德魯蛋撻外賣專門店（路環）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門路環市區屠場前地康靈閣17及19號地下",
  geocodeQuery: "安德魯蛋撻外賣專門店 路環 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=安德魯蛋撻外賣專門店+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=安德魯蛋撻外賣專門店"
},

{
  id: "lord-stows-venetian",
  name: "安德魯餅店及咖啡店（威尼斯人）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門威尼斯人購物中心臉譜街870及308號舖",
  geocodeQuery: "安德魯餅店 威尼斯人 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=安德魯餅店+威尼斯人+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=安德魯餅店+威尼斯人"
},

{
  id: "lord-stows-taipa",
  name: "安德魯餅店（氹仔官也街）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門氹仔官也街9號栢鴻大廈地下E座",
  geocodeQuery: "安德魯餅店 官也街 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=安德魯餅店+官也街+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=安德魯餅店+官也街"
},

{
  id: "lord-stows-londoner",
  name: "安德魯餅店及咖啡店（倫敦人）",
  category: "葡撻",
  emoji: "🥧",
  address: "路氹連貫公路澳門倫敦人購物中心2樓2113舖",
  geocodeQuery: "安德魯餅店 倫敦人 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=安德魯餅店+倫敦人+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=安德魯餅店+倫敦人"
},


// ===== 瑪嘉烈：1 間 =====

{
  id: "margarets-cafe-e-nata",
  name: "瑪嘉烈蛋撻店",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門馬統領街金利來大廈17B地舖",
  geocodeQuery: "瑪嘉烈蛋撻店 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=瑪嘉烈蛋撻店+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=瑪嘉烈蛋撻店"
},


// ===== 占西餅店：1 間 =====

{
  id: "jim-sai-bakery",
  name: "占西餅店",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門風順堂街31號",
  geocodeQuery: "占西餅店 澳門 風順堂街",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=占西餅店+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=占西餅店"
},


// ===== BAMU 八目烘焙：5 間 =====

{
  id: "bamu-holland-garden",
  name: "BAMU 八目烘焙（荷蘭園）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門沙嘉都喇賈罷麗街16A號寶勝閣地下H",
  geocodeQuery: "BAMU 八目烘焙 荷蘭園 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=BAMU+八目烘焙+荷蘭園+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=BAMU+八目烘焙+荷蘭園"
},

{
  id: "bamu-rua-da-tercena",
  name: "BAMU 八目烘焙（果欄街總店）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門果欄街25號德富大廈地下B舖",
  geocodeQuery: "BAMU 八目烘焙 果欄街 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=BAMU+八目烘焙+果欄街+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=BAMU+八目烘焙+果欄街"
},

{
  id: "bamu-taipa",
  name: "BAMU 八目烘焙（氹仔）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門氹仔南京街36號曼克頓地下B座",
  geocodeQuery: "BAMU 八目烘焙 氹仔 南京街 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=BAMU+八目烘焙+氹仔+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=BAMU+八目烘焙+氹仔"
},

{
  id: "bamu-st-pauls",
  name: "BAMU 八目烘焙（大三巴）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門大三巴巷1號",
  geocodeQuery: "BAMU 八目烘焙 大三巴 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=BAMU+八目烘焙+大三巴+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=BAMU+八目烘焙+大三巴"
},

{
  id: "bamu-guia",
  name: "BAMU 八目烘焙（東望洋）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門東望洋新街74號明輝大廈地下B座",
  geocodeQuery: "BAMU 八目烘焙 東望洋 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=BAMU+八目烘焙+東望洋+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=BAMU+八目烘焙+東望洋"
},


// ===== Manteigaria 曼撻格利亞：2 間 =====

{
  id: "manteigaria-nam-van",
  name: "曼撻格利亞 Manteigaria（南灣）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門南灣大馬路598號萬勝大廈地下E座",
  geocodeQuery: "Manteigaria Macau 南灣",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Manteigaria+Macau+南灣",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=Manteigaria+Macau+南灣"
},

{
  id: "manteigaria-taipa",
  name: "曼撻格利亞 Manteigaria（氹仔）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門氹仔地堡街22號",
  geocodeQuery: "Manteigaria Macau 氹仔 地堡街22號",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Manteigaria+Macau+氹仔",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=Manteigaria+Macau+氹仔"
},


// ===== Goat Bakers：3 間 =====
// 「蘭王葡撻」係 Goat Bakers 產品，所以唔另外重複加 pin。

{
  id: "goat-bakers-horta-costa",
  name: "Goat Bakers（高士德）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門永聯台52號永聯大廈地下C",
  geocodeQuery: "Goat Bakers 高士德 澳門 永聯台",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Goat+Bakers+高士德+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=Goat+Bakers+高士德"
},

{
  id: "goat-bakers-taipa",
  name: "Goat Bakers（氹仔）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門氹仔巴波沙總督街80號地下C",
  geocodeQuery: "Goat Bakers 氹仔 巴波沙總督街80號",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Goat+Bakers+氹仔+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=Goat+Bakers+氹仔"
},

{
  id: "goat-bakers-nam-van",
  name: "Goat Bakers（南灣）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門商業大馬路185號W舖",
  geocodeQuery: "Goat Bakers 南灣 澳門 商業大馬路185號",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Goat+Bakers+南灣+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=Goat+Bakers+南灣"
},


// ===== Céleste Artisan 天羽：1 間 =====

{
  id: "celeste-artisan-taipa",
  name: "Céleste Artisan 天羽",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門氹仔飛能便度街21號地下",
  geocodeQuery: "Céleste Artisan 天羽 澳門 氹仔",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Céleste+Artisan+天羽+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=Céleste+Artisan+天羽"
},


// ===== 新好利：1 間 =====

{
  id: "san-hou-lei-taipa",
  name: "新好利咖啡餅店",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門氹仔生央街15A-B號地舖",
  geocodeQuery: "新好利咖啡餅店 澳門 氹仔",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=新好利咖啡餅店+澳門+氹仔",
  openRiceUrl: "https://www.openrice.com/en/macau/r-estabelecimento-de-comidas-san-hou-lei-vila-de-taipa-portuguese-r24350"
},


// ===== 鑽葡咖啡美食：3 間 =====

{
  id: "chuen-pou-ha-wan",
  name: "鑽葡咖啡美食（下環）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門下環街60號地下及閣樓",
  geocodeQuery: "鑽葡咖啡美食 下環 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=鑽葡咖啡美食+下環+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=鑽葡咖啡美食+下環"
},

{
  id: "chuen-pou-polida",
  name: "鑽葡咖啡美食（保利達）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門黑沙環中街155號保利達花園地下BN舖",
  geocodeQuery: "鑽葡咖啡美食 保利達 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=鑽葡咖啡美食+保利達+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=鑽葡咖啡美食+保利達"
},

{
  id: "chuen-pou-guanqian",
  name: "鑽葡咖啡美食（關前街）",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門關前後街49A號",
  geocodeQuery: "鑽葡咖啡美食 關前街 澳門",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=鑽葡咖啡美食+關前街+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=鑽葡咖啡美食+關前街"
},


// ===== 一見葡撻：1 間 =====

{
  id: "yat-kin-egg-tart",
  name: "一見葡撻",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門冼星海大馬路245號地下T舖",
  geocodeQuery: "一見葡撻 澳門 冼星海大馬路245號",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=一見葡撻+澳門",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=一見葡撻"
},


// ===== 葡啡：1 間 =====

{
  id: "portuguese-bakery-po-cafe",
  name: "葡啡",
  category: "葡撻",
  emoji: "🥧",
  address: "澳門下環鹽里22號地舖",
  geocodeQuery: "葡啡 澳門 鹽里",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=葡啡+澳門+鹽里",
  openRiceUrl: "https://www.openrice.com/zh/macau/restaurants?whatwhere=葡啡+澳門"
},

  // ==========================================================
  // 🧋 免費珍奶
  // ==========================================================

  {
    id: "mgm-macau",
    name: "澳門美高梅娛樂場",
    category: "免費珍奶",
    emoji: "🧋",

    address: "澳門外港新填海區孫逸仙大馬路1101號 澳門美高梅",
    geocodeQuery: "MGM Macau Casino 澳門美高梅娛樂場",

    mapsUrl: "https://www.google.com/maps/search/?api=1&query=MGM%20Macau%20Casino&query_place_id=ChIJfQD_Aup6ATQRQF5o0Hl6UGM",

    lat: 22.185810,
    lng: 113.547880
  }

];
