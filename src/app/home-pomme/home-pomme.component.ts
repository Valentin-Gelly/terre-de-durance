import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-pomme',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './home-pomme.component.html',
  styleUrl: './home-pomme.component.css'
})
export class HomePommeComponent {

}
