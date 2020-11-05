import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMovies } from '../../../shared/imovies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: any;
  movieDetails: IMovies;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.movieDetails = this.moviesService.getMovie(this.movieId);
  }
  
}
