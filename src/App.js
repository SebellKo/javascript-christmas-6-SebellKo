import PromotionController from '../Controller/PromotionController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new PromotionController();
  }
  async run() {
    await this.#controller.start();
  }
}

export default App;
