const RANGE = {
  min: 1,
  max: 31,
  maxOrder: 20,
};

const DATE = {
  christmas: 25,
  sun: 0,
  fri: 5,
  sat: 6,
};

const PRICE = {
  year: 2023,
  eachDay: 100,
  giftBase: 120000,
  discountBase: 10000,
  giftPrice: 25000,
  santaBase: 20000,
  treeBase: 10000,
  starBase: 5000,
};

const PROMOTION = {
  gift: '증정 이벤트',
  christmas: '크리스마스 디데이 할인',
  weekend: '주말 할인',
  weekday: '평일 할인',
  star: '특별 할인',
};

const GIFT = {
  santa: '산타',
  tree: '트리',
  star: '별',
};

export { RANGE, DATE, PRICE, PROMOTION, GIFT };
