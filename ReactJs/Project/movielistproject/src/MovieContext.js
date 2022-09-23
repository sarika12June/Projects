import React from "react";

export const moviesProvider = React.createContext();
class MoviesContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      addMovie: this.addmovie,
    };
  }

  addmovie = (movie) => {
    this.setState({ movies: [...this.state.movies, movie] });
  };

  render() {
    return (
      <moviesProvider.Provider value={{ ...this.state }}>
        {this.props.children}
      </moviesProvider.Provider>
    );
  }
}

export default MoviesContext;
