import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu() {
    Console.print('<주문 메뉴>');
  },

  printDateError() {
    Console.print('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  },

  printMenuError() {
    Console.print('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  },
};

export default OutputView;
