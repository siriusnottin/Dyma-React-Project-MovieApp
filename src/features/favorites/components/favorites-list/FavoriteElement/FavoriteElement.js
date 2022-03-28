import React, { Component } from 'react';
import Style from './FavoriteElement.module.scss';

export default class FavoriteElement extends Component {
  render() {
    return (
      <article className={'d-flex flex-row bg-light ' + Style.container}>
        <img
          width="185"
          src={this.props.favorite.img}
          alt={'Affiche du film ' + this.props.favorite.title}
        />
        <div className="flex-fill d-flex flex-column p-3">
          <h2>{this.props.favorite.title}</h2>
          <hr className="w-100" />
          <p className="flex-fill">{this.props.favorite.details}</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-small btn-danger"
              onClick={() =>
                this.props.removeFavorite(this.props.favorite.title)
              }
            >
              Remove 💔
            </button>
          </div>
        </div>
      </article>
    );
  }
}
