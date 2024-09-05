import { Component } from '@angular/core';

@Component({
  selector: 'app-savoir-faire',
  standalone: true,
  imports: [],
  templateUrl: './savoir-faire.component.html',
  styleUrl: './savoir-faire.component.css'
})
export class SavoirFaireComponent {

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
}
