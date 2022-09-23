import "./App.css";
import React from "react";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Contactus from "./Pages/Contactus";
import Order from "./Pages/Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/contactus" element={<Contactus />} exact />
          <Route path="/order" element={<Order />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
