import store from '../../js/store/index.js';

export default class Count {

  private element: HTMLElement = document.querySelector('.header');

  constructor() {
    store.subscribe(() => this.render());

    // console.log(this.element);
    console.log('Count - store items:', store.state.items);

  }

  render = () => {
    console.log(store.state.items);

    let suffix = store.state.items.length !== 1 ? 's' : '';
    let emoji = store.state.items.length > 0 ? '🙌' : '😢';

    //@ts-ignore
    this.element.innerHTML = `
        <small>You've done</small>
        <span>${store.state.items.length}</span>
        <small>thing${suffix} today ${emoji}</small>
    `;
  }
}