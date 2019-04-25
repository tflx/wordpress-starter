import store from '../../js/store/index.js';

export default class Header {

  private el: HTMLElement = document.querySelector('.header');

  constructor() {//controller: any) {
    this.init();
  }

  private init() {
    if (this.el) {
      console.log('yay header!');

      setTimeout(() => {
        store.dispatch('addItem', 'bum');

      }, 2000);

      setTimeout(() => {
        store.dispatch('clearItem', 'bum');

      }, 4000);
    }
  }
}