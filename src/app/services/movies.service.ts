import { Injectable } from '@angular/core';

import { moviesList } from '../../shared/moviesList';
import { IMovies } from '../../shared/imovies';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  movies: IMovies[];
  movie: IMovies;

  addMovie = (movie) => {
    this.movies.unshift(movie);
  }

  deleteMovie = (movie) => {
    this.movies.forEach((item, index) => {
      if (item === movie) {
        this.movies.splice(index, 1)
      }
    });
  }

  getMovieList = ():IMovies[]  => {
    this.movies = moviesList
    return this.movies;
  }

  getMovie = (movieId):IMovies  => {
    moviesList.forEach((movie) => {
      if(movie.id === parseInt(movieId)) {
        this.movie = movie;
      }
    });
    return this.movie;
  }

  constructor() { }
}
