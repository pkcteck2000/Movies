import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMarvelMovies } from '../../shared/imovies';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  //movies: IMarvelMovies[];
  movie: IMarvelMovies;
  existingFavoritMovieList;

  baseUrl = "http://gateway.marvel.com/v1/public/series";
  pubKey = "756437395d731b7707a222bf7a943158";
  privKey = "b57c6d7e65b2344f97ac618a6036f83843a7a7e6";
  
  //ts = Date.now();
  //md5 = new Md5();
  //md5Hash = this.md5.appendStr(this.ts+this.privKey+this.pubKey);
  //finalUrl = `${this.baseUrl}${this.ts}&apikey=${this.pubKey}&hash=${this.md5Hash.end()}`;
  //movies: Observable<any> = this.httpClient.get(this.finalUrl);

  getMovieList = (): Observable<any>  => {
    let ts = Date.now();
    let md5 = new Md5();
    let md5Hash = md5.appendStr(ts+this.privKey+this.pubKey);
    let finalUrl = `${this.baseUrl}?offset=80&limit=50&ts=${ts}&apikey=${this.pubKey}&hash=${md5Hash.end()}`;
    //console.log(finalUrl);
    return this.httpClient.get(finalUrl);
    //return this.movies;
    
  }

  getMovieDetails = (movieId): Observable<any> => {
    let ts = Date.now();
    let md5 = new Md5();
    let md5Hash = md5.appendStr(ts+this.privKey+this.pubKey);
    let finalUrl = `${this.baseUrl}/${movieId}?ts=${ts}&apikey=${this.pubKey}&hash=${md5Hash.end()}`;
    console.log(finalUrl);
    return this.httpClient.get(finalUrl);
  }

  getMovieCharecters = (movieId): Observable<any> => {
    let ts = Date.now();
    let md5 = new Md5();
    let md5Hash = md5.appendStr(ts+this.privKey+this.pubKey);
    let finalUrl = `${this.baseUrl}/${movieId}/characters?ts=${ts}&apikey=${this.pubKey}&hash=${md5Hash.end()}`;
    //console.log(finalUrl);
    return this.httpClient.get(finalUrl);
  }
  
  constructor(private httpClient: HttpClient) { }
}
