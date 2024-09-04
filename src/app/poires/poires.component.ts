import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-poires',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './poires.component.html',
  styleUrl: './poires.component.css'
})
export class PoiresComponent {

  id: any;
  constructor(private route: ActivatedRoute) { }

  contentpoires: any = {
    'Guyot': {
      description : 'La Guyot est un variété que l\'on retrouve en juillet et en août. Elle a une teinte qui se déteint du vert clair au jaune, avec une nuance de rose. Elle se peut être très rafraîchissante, avec une sa chair fondante.'
    },
    'William': {
      description: 'On peut trouver la Williams dès le début du mois de juillet.\n' +
        'Elle a une robe à maturité, avec en forme de cloche et une belle couleur jaune doré. Sa chair blanche est fine et juteuse et son parfum légèrement musqué.\n' +
        'Elle est peu calorique, et renferme de nombreux nutriments et des fibres\n'
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('variete');
      console.log(this.id);
    });
  }

}
