import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IMarvelMovies } from '../../../shared/imovies';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
  trailerBaseUrl = "https://www.youtube.com/embed/VWRMIO8NE_g";

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
 
  isCLoading = true;
  isDLoading = true;
  bannerTaxt = "Please Wait...";

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    //private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.isCLoading = true;
    this.isDLoading = true;
    
    
    this.movieId = this.route.snapshot.paramMap.get('id');
    //this.trailerLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.trailerBaseUrl);

    
    this.moviesService.getMovieCharecters(this.movieId).subscribe(response => {
      this.movieCharacters = response.data.results.filter(word => word.thumbnail.path.substr(-19) != 'image_not_available');
      this.isCLoading = false;
    });

    this.moviesService.getMovieDetails(this.movieId).subscribe(response => {
      this.movieDetails = response.data.results[0];
      this.bannerTaxt = response.data.results[0].title;
      this.isDLoading = false;
    });

  }
}
