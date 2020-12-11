import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  faSearch = faSearch;

  searchData = "";

  constructor(private searchService: SearchService) {
  }

  message:string;

  searchThis = () => {
    this.searchService.changeMessage(this.searchData)
  }

  ngOnInit(): void {
    this.searchService.currentMessage.subscribe(message => this.message = message)
  }

}
