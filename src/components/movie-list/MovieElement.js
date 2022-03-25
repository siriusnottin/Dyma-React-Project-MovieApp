import React, { Component } from 'react';

export default class MovieElement extends Component {
	mouseEnter = () => {
		this.props.updateSelectedMovie(this.props.movie.title);
	};

	render() {
		return (
			<div className="w-50 p-2" onMouseEnter={this.mouseEnter}>
				<article className="border d-flex">
					<img
						width="150"
						heigh="200"
						src={this.props.movie.img}
						alt={'Affiche du film ' + this.props.movie.title}
					/>
					<div className="flex-fill d-flex flex-column p-3">
						<h2>{this.props.movie.title}</h2>
						<hr className="w-100" />
						<p>{this.props.movie.details}</p>
					</div>
				</article>
			</div>
		);
	}
}
