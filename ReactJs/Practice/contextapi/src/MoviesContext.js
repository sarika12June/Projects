import React, { Component } from "react";

export const moviesProvider = React.createContext();
class MoviesContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      director: "srikanth",
      movie: "goodlife",
      chnangeMovie: this.chnangeMovie,
      chnangeDirector: this.chnangeDirector,
    };
  }

  chnangeMovie = (movie) => {
    this.setState({ movie: movie });
  };
  chnangeDirector = (dir) => {
    this.setState({ director: dir });
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
