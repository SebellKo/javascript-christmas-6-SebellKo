import Promotion from '../domains/Promotion';

describe('Promotion 클래스 생성자 기반 테스트', () => {
  const menu = ['바비큐립-1', '제로콜라-1', '아이스크림-1'];
  const date = 25;
  let promotion = 0;

  beforeEach(() => {
    promotion = new Promotion(menu, date);
  });

  test('calculatePriceForPay 메소드', () => {
    const expectedResult = 55577;
    const testResult = promotion.calculatePriceForPay();

    expect(testResult).toEqual(expectedResult);
  });

  test('provideBadge 메소드', () => {
    const expectedResult = '별';
    const testResult = promotion.provideBadge();

    expect(testResult).toEqual(expectedResult);
  });
});
