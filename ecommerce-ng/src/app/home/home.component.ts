import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showSearch: boolean = true;

  performSearch() {
    // Implement your search functionality here
  }
}
