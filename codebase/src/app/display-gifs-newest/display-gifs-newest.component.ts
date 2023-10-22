import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-gifs-newest',
  templateUrl: './display-gifs-newest.component.html',
  styleUrls: ['./display-gifs-newest.component.css']
})
export class DisplayGifsNewestComponent {
  page: number = 0;
  route_url: any = {};
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams) => {
      const page = parseInt(queryParams.get('page') ?? '', 10);
      this.page = isNaN(page) || page <= 1 ? 1 : page;
      this.route_url = this.route.url;
    });
  }
}
