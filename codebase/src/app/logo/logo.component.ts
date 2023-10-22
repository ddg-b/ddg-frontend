import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  day_of_the_week:number = 0;

  ngOnInit() {
    const d = new Date();
    this.day_of_the_week = d.getDay() + 1;
  }
}
