import React, { useState } from "react";
import "./Navbar.css"; //local css
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function logoutDetaiols() {
    alert();
    localStorage.removeItem("logedin");
    navigate("/");
  }
  function login() {
    localStorage.setItem("logedin", "false");
    var arr = localStorage.getItem("faceBookArr");
    if (arr.includes(username) && arr.includes(password)) {
      alert("sucess");
      localStorage.setItem("logedin", "true");
      navigate("/dashboard");
      window.location.reload(true);
    } else {
      localStorage.setItem("logedin", "false");
    }
  }
  return (
    <div>
      <div className="row nav">
        <div className="col-md-6">
          <h1>Facebook</h1>
        </div>

        {(() => {
          if (localStorage.getItem("logedin") === "true") {
            return (
              <div className="col-md-6">
                <button onClick={logoutDetaiols}>logout</button>
              </div>
            );
          } else {
            return (
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
                <input
                  type="text"
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
                <button onClick={login}>Login</button>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default Navbar;
