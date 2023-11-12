import { checkIsInRange } from '../utils/ValidationUtils.js';

class Promotion {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
  }

  #validate(date) {
    if (!checkIsInRange(1, 31, date)) throw new Error('[ERROR]');
  }
}

const date = new Promotion(13);
console.log(date);

export default Promotion;
