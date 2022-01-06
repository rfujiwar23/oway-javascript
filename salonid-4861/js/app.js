// dailyAct
var vm = new Vue({
  el: '#dailyAct',
  data: {
    dailyItems: [
      {productNameJP: 'デイリーユーズ　ヘアバス 240ml', productNameENG: 'dailyAct hair & scalp bath 240ml', imageSource: '../../image/individual/dailyAct_hair_bath_240ml_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/7?salon_id=4861'},
      {productNameJP: 'デイリーユーズ　コンディショナー 240ml', productNameENG: 'frequent use conditioner 240ml', imageSource: '../../image/individual/dailyAct_conditioner_240ml.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/9?salon_id=4861'},
      {productNameJP: 'デイリーユーズ　ミスト 160ml', productNameENG: 'dailyAct phytoprotein mist 160ml', imageSource: '../../image/individual/dailyAct_phytoprotein.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/11?salon_id=4861'}
    ]
  }
});

// moisturizing
var vm = new Vue({
  el: '#moisturizing',
  data: {
    moistItems: [
      {productNameJP: 'モイスト ヘアバス 240ml', productNameENG: 'moisturizing hair bath 240ml', imageSource: '../../image/individual/moisturizing_hair_bath_240ml_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/12?salon_id=4861'},
      {productNameJP: 'モイスト ヘアマスク 150ml', productNameENG: 'moisturizing hair mask 150ml', imageSource: '../../image/individual/moisturizing_hair_mask_150ml.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/15?salon_id=4861'},
      {productNameJP: 'ノンリンス モイスト ヘアバス 160ml', productNameENG: 'no rinse moist conditioner 160ml', imageSource: '../../image/individual/moisturizing_hair_moisture_conditioner.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/17?salon_id=4861'}
    ]
  }
});

// ColorUp
var vm = new Vue({
  el: '#color',
  data: {
    colorItems: [
      {productNameJP: 'カラープロテクション ヘアバス 240ml', productNameENG: 'color protection hair bath 240ml', imageSource: '../../image/individual/color_protection_hair_bath_240ml.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/18?salon_id=4861'},
      {productNameJP: 'カラープロテクション ヘアマスク 150ml', productNameENG: 'color protection hair mask 150ml', imageSource: '../../image/individual/color_protection_hair_mask_150ml.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/20?salon_id=4861'},
      {productNameJP: 'カラープロテクション ベール 160ml', productNameENG: 'color protection veil 160ml', imageSource: '../../image/individual/color_protection_veil_160ml.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/22?salon_id=4861'}
    ]
  }
});

// xVolume
var vm = new Vue({
  el: '#xVolume',
  data: {
    items: [
      {productNameJP: 'ボリューム　ヘアバス 240ml', productNameENG: 'volumizing hair bath 240ml', imageSource: '../../image/individual/volumizing_hair_bath_240ml.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/23?salon_id=4861'},
      {productNameJP: 'ボリューム　ルーツスプレー 160ml', productNameENG: 'volumizing root spray 160ml', imageSource: '../../image/individual/volumizing_root_spray_160ml_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/25?salon_id=4861'}
    ]
  }
});

// beCurly
var vm = new Vue({
  el: '#curly',
  data: {
    curlyItems: [
      {productNameJP: 'カーリー　ヘアバス 240ml', productNameENG: 'curly hair bath 240ml', imageSource: '../../image/individual/curly_hair_bath_240ml.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/26?salon_id=4861'},
      {productNameJP: 'カーリー　ヘアマスク 150ml', productNameENG: 'curly hair mask 150ml', imageSource: '../../image/individual/curly_hair_mask_150ml.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/28?salon_id=4861'},
      {productNameJP: 'カーリー　ポーション 240ml', productNameENG: 'curly potion 240ml', imageSource: '../../image/individual/curly_potion.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/30?salon_id=4861'}
    ]
  }
});

