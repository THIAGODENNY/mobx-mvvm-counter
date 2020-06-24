import CounterModel from './domain/CounterModel';

class RootStore {
  static type = {
    COUNTER_MODEL: 'counterModel'
  }

  constructor() {
    this.counterModel = new CounterModel();
  }

  getStores = () => ({
    [RootStore.type.COUNTER_MODEL]: this.counterModel,
  })
};

export default RootStore;
