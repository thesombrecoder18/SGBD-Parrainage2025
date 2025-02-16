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
import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
<<<<<<< Updated upstream
    AppComponent,
    AccueilComponent,
    ElecteursComponent
=======
    
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
