import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FavoritMovieComponent } from './components/favorit-movie/favorit-movie.component';

const routes: Routes =  [
  { path: '', component: MoviesListComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'favorits', component: FavoritMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
