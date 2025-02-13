import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    RouterModule,
    FooterComponent
  ],
})
export class CoreModule { }
