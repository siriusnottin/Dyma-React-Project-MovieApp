import React from 'react';
import { FavoriteList } from './components';
import Loading from '../../components/utils/Loader';

export default (props) => {
  return (
    <main className="d-flex flex-row flex-fill pt-4 p-2">
      {props.loaded ? (
        <FavoriteList
          favorites={props.favorites}
          removeFavorite={props.removeFavorite}
        />
      ) : (
        <Loading />
      )}
    </main>
  );
};
