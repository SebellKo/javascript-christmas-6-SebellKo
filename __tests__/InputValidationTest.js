import InputView from '../Views/InputView.js';

describe('Input 유효성 검사.', () => {
  describe('Valid 테스트.', () => {
    const expectedResult = true;

    test('checkIsDateNumber 메소드 테스트.', () => {
      const date = '15';
      const testResult = InputView.checkIsDateNumber(date);
      expect(testResult).toEqual(expectedResult);
    });

    test('checkIsOrderInForm 메소드 테스트.', () => {
      const order = '티본스테이크-1,제로콜라-1,타파스-1';
      const testResult = InputView.checkIsOrderInForm(order);
      expect(testResult).toEqual(expectedResult);
    });
  });

  describe('InValid 테스트.', () => {
    const expectedResult = false;
    const date = ['a', '', ' ', '+'];
    const order = [
      '티본스테이크,제로콜라-1',
      '제로콜라-2, 시저샐러드-1',
      '',
      ' ',
      ' -1, 티본스테이크',
      '타파스',
    ];

    test.each(date)('checkIsDateNumber 메소드 테스트.', (input) => {
      const testResult = InputView.checkIsDateNumber(input);
      expect(testResult).toEqual(expectedResult);
    });

    test.each(order)('checkIsOrderInForm', (input) => {
      const testResult = InputView.checkIsOrderInForm(input);
      expect(testResult).toEqual(expectedResult);
    });
  });
});
