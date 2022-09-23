import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Home() {
  const [arrState, setArrState] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setArrState(response.data.meals);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);
  const titles = arrState.map((object, index) => {
    return (
      <div className="col-md-4">
        <p>{object.strMeal}</p>
        <img src={object.strMealThumb}></img>
      </div>
    );
  });
  return <div class="row">{titles}</div>;
}

export default Home;
