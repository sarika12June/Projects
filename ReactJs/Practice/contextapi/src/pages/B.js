import React, { useContext } from "react";
import { moviesProvider } from "../MoviesContext";
function B() {
  const contextObj = useContext(moviesProvider);
  function changeMovie() {
    alert();
    contextObj.chnangeMovie("GodFather");
  }
  return (
    <div>
      <h1>B movie name {contextObj.movie}</h1>
      <button onClick={changeMovie}>changeMovie</button>
    </div>
  );
}

export default B;
