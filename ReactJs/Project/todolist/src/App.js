import "./App.css";
import React, { useState } from "react";

function App() {
  const [newtask, setnewtask] = useState("");
  const [tasks, settasks] = useState([]);

  function add() {
    if (newtask) {
      settasks([...tasks, newtask]);
    }
  }

  function deleteVal(indexVal) {
    var duplicateArr = [...tasks];
    duplicateArr.splice(indexVal, 1);
    settasks(duplicateArr);
  }

  const tasklist = tasks.map((object, index) => {
    return (
      <div>
        <h1>
          {index + 1} {object}
        </h1>
        <button
          onClick={() => {
            deleteVal(index);
          }}
        >
          delete
        </button>
      </div>
    );
  });
  return (
    <div
      className="App"
      style={{ textAlign: "center", marginTop: 20, marginLeft: 70 }}
    >
      <h1>ToList program</h1>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setnewtask(e.target.value)}
      ></input>
      <button type="submit" onClick={add}>
        Add
      </button>
      {tasklist}
    </div>
  );
}

export default App;
