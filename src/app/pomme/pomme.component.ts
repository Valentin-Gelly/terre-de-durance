import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pomme',
  standalone: true,
  imports: [],
  templateUrl: './pomme.component.html',
  styleUrl: './pomme.component.css'
})
export class PommeComponent {

  id : any;

  contentPomme: any = {
    'Granny-Smith' : {
      variety: 'Granny Smith',
      description : " Il existe plus de mille variétés de pommes à la texture et au goût variés disponible toute l'année.​La Granny Smith possède une saveur aigre-douce avec une chair ferme et croquante. Elle est caractérisée par une peau épaisse et couleur vert vif, croquante, acidulée et  juteuse.",
    },
    'Cripps-Pink' :
    {
      variety: 'Cripps Pink',
      description : " La pomme Cripps Pink est une pomme à croquer, assez ferme à la dent, particulièrement connue pour son goût très doux et sa couleur rouge typique.La cueillette des pommes Cripps Pink est l'une des plus tardives. Elle commence entre fin octobre et début novembre.",
    },
    'Del-Blush' :
    {
      variety: 'Del Blush',
      description : "La Del blush a un goût unique : un parfum très typé et floral. La texture de cette pomme exceptionnelle, ferme et acidulée, permet aussi bien de la croquer que de la cuisiner. Cette variété à chair blanche, ferme et croquante est douce et bien équilibrée. La pomme Del blush, c'est un subtil mélange de saveurs, un parfait équilibre entre acidité et sucrosité. ​À cueillir lorsque sa robe devient dorée, de mi-septembre à début octobre selon les régions.",
    },
    'Golden':
    {
      variety: 'Golden',
      description : " Il existe plus de mille variétés de pommes à la texture et au goût variés disponible toute l'année. La Golden possède une couleur jaune avec une nuance de vert. Elle présente parfois une légère coloration rouge sur la face exposée au soleil, surtout lorsqu’elle est cultivée en altitude. Cette pomme est très résistante à la sécheresse, elle aussi croquante, sucrée, douce. ",
    },
    'Gala':
    {
      variety:'Gala',
      description: "Il existe plus de mille variétés de pommes à la texture et au goût variés disponible toute l'année. La Gala est un pomme gourmande avec une couleur rouge intense Elle est croquante, sucrée, juteuse.",
    }
  }

  constructor(private route : ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['variete'];
    });
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

}

