import { Component, OnInit } from '@angular/core';
import { ElecteurService } from '../services/electeur.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-electeurs',
  templateUrl: './electeurs.component.html',
  standalone: true,
  imports:[CommonModule],
  providers:[ElecteurService],
  styleUrls: ['./electeurs.component.css']
})
export class ElecteursComponent implements OnInit {

  electeurs: any[] = [];

  constructor(private electeurService: ElecteurService) {}

  ngOnInit(): void {
    this.electeurs = this.electeurService.getElecteurs();
  }

  supprimerElecteur(id: number) {
    this.electeurService.supprimerElecteur(id);
    this.electeurs = this.electeurService.getElecteurs();
  }
  modifierElecteur(electeur: any) {
    console.log("Modifier électeur :", electeur);
    //à continuer plus tard
  }

}
