import React, { Component } from 'react';
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {
  mouseClick = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  };

  render() {
    return (
      <article
        onClick={this.mouseClick}
        className={'d-flex flex-row bg-light ' + Style.container}
      >
        <img
          width="185"
          src={this.props.movie.img}
          alt={'Affiche du film ' + this.props.movie.title}
        />
        <div className="flex-fill d-flex flex-column p-3">
          <h2>{this.props.movie.title}</h2>
          <hr className="w-100" />
          <p className="flex-fill">{this.props.movie.details}</p>
          <div className="d-flex justify-content-end">
            {this.props.isFavorite ? (
              <button
                className="btn btn-small btn-danger"
                onClick={() =>
                  this.props.removeFavorite(this.props.movie.title)
                }
              >
                Remove 💔
              </button>
            ) : (
              <button
                className="btn btn-small btn-outline-primary"
                onClick={() => this.props.addFavorite(this.props.movie.title)}
              >
                Favorite ❤️
              </button>
            )}
          </div>
        </div>
      </article>
    );
  }
}
