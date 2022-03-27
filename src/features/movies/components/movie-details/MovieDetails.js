import React, { Component } from 'react';

export default class MovieDetails extends Component {
	render() {
		return (
			<aside className="w-25 bg-light p-4 d-flex flex-column">
				<h2>{this.props.movie.title}</h2>
				<hr className="w-100" />
				<div>
					<img
						className="d-block mx-auto w-100"
						src={this.props.movie.img}
						alt={'Affiche du film ' + this.props.movie.title}
					/>
				</div>
				<hr className="w-100" />
				<p className="text-secondary">{this.props.movie.details}</p>
				<p className="mb-0">{this.props.movie.description}</p>
			</aside>
		);
	}
}
