import MENU_BOARD from '../constants/menu.js';
import { checkIsInRange } from '../utils/ValidationUtils.js';

class Discount {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
  }

  #validate(date) {
    if (!checkIsInRange(1, 31, date)) throw new Error('[ERROR]');
  }

  #calculateDiscountByType(orderMenu, type) {
    const typeDishes = orderMenu.filter((menu) => {
      const menuInfo = MENU_BOARD.find((item) => menu.name === item.menu);
      return menuInfo.type === type;
    });

    const totalDiscount = typeDishes.reduce((acc, menu) => {
      return acc + menu.amount * 2023;
    }, 0);

    return totalDiscount;
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
    return this.#calculateDiscountByType(orderMenu, 'main');
  }

  calculateWeekdayDiscount(orderMenu) {
    return this.#calculateDiscountByType(orderMenu, 'desert');
  }

  calculateStarDayDiscount() {
    return 1000;
  }
}

export default Discount;
