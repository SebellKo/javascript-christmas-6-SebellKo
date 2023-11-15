import InputView from '../Views/InputView.js';
import Promotion from '../domains/Promotion.js';
import OutputView from '../Views/OutputView.js';
import Order from '../domains/Order.js';
import Discount from '../domains/Discount.js';
import MESSAGE from '../constants/message.js';

class PromotionController {
  #promotion;

  async start() {
    OutputView.printStartMent();
    await this.getUserPromotion();
    this.printPromotion();
  }

  printPromotion() {
    this.getOrderMenu();
    this.getTotalPrice();
    this.getGift();
    this.getPromotion();
    this.getTotalDiscount();
    this.getPriceForPay();
    this.getEventBadge();
  }

  async getUserPromotion() {
    const date = await this.getDateInput();
    const menu = await this.getOrderInput();
    OutputView.printVisitDate(date);

    this.#promotion = new Promotion(menu, date);
  }

  async getOrderInput() {
    while (true) {
      const menu = await InputView.readOrder();
      if (Order.validate(menu)) return menu;
      OutputView.printError(MESSAGE.order);
    }
  }

  async getDateInput() {
    while (true) {
      const date = await InputView.readDate();
      if (Discount.validate(date)) return date;
      OutputView.printError(MESSAGE.date);
    }
  }

  getOrderMenu() {
    const orderBoard = this.#promotion.readOrderBoard();
    OutputView.printOrderMenu(orderBoard);
  }

  getTotalPrice() {
    let totalPrice = this.#promotion.readTotalPrice();
    OutputView.printTotalPrcie(totalPrice);
  }

  getGift() {
    let gift = MESSAGE.none;
    if (this.#promotion.checkCanGetGift()) gift = MESSAGE.gift;

    OutputView.printGift(gift);
  }

  getPromotion() {
    const promotion = this.#promotion.createPromotion();
    OutputView.printPromotion(promotion);
  }

  getTotalDiscount() {
    const totalDiscount = this.#promotion.calculateTotalDiscount();
    OutputView.printTotalDiscount(totalDiscount);
  }

  getPriceForPay() {
    const totalPrice = this.#promotion.calculatePriceForPay();
    OutputView.printPriceForPay(totalPrice);
  }

  getEventBadge() {
    const badge = this.#promotion.provideBadge();
    OutputView.printEventBadge(badge);
  }
}

export default PromotionController;
