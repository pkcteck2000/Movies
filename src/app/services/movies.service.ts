import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import  { IMovieAPI } from '../../shared/imovies-api';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  apiKey = 'apikey=50b31867';
  baseUrl = 'http://www.omdbapi.com/';

  movies: IMovieAPI[];
  movie: IMovieAPI;
  existingFavoritMovieList;

  constructor(private httpClient: HttpClient) { }

  getMovies(page): Observable<any> {
    const url = `${this.baseUrl}?s=john&page=${page}&${this.apiKey}`;
    return this.httpClient.get(url);
  }

  getMovie(id): Observable<any> {
    const url = `${this.baseUrl}?i=${id}&${this.apiKey}`;
    console.log(url)
    return this.httpClient.get(url);
  }

  /*addMovie = (movie) => {
    this.movies.unshift(movie);
  }

  deleteMovie = (movie) => {
    this.movies.forEach((item, index) => {
      if (item === movie) {
        this.movies.splice(index, 1)
      }
    });
  }

  getMovieList = (): IMovies[] => {
    this.movies = moviesList
    return this.movies;
  }

  getMovie = (movieId): IMovies => {
    moviesList.forEach((movie) => {
      if (movie.id === parseInt(movieId)) {
        this.movie = movie;
      }
    });
    return this.movie;
  }

  addToFavorits = (movie) => {
    this.existingFavoritMovieList = JSON.parse(localStorage.getItem('movielist')) || []
    this.existingFavoritMovieList.push(movie);
    localStorage.setItem('movielist', JSON.stringify(this.existingFavoritMovieList));
  }

  getToFavorits() {
    this.existingFavoritMovieList = JSON.parse(localStorage.getItem('movielist'));
    return this.existingFavoritMovieList;
  }

  removeFavorit(movie) {
    this.existingFavoritMovieList = JSON.parse(localStorage.getItem('movielist'));
    this.existingFavoritMovieList.forEach((item, index) => {
      if (item.id === movie.id) {
        this.existingFavoritMovieList.splice(index, 1)
        //console.log(movie.id)
      }
    });
    localStorage.removeItem('movielist');
    localStorage.setItem('movielist', JSON.stringify(this.existingFavoritMovieList));
  }*/
}
