import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  countdownRedirect: number = 5;

  constructor(private router: Router) {}
  ngOnInit() {
    if (this.countdownRedirect > 0) {
      setInterval(() => {
        if (this.countdownRedirect === 0) {
          this.countdownRedirect = 0;
          this.router.navigate(['/homePage']);
        }
        this.countdownRedirect--;
      }, 1000);
    }
  }
}
