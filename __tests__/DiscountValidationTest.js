import Discount from '../domains/Discount';

describe('Discount 유효성 검사', () => {
  describe('입력이 숫자인지 검사', () => {
    const inputs = ['', ' ', 'a', '-', 'ㄱ'];
    test.each(inputs)('InValid 테스트', (input) => {
      const testResult = Discount.validate(input);
      expect(testResult).toEqual(false);
    });
  });

  describe('날짜가 12월인지 검사', () => {
    const dates = [0, 32];
    test.each(dates)('InValid 테스트', (input) => {
      const testResult = Discount.validate(input);
      expect(testResult).toEqual(false);
    });
  });
});
