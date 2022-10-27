import React, { Component } from "react";
import Hoc from "./HOC";

class App1 extends Component {
  render() {
    return (
      <div>
        <h2>HOC Example</h2>
        JavaTpoint provides best CS tutorials.
      </div>
    );
  }
}
App1 = Hoc(App1);
export default App1;
