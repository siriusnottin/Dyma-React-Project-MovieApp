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

/**
 * A method to round votes count (17000 -> 17k)
 * @param {number} votes
 * @returns string
 */
export const formatVotes = (votes) =>
  votes > 999 ? (votes / 1000).toFixed(1) + 'k' : votes;

/**
 * A method to format date (2019-10-10 -> 10/10/2019)
 * @param {string} date
 * @returns string
 */
export const formatDate = (date) => {
  const [year, month] = date.split('-');
  return `${month}/${year}`;
};

/**
 * A method to format the details of a movie
 * Example: 2022-03-01 | 7.5 / 10 (17k votes)
 * @param {object} movie
 * @returns string
 */
export const formatMovieDetails = (movie) =>
  `${formatDate(movie.release_date)} | ${
    movie.vote_average
  } / 10 (${formatVotes(movie.vote_count)} votes)`;

/**
 * A method to format a movie object to be used in the MovieList component
 * @param {object} movie
 * @returns object
 */
export const apiMovieMap = (movie) => ({
  title: movie.title,
  img: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
  details: formatMovieDetails(movie),
  description: movie.overview,
});
