import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FooterComponent} from "./footer/footer.component";

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'header', component: HeaderComponent },
    { path:'footer', component: FooterComponent },
    { path: 'history', component: HistoryComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