// Smooth
var vm = new Vue({
  el: '#smooth',
  data: {
    smoothProducts: [
      {productNameJP: 'ノンリンス スムージング フルイド 100ml', productNameENG: 'smoothing fluid 100ml', imageSource: '../../image/individual/smoothing_fluid_100ml_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/23?salon_id=4861'},
      {productNameJP: 'スムージング ヘアバス 240ml', productNameENG: 'smoothing hair bath 240ml', imageSource: '../../image/individual/smoothing_hair_bath_240ml_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/31?salon_id=4861'},
      {productNameJP: 'スムージング　コンディショナー 240ml', productNameENG: 'smoothing conditioner 240ml', imageSource: '../../image/individual/smoothing_conditioner_240ml_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/33?salon_id=4861'},
      {productNameJP: 'スムージング クリーム 150ml', productNameENG: 'smoothing cream 150ml', imageSource: '../../image/individual/smoothing_cream_150ml_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/35?salon_id=4861'}
    ]
  }
});

// Rebuilding
var vm = new Vue({
  el: '#rebuilding',
  data: {
    rebuildingItems: [
      {productNameJP: 'リビルディング ヘアバス 240ml', productNameENG: 'rebuilding hair bath 240ml', imageSource: '../../image/individual/rebuilding_hair_bath_240_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/42?salon_id=4861'},
      {productNameJP: 'リビルディング ヘアマスク 150ml', productNameENG: 'rebuilding hair mask 150ml', imageSource: '../../image/individual/rebuilding_hair_mask_150gF.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/44?salon_id=4861'},
      {productNameJP: 'リビルディング スプレー 100ml', productNameENG: 'rebuilding spray 100ml', imageSource: '../../image/individual/rebuilding_spray_100ml_F.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/46?salon_id=4861'}
    ]
  }
});

// mens
var vm = new Vue({
  el: '#mens',
  data: {
    mensItems: [
      {productNameJP: 'フェイス＆ビアード ハイドレイティング・クレンザー', productNameENG: 'face & beard hydrating cleanser', imageSource: '../../image/product_men/001_face-&-beard-hydrating-cleanser.png', ifingUrl: 'https://ifing-beauty.com/products/detail/109?salon_id=4861'},
      {productNameJP: 'ソフニング・シェイビング・クリーム', productNameENG: 'softening shaving cream', imageSource: '../../image/product_men/002_softening-shave-cream.png', ifingUrl: 'https://ifing-beauty.com/products/detail/112?salon_id=4861'},
      {productNameJP: 'アフターシェイビング・バーム', productNameENG: 'repairing aftershave balm', imageSource: '../../image/product_men/003_repairing-after-shave.png', ifingUrl: 'https://ifing-beauty.com/products/detail/113?salon_id=4861'},
      {productNameJP: 'フェイス＆アイ エナジー・テクスチャー', productNameENG: 'face & eye energizing texture', imageSource: '../../image/product_men/006_face-&-eye-energizing-texture.png', ifingUrl: 'https://ifing-beauty.com/products/detail/110?salon_id=4861'},
      {productNameJP: 'リップ・ビアード・サルブ', productNameENG: 'Lip & Beard Salve', imageSource: '../../image/product_men/009_lip-&-beard.png', ifingUrl: 'https://ifing-beauty.com/products/detail/114?salon_id=4861'},
      {productNameJP: 'ヘア＆ボディ リフレッシング・ウォッシュ', productNameENG: 'hair & body invigorating wash', imageSource: '../../image/product_men/004_hair-and-body-invigorating-wash.png', ifingUrl: 'https://ifing-beauty.com/products/detail/111?salon_id=4861'},
      {productNameJP: 'ウォーター・レジン', productNameENG: 'water resin', imageSource: '../../image/product_men/011_water-resin.png', ifingUrl: 'https://ifing-beauty.com/products/detail/105?salon_id=4861'},
      {productNameJP: 'ロー・マッド', productNameENG: 'raw mud', imageSource: '../../image/product_men/008_raw-mud.png', ifingUrl: 'https://ifing-beauty.com/products/detail/106?salon_id=4861'},
      {productNameJP: 'バンジー・ファイバー', productNameENG: 'bungee fiber', imageSource: '../../image/product_men/010_bungee-fiber.png', ifingUrl: 'https://ifing-beauty.com/products/detail/107?salon_id=4861'},
      {productNameJP: 'ノクターナル・ヘア・レメディ', productNameENG: 'nocturnal hair remedy', imageSource: '../../image/product_men/005_nocturnal-hair-remedy.png', ifingUrl: 'https://ifing-beauty.com/products/detail/211?salon_id=4861'},
      {productNameJP: 'シルバー・スティール・ヘアバス', productNameENG: 'silver steel hair bath', imageSource: '../../image/product_men/007_silver-steel-hair-bath.png', ifingUrl: 'https://ifing-beauty.com/products/detail/108?salon_id=4861'},
    ]
  }
});

// relife
var vm = new Vue({
  el: '#relife',
  data: {
    relifeItems: [
      {id: 1, productNameJP: 'マイクロ・スティミュレイティング　ヘアバス', productNameENG: 'micro stimulating hair bath', imageSource: '../../image/scalp/01-microstimulating_hair_bath.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/199?salon_id=4861'},
      {id: 2, productNameJP: 'スーシング・レメディ', productNameENG: 'soothing remedy', imageSource: '../../image/scalp/02-soothing_remedy.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/198?salon_id=4861'},
      {id: 3, productNameJP: 'スーシング・ヘア・バス', productNameENG: 'soothing hair bath', imageSource: '../../image/scalp/03-soothing_hair_bath.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/196?salon_id=4861'},
      {id: 4, productNameJP: 'セバム・バランス・ヘア・バス', productNameENG: 'sebum balance hair bath', imageSource: '../../image/scalp/04-sebum_balance_hair_bath.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/194?salon_id=4861'},
      {id: 5, productNameJP: 'ヘアロス レメディ', productNameENG: 'densifying remedy', imageSource: '../../image/scalp/05-densifying_remedy.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/201?salon_id=4861'},
      {id: 6, productNameJP: 'ダンドラフ レメディ オイリースカルプ', productNameENG: 'dandruff remedy oily scalps', imageSource: '../../image/scalp/06-dandruff_remedy_oily_scalps.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/213?salon_id=4861'},
      {id: 7, productNameJP: 'ダンドラフ ヘアバス オイリースカルプ', productNameENG: 'purifying hair bath oily scalps', imageSource: '../../image/scalp/07-purifying_hair_bath_oily_scalps.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/188?salon_id=4861'},
      {id: 8, productNameJP: 'ダンドラフ ダイナミックレメディ ドライスカルプ', productNameENG: 'dandruff remedy dry scalps', imageSource: '../../image/scalp/08-dandruff_remedy_dry_scalps.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/192?salon_id=4861'},
      {id: 9, productNameJP: 'ダンドラフ ヘアバス ドライスカルプ', productNameENG: 'purifying hair bath dry scalps', imageSource: '../../image/scalp/09_purifying_hair_bath_dry_scalps.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/191?salon_id=4861'},
      {id: 10, productNameJP: 'ヘアロス レメディ センシティブスカルプ', productNameENG: 'vivifying remedy sensitive scalps', imageSource: '../../image/scalp/10-vivifying_remedy_sensitive_scalp.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/202?salon_id=4861'},
    ]
  }
});

var vm = new Vue({
  el: '#lifestyleProducts',
  data: {
    products: [
      // life-style
      { id: 4, productNameJP: 'テルソ（240ml）', productNameENG: 'terso（240ml）', imageSource: '../../../image/dog/lifestyle007-terso.png', ifingUrl: 'https://ifing-beauty.com/products/detail/318?salon_id=4861' },
      { id: 2, productNameJP: 'ネブラ（50ml）', productNameENG: 'nebula（50ml）', imageSource: '../../../image/dog/lifestyle005-nebula.png', ifingUrl: 'https://ifing-beauty.com/products/detail/317?salon_id=4861' },
      { id: 1, productNameJP: 'ルジャーダ（50ml）', productNameENG: 'rugiada（50ml）', imageSource: '../../../image/dog/lifestyle004-rugiada.png', ifingUrl: 'https://ifing-beauty.com/products/detail/316?salon_id=4861' },
      { id: 3, productNameJP: 'ブルーマ（100ml）', productNameENG: 'bruma（100ml）', imageSource: '../../../image/dog/lifestyle006-bruma.png', ifingUrl: 'https://ifing-beauty.com/products/detail/315?salon_id=4861' },
     
    ]
  }
});

var vm = new Vue({
  el: '#balm',
  data: {
    products: [
      // life-style
     
      { id: 5, productNameJP: 'プロディジャスバーム（25ml）', productNameENG: 'Prodigious Balm 25ml', imageSource: '../../../image/dog/lifestyle008-prodigious-balm.png', ifingUrl: 'https://ifing-beauty.com/products/detail/319?salon_id=4861' },
      
 
    ]
  }
});

var vm = new Vue({
  el: '#other',
  data: {
    products: [
      { id: 6, productNameJP: 'レメディ ハンドバーム 50ml', productNameENG: 'Remedy Hand Balm 50ml', imageSource: '../../../image/dog/lifestyle003-remedy-hand-balm.png', ifingUrl: 'https://ifing-beauty.com/products/detail/306?salon_id=4861' },
      { id: 7, productNameJP: 'ヴェルート (リップクリーム) 10ml', productNameENG: 'Velluto (Lip Cream) 10ml', imageSource: '../../../image/dog/lifestyle002-Velluto.png', ifingUrl: 'https://ifing-beauty.com/products/detail/307?salon_id=4861' },
      { id: 9, productNameJP: 'テロ', productNameENG: 'Telo', imageSource: '../../../image/dog/lifestyle001-telo.png', ifingUrl: 'https://ifing-beauty.com/products/detail/308?salon_id=4861' },
    ]
  }
});


var vm = new Vue({
  el: '#dog',
  data: {
    products: [
      // dog
      { id: 8, productNameJP: 'デュエット 240ml', productNameENG: 'Duetto 240ml', imageSource: '../../../image/dog/Duetto-01.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/212?salon_id=4861' },
    ]
  }
});

