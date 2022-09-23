import React from "react";
import A from "./pages/A";
import B from "./pages/B";
import MoviesContext from "./MoviesContext";
function App() {
  return (
    <div className="App">
      <MoviesContext>
        <A></A>
        <B></B>
      </MoviesContext>
    </div>
  );
}

export default App;
