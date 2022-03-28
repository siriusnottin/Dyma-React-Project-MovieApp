import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

apiMovie.interceptors.request.use((req) => {
  req.headers['Authorization'] =
    'Bearer ' + process.env.REACT_APP_TMDB_API_TOKEN;
  return req;
});

export default apiMovie;

export const apiMovieMap = (movie) => ({
  title: movie.title,
  img: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
  details: `${movie.release_date} | ${movie.vote_average} / 10 (${movie.vote_count} votes)`,
  description: movie.overview,
});
