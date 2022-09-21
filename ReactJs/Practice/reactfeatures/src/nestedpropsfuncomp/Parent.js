import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [name, setStateName] = useState("srikanth");

  function setName() {
    alert(name);
  }
  function onTextChange(event) {
    setStateName(event.target.value);
  }
  return (
    <div>
      <h1>parent component</h1>
      <Child lang={name}></Child>
      <input type="text" value={name} onChange={onTextChange}></input>
      <button style={{ color: "red" }} onClick={setName}>
        set name
      </button>
    </div>
  );
}

export default Parent;
