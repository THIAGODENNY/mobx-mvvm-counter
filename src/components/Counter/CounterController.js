import React from 'react';
import CounterView from './CounterView';
import { observer } from 'mobx-react';

@observer class CounterController extends React.Component {
  increment = () => {
    this.props.viewModel.increment();
  }

  decrement = () => {
    this.props.viewModel.decrement();
  }

  render() {
    const { viewModel } = this.props;

    return (
      <CounterView 
        counter={viewModel.getCounter()}
        increment={this.increment}
        decrement={this.decrement}
      />
    )
  }
};

export default CounterController;
