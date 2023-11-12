import { Console } from '@woowacourse/mission-utils';
import {
  checkIsNumber,
  checkIsKorean,
  checkIncludeHypen,
} from '../utils/ValidationUtils.js';
import OutputView from './OutputView.js';

const InputView = {
  async readDate() {
    let date = await Console.readLineAsync(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
    );

    while (!checkIsDateNumber(date)) {
      OutputView.printDateError();
      date = await InputView.readDate();
    }

    return Number(date);
  },

  async readOrder() {
    let order = await Console.readLineAsync(
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
    );

    while (!checkIsOrderInForm(order)) {
      OutputView.printMenuError();
      order = await InputView.readOrder();
    }

    return order.split(',');
  },

  checkIsDateNumber(date) {
    return checkIsNumber(date);
  },

  checkIsOrderInForm(order) {
    const checkHypen = order.split(',');
    const checkReg = checkHypen.map((menu) => menu.split('-'));

    return (
      checkHypen.every((menu) => checkIncludeHypen(menu)) &&
      checkReg.every(
        (index) => checkIsKorean(index[0]) && checkIsNumber(index[1]),
      )
    );
  },
};

export default InputView;
