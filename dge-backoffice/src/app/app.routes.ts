import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import {UploadFichierComponent} from './electeurs/upload-fichier/upload-fichier.component';
import {ElecteurProblemeComponent} from './electeurs/electeur-probleme/electeur-probleme.component';
import {LoginComponent} from './login/login.component';
import {ValidationElecteursComponent} from './electeurs/validation-electeurs/validation-electeurs.component';
import {ElecteursComponent} from './electeurs/electeurs.component';

export const routes: Routes = [

  {path:'electeurs', component: ElecteursComponent},
  {path:'electeurs/uploadFile', component: UploadFichierComponent},
  {path:'electeurs/probleme', component: ElecteurProblemeComponent},
  { path: 'electeurs/validation', component: ValidationElecteursComponent },
  {path: 'login',component: LoginComponent},
  { path: '', component: AccueilComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
