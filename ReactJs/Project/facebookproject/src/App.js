import React from "react";
import Navbar from "./pages/Navbar";
import BodyFile from "./pages/BodyFile";
import Dashboard from "./pages/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<BodyFile />} exact></Route>
          <Route path="/dashboard" element={<Dashboard />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
