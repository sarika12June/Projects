import React, { useContext } from "react";
import { moviesProvider } from "../MovieContext";

function MovieList() {
  const contextObj = useContext(moviesProvider);
  const mapObject = contextObj.movies.map((object, index) => {
    return (
      <div>
        <h1>
          {index + 1} ::: movies name is {object.movieName} and director name is{" "}
          {object.directotrName}
        </h1>
      </div>
    );
  });
  return (
    <div>
      <h1>MovieList</h1>
      {mapObject}
    </div>
  );
}

export default MovieList;
