import Promotion from '../domains/Promotion';

describe('프로모션 날짜가 12월인지 확인.', () => {
  const dates = [0, 32];
  test.each(dates)('InValid 테스트', (input) => {
    expect(() => new Promotion(input)).toThrow('[ERROR]');
  });
});