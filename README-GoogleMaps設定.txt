澳門食嘢 Map — Google Maps 版
=================================

檔案：
- index.html          地圖本體，通常唔使改
- restaurants.js      你日後加／刪／改餐廳主要改呢個
- config.js           只需要填 Google Maps API key
- privacy.html        私隱政策
- terms.html          使用條款


第一次設定 Google Maps
----------------------

1. Google Cloud 建立 project
2. 綁定 Billing
3. Enable：
   - Maps JavaScript API
   - Geocoding API
4. 建立 API key
5. 設定 API key restriction：

Application restrictions:
  Websites / HTTP referrers

加入：
  https://thesun16hk.github.io/samoyeah2026macau/*

API restrictions:
  Restrict key

只容許：
  Maps JavaScript API
  Geocoding API

6. 打開 config.js

將：
  googleMapsApiKey: "PASTE_YOUR_API_KEY_HERE"

改成：
  googleMapsApiKey: "你自己條API_KEY"

7. Commit changes


日後改餐廳
----------

只改 restaurants.js。

新增分類唔使改 index.html：
只要新餐廳嘅 category 寫新分類名，
上面個分類掣就會自動出現。


關於座標
--------

lat / lng 可以唔填。
冇座標嘅餐廳會喺每次開網頁時用 Google Geocoding 按地址搵位置。

如果你自己有準確 lat / lng，可以填入 restaurants.js，
地圖就唔需要為嗰間餐廳做 Geocoding。


API key 安全
------------

Google Maps JavaScript API 係喺瀏覽器載入，
所以 key 出現在網頁 source 屬正常情況。

唔好靠「收埋條 key」保護佢；
一定要喺 Google Cloud 設定 Website / HTTP referrer restrictions，
限制只可以由你嘅 GitHub Pages 網址使用。
