import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from  '../../services/movies.service';
import { IVideo } from  '../../../shared/imovies';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {

  videosList : IVideo[];
  videoData : IVideo;
  isLoading = false;
  faPlay = faPlay;
  videoBaseUrl = "https://www.youtube.com/embed/";
  videoUrl;
  isPlayVideo = false;

  constructor(
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer
  ){ }

  playVideo = ( vData ) => {
    this.isPlayVideo = true;
    this.videoData = vData;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoBaseUrl+this.videoData.embededId);
  }

  ngOnInit(): void {
    this.videosList = this.moviesService.getVideosList();
  }

}
