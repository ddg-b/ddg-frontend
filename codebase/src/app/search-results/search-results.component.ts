import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  searchTerm: string = '';
  page: number = 0;
  route_url: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.searchTerm = queryParams.get('q') ?? '';
      this.route_url = this.route.url;
    });
  }
}
