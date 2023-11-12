import Order from '../domains/Order';

describe('Order 클래스 메소드 테스트', () => {
  test('createOrderBoard 테스트', () => {
    const input = ['제로콜라-2', '바비큐립-1'];
    const order = new Order(input);
    const expectedResult = [
      { name: '제로콜라', amount: 2 },
      { name: '바비큐립', amount: 1 },
    ];
    const testResult = order.createOrderBoard();
    expect(testResult).toEqual(expectedResult);
  });
});
