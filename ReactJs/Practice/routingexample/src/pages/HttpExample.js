import React, { useState } from "react";
import axios from "axios";
function HttpExample() {
  const [arrState, setArrState] = useState([]);
  const [dara, setArrState1] = useState([]);
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setArrState1(response);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }

  function getDataFromAxios() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("response " + JSON.stringify(response.data));
        setArrState(response.data);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }

  const titles = arrState.map((object, index) => {
    return (
      <h1>
        user id is {object.userId} and title is {object.title}
      </h1>
    );
  });
  return (
    <div>
      <button onClick={getData}>get Data using fetch </button>
      <button onClick={getDataFromAxios}>get Data using Axios </button>
      {titles}
      <hr></hr>
    </div>
  );
}

export default HttpExample;
