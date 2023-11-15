import { GIFT, PROMOTION, PRICE } from '../constants/promotion.js';
import MESSAGE from '../constants/message.js';
import Discount from './Discount.js';
import Order from './Order.js';

const { gift, christmas, weekend, weekday, star } = PROMOTION;

class Promotion {
  #order;
  #discount;

  constructor(order, date) {
    this.#order = new Order(order);
    this.#discount = new Discount(date);
  }

  checkCanGetGift() {
    const totalPrice = this.readTotalPrice();
    return totalPrice >= PRICE.giftBase;
  }

  checkCanGetDiscount() {
    const totalPrice = this.readTotalPrice();
    return totalPrice >= PRICE.discountBase;
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
    if (promotion[gift]) totalDiscount -= PRICE.giftPrice;
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
      promotion[christmas] = this.#discount.getChristmasDdayDiscount();
    if (discountList.weekend)
      promotion[weekend] = this.#discount.getWeekendDiscount(orderBoard);
    if (discountList.weekday)
      promotion[weekday] = this.#discount.getWeekdayDiscount(orderBoard);
    if (discountList.starDay)
      promotion[star] = this.#discount.getStarDayDiscount();
    if (this.checkCanGetGift()) promotion[gift] = PRICE.giftPrice;

    return promotion;
  }

  provideBadge() {
    if (this.calculateTotalDiscount() >= PRICE.santaBase) return GIFT.santa;
    if (this.calculateTotalDiscount() >= PRICE.treeBase) return GIFT.tree;
    if (this.calculateTotalDiscount() >= PRICE.starBase) return GIFT.star;
    return MESSAGE.none;
  }
}

export default Promotion;
