import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      counter: 10
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </>
    );
  }
}

export default StateExample;
