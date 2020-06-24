class CounterViewModel {
  constructor(counterStore) {
    this.store = counterStore;
  };

  getCounter() {
    return this.store.getCounter();
  }

  increment() {
    this.store.increment();
  }

  decrement() {
    this.store.decrement();
  }
}

export default CounterViewModel;
