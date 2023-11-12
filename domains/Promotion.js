import Order from './Order';
import Discount from './Discount';

class Promotion {
  #order;
  #discount;

  constructor(menu, date) {
    this.#order = new Order(menu);
    this.#discount = new Discount(date);
  }

  checkCanGetGift() {
    const totalPrice = this.#order.calculateTotalPrice();
    return totalPrice >= 120000;
  }

  calculateTotalDiscount() {
    const discountList = this.#discount.checkDate();
    const orderBoard = this.#order.createOrderBoard();
    let totalDiscount = 0;

    if (discountList?.christmasDday)
      totalDiscount += this.#discount.calculateChristmasDdayDiscount();
    if (discountList?.weekend)
      totalDiscount += this.#discount.calculateWeekendDiscount(orderBoard);
    if (discountList?.weekday)
      totalDiscount += this.#discount.calculateWeekdayDiscount(orderBoard);
    if (discountList?.starDay)
      totalDiscount += this.#discount.calculateStarDayDiscount();

    return totalDiscount;
  }
}

export default Promotion;
