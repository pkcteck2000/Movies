import { Injectable } from '@angular/core';

import { moviesList } from '../../shared/moviesList';
import { IMovies } from '../../shared/imovies';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  getMovieList = ():IMovies[]  => {
    return moviesList;
  }

  constructor() { }
}
