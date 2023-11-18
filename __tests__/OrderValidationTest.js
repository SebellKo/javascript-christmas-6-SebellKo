import OrderValidation from '../domains/OrderValidation';

describe('Order 클래스 유효성 테스트', () => {
  let orderValidation = 0;
  describe('Valid 테스트', () => {
    const expectedResult = true;
    const validMenu = [
      '티본스테이크-1',
      '바비큐립-1',
      '초코케이크-2',
      '제로콜라-1',
    ];

    beforeEach(() => {
      orderValidation = new OrderValidation(validMenu);
    });

    test('checkIsOrderInForm 테스트', () => {
      const testResult = orderValidation.checkIsOrderInForm();
      expect(testResult).toEqual(expectedResult);
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
      const testResult = orderValidation.checkIsMenuDuplicated();
      expect(testResult).toEqual(!expectedResult);
    });

    test('checkIsTotalCountValid 테스트', () => {
      const testResult = orderValidation.checkIsTotalCountValid();
      expect(testResult).toEqual(expectedResult);
    });
  });

  describe('InValid 테스트', () => {
    describe('주문이 입력 형식과 일치하는지 테스트', () => {
      const inValidForm = [
        [['', '제로콜라-1']],
        [[' ', '타파스-1']],
        [['-2', '바비큐립-3']],
        [[' -3', '아이스크림-2']],
        [['제로콜라-1', '티본스테이크-a']],
        [['티본스테이크-ㄱ']],
        [['제로콜라-1', ' 타파스-1']],
      ];

      test.each(inValidForm)('checkIsOrderInForm 테스트', (input) => {
        orderValidation = new OrderValidation(input);
        const testResult = orderValidation.checkIsOrderInForm();
        expect(testResult).toEqual(false);
      });
    });

    const expectedResult = false;
    const inValidMenu = [
      '양송이스프-0',
      '바비큐립-1',
      '생크림케이크-2',
      '제로콜라-1',
      '제로콜라-1',
      '시저샐러드-19',
    ];

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
      const testResult = orderValidation.checkIsMenuDuplicated();
      expect(testResult).toEqual(!expectedResult);
    });

    test('checkIsTotalCountValid 테스트', () => {
      const testResult = orderValidation.checkIsTotalCountValid();
      expect(testResult).toEqual(expectedResult);
    });
  });

  describe('메뉴가 모두 음료인지 확인 테스트. (checkIsAllBeverage 메소드 테스트)', () => {
    const InValidMenu = ['제로콜라-1', '레드와인-1'];
    const validMenu = ['바비큐립-1', '제로콜라-1'];

    test('InValid (모든 메뉴가 음료)', () => {
      orderValidation = new OrderValidation(InValidMenu);
      const testResult = orderValidation.checkIsAllBeverage();
      expect(testResult).toEqual(true);
    });

    test('Valid (메인 메뉴가 포함)', () => {
      orderValidation = new OrderValidation(validMenu);
      const testResult = orderValidation.checkIsAllBeverage();
      expect(testResult).toEqual(false);
    });
  });
});
