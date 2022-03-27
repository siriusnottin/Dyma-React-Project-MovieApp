import React, { Component } from 'react';
import { Header, MovieList, MovieDetails, Loader as Loading, SearchBar } from './components';
import apiMovie, { apiMovieMap } from './config/api.movie';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null,
			selectedMovie: 0,
			// favorites: [],
			loaded: false
		};
	}

	updateSelectedMovie = (index) => {
		this.setState({ selectedMovie: index });
	};

	componentDidMount() {
		apiMovie.get('/discover/movie')
				.then(res => res.data.results)
				.then(moviesApi => {
					const movies = moviesApi.map(apiMovieMap);
					this.updateMovies(movies);
				})
				.catch(err => console.log(err))
	}

	updateMovies = (movies) => {
		this.setState({ 
			movies,
			loaded: true
		 });
	}

	render() {
		return (
			<div className="App d-flex flex-column">
				<Header />
				<SearchBar updateMovies={ this.updateMovies } />
				<main className="d-flex flex-row flex-fill pt-4 p-2">
				{ this.state.loaded ? (
					<>
					<MovieList
					movies={this.state.movies}
					updateSelectedMovie={this.updateSelectedMovie}
					/>
				<MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
					</>
				) : (
					<Loading />
				) }
					
				</main>
			</div>
		);
	}
}

export default App;
