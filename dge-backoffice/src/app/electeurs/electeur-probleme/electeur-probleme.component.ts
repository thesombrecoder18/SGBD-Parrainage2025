import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ElecteurService} from '../../services/electeur.service';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-electeur-probleme',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './electeur-probleme.component.html',
  styleUrls: ['./electeur-probleme.component.scss']
})
export class ElecteurProblemeComponent implements OnInit {
  electeursProblemes: any[] = [];
  electeurEnCours: any | null = null;
  filtreActif: string = 'tous';
  constructor(private electeurService: ElecteurService) {}

  ngOnInit() {
    this.electeursProblemes = [
      { id: 1, nom: 'Diop', prenom: 'Moussa', erreur: 'Numéro CIN invalide', cin: '123456789' },
      { id: 2, nom: 'Sow', prenom: 'Aïcha', erreur: 'Date de naissance incorrecte', dateNaissance: '2000-02-30' },
      { id: 3, nom: 'Ba', prenom: 'Cheikh', erreur: 'Numéro d’électeur en double', numElecteur: '987654321' }
    ];
  }

  modifierElecteur(electeur: any) {
    this.electeurEnCours = { ...electeur };
  }


  estCorrectionValide(): boolean {
    if (!this.electeurEnCours) return false;
    return Object.keys(this.electeurEnCours).every(key => this.electeurEnCours[key] !== '');
  }


  sauvegarderModifications() {
    if (!this.electeurEnCours || !this.estCorrectionValide()) return;


    this.electeurService.ajouterElecteurCorrige(this.electeurEnCours);

    this.electeursProblemes = this.electeursProblemes.filter(e => e.id !== this.electeurEnCours?.id);

    this.electeurEnCours = null;
  }



  get electeursFiltres() {
    if (this.filtreActif === 'tous') return this.electeursProblemes;
    return this.electeursProblemes.filter(e => e.erreur?.toLowerCase().includes(this.filtreActif));
  }



}
