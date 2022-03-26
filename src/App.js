import React, { Component } from 'react';
import { Header, MovieList, MovieDetails, Loader as Loading } from './components';
import dataMovies from './data';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null,
			selectedMovie: 0,
			// favorites: [],
			loaded: false
		};

		setTimeout(() => { // Simulate a loading time
			this.setState({
				movies: dataMovies,
				loaded: true
			} )
		}, 2000);
	}

	updateSelectedMovie = (index) => {
		this.setState({ selectedMovie: index });
	};

	render() {
		return (
			<div className="App d-flex flex-column">
				<Header />
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
