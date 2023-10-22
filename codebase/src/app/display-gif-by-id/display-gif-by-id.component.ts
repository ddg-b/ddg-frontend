import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-gif-by-id',
  templateUrl: './display-gif-by-id.component.html',
  styleUrls: ['./display-gif-by-id.component.css']
})
export class DisplayGifByIdComponent {
  gif_id: number = 0;
  page: number = 0;
  route_url = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const gif_id = parseInt(params.get('gif_id') ?? '', 10);
      this.gif_id = isNaN(gif_id) || gif_id <= 1 ? 1 : gif_id;
    });
    this.route.queryParamMap.subscribe((queryParams) => {
      const page = parseInt(queryParams.get('page') ?? '', 10);
      this.page = isNaN(page) || page <= 1 ? 1 : page;
      this.route_url = this.route.url;
    });
  }
}
