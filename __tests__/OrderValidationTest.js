import OrderValidation from '../domains/OrderValidation';

describe('Order 클래스 유효성 테스트', () => {
  describe('Valid 테스트', () => {
    const expectedResult = true;
    const validMenu = [
      { menu: '티본스테이크', count: 1 },
      { menu: '바비큐립', count: 1 },
      { menu: '초코케이크', count: 2 },
      { menu: '제로콜라', count: 1 },
    ];
    let orderValidation = 0;

    beforeEach(() => {
      orderValidation = new OrderValidation(validMenu);
    });

    test('checkInMenu 테스트', () => {
      const testResult = orderValidation.checkInMenu();
      expect(testResult).toEqual(expectedResult);
    });

    test('checkIsMenuCountValid 테스트', () => {
      const testResult = orderValidation.checkIsMenuCountValid();
      expect(testResult).toEqual(expectedResult);
    });

    test('checkIsMenuDuplicated 테스트', () => {
      const testResult = orderValidation.checkIsMenuNonDuplicated();
      expect(testResult).toEqual(expectedResult);
    });

    test('checkIsTotalCountValid 테스트', () => {
      const testResult = orderValidation.checkIsTotalCountValid();
      expect(testResult).toEqual(expectedResult);
    });
  });

  describe('InValid 테스트', () => {
    const expectedResult = false;
    const inValidMenu = [
      { menu: '양송이스프', count: 0 },
      { menu: '바비큐립', count: 1 },
      { menu: '생크림케이크', count: 2 },
      { menu: '제로콜라', count: 1 },
      { menu: '제로콜라', count: 1 },
      { menu: '시저샐러드', count: 19 },
    ];
    let orderValidation = 0;
    beforeEach(() => {
      orderValidation = new OrderValidation(inValidMenu);
    });

    test('checkInMenu 테스트', () => {
      const testResult = orderValidation.checkInMenu();
      expect(testResult).toEqual(expectedResult);
    });

    test('checkIsMenuCountValid 테스트', () => {
      const testResult = orderValidation.checkIsMenuCountValid();
      expect(testResult).toEqual(expectedResult);
    });

    test('checkIsMenuDuplicated 테스트', () => {
      const testResult = orderValidation.checkIsMenuNonDuplicated();
      expect(testResult).toEqual(expectedResult);
    });

    test('checkIsTotalCountValid 테스트', () => {
      const testResult = orderValidation.checkIsTotalCountValid();
      expect(testResult).toEqual(expectedResult);
    });
  });
});
