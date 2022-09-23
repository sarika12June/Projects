import React, { useContext } from "react";
import { moviesProvider } from "../MovieContext";

function Navbar() {
  const contextObj = useContext(moviesProvider);
  return (
    <div>
      <h1>No of movies are {contextObj.movies.length}</h1>
    </div>
  );
}

export default Navbar;
