import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IMarvelMovies } from '../../../shared/imovies';
import { MoviesService } from '../../services/movies.service';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {

  movieId: any;
  movieDetails: IMarvelMovies;
  trailerLink: SafeResourceUrl;
  trailerBaseUrl = "https://www.youtube.com/embed/";
  movies;

  faStar = faStar;
  faHeart = faHeart;

  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    //private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    //this.movieDetails = this.moviesService.getMovie(this.movieId);
    //this.trailerLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.trailerBaseUrl + this.movieDetails.trailerLink);

    this.moviesService.getMovieList().subscribe(response => {
      //console.log("Response", response);
      //this.movies = response;
      //this.movies = response.data.results.filter(word => word.thumbnail.path.substr(-19) != 'image_not_available');
    });

  }
}
