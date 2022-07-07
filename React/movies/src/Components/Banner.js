import React, { Component } from 'react'
import { movies } from './getMovies'
export default class Banner extends Component {
    render() {
        // console.log(movies.results[0]);
        let movie = movies.results[0];
        // let movie = "";
        return (
          <>
            {movie == "" ? (
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div className="card banner-card">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  className="card-img-top banner-img"
                  alt="..."
                />
                {/* <div className="card-body "> */}
                <h5 className="card-title banner-title">
                  {movie.original_title}
                </h5>
                <p className="card-text banner-text">{movie.overview}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                {/* </div> */}
              </div>
            )}
          </>
        );
  }
}
