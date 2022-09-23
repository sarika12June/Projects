import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function BodyFile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function registerUser() {
    var faceBookArr = JSON.parse(localStorage.getItem("faceBookArr") || "[]");
    var obj = {
      name: name,
      username: username,
      password: password,
    };
    faceBookArr.push(obj);
    localStorage.setItem("faceBookArr", JSON.stringify(faceBookArr));
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEK8dzNrE2CuE3eErnQfAAPEViZ1hBaAcmtg&usqp=CAU"
            alt=""
          ></img>
        </div>
        <div className="col-md-6">
          <h1>Register</h1>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <br />
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>{" "}
            <br />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <br />
            <input type="submit" value="signup"></input> <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BodyFile;
