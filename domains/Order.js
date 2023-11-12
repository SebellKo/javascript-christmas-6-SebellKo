import MENU_BOARD from '../constants/menu';
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
  // [ { name: '제로콜라', amount: 2 }, { name: '바비큐립', amount: 1 },];
  calculateTotalPrice() {
    const orderBoard = this.createOrderBoard();
    const totalPrice = orderBoard.reduce((acc, cur) => {
      const menuInfo = MENU_BOARD.filter((menu) => menu.menu === cur.name)[0];
      const menuPrice = menuInfo.price;

      acc += cur.amount * menuPrice;
      return acc;
    }, 0);

    return totalPrice;
  }
}

export default Order;
