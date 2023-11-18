import MENU_BOARD from '../constants/menu.js';
import OrderValidation from './OrderValidation.js';

class Order {
  #menu;

  constructor(menu) {
    this.#menu = menu;
  }

  static validate(menu) {
    const orderValidation = new OrderValidation(menu);

    if (
      !orderValidation.checkIsOrderInForm() ||
      !orderValidation.checkInMenu() ||
      !orderValidation.checkIsMenuCountValid() ||
      orderValidation.checkIsMenuDuplicated() ||
      !orderValidation.checkIsTotalCountValid() ||
      orderValidation.checkIsAllBeverage()
    ) {
      return false;
    }
    return true;
  }

  createOrderBoard() {
    const orderBoard = [];
    const eachMenu = this.#menu.map((item) => item.split('-'));
    eachMenu.forEach((each) => {
      orderBoard.push({ name: each[0], amount: Number(each[1]) });
    });

    return orderBoard;
  }

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
