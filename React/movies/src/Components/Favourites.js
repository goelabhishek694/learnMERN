import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../secrets";
export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genre: [],
      currGenre: "All Genre",
    };
  }

  async componentDidMount() {
    // let ans = await axios.get(
    //   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}d&language=en-US&page=1`
    // );
    let results = JSON.parse(localStorage.getItem("movies"));
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let genreArr = [];
    results.map((movieObj) => {
      if (!genreArr.includes(genreId[movieObj.genre_ids[0]])) {
        genreArr.push(genreId[movieObj.genre_ids[0]]);
      }
    });

    genreArr.unshift("All Genre");
    console.log(genreArr);
    this.setState({
      movies: [...results], //[{},{},{}]
      genre: [...genreArr],
    });
  }

  handleCurrGenre = (genre) => {
    this.setState({
      currGenre: genre
    });
    // movies filter movies setstate
  }

  render() {
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let filteredMovies = [];
    if (this.state.currGenre != "All Genre") {
      filteredMovies = this.state.movies.filter(
        (movieObj) => genreId[movieObj.genre_ids[0]]==this.state.currGenre
      );
    }
    else filteredMovies=this.state.movies;

    return (
      <div class="row">
        <div class="col-3 favourites-list">
          <ul class="list-group">
            {this.state.genre.map((genre) =>
              this.state.currGenre == genre ? (
                <li class="list-group-item active" aria-current="true">
                  {genre}
                </li>
              ) : (
                <li
                  class="list-group-item"
                  aria-current="true"
                  onClick={() => this.handleCurrGenre(genre)}
                >
                  {genre}
                </li>
              )
            )}
          </ul>
        </div>
        <div class="col favourites-table">
          <div class="row">
            <input type="text" className="col-8" placeholder="Search"></input>
            <input type="number" className="col-4" placeholder="5"></input>
          </div>
          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Rating</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {filteredMovies.map((movieObj) => (
                  <tr>
                    <td scope="row">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                        style={{ width: "8rem" }}
                      />
                      {movieObj.original_title}
                    </td>
                    <td>{genreId[movieObj.genre_ids[0]]}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{movieObj.vote_average}</td>
                    <td>
                      <button class="btn btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
