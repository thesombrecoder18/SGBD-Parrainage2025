import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AccueilComponent } from './accueil/accueil.component';
import {ElecteursComponent} from './electeurs/electeurs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {FilterPipe} from './filter.pipe';
import { CandidatListComponent } from './candidats/candidat-list/candidat-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CandidatListComponent,
    ElecteursComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
