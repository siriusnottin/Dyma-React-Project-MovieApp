import React, { Component } from 'react';
import MovieElement from './MovieElement';

export default class MovieList extends Component {
	render() {
		return (
			<main className="w-75 d-flex flex-row flex-wrap align-content-start">
				{ this.props.movies.map( (movie, index) => (
					<MovieElement 
						key={movie.title + index}
						movie={ movie }
						updateSelectedMovie={ () => {this.props.updateSelectedMovie(index)} }
					/>
				))}
			</main>
		);
	}
}
