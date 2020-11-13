import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IMarvelMovies } from '../../../shared/imovies';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {

  movieId: any;
  movieCharacters: Observable<any>;
  movieDetails: Observable<any>;
  trailerLink: SafeResourceUrl;
  trailerBaseUrl = "https://www.youtube.com/embed/";

  isCLoading = true;
  isDLoading = true;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    //private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.isCLoading = true;
    this.isDLoading = true;
    
    this.movieId = this.route.snapshot.paramMap.get('id');
    //this.trailerLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.trailerBaseUrl + this.movieDetails.trailerLink);

    this.moviesService.getMovieCharecters(this.movieId).subscribe(response => {
      //console.log("Response", response.data.results);
      //this.movieCharacters = response.data.results;
      this.movieCharacters = response.data.results.filter(word => word.thumbnail.path.substr(-19) != 'image_not_available');
      this.isCLoading = false;
    });

    this.moviesService.getMovieDetails(this.movieId).subscribe(response => {
      //console.log("Response", response);
      this.movieDetails = response.data.results[0];
      this.isDLoading = false;
    });

  }
}
