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
    const expectedResult = { christmasDday: true, weekday: true };
    const testResult = discount.checkDate();

    expect(testResult).toEqual(expectedResult);
  });

  test('calculateChristmasDdayDiscount 메소드', () => {
    const date = 20;
    discount = new Discount(date);
    const expectedResult = 3000;
    const testResult = discount.calculateChristmasDdayDiscount();

    expect(testResult).toEqual(expectedResult);
  });

  test('calculateWeekendDiscount 메소드', () => {
    const date = 9;
    discount = new Discount(date);
    const expectedResult = 2023;
    const testResult = discount.calculateWeekendDiscount(orderMenu);

    expect(testResult).toEqual(expectedResult);
  });

  test('calculateWeekdayDiscount 메소드', () => {
    const date = 19;
    discount = new Discount(date);
    const expectedResult = 2023;
    const testResult = discount.calculateWeekdayDiscount(orderMenu);

    expect(testResult).toEqual(expectedResult);
  });

  test('calculateStarDayDiscount 메소드', () => {
    const date = 25;
    discount = new Discount(date);
    const expectedResult = 1000;
    const testResult = discount.calculateStarDayDiscount();

    expect(testResult).toEqual(expectedResult);
  });
});
