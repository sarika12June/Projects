import React, { Component } from "react";
class ChildStatePropsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>props value is {this.props.lang}</h1>
      </div>
    );
  }
}

export default ChildStatePropsExample;
