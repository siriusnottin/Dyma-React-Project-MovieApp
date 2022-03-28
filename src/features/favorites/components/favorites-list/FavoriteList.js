import React, { Component } from 'react';
import FavoriteElement from './FavoriteElement/FavoriteElement';

export default class FavoriteList extends Component {
  render() {
    return (
      <main className="w-75 d-flex flex-row flex-wrap justify-content-center">
        {this.props.favorites.map((favorite, index) => (
          <FavoriteElement
            key={favorite.title + index}
            favorite={favorite}
            removeFavorite={this.props.removeFavorite}
          />
        ))}
      </main>
    );
  }
}
