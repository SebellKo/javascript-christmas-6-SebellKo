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

  checkCanGetDiscount() {
    const totalPrice = this.#order.calculateTotalPrice();
    return totalPrice >= 10000;
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
    if (this.checkCanGetGift()) totalDiscount += 25000;

    return totalDiscount;
  }

  calculatePriceForPay() {
    return this.#order.calculateTotalPrice() - this.calculateTotalDiscount();
  }

  provideBadge() {
    if (this.calculateTotalDiscount() >= 20000) return '산타';
    if (this.calculateTotalDiscount() >= 10000) return '트리';
    if (this.calculateTotalDiscount() >= 5000) return '별';
    return '없음';
  }
}

export default Promotion;
