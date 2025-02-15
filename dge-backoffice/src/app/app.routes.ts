import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import {ElecteursComponent} from './electeurs/electeurs.component';

export const routes: Routes = [

    {path:'electeurs', component: ElecteursComponent},
    { path: '', component: AccueilComponent }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
