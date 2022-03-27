import React, { Component } from 'react';
import { Formik } from 'formik';
import apiMovie, { apiMovieMap } from '../../config/api.movie';

export default class SearchBar extends Component {

    submit = (values, actions) => {
        const query = '?' + Object.keys(values).map(key => key + '=' + values[key] + '&').join('');
        apiMovie.get('/search/movie' + query)
                .then(res => res.data.results)
                .then(moviesApi => {
                    const movies = moviesApi.map(apiMovieMap);
                    this.props.updateMovies(movies);
                    actions.setSubmitting(false);
                })
                .catch(err => console.log(err))
    }

    render() {
        return(
            <Formik
                onSubmit={ this.submit }
                initialValues={ { query: '', language: 'en-US' } }
            >
            { ({handleSubmit, handleChange, handleBlur, isSubmitting}) => (
                <form className='d-flex p-2 m-2' onSubmit={ handleSubmit }>
                    <div className="form-group flex-grow-1 mx-2">
                        <input className='form-control' placeholder='Type a movie name…' type='search' name='query' onChange={ handleChange } onBlur={ handleBlur } />
                    </div>
                    <select className='form-select mx-2 w-25' name='language' onChange={ handleChange } onBlur={ handleBlur }>
                        <option value='en-US'>English</option>
                        <option value='fr-FR'>French</option>
                    </select>
                    <button className='text-nowrap btn btn-outline-primary' type="submit" disabled={ isSubmitting } >Find a movie</button>
                </form>
            ) }
            </Formik>
        )
    }
}