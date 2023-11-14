import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printOrderMenu(menu) {
    Console.print('<주문 메뉴>');
    menu.forEach((menu) => {
      Console.print(`${menu.name} ${menu.amount}개`);
    });
    Console.print('');
  },

  printStartMent() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printError(error) {
    Console.print(`[ERROR] 유효하지 않은 ${error}입니다. 다시 입력해 주세요.`);
  },

  printVisitDate(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
  },

  printTotalPrcie(price) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${price.toLocaleString('ko-KR')}원`);
    Console.print('');
  },

  printGift(gift) {
    Console.print('<증정 메뉴>');
    Console.print(gift);
    Console.print('');
  },

  printPromotion(promotion) {
    Console.print('<혜택 내역>');
    if (Object.keys(promotion).length === 0) {
      Console.print('없음');
      Console.print('');
      return;
    }
    Object.entries(promotion).forEach((item) =>
      Console.print(`${item[0]}: -${item[1].toLocaleString('ko-KR')}원`),
    );
    Console.print('');
  },

  printTotalDiscount(price) {
    const totalDiscount =
      price === 0 ? price : `-${price.toLocaleString('ko-KR')}`;
    Console.print('<총혜택 금액>');
    Console.print(`${totalDiscount}원`);
    Console.print('');
  },

  printPriceForPay(price) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${price.toLocaleString('ko-KR')}원`);
    Console.print('');
  },

  printEventBadge(badge) {
    Console.print('<12월 이벤트 배지>');
    Console.print(`${badge}`);
  },

  printNone() {
    Console.print('없음');
  },

  printNewLine() {
    Console.print('');
  },
};

export default OutputView;
