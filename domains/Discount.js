import MENU_BOARD from '../constants/menu.js';
import { checkIsInRange } from '../utils/ValidationUtils.js';
import { extractKeys } from '../utils/utils.js';

class Discount {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
  }

  #validate(date) {
    if (!checkIsInRange(1, 31, date)) throw new Error('[ERROR]');
  }

  checkDate() {
    const contentsObj = {};
    const day = new Date(`2023-12-${this.#date}`);
    if (this.#date < 25) contentsObj.christmasDday = true;
    if (day === 5 || day === 6) contentsObj.weekend = true;
    if (this.#date === 25 || day === 0) contentsObj.starDay = true;
    contentsObj.weekday = true;

    return contentsObj;
  }

  calculateChristmasDdayDiscount() {
    return this.#date * 100 + 1000;
  }

  calculateWeekendDiscount(orderMenu) {
    let totalDiscount = 0;
    orderMenu.forEach((menu) => {
      const menuIndex = MENU_BOARD.findIndex((item) => menu.name === item.menu);
      const type = MENU_BOARD[menuIndex].type;

      if (type === 'main') totalDiscount += menu.amount * 2023;
    });

    return totalDiscount;
  }

  calculateWeekdayDiscount(orderMenu) {
    const mainDishes = orderMenu.filter((menu) => {
      const menuInfo = MENU_BOARD.find((item) => menu.name === item.menu);
      return menuInfo && menuInfo.type === 'main';
    });

    const totalDiscount = mainDishes.reduce((acc, menu) => {
      return acc + menu.amount * 2023;
    }, 0);

    return totalDiscount;
  }

  calculateStarDayDiscount() {
    const day = new Date(`2023-12-${this.#date}`);
    if (day === 0 || this.#date === 25) return 1000;
  }
}

export default Discount;
