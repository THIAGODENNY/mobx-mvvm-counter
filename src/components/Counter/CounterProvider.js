import React from "react";
import { inject } from "mobx-react";
import CounterController from "./CounterController";
import CounterViewModel from "./CounterViewModel";
import RootStore from "../../models/RootStore";

@inject(RootStore.type.COUNTER_MODEL)
class CounterProvider extends React.Component {
  constructor(props) {
    super(props);
    const CounterModel = props[RootStore.type.COUNTER_MODEL];
    this.viewModel = new CounterViewModel(CounterModel);
  }

  render() {
    return <CounterController viewModel={this.viewModel} />;
  }
}

export default CounterProvider;
