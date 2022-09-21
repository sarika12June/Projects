import React from "react";
import "./App.css"; //local css
import CC from "./CC";
import Parent from "./nestedpropsfuncomp/Parent";
import ParentStatePropsExample from "./stateprops/ParentStatePropsExample";
function App() {
  return (
    <div className="App">
      <h1>Functional component </h1>
      <Parent></Parent>
      <hr></hr>
      <CC></CC>
      <ParentStatePropsExample></ParentStatePropsExample>
    </div>
  );
}
export default App;
