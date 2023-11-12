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

  createOrderBoard() {
    const orderBoard = [];
    const eachMenu = this.#menu.map((item) => item.split('-'));
    eachMenu.forEach((each) => {
      orderBoard.push({ name: each[0], amount: Number(each[1]) });
    });

    return orderBoard;
  }
}

export default Order;
