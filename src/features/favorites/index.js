import React from 'react';
import { FavoriteList } from './components';

export default (props) => {
  return (
    <main className="d-flex flex-row flex-fill pt-4 p-2">
      <FavoriteList
        favorites={props.favorites}
        removeFavorite={props.removeFavorite}
      />
    </main>
  );
};
