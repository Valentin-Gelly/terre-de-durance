import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-courges',
  standalone: true,
  imports: [],
  templateUrl: './courges.component.html',
  styleUrl: './courges.component.css'
})
export class CourgesComponent {

  id: any;

  constructor(private route: ActivatedRoute) { }

  contentCourges : any = {
    'Butternut': {
      description: 'Appartient à la famille Cucurbita moschata. Le butternut est une courge avec écorce  de couleur beige, avec une chair jaune orangé. Elle prend la forme d’une poire. Le butternut possèdent des fibres et des vitamines (A & C) et de renforcer nos défenses immunitaires pendant l\'hiver',

    },
    'Potimarron': {
      description: 'Appartient à la famille Cucurbita maxima, \n' +
        'le potimarron présente une écorce rouge brique, avec une nuance orangé.\n' +
        'D’autres variétés ont la peau verte. Plus petit que le potiron, le potimarron doit son nom à la saveur douce, sucrée et quasi crémeuse de sa chair.\n' +
        'Cette courge se conserve très bien.\n'
    },
    'Muscade': {
      description : 'La courge musquée est une plante de la famille des Cucurbitacées, sa chair est de couleur marron voir même de couleur rouge vif. C\'est l\'une des cinq espèces de courges les plus couramment cultivées.',
    },




  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('variete');
      console.log(this.id);
    });
  }

}
