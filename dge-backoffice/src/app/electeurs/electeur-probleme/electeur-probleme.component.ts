import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-electeur-probleme',
  standalone: true,
  templateUrl: './electeur-probleme.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./electeur-probleme.component.scss']
})
export class ElecteurProblemeComponent implements OnInit {
  electeursProblemes: any[] = [];

  ngOnInit() {
    // Simulation des électeurs ayant des erreurs
    this.electeursProblemes = [
      { id: 1, nom: 'Diop', prenom: 'Moussa', erreur: 'Numéro CIN invalide' },
      { id: 2, nom: 'Sow', prenom: 'Aïcha', erreur: 'Date de naissance incorrecte' },
      { id: 3, nom: 'Ba', prenom: 'Cheikh', erreur: 'Numéro d’électeur en double' },
      { id: 4, nom: 'Ndoye', prenom: 'Fatou', erreur: 'Nom mal écrit (accent manquant)' }
    ];
  }

  corrigerErreur(id: number) {
    console.log(`Correction demandée pour l’électeur ID ${id}`);
    this.electeursProblemes = this.electeursProblemes.filter(e => e.id !== id);
  }
}
