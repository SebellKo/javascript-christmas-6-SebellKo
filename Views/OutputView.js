import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printOrderMenu(menu) {
    Console.print(MESSAGE.orderMenu);
    menu.forEach((menu) => {
      Console.print(`${menu.name} ${menu.amount}개`);
    });
    Console.print(MESSAGE.newLine);
  },

  printStartMent() {
    Console.print(MESSAGE.greet);
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
    Console.print(MESSAGE.beforeDiscountPrice);
    Console.print(`${price.toLocaleString('ko-KR')}원`);
    Console.print(MESSAGE.newLine);
  },

  printGift(gift) {
    Console.print(MESSAGE.giftMenu);
    Console.print(gift);
    Console.print(MESSAGE.newLine);
  },

  printPromotion(promotion) {
    Console.print(MESSAGE.promotion);
    if (Object.keys(promotion).length === 0) {
      Console.print(MESSAGE.none);
      Console.print(MESSAGE.newLine);
      return;
    }
    Object.entries(promotion).forEach((item) =>
      Console.print(`${item[0]}: -${item[1].toLocaleString('ko-KR')}원`),
    );
    Console.print(MESSAGE.newLine);
  },

  printTotalDiscount(price) {
    const totalDiscount =
      price === 0 ? price : `-${price.toLocaleString('ko-KR')}`;
    Console.print(MESSAGE.totalPromotion);
    Console.print(`${totalDiscount}원`);
    Console.print(MESSAGE.newLine);
  },

  printPriceForPay(price) {
    Console.print(MESSAGE.afterDiscountPrice);
    Console.print(`${price.toLocaleString('ko-KR')}원`);
    Console.print(MESSAGE.newLine);
  },

  printEventBadge(badge) {
    Console.print(MESSAGE.eventBadge);
    Console.print(`${badge}`);
  },
};

export default OutputView;
