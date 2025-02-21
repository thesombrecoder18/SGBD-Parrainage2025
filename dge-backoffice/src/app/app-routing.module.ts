import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import {ElecteursComponent} from './electeurs/electeurs.component';
import { CandidatListComponent } from './candidats/candidat-list/candidat-list.component';

const routes: Routes = [
  {path: 'electeurs', component: ElecteursComponent},
  {path: 'listeCandidats', component: CandidatListComponent},
  { path: '', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
