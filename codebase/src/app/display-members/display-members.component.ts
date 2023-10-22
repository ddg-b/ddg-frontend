import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-members',
  templateUrl: './display-members.component.html',
  styleUrls: ['./display-members.component.css']
})
export class DisplayMembersComponent {
  data: any;
  atPage: number = 0;
  route_url: any = {};
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParams) => {
      const page = parseInt(queryParams.get('page') ?? '', 10);
      this.atPage = isNaN(page) || page <= 1 ? 1 : page;
      this.route_url = this.route.url;
    });
    this.apiService.getMembers(this.atPage).subscribe((response) => {
      this.data = response;
    });
  }
}
