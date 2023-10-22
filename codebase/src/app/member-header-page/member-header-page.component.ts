import {Component, Input} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-member-header-page',
  templateUrl: './member-header-page.component.html',
  styleUrls: ['./member-header-page.component.css']
})
export class MemberHeaderPageComponent {
  @Input() username: string = '';
  data: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUserDetails(this.username).subscribe((response) => {
      this.data = response;
    });
  }
}
