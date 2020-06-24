import { observable, action } from 'mobx';

class CounterModel {
  @observable counter = 0;

  @action increment() {
    this.counter++;
  }

  @action decrement() {
    this.counter--;
  }

  getCounter() {
    return this.counter;
  }
}

export default CounterModel;