// infine ●●●● 
var vm = new Vue({
  el: '#infine',
  data: {
    items: [
      {productNameJP: 'ニューチュアリング・ドロップス', productNameENG: 'nurturing drops', size: '50', noTaxPrice: '3700', imageSource: '../../../assets/infine-img/img/product001.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/115?salon_id=4861'},
      {productNameJP: 'グロッシー・ネクター', productNameENG: 'glossy nectar', size: '160', noTaxPrice: '4700', imageSource: '../../../assets/infine-img/img/product002.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/116?salon_id=4861'},
      {productNameJP: 'プレシャス・ワックス', productNameENG: 'precious wax', size: '100', noTaxPrice: '3600', imageSource: '../../../assets/infine-img/img/product003.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/117?salon_id=4861'},
      {productNameJP: 'シャビイ・マッド', productNameENG: 'shabby mud', size: '100', noTaxPrice: '3400', imageSource: '../../../assets/infine-img/img/product004.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/118?salon_id=4861'},
      {productNameJP: 'ボーホ・ポマード', productNameENG: 'boho pomade', size: '100', noTaxPrice: '3400', imageSource: '../../../assets/infine-img/img/product005.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/119?salon_id=4861'},
      {productNameJP: 'シェイピング・パティ', productNameENG: 'shaping putty', size: '100', noTaxPrice: '3400', imageSource: '../../../assets/infine-img/img/product006.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/120?salon_id=4861'},
      {productNameJP: 'フラックス・ポーション', productNameENG: 'flux potion', size: '240', noTaxPrice: '3700', imageSource: '../../../assets/infine-img/img/product007.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/121?salon_id=4861'},
      {productNameJP: 'グラムシャイン・クラウド', productNameENG: 'glamshine cloud', size: '100', noTaxPrice: '3700', imageSource: '../../../assets/infine-img/img/product008.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/122?salon_id=4861'},
      {productNameJP: 'シーソルト・スプレイ', productNameENG: 'sea salt spray', size: '240', noTaxPrice: '3700', imageSource: '../../../assets/infine-img/img/product009.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/123?salon_id=4861'},
      {productNameJP: 'スカルプティング・ミスト', productNameENG: 'sculpting mist', size: '240', noTaxPrice: '3700', imageSource: '../../../assets/infine-img/img/product010.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/124?salon_id=4861'},
      {productNameJP: 'フローズン・グレイズ', productNameENG: 'frozen glaze', size: '150', noTaxPrice: '3000', imageSource: '../../../assets/infine-img/img/product011.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/125?salon_id=4861'},
      {productNameJP: 'クイック・グルー', productNameENG: 'quick glue', size: '100', noTaxPrice: '3000', imageSource: '../../../assets/infine-img/img/product012.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/126?salon_id=4861'},
      {productNameJP: 'バイオリッチ・ウォーター', productNameENG: 'bio rich water', size: '240', noTaxPrice: '2700', imageSource: '../../../assets/infine-img/img/product013.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/127?salon_id=4861'},
      {productNameJP: 'サーマル・プロテクター', productNameENG: 'thermal stress protector', size: '240', noTaxPrice: '4200', imageSource: '../../../assets/infine-img/img/product014.jpg', ifingUrl: 'https://ifing-beauty.com/products/detail/128?salon_id=4861'},
    ]
  }
});


// silk n glow　●●●● 
var vm = new Vue({
el: '#silknglow',
data: {
  items: [
    {productNameJP: 'シルク アンド グロー ヘアバス', productNameENG: "silk'n glow hair bath", size: '240', noTaxPrice: '3700', imageSource: '../../../assets/silknglow-img/img/product001.png', ifingUrl: 'https://ifing-beauty.com/products/detail/37?salon_id=4861'},
    {productNameJP: 'シルク アンド グロー ヘアマスク', productNameENG: "silk'n glow hair mask", size: '150', noTaxPrice: '3200', imageSource: '../../../assets/silknglow-img/img/product003.png', ifingUrl: 'https://ifing-beauty.com/products/detail/39?salon_id=4861'},
    {productNameJP: 'シルク アンド グロー セラム', productNameENG: "silk'n glow serum", size: '100', noTaxPrice: '3800', imageSource: '../../../assets/silknglow-img/img/product005.png', ifingUrl: 'https://ifing-beauty.com/products/detail/41?salon_id=4861'},
  ]
}
});

// sunway　●●●● 
var vm = new Vue({
el: '#sunway',
data: {
  items: [
    {productNameJP: 'アフターサン ヘア＆ボディ バス', productNameENG: "after-sun hair & body bath", size: '240', noTaxPrice: '3400', imageSource: '../../../assets/sunway-img/img/product001.png', ifingUrl: 'https://ifing-beauty.com/products/detail/47?salon_id=4861'},
    {productNameJP: 'アフターサン ヘア マスク', productNameENG: "after-sun hair mask", size: '150', noTaxPrice: '3200', imageSource: '../../../assets/sunway-img/img/product003.png', ifingUrl: 'https://ifing-beauty.com/products/detail/49?salon_id=4861'},
    {productNameJP: 'サン プロテクティブ エリクサー', productNameENG: "sun protective elixir", size: '100', noTaxPrice: '3800', imageSource: '../../../assets/sunway-img/img/product005.png', ifingUrl: 'https://ifing-beauty.com/products/detail/51?salon_id=4861'},
  ]
}
});






