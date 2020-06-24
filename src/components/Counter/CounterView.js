import React from 'react';

class CounterView extends React.Component {
  render() {
    const {
      counter,
      increment,
      decrement
    } = this.props;

    return (
      <React.Fragment>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </React.Fragment>
    )
  };
}

export default CounterView;
