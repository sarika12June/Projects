import React from "react";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import LocalStroageSrikant from "./pages/LocalStroageSrikant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/contactus" element={<Contact />} exact />
          <Route path="/services" element={<Service />} exact />
          <Route
            path="/LocalStroageSrikant"
            element={<LocalStroageSrikant />}
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
