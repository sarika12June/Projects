import React, { Component } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { counter: 0 };
  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  subtract = () => {
    {
      if (this.state.counter > 0) {
        this.setState({ counter: this.state.counter - 1 });
      }
    }
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "white" }}>
          {this.state.counter}
        </h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.subtract}>SUBTRACT</button>
      </div>
    );
  }
}

export default Counter;
