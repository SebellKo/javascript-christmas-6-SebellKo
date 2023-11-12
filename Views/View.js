import InputView from './InputView.js';
import {
  checkIsNumber,
  checkIsKorean,
  checkIncludeHypen,
} from '../utils/ValidationUtils.js';
import OutputView from './OutputView.js';

class View {
  async inputDate() {
    let date = await InputView.readDate();

    while (!this.checkIsDateNumber(date)) {
      OutputView.printDateError();
      date = await InputView.readDate();
    }

    return Number(date);
  }

  async inputOrder() {
    let order = await InputView.readOrder();

    while (!this.checkIsOrderInForm(order)) {
      OutputView.printMenuError();
      order = await InputView.readOrder();
    }

    return order.split(',');
  }

  checkIsDateNumber(date) {
    return checkIsNumber(date);
  }

  checkIsOrderInForm(order) {
    const checkHypen = order.split(',');
    const checkReg = checkHypen.map((menu) => menu.split('-'));

    return (
      checkHypen.every((menu) => checkIncludeHypen(menu)) &&
      checkReg.every(
        (index) => checkIsKorean(index[0]) && checkIsNumber(index[1]),
      )
    );
  }
}

export default View;
