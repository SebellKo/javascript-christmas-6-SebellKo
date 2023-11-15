import MENU_BOARD from '../constants/menu.js';
import { RANGE, DATE, PRICE } from '../constants/promotion.js';
import { checkIsInRange, checkIsNumber } from '../utils/ValidationUtils.js';

class Discount {
  #date;

  constructor(date) {
    this.#date = date;
  }

  static validate(date) {
    if (!checkIsNumber(date) || !checkIsInRange(RANGE.min, RANGE.max, date))
      return false;
    return true;
  }

  #calculateDiscountByType(orderMenu, type) {
    const typeDishes = orderMenu.filter((menu) => {
      const menuInfo = MENU_BOARD.find((item) => menu.name === item.menu);
      return menuInfo.type === type;
    });

    const totalDiscount = typeDishes.reduce((acc, menu) => {
      return acc + menu.amount * PRICE.year;
    }, 0);

    return totalDiscount;
  }

  checkDate() {
    const contentsObj = {};
    const day = new Date(`2023-12-${this.#date}`).getDay();

    contentsObj.christmasDday = this.#date <= DATE.christmas;
    contentsObj.starDay = this.#date === DATE.christmas || day === DATE.sun;
    contentsObj.weekend = day === DATE.fri || day === DATE.sat ? true : false;
    contentsObj.weekday = !contentsObj.weekend;

    return contentsObj;
  }

  getChristmasDdayDiscount() {
    return (this.#date - 1) * PRICE.eachDay + 1000;
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
