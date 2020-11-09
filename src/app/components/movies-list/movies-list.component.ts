import { Component, OnInit } from '@angular/core';

import { faPlus, faStar, faTimesCircle, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IMovieAPI } from '../../../shared/imovies-api';
import { MoviesService } from '../../services/movies.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies;
  id: number;
  addMovieForm: any;
  myForm: FormGroup;
  isLoading = true;
  pageNo = 1;

  //FontAwesome icons
  faPlus = faPlus;
  faStar = faStar;
  faTimes = faTimesCircle;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  isFormHidden: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private searchService: SearchService,
    private formBuilder: FormBuilder
  ) {
    this.addMovieForm = this.formBuilder.group({
      title: "",
      year: "",
      posterImage: "",
      rating: 0.0,
      trailerLink: "",
      description: ""
    });
  }

  /*generateId = (): number => {
    return Math.floor(Math.random() * 1000);
  }

  addMovie = (formData) => {
    this.id = this.generateId();
    formData.id = this.id;
    console.log(formData);
    this.moviesService.addMovie(formData);
    this.addMovieForm.reset();
  }

  deleteMovie = (movie) => {
    this.moviesService.deleteMovie(movie);
  }

  showForm = () => {
    this.isFormHidden = !this.isFormHidden;
  }*/

  message:string; 

  loadPage = () => {
    this.isLoading = true;
    this.movies = [];
    this.moviesService.getMovies(this.pageNo, this.message).subscribe(response => {
      this.movies = response.Search;
      console.log('MOVIES', this.movies);
      this.isLoading = false;
    });
  }

  changePage = ( val ) => {
    this.pageNo += parseInt(val);
    this.loadPage();
  }


  ngOnInit(): void {
    //this.loadPage();
    this.searchService.currentMessage.subscribe( (message) => 
      {
        this.message = message;
        this.loadPage();
      }
    )
  }

}
