import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);

  }
}
