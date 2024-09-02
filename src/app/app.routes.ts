import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SavoirFaireComponent } from './savoir-faire/savoir-faire.component';
import {FooterComponent} from "./footer/footer.component";
import { NgxParallaxModule } from '@yoozly/ngx-parallax';
import {JusComponent} from "./jus/jus.component";
import { PommeComponent } from './pomme/pomme.component';
import { PoiresComponent } from './poires/poires.component';
import { CourgesComponent } from './courges/courges.component';
import { HomeCourgeComponent } from './home-courge/home-courge.component';
import { HomePommeComponent } from './home-pomme/home-pomme.component';
import { HomePoireComponent } from './home-poire/home-poire.component';

export const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'savoir-faire', component: SavoirFaireComponent},
  { path: 'history', component: HistoryComponent },
  { path : 'jus/:variete' , component : JusComponent},
  { path: 'pommes/:variete', component: PommeComponent },
  { path: 'poires/:variete', component: PoiresComponent },
  { path: 'courges', component: CourgesComponent},
  { path: 'homeCourge', component: HomeCourgeComponent},
  { path: 'homePomme', component: HomePommeComponent},
  { path: 'homePoire', component: HomePoireComponent},
  { path: 'footer', component: FooterComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      NgxParallaxModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
