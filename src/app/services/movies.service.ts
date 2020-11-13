import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMarvelMovies, IVideo } from '../../shared/imovies';
import { videosList } from '../../shared/moviesList'
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  //movies: IMarvelMovies[];
  videosList: IVideo[];
  movie: IMarvelMovies;
  existingFavoritMovieList;
  ts;
  md5Hash;

  baseUrl = "http://gateway.marvel.com/v1/public/series";
  pubKey = "756437395d731b7707a222bf7a943158";
  privKey = "b57c6d7e65b2344f97ac618a6036f83843a7a7e6";

  getHashandMd5 = () => {
    this.ts = Date.now();
    let md5 = new Md5();
    this.md5Hash = md5.appendStr(this.ts + this.privKey + this.pubKey);
  }

  getMovieList = (): Observable<any> => {
    this.getHashandMd5();
    let finalUrl = `${this.baseUrl}?offset=80&limit=50&ts=${this.ts}&apikey=${this.pubKey}&hash=${this.md5Hash.end()}`;
    return this.httpClient.get(finalUrl);

  }

  getMovieDetails = (movieId): Observable<any> => {
    this.getHashandMd5();
    let finalUrl = `${this.baseUrl}/${movieId}?ts=${this.ts}&apikey=${this.pubKey}&hash=${this.md5Hash.end()}`;
    console.log(finalUrl);
    return this.httpClient.get(finalUrl);
  }

  getMovieCharecters = (movieId): Observable<any> => {
    this.getHashandMd5();
    let finalUrl = `${this.baseUrl}/${movieId}/characters?ts=${this.ts}&apikey=${this.pubKey}&hash=${this.md5Hash.end()}`;
    return this.httpClient.get(finalUrl);
  }

  getVideosList = (): IVideo[] => {
    this.videosList = videosList;
    return videosList;
  }

  constructor(private httpClient: HttpClient) { }
}
