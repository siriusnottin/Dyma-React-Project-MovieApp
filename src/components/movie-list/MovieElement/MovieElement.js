import React, { Component } from 'react';
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {
	mouseClick = () => {
		this.props.updateSelectedMovie(this.props.movie.title);
	};

	render() {
		return (
			<article onClick={this.mouseClick} className={ "d-flex flex-row bg-light " + Style.container }>
				<img
					width="185"
					src={this.props.movie.img}
					alt={'Affiche du film ' + this.props.movie.title} />
				<div className="flex-fill d-flex flex-column p-3">
					<h2>{this.props.movie.title}</h2>
					<hr className="w-100" />
					<p>{this.props.movie.details}</p>
				</div>
			</article>
		);
	}
}
