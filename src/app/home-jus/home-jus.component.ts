import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppServices} from "../app.services";

@Component({
  selector: 'app-home-jus',
  standalone: true,
  imports: [],
  templateUrl: './home-jus.component.html',
  styleUrl: './home-jus.component.css'
})
export class HomeJusComponent {
  constructor(private router: Router, private appService: AppServices) { }

  goToJus(typeJus:string){
    this.appService.typeJus = typeJus;
    this.router.navigate(['/jus', typeJus]);
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);

  }

}
