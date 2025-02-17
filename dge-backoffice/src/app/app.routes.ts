import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import {ElecteursComponent} from './electeurs/electeurs.component';
import {UploadFichierComponent} from './electeurs/upload-fichier/upload-fichier.component';
import {ElecteurProblemeComponent} from './electeurs/electeur-probleme/electeur-probleme.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [

  {path:'electeurs', component: ElecteursComponent},
  {path:'electeurs/uploadFile', component: UploadFichierComponent},
  {path:'electeurs/probleme', component: ElecteurProblemeComponent},
  {path: 'login',component: LoginComponent},
  { path: '', component: AccueilComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
