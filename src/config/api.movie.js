import * as axios from 'axios';

const apiMovie = axios.create({

    baseURL: 'https://api.themoviedb.org/3/',

});

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = "Bearer " + process.env.REACT_APP_TMDB_API_TOKEN;
    return req;
});

export default apiMovie;