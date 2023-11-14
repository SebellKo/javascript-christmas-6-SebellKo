import Discount from './Discount.js';
import Order from './Order.js';

class Promotion {
  #order;
  #discount;

  constructor(order, date) {
    this.#order = new Order(order);
    this.#discount = new Discount(date);
  }

  checkCanGetGift() {
    const totalPrice = this.readTotalPrice();
    return totalPrice >= 120000;
  }

  checkCanGetDiscount() {
    const totalPrice = this.readTotalPrice();
    return totalPrice >= 10000;
  }

  readOrderBoard() {
    return this.#order.createOrderBoard();
  }

  readTotalPrice() {
    return this.#order.calculateTotalPrice();
  }

  calculateTotalDiscount() {
    const promotion = this.createPromotion();
    const totalDiscount = Object.entries(promotion).reduce((acc, cur) => {
      return acc + cur[1];
    }, 0);

    return totalDiscount;
  }

  calculatePriceForPay() {
    const promotion = this.createPromotion();
    let totalDiscount = this.calculateTotalDiscount();
    if (promotion['증정 이벤트']) totalDiscount -= 25000;
    return this.readTotalPrice() - totalDiscount;
  }

  createPromotion() {
    const discountList = this.#discount.checkDate();
    const orderBoard = this.readOrderBoard();
    let promotion = {};

    if (this.checkCanGetDiscount()) {
      promotion = this.addPromotionOnBoard(discountList, orderBoard);
    }

    return promotion;
  }

  addPromotionOnBoard(discountList, orderBoard) {
    const promotion = {};
    if (discountList.christmasDday)
      promotion['크리스마스 디데이 할인'] =
        this.#discount.getChristmasDdayDiscount();
    if (discountList.weekend)
      promotion['주말 할인'] = this.#discount.getWeekendDiscount(orderBoard);
    if (discountList.weekday)
      promotion['평일 할인'] = this.#discount.getWeekdayDiscount(orderBoard);
    if (discountList.starDay)
      promotion['특별 할인'] = this.#discount.getStarDayDiscount();
    if (this.checkCanGetGift()) promotion['증정 이벤트'] = 25000;

    return promotion;
  }

  provideBadge() {
    if (this.calculateTotalDiscount() >= 20000) return '산타';
    if (this.calculateTotalDiscount() >= 10000) return '트리';
    if (this.calculateTotalDiscount() >= 5000) return '별';
    return '없음';
  }
}

export default Promotion;
