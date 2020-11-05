import { Component, OnInit } from '@angular/core';

import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { IMovies } from '../../../shared/imovies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: IMovies[];

  //FontAwesome icons
  faPlus = faPlus;
  faStar = faStar;
  
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.movies = this.moviesService.getMovieList();
  }

}
