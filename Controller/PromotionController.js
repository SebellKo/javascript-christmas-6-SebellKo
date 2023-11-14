import InputView from '../Views/InputView.js';
import Promotion from '../Domains/Promotion.js';
import OutputView from '../Views/OutputView.js';
import Order from '../Domains/Order.js';
import Discount from '../Domains/Discount.js';

class PromotionController {
  #promotion;

  async start() {
    OutputView.printStartMent();
    await this.getUserOrder();
    this.getOrderMenu();
    this.getTotalPrice();
    this.getGift();
    this.getPromotion();
    this.getTotalDiscount();
    this.getPriceForPay();
    this.getEventBadge();
  }

  async getUserOrder() {
    const { date, discount } = await this.configDate();
    const order = await this.configOrder();
    OutputView.printVisitDate(date);

    this.#promotion = new Promotion(order, discount);
  }

  async configOrder() {
    const menu = await InputView.readOrder();
    let order = 0;
    try {
      order = new Order(menu);
      return order;
    } catch (error) {
      OutputView.printError(error.message);
      return await this.configOrder();
    }
  }

  async configDate() {
    const date = await InputView.readDate();
    let discount = 0;
    try {
      discount = new Discount(date);
      return { discount, date };
    } catch (error) {
      OutputView.printError(error.message);
      return await this.configDate();
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
    let gift = '없음';
    if (this.#promotion.checkCanGetGift()) gift = '샴페인 1개';

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
