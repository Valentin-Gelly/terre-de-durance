import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  ngOnInit(){
    // JavaScript pour le bouton hamburger
    document.getElementById('hamburger-btn')!.addEventListener('click', function () {
      this.classList.toggle('active'); // Animer le bouton hamburger
      document.getElementById('Menu2')!.classList.toggle('menu-visible'); // Afficher/Cacher le menu
    });

    let all = document.getElementsByTagName('a')
    for (let i = 0; i < all.length; i++) {
      all[i].addEventListener('click', function () {
        document.getElementById('Menu2')!.classList.remove('menu-visible');
        document.getElementById('hamburger-btn')!.classList.remove('active');
      });
    }


  }

}
