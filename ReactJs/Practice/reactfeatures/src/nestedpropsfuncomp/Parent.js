import React from "react";
import Child from "./Child";
function Parent() {
  function setName() {
    alert("setname ");
  }
  function onTextChange() {
    alert("on Text change ");
  }
  return (
    <div>
      <h1>parent component</h1>
      <Child lang="hindi"></Child>
      <input type="text" onChange={onTextChange}></input>
      <button style={{ color: "red" }} onClick={setName}>
        function name change
      </button>
    </div>
  );
}

export default Parent;
