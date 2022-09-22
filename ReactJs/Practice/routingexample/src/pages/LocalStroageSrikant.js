import React, { useState } from "react";
function LocalStroageSrikant() {
  const [userName, setuserName] = useState("");
  const [age, setAge] = useState("");

  function save() {
    var arr = JSON.parse(localStorage.getItem("arr") || "[]");
    var obj = {
      name: userName,
      age: age,
    };
    arr.push(obj);
    localStorage.setItem("arr", JSON.stringify(arr));
  }

  return (
    <div>
      <h1>LocalStroage</h1>
      <input
        type="text"
        onChange={(e) => {
          setuserName(e.target.value);
        }}
        value={userName}
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setAge(e.target.value);
        }}
        value={age}
      ></input>
      <button onClick={save}>save to LocalStroageAPI</button>
      <h1>{localStorage.getItem("arr")}</h1>
    </div>
  );
}
export default LocalStroageSrikant;
