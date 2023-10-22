import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-display-tags-table',
  templateUrl: './display-tags-table.component.html',
  styleUrls: ['./display-tags-table.component.css']
})
export class DisplayTagsTableComponent {
  page: number = 0;
  data: any;
  route_url: any = {};

  constructor(
      private apiService: ApiService,
      private route: ActivatedRoute,
      ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParams) => {
      const page = parseInt(queryParams.get('page') ?? '', 10);
      this.page = isNaN(page) || page <= 1 ? 1 : page;
      this.route_url = this.route.url;
    });
    this.apiService.getAllTags(this.page).subscribe((response) => {
      this.data = response;
    });
  }
}

