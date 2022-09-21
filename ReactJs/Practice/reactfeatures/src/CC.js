import React, { Component } from "react";
class CC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  onmouse = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }} onMouseOver={this.onmouse}>
          Class Component
        </h1>
      </div>
    );
  }
}
export default CC;
