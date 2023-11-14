import MENU_BOARD from '../constants/menu.js';
import { extractByIndex, extractKeys } from '../utils/utils.js';
import {
  checkIncludeHypen,
  checkIsKorean,
  checkIsNumber,
} from '../utils/ValidationUtils.js';

class OrderValidation {
  constructor(menu) {
    this.menu = menu;
    this.orderMenu = extractByIndex(menu, 0);
    this.orderCount = extractByIndex(menu, 1);
  }

  checkIsOrderInForm() {
    const checkReg = this.menu.map((menu) => menu.split('-'));
    return (
      this.menu.every((menu) => checkIncludeHypen(menu)) &&
      checkReg.every(
        (index) => checkIsKorean(index[0]) && checkIsNumber(index[1]),
      )
    );
  }

  checkInMenu() {
    const menuBoard = extractKeys(MENU_BOARD, 'menu');

    return this.orderMenu.every((menu) => menuBoard.includes(menu));
  }
  checkIsMenuCountValid() {
    return this.orderCount.every((count) => count >= 1);
  }
  checkIsMenuDuplicated() {
    const checkedMenu = new Set(this.orderMenu);
    return checkedMenu.size !== this.orderMenu.length;
  }
  checkIsTotalCountValid() {
    return this.orderCount.reduce((acc, cur) => acc + Number(cur), 0) < 20;
  }
  checkIsAllBeverage() {
    const beverageMenu = extractKeys(MENU_BOARD, 'menu', 'beverage');
    return this.orderMenu.every((menu) => beverageMenu.includes(menu));
  }
}

export default OrderValidation;
