import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-gifs-by-tag',
  templateUrl: './display-gifs-by-tag.component.html',
  styleUrls: ['./display-gifs-by-tag.component.css']
})
export class DisplayGifsByTagComponent {
  tag: string = '';
  page: number = 0;
  route_url = {};

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.route.paramMap.subscribe(params => {
      this.tag = params.get('tag') ?? '';

    });
    this.route.queryParamMap.subscribe((queryParams) => {
      const page = parseInt(queryParams.get('page') ?? '', 10);
      this.page = isNaN(page) || page <= 1 ? 1 : page;
      this.route_url = this.route.url;
    });
  }
}
