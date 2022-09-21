import React, { Component } from "react";
import ChildStatePropsExample from "./ChildStatePropsExample";
class ParentStatePropsExample extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    player: "sachin",
    country: "india",
  };
  changeCountryName = () => {
    this.setState({ player: "abc", country: "Aus" });
  };
  onTextChange = (event) => {
    this.setState({ country: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>
          class state example is {this.state.player} and the country{" "}
          {this.state.country}
        </h1>
        <ChildStatePropsExample
          lang={this.state.country}
        ></ChildStatePropsExample>
        <input
          type="text"
          name="country"
          value={this.state.country}
          onChange={this.onTextChange}
        ></input>
        <br></br>
        <br></br>
        <button onClick={this.changeCountryName}>
          change player and country
        </button>
      </div>
    );
  }
}

export default ParentStatePropsExample;
