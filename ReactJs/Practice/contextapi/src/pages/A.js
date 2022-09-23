import React, { useContext } from "react";
import { moviesProvider } from "../MoviesContext";

function A() {
  const contextObj = useContext(moviesProvider);
  function changeDir() {
    alert();
    debugger;
    contextObj.chnangeDirector("mohanRaja");
  }
  return (
    <div>
      <h1>A movie dir {contextObj.director}</h1>
      <button onClick={changeDir}>director</button>
    </div>
  );
}

export default A;
