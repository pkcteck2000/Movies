import { Component, OnInit } from '@angular/core';

import { faPlus, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMovies } from '../../../shared/imovies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: IMovies[];
  id: number;
  addMovieForm: any;

  myForm:FormGroup;

  //FontAwesome icons
  faPlus = faPlus;
  faStar = faStar;
  faTimes = faTimesCircle;

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder
  ) { 
    this.addMovieForm = this.formBuilder.group({
        title: "",
        year: "",
        posterImage: "",
        rating: 0.0,
        trailerLink: ""
    });
  }

  generateId = ():number => {
    return Math.floor(Math.random() * 1000);
  }

  addMovie = ( formData ) => {
    this.id = this.generateId();
    formData.id = this.id;
    console.log(formData);
    this.moviesService.addMovie(formData);
    this.addMovieForm.reset();
  }

  deleteMovie = (movie) => {
    this.moviesService.deleteMovie(movie);
  }

  ngOnInit(): void {
    this.movies = this.moviesService.getMovieList();
  }

}
