import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    ParallaxStandaloneDirective
  ],
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
