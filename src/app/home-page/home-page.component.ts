import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {AppServices} from "../app.services";

import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';



declare var Splide: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    ParallaxStandaloneDirective,
    RouterLink
  ],
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router, private appService: AppServices) { }


  ngAfterViewInit(): void {
    new Splide('.splide', {
      type   : 'loop',
      perPage: 2,
      perMove: 1,
    }).mount();

    let splide__slide = document.getElementsByClassName('slide-content')
    for (let i = 0; i < splide__slide.length; i++) {
      splide__slide[i].addEventListener('mouseenter', ()=>{
        splide__slide[i].getElementsByClassName('imgAndTest')[0].classList.add('imgAndTest-active');
        splide__slide[i].getElementsByClassName('btn-overlay')[0].classList.add('btn-overlay-active');
      })
      splide__slide[i].addEventListener('mouseleave', ()=>{
        splide__slide[i].getElementsByClassName('imgAndTest')[0].classList.remove('imgAndTest-active');
        splide__slide[i].getElementsByClassName('btn-overlay')[0].classList.remove('btn-overlay-active');
      })
    }
    window.scrollTo(0, 0);

  }
  goToJus(typeJus:string){
    this.appService.typeJus = typeJus;
    this.router.navigate(['/jus', typeJus]);
  }

}
