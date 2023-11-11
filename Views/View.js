import InputView from './InputView';

class View {
  async inputDate() {
    const date = await InputView.readDate();

    if (!this.checkIsDateNumber(date))
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    return Number(date);
  }

  async inputOrder() {
    const order = await InputView.readOrder();

    if (!this.checkIsOrderInForm(order))
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');

    return order.split(',');
  }

  checkIsDateNumber(date) {}
  checkIsOrderInForm(order) {}
}

export default View;
