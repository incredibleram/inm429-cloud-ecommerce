import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLogin = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.url.subscribe(url => {
      this.showLogin = url[0].path === 'login';
    });
  }

  showLoginForm() {
    this.showLogin = true;
    this.router.navigate(['/']);
  }
}
