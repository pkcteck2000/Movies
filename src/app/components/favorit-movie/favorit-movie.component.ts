import { Component, OnInit } from '@angular/core';

import { IMovies } from '../../../shared/imovies';
import { MoviesService } from '../../services/movies.service';
import { faPlus, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorit-movie',
  templateUrl: './favorit-movie.component.html',
  styleUrls: ['./favorit-movie.component.scss']
})
export class FavoritMovieComponent implements OnInit {

  favoriteMovies;
  //FontAwesome icons
  faPlus = faPlus;
  faStar = faStar;
  faTimes = faTimesCircle;
  
  constructor(
    private moviesService: MoviesService
  ) { }

  removeFavorit = (movie) => {
    this.moviesService.removeFavorit(movie);
    this.favoriteMovies = this.moviesService.getToFavorits();
  }

  ngOnInit(): void {
    this.favoriteMovies = this.moviesService.getToFavorits();
  }

}
