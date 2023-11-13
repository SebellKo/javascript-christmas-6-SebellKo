import Order from '../domains/Order';
import Discount from '../domains/Discount';
import Promotion from '../domains/Promotion';

jest.mock('../domains/Order');
jest.mock('../domains/Discount');

const mockOrder = () => {
  const mockCalculateTotalPrice = jest.fn().mockReturnValue(150000);
  const mockCreateOrderBoard = jest.fn().mockReturnValue([
    ['티본스테이크', 1],
    ['제로콜라', 1],
    ['아이스크림', 1],
  ]);

  Order.mockImplementation(() => ({
    calculateTotalPrice: mockCalculateTotalPrice,
    createOrderBoard: mockCreateOrderBoard,
  }));
};

const mockDiscount = () => {
  const mockCheckDate = jest.fn().mockReturnValue({
    christmasDday: true,
    weekend: true,
    starDay: true,
    weekday: true,
  });

  const mockCalculateChristmasDdayDiscount = jest.fn().mockReturnValue(2000);
  const mockCalculateWeekendDiscount = jest.fn().mockReturnValue(2023);
  const mockCalculateWeekdayDiscount = jest.fn().mockReturnValue(2023);
  const mockCalculateStarDayDiscount = jest.fn().mockReturnValue(1000);

  Discount.mockImplementation(() => ({
    checkDate: mockCheckDate,
    calculateChristmasDdayDiscount: mockCalculateChristmasDdayDiscount,
    calculateWeekendDiscount: mockCalculateWeekendDiscount,
    calculateWeekdayDiscount: mockCalculateWeekdayDiscount,
    calculateStarDayDiscount: mockCalculateStarDayDiscount,
  }));
};

describe('Promotion 메소드 테스트', () => {
  test('checkCanGetGift 메소드', () => {
    mockOrder();
    const promotion = new Promotion();
    const testResult = promotion.checkCanGetGift();

    expect(testResult).toEqual(true);
  });

  test('calculateTotalDiscount 메소드', () => {
    mockDiscount();
    const promotion = new Promotion();
    const testResult = promotion.calculateTotalDiscount();
    const expectedResult = 32046;

    expect(testResult).toEqual(expectedResult);
  });
});
