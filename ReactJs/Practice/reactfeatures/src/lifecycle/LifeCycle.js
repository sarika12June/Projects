import React, { Component } from "react";
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount() {
    alert("componentDidMount");
  }
  componentWillMount() {
    alert("componentWillMount");
  }
  render() {
    return (
      <div>
        <hr></hr>
        <h1>life cycle methods</h1>
      </div>
    );
  }
}

export default LifeCycle;
