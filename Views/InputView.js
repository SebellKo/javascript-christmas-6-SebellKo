import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message';

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(MESSAGE.readDate);

    return Number(date);
  },

  async readOrder() {
    const order = await Console.readLineAsync(MESSAGE.readOrder);
    return order.split(',');
  },
};

export default InputView;
