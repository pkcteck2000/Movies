import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IMovieAPI } from '../../../shared/imovies-api';
import { MoviesService } from '../../services/movies.service';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {

  movieId: any;
  movieDetails;
  favoriteMovieDetails;
  //trailerLink: SafeResourceUrl;
  //trailerBaseUrl = "https://www.youtube.com/embed/";
  isFavorite = false;

  isLoading = true;

  faStar = faStar;
  faHeart = faHeart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer
  ) { }

  addToFavorits = (movie) => {
    this.moviesService.addToFavorits(movie);
    console.log(movie);
    this.getToFavorits();
  }

  getToFavorits = () => {
    this.favoriteMovieDetails = this.moviesService.getToFavorits();
    if(this.favoriteMovieDetails){
      this.favoriteMovieDetails.forEach((movie) => {
        if (movie.imdbID === this.movieDetails.imdbID) {
          this.isFavorite = true;
        }
      }
      );
    }
  }
  
  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.moviesService.getMovie(this.movieId).subscribe(response => {
      this.movieDetails = response;
      this.isLoading = false;
      this.getToFavorits();
    });
    
    //this.trailerLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.trailerBaseUrl + this.movieDetails.trailerLink);
  }
}
