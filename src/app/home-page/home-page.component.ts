import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
