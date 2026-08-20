澳門食嘢 Map — 修改方法
==========================

你日後主要只需要改：
restaurants.js

唔好亂改：
index.html


【改餐廳名】
例如：
name: "COTIZ",

改成：
name: "COTIZ 南灣店",


【改分類】
例如：
category: "豬扒包",

改成：
category: "下午茶",

地圖上面個分類掣會自動跟住變。


【新增一間餐廳】
1. 打開 restaurants.js
2. 複製一段餐廳資料
3. 改：
   - id
   - name
   - category
   - emoji
   - address
   - geocodeQuery
   - mapsUrl
4. 儲存

範例：

{
  id: "new-shop",
  name: "新餐廳",
  category: "水蟹粥",
  emoji: "🦀",
  address: "澳門完整地址",
  geocodeQuery: "新餐廳 澳門 完整地址",
  mapsUrl: "https://maps.app.goo.gl/xxxxx"
},

lat / lng 可以唔填。
第一次開地圖時會嘗試按地址自動搵 pin。


【刪除一間餐廳】
將嗰間由 { 開始到 } 結束嗰整段刪走。
記住睇清楚前後逗號。


【最重要】
index.html 同 restaurants.js 要永遠放喺同一個資料夾。


【上 GitHub Pages 後】
每次只要：
1. 打開 restaurants.js
2. 按鉛筆 Edit
3. 改資料
4. Commit changes

網站之後會自動更新。


【私隱】
index.html 已經加入：
noindex, nofollow, noarchive

即係叫搜尋引擎唔好收錄。
但如果有人知道你條網址，仍然可以開到網站。
