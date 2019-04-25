import 'whatwg-fetch'

import Header from '../modules/Header/Header'
import Count from '../modules/Count/Count'

export class Main {
  private header: Header;
  private count: Count;

  constructor() {
    document.addEventListener('DOMContentLoaded', () => this.init());

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }

  private async logger() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json();
    console.log(json);
  }

  private init() {
    console.log('init');
    this.logger();
    this.header = new Header();
    this.count = new Count();
  }
}


new Main();