import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Go';
  showResults = false;

  constructor() {}

  toggleResults() {
    this.showResults = !this.showResults;
  }
}
