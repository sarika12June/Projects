import "./App.css";
import Navbar from "./pages/Navbar";
import AddMovie from "./pages/AddMovie";
import MovieList from "./pages/MovieList";
import MoviesContext from "./MovieContext";
function App() {
  return (
    <div className="App">
      <MoviesContext>
        <Navbar></Navbar>
        <AddMovie></AddMovie>
        <MovieList></MovieList>
      </MoviesContext>
    </div>
  );
}

export default App;
