import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printOrderMenu(menu) {
    Console.print('<주문 메뉴>');
    menu.forEach((menu) => {
      Console.print(`${menu.menu} ${menu.count}개`);
    });
  },

  printDateError() {
    Console.print('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  },

  printMenuError() {
    Console.print('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  },

  printVisitDate(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },

  printTotalPrcie(price) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${price}원`);
  },

  printGift() {
    Console.print('<증정 메뉴>');
    Console.print('샴페인 1개');
  },

  printPromotion(promotion) {
    Console.print('<혜택 내역>');
    promotion.forEach((item) => {
      if (item.price !== 0) Console.print(`${itme.name} -${item.price}원`);
    });
  },

  printTotalPromotionPrice(price) {
    Console.print('<총혜택 금액>');
    Console.print(`-${price}원`);
  },

  printPrcieForPay(price) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${price}원`);
  },

  printEventBadge(badge) {
    Console.print('<12월 이벤트 배지>');
    Console.print(`${badge}`);
  },

  printNone() {
    Console.print('없음');
  },

  printNewLine() {
    Console.print('\n');
  },
};

export default OutputView;
