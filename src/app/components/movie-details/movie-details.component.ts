import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IMovies } from '../../../shared/imovies';
import { MoviesService } from '../../services/movies.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: any;
  movieDetails: IMovies;
  trailerLink: SafeResourceUrl;

  faStar = faStar;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.movieDetails = this.moviesService.getMovie(this.movieId);
    this.trailerLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.movieDetails.trailerLink);
  }
  
}
