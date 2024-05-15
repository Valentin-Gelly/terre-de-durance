import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'history', component: HistoryComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }