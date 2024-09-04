import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-jus',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './jus.component.html',
  styleUrl: './jus.component.css'
})
export class JusComponent {

  id: any;
  image: any;
  constructor(private route: ActivatedRoute) { }


  contentJus: any = {
    'Pommes': {
      variety: ['Gala', 'Golden', 'Granny Smith', 'Del Blush'],
      description: "Découvrez notre pur jus de pomme bio avec un véritable concentré de saveurs naturelles et authentiques captant la richesse et la fraîcheur de nos vergers emblématique.",
      caracteristiques: ['100% pur jus', 'Ingrédients naturels', 'Naturellement sucré : Sans sucres ajoutés, pour un plaisir authentique.', 'Riche en vitamines et antioxydants : Pour un bien-être optimal.', 'Mise en bouteille par un artisan spécialisé uniquement à partir de produit BIO', 'Sans conservateurs ni colorants : Pour une qualité optimale.'],
      degustation: 'Savourez chaque gorgée et laissez-vous mener par un équilibre parfait de goût acidulé et la douceur de notre pur jus de pomme bio. Vous retrouverez toutes les nuances subtiles des variétés de pommes sélectionnées pour leur goût exceptionnel et leur texture juteuse.',
      terroir: 'Les fruits ont été soigneusement sélectionnés et cueillis dans les vergers même de Cavaillon et de l’Ile de la Barthelasse',
      engagementBio: ' Nos pommes sont cultivées sans pesticides chimiques et en respectant des méthodes agricoles durables, garantissant un produit sain pour vous et respectueux de l\'environnement.',
      images : ['IMG_8741.jpeg']
    },
    'Pommes-Poires': {
      variety: {
        poires : ['William', 'Dr jus Guyot', 'General Leclerc'],
        pommes : ['Gala', 'Golden', 'Granny Smith', 'Del Blush']
      },
      description: "Découvrez un équilibre entre la délicatesse de la poire et l’acidulé de la pomme avec notre pur jus de pomme-poire bio. Ce mélange exquis marie la douceur juteuse des pommes à la délicatesse parfumée des poires, offrant une expérience gustative unique et rafraîchissante",
      caracteristiques: ['100% Pur jus BIO', 'Ingrédients naturels', 'Contient 50% de pommes et 50% de poires\n', 'Naturellement sucré : Sans sucres ajoutés, pour un plaisir authentique.', 'Riche en vitamines et antioxydants : Pour un bien-être optimal.', 'Mise en bouteille par un artisan spécialisé uniquement à partir de produit BIO', 'Sans conservateurs ni colorants : Pour une qualité optimale.'],
      degustation: 'Laissez-vous séduire par la fusion parfaite des saveurs de la pomme et de la poire. Chaque gorgée révèle une combinaison subtile de douceur et de fraîcheur, offrant une sensation de pureté et de nature à l\'état brut.',
      terroir: 'Les fruits ont été soigneusement sélectionnés et cueillis dans les vergers même de Cavaillon et de l’Ile de la Barthelasse',
      engagementBio: ' Nos poires sont soigneusement cultivées selon les normes de l\'agriculture biologique, sans recours aux produits chimiques de synthèse, pour un produit sain et respectueux de la nature.',
      images: ['IMG_8743.jpeg']
    },
    'Poires': {
      variety: ['William', 'Dr jus Guyot', 'General Leclerc'],
      description: "Succombez à la délicatesse de notre jus de poire bio et ressentez toute la fraîcheur et la douceur dans votre bouche. Vous aurez l’impression de manger une poire grâce à son goût unique et gustatif.",
      caracteristiques: ['100% pur jus BIO', 'Ingrédients naturels', 'Naturellement sucré : Sans sucres ajoutés, pour un plaisir authentique.', 'Source de fibres et de vitamines : Pour une alimentation saine.', 'Mise en bouteille par un artisan spécialisé uniquement à partir de produit BIO', 'Sans conservateurs ni colorants : Pour une qualité optimale.'],
      degustation: 'Notre jus de poire bio se distingue par sa texture veloutée et son goût naturellement sucré. Chaque gorgée est une invitation à découvrir la finesse et l\'arôme délicat des poires mûries à point.',
      terroir: 'Les fruits ont été soigneusement sélectionnés et cueillis dans les vergers même de Cavaillon et de l’Ile de la Barthelasse',
      engagementBio: 'Nos poires sont soigneusement cultivées selon les normes de l\'agriculture biologique, sans recours aux produits chimiques de synthèse, pour un produit sain et respectueux de la nature.',
      images: ['IMG_8742.jpeg']
    },
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('variete');
      console.log(this.id);
    });

    this.image = this.contentJus[this.id].images[0];


  }
}
