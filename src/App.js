import React, { Component } from "react";
import { Provider } from "mobx-react";
import CounterProvider from "./components/Counter/CounterProvider";
import RootStore from "./models/RootStore";

const rootStore = new RootStore();

class App extends Component {
  render() {
    return (
      <Provider {...rootStore.getStores()}>
        <CounterProvider />
      </Provider>
    );
  }
}

export default App;
