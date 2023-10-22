import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  @Input() GifsListType: string = ''
  @Input() Username: string = '';
  @Input() Tag: string = '';
  @Input() Page: number = 1;
  @Input() Gif_id: number = 0;
  @Input() Search: string = '';
  @Input() RouteUrl: any = {};
  atPage: number = 1;
  data: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      const page = parseInt(queryParams.get('page') ?? '', 10);
      this.atPage = isNaN(page) || page <= 1 ? 1 : page;
      this.apiCalls();
    });
  }

  apiCalls() {
    if ('mostUsed' === this.GifsListType) {
      this.apiService.getGifsMostUsed(this.atPage).subscribe((response) => {
        this.data = response;
      });
    } else if ('LastUsed' === this.GifsListType) {
      this.apiService.getGifsLastUsed(this.atPage).subscribe((response) => {
        this.data = response;
      });
    } else if ('Newest' === this.GifsListType) {
      this.apiService.getGifsNewest(this.Username, this.atPage).subscribe((response) => {
        this.data = response;
      });
    } else if ('FirstUsed' === this.GifsListType) {
      this.apiService.getGifsNewest(this.Username, this.atPage).subscribe((response) => {
        this.data = response;
      });
    } else if ('ByTag' === this.GifsListType) {
      this.apiService.getGifsByTag(this.Tag, this.atPage).subscribe((response) => {
        this.data = response;
      });
    } else if ('ById' === this.GifsListType) {
      this.apiService.getGifById(this.Gif_id).subscribe((response) => {
        this.data = {"hydra:member": [response]};
      });
    } else if ('Search' === this.GifsListType) {
      this.apiService.search(this.Search, this.atPage).subscribe((response) => {
        this.data = response;
      });
    }
  }
}
