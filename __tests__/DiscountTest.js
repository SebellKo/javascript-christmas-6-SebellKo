import Discount from '../domains/Discount';

describe('Discount 메소드 테스트', () => {
  let discount = 0;
  const orderMenu = [
    { name: '티본스테이크', amount: 1 },
    { name: '초코케이크', amount: 1 },
  ];

  test('checkDate 메소드', () => {
    const date = 15;
    discount = new Discount(date);
    const expectedResult = {
      christmasDday: true,
      weekend: true,
      starDay: false,
      weekday: false,
    };
    const testResult = discount.checkDate();

    expect(testResult).toEqual(expectedResult);
  });

  test('getChristmasDdayDiscount 메소드', () => {
    const date = 20;
    discount = new Discount(date);
    const expectedResult = 2900;
    const testResult = discount.getChristmasDdayDiscount();

    expect(testResult).toEqual(expectedResult);
  });

  test('getWeekendDiscount 메소드', () => {
    const date = 9;
    discount = new Discount(date);
    const expectedResult = 2023;
    const testResult = discount.getWeekendDiscount(orderMenu);

    expect(testResult).toEqual(expectedResult);
  });

  test('getWeekdayDiscount 메소드', () => {
    const date = 19;
    discount = new Discount(date);
    const expectedResult = 2023;
    const testResult = discount.getWeekdayDiscount(orderMenu);

    expect(testResult).toEqual(expectedResult);
  });

  test('getStarDayDiscount 메소드', () => {
    const date = 25;
    discount = new Discount(date);
    const expectedResult = 1000;
    const testResult = discount.getStarDayDiscount();

    expect(testResult).toEqual(expectedResult);
  });
});
