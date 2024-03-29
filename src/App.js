import React, { Component } from 'react';
import { Header } from './components';
import apiMovie, { apiMovieMap } from './config/api.movie';
import apiFirebase from './config/api.firebase';
import Movies from './features/movies';
import Favorites from './features/favorites';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      loaded: false,
      selectedMovie: 0,
      favorites: null,
    };
  }

  updateSelectedMovie = (index) => {
    this.setState({ selectedMovie: index });
  };

  componentDidMount() {
    apiMovie
      .get('/discover/movie')
      .then((res) => res.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
        this.updateMovies(movies);
      })
      .catch((err) => console.log(err));

    apiFirebase.get('favorites.json').then((res) => {
      let favorites = res.data ? res.data : [];
      this.updateFavorites(favorites);
    });
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.favorites ? true : false,
    });
  };

  updateFavorites = (favorites) => {
    this.setState({
      favorites,
      loaded: this.state.movies ? true : false,
    });
  };

  addFavorite = (title) => {
    const favorites = this.state.favorites.slice();
    const movie = this.state.movies.find((movie) => movie.title === title);
    favorites.push(movie);
    this.setState({ favorites }, () => this.saveFavorite());
  };

  removeFavorite = (title) => {
    const favorites = this.state.favorites.slice();
    const index = this.state.favorites.findIndex(
      (movie) => movie.title === title
    );
    favorites.splice(index, 1);
    this.setState({ favorites }, () => this.saveFavorite());
  };

  saveFavorite = () => {
    apiFirebase.put('favorites.json', this.state.favorites);
  };

  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Routes>
            <Route
              path="/movies"
              element={
                <Movies
                  loaded={this.state.loaded}
                  movies={this.state.movies}
                  updateMovies={this.updateMovies}
                  selectedMovie={this.state.selectedMovie}
                  updateSelectedMovie={this.updateSelectedMovie}
                  addFavorite={this.addFavorite}
                  removeFavorite={this.removeFavorite}
                  favorites={this.state.favorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  loaded={this.state.loaded}
                  favorites={this.state.favorites}
                  removeFavorite={this.removeFavorite}
                />
              }
            />
            <Route path="*" element={<Navigate to="/movies" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
