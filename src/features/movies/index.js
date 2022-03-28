import React from 'react';
import { MovieList, MovieDetails, SearchBar } from './components';
import Loading from '../../components/utils/Loader';

export default (props) => {
  return (
    <>
      <SearchBar updateMovies={props.updateMovies} />
      <main className="d-flex flex-row flex-fill pt-4 p-2">
        {props.loaded ? (
          <>
            <MovieList
              movies={props.movies}
              updateSelectedMovie={props.updateSelectedMovie}
              favorites={props.favorites.map((movie) => movie.title)}
              addFavorite={props.addFavorite}
              removeFavorite={props.removeFavorite}
            />
            <MovieDetails movie={props.movies[props.selectedMovie]} />
          </>
        ) : (
          <Loading />
        )}
      </main>
    </>
  );
};
