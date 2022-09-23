import React, { useContext, useState } from "react";
import { moviesProvider } from "../MovieContext";

function AddMovie() {
  const [name, setMoviename] = useState("");
  const [director, setDirector] = useState("");
  const contextObj = useContext(moviesProvider);
  function addMovie() {
    var obj = {
      movieName: name,
      directotrName: director,
    };

    contextObj.addMovie(obj);
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setMoviename(e.target.value);
        }}
      ></input>

      <input
        type="text"
        value={director}
        onChange={(e) => {
          setDirector(e.target.value);
        }}
      ></input>
      <button onClick={addMovie}>AddMovie</button>
    </div>
  );
}

export default AddMovie;
