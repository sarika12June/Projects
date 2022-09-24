import React, { useState } from "react";
import axios from "axios";

function App() {
  const [names, setNames] = useState([]);
  const [userLanguage, setUserLanguage] = useState("");
  const [mutipleUserLanguage, setMutipleUserLanguage] = useState([]);
  function getData() {
    axios
      .get("api/helloworld/")
      .then((response) => {
        console.log("sucess " + response.data);
      })
      .catch((err) => {
        console.log("err " + err);
      });
  }

  function getNames() {
    axios
      .get("api/getNames")
      .then((response) => {
        debugger;
        console.log("sucess " + response.data);
        setNames(response.data);
      })
      .catch((err) => {
        console.log("err " + err);
      });
  }

  const nameList = names.map((name) => {
    return (
      <div>
        <h1>{name.name}</h1>
      </div>
    );
  });

  function postLanguage() {
    axios
      .post("api/postLanguage", { language: userLanguage })
      .then((response) => {
        debugger;
        console.log("sucess " + response.data);
        setMutipleUserLanguage([...mutipleUserLanguage, response.data]);
      })
      .catch((err) => {
        console.log("err " + err);
      });
  }

  const mutipleUserLanguageList = mutipleUserLanguage.map((language) => {
    return (
      <div>
        <h1>{language}</h1>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>client application is react </h1>
      <button onClick={getData}>getData</button>
      <button onClick={getNames}>getNames</button>

      {nameList}

      <hr></hr>
      <h1>server side application is node express js </h1>
      <input
        type="text"
        value={userLanguage}
        onChange={(e) => {
          setUserLanguage(e.target.value);
        }}
      ></input>

      <button onClick={postLanguage}>getLanguage</button>

      {mutipleUserLanguageList}
    </div>
  );
}

export default App;
