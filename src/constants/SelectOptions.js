export const mainCategoryArray = [
  //   { label: '未選択', value: 'unselected' },
  { label: 'すべて', value: 'all' },
  { label: 'ファッション', value: 'fashion' },
  { label: '食品・飲料・酒類', value: 'food-beverage-alcohol' },
  { label: 'スポーツ・アウトドア', value: 'sports-outdoor' },
  { label: 'ダイエット・健康', value: 'diet-health' },
  { label: 'コスメ・美容', value: 'cosmetic-beauty' },
  { label: 'スマホ・タブレット・パソコン', value: 'smartphone-tablet-pc' },
  { label: 'テレビ・オーディオ・カメラ', value: 'tv-audio-camera' },
  { label: '家電', value: 'home-appliances' },
  { label: '家具・インテリア', value: 'furniture-interior' },
  { label: '日用品・小物', value: 'daily-necessities-accessories' },
  { label: 'ペット用品', value: 'pet' },
  { label: 'ハンドメイド', value: 'handmade' },
  { label: '楽器', value: 'musical-instrument' },
  { label: 'ゲーム', value: 'game' },
  { label: 'おもちゃ・ホビー', value: 'toy-hobby' },
  { label: 'ベビー・キッズ・マタニティ', value: 'baby-kids-maternity' },
  { label: '車・バイク', value: 'car-bike' },
  { label: 'CD・音楽', value: 'cd-music' },
  { label: 'DVD・ブルーレイ', value: 'dvd' },
  { label: '本・雑誌・漫画', value: 'book-magazine-cartoon' },
  { label: 'チケット', value: 'ticket' },
];

export const subCategoryObject = {
  //   unselected: [],
  all: [],
  fashion: [
    { label: 'レディース', value: 'ladies' },
    { label: 'メンズ', value: 'mens' },
  ],
  'food-beverage-alcohol': [
    { label: '食品', value: 'food' },
    { label: '飲料', value: 'beverage' },
    { label: '酒類', value: 'alcohol' },
  ],
  'sports-outdoor': [
    { label: 'スポーツ', value: 'sports' },
    { label: 'アウトドア', value: 'outdoor' },
  ],
  'diet-health': [],
  'cosmetic-beauty': [],
  'smartphone-tablet-pc': [
    { label: 'スマートフォン', value: 'smartphone' },
    { label: 'タブレット・PC', value: 'tablet-pc' },
  ],
  'tv-audio-camera': [
    { label: 'テレビ', value: 'tv' },
    { label: 'オーディオ機器', value: 'audio' },
    { label: 'カメラ', value: 'camera' },
  ],
  'home-appliances': [
    { label: '生活家電', value: 'home-appliances' },
    { label: '調理家電', value: 'cooking-appliances' },
    { label: '健康家電', value: 'health-appliances' },
    { label: '美容家電', value: 'beauty-appliances' },
    { label: '冷暖房・空調', value: 'air-conditioning' },
  ],
  'furniture-interior': [],
  'daily-necessities-accessories': [],
  pet: [],
  handmade: [],
  'musical-instrument': [],
  game: [
    { label: 'テレビゲーム', value: 'video-game' },
    { label: 'トレーディングカード', value: 'trading-card' },
    { label: 'カードゲーム', value: 'card-game' },
    { label: 'ボードゲーム', value: 'board-game' },
  ],
  'toy-hobby': [],
  'baby-kids-maternity': [],
  'car-bike': [
    { label: '自動車', value: 'car' },
    { label: 'バイク', value: 'bike' },
    { label: '自転車', value: 'bicycle' },
  ],
  'cd-music': [],
  dvd: [],
  'book-magazine-cartoon': [
    { label: '本', value: 'book' },
    { label: '雑誌', value: 'magazine' },
    { label: '漫画', value: 'cartoon' },
  ],
  ticket: [],
};

// export const subCategoryObject = {
//     //   unselected: [],
//     all: [],
//     fashion: [
//       { label: 'レディース', value: 'ladies', selected: true },
//       { label: 'メンズ', value: 'mens', selected: false },
//     ],
//     'food-beverage-alcohol': [
//       { label: '食品', value: 'food', selected: true },
//       { label: '飲料', value: 'beverage', selected: false },
//       { label: '酒類', value: 'alcohol', selected: false },
//     ],
//     'sports-outdoor': [
//       { label: 'スポーツ', value: 'sports', selected: true },
//       { label: 'アウトドア', value: 'outdoor', selected: false },
//     ],
//     'diet-health': [],
//     'cosmetic-beauty': [],
//     'smartphone-tablet-pc': [
//       { label: 'スマートフォン', value: 'smartphone', selected: true },
//       { label: 'タブレット・PC', value: 'tablet-pc', selected: false },
//     ],
//     'tv-audio-camera': [
//       { label: 'テレビ', value: 'tv', selected: true },
//       { label: 'オーディオ機器', value: 'audio', selected: false },
//       { label: 'カメラ', value: 'camera', selected: false },
//     ],
//     'home-appliances': [
//       { label: '生活家電', value: 'home-appliances', selected: true },
//       { label: '調理家電', value: 'cooking-appliances', selected: false },
//       { label: '健康家電', value: 'health-appliances', selected: false },
//       { label: '美容家電', value: 'beauty-appliances', selected: false },
//       { label: '冷暖房・空調', value: 'air-conditioning', selected: false },
//     ],
//     'furniture-interior': [],
//     'daily-necessities-accessories': [],
//     handmade: [],
//     'musical-instrument': [],
//     game: [
//       { label: 'テレビゲーム', value: 'video-game', selected: true },
//       { label: 'トレーディングカード', value: 'trading-card', selected: false },
//       { label: 'カードゲーム', value: 'card-game', selected: false },
//       { label: 'ボードゲーム', value: 'board-game', selected: false },
//     ],
//     'toy-hobby': [],
//     'baby-kids-maternity': [],
//     'car-bike': [
//       { label: '自動車', value: 'car', selected: true },
//       { label: 'バイク', value: 'bike', selected: false },
//       { label: '自転車', value: 'bicycle', selected: false },
//     ],
//     'cd-music': [],
//     dvd: [],
//     'book-magazine-cartoon': [
//       { label: '本', value: 'book', selected: true },
//       { label: '雑誌', value: 'magazine', selected: false },
//       { label: '漫画', value: 'cartoon', selected: false },
//     ],
//     ticket: [],
//   };
