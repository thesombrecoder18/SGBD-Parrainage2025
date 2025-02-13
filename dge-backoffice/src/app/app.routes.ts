import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [

    { path: '', component: AccueilComponent }
    
    // Ajoutez un fallback pour les routes inconnues
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }