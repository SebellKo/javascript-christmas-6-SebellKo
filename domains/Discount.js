import MENU_BOARD from '../constants/menu.js';
import { checkIsInRange, checkIsNumber } from '../utils/ValidationUtils.js';

class Discount {
  #date;

  constructor(date) {
    this.#date = date;
  }

  static validate(date) {
    if (!checkIsNumber(date) || !checkIsInRange(1, 31, date)) return false;
    return true;
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
    const day = new Date(`2023-12-${this.#date}`).getDay();

    contentsObj.christmasDday = this.#date <= 25;
    contentsObj.starDay = this.#date === 25 || day === 0;
    contentsObj.weekend = day === 5 || day === 6 ? true : false;
    contentsObj.weekday = !contentsObj.weekend;

    return contentsObj;
  }

  getChristmasDdayDiscount() {
    return (this.#date - 1) * 100 + 1000;
  }

  getWeekendDiscount(orderMenu) {
    return this.#calculateDiscountByType(orderMenu, 'main');
  }

  getWeekdayDiscount(orderMenu) {
    return this.#calculateDiscountByType(orderMenu, 'desert');
  }

  getStarDayDiscount() {
    return 1000;
  }
}

export default Discount;
