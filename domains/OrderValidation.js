import MENU_BOARD from '../constants/menu';
import { extractKeys } from '../utils/utils';

class OrderValidation {
  constructor(menu) {
    this.orderMenu = extractKeys(menu, 'menu');
    this.orderCount = extractKeys(menu, 'count');
  }
  checkInMenu() {
    const menuBoard = extractKeys(MENU_BOARD, 'menu');

    return this.orderMenu.every((menu) => menuBoard.includes(menu));
  }
  checkIsMenuCountValid() {
    return this.orderCount.every((count) => count >= 1);
  }
  checkIsMenuNonDuplicated() {
    const checkedMenu = new Set(this.orderMenu);
    return checkedMenu.size === this.orderMenu.length;
  }
  checkIsTotalCountValid() {
    return this.orderCount.reduce((acc, cur) => (acc += cur)) < 20;
  }
  checkIsAllBeverage() {
    const beverageMenu = extractKeys(MENU_BOARD, 'menu', 'beverage');
    return this.orderMenu.every((menu) => beverageMenu.includes(menu));
  }
}

export default OrderValidation;
