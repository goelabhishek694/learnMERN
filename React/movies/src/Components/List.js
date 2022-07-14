import React, { Component } from "react";
// import { movies } from "./getMovies";
import axios from 'axios'
import API_KEY from "../secrets";
export default class List extends Component {
  constructor() {
    super();
    // console.log("constructor is called");
    this.state = {
      hover: "",
      parr: [1], //ab tak main konse page par hu , or what page result am i showing ,
      currPage: 1,
      movies:[],
    };
  }

    handleEnter = (id) => {
        this.setState({
          hover: id
      })
  };

  handleLeave = () => {
      this.setState({
        hover: '',
      });
  };

  async componentDidMount() {
    // console.log("componentDidMount is called");
    // console.log(API_KEY);
    let ans = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}d&language=en-US&page=${this.state.currPage}`
    );
    // console.log(ans.data);
    this.setState({
      movies:[...ans.data.results] //[{},{},{}]
    })
  }
  render() {
    // console.log("render is called");
    // let movie = movies.results; //fetch
    return (
      <>
        {this.state.movies.length == 0 ? (
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => (
                <div
                  className="card movie-card"
                  onMouseEnter={() => this.handleEnter(movieObj.id)}
                  onMouseLeave={this.handleLeave}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top banner-img"
                    alt="..."
                    style={{ height: "40vh" }}
                  />
                  {/* <div className="card-body "> */}
                  <h5 className="card-title movie-title">
                    {movieObj.original_title}
                  </h5>
                  {/* <p className="card-text movie-text">
                        {movieObj.overview}
                      </p> */}
                  <div className="button-wrapper">
                    {this.state.hover == movieObj.id && (
                      <a href="#" class="btn btn-danger movie-button">
                        Add to Favourites
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                    </li>
                    {
                      this.state.parr.map(pageNum => (
                        <li class="page-item">
                          <a class="page-link" href="#">
                            {pageNum}
                          </a>
                        </li>
                      ))
                    }
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}

