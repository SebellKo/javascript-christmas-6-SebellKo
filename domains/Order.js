import OrderValidation from './OrderValidation';

class Order {
  #menu;

  constructor(menu) {
    this.#validate(menu);
    this.#menu = menu;
  }

  #validate(menu) {
    const orderValidation = new OrderValidation(menu);
    if (
      orderValidation.checkInMenu() ||
      orderValidation.checkIsMenuCountValid() ||
      orderValidation.checkIsMenuNonDuplicated() ||
      orderValidation.checkIsTotalCountValid() ||
      orderValidation.checkIsAllBeverage()
    ) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }
}

export default Order;
