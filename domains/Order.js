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
      throw new Error('[ERROR]');
    }
  }
}

export default Order;
