import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ElecteurService} from '../../services/electeur.service';


@Component({
  selector: 'app-electeur-probleme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './electeur-probleme.component.html',
  styleUrls: ['./electeur-probleme.component.scss']
})
export class ElecteurProblemeComponent implements OnInit {
  electeursProblemes: any[] = [];
  electeurEnCours: any | null = null;

  constructor(private electeurService: ElecteurService) {}

  ngOnInit() {
    this.electeursProblemes = [
      { id: 1, nom: 'Diop', prenom: 'Moussa', erreur: 'Numéro CIN invalide', cin: '123456789' },
      { id: 2, nom: 'Sow', prenom: 'Aïcha', erreur: 'Date de naissance incorrecte', dateNaissance: '2000-02-30' },
      { id: 3, nom: 'Ba', prenom: 'Cheikh', erreur: 'Numéro d’électeur en double', numElecteur: '987654321' }
    ];
  }

  // 🔹 Passer un électeur en mode édition
  modifierElecteur(electeur: any) {
    this.electeurEnCours = { ...electeur };
  }

  // 🔹 Vérifier si l'électeur a corrigé toutes ses erreurs
  estCorrectionValide(): boolean {
    if (!this.electeurEnCours) return false;
    return Object.keys(this.electeurEnCours).every(key => this.electeurEnCours[key] !== '');
  }

  // 🔹 Sauvegarder les modifications et supprimer de la liste des erreurs
  sauvegarderModifications() {
    if (!this.electeurEnCours || !this.estCorrectionValide()) return;

    // Ajouter l’électeur corrigé au service
    this.electeurService.ajouterElecteurCorrige(this.electeurEnCours);

    // Supprimer l'électeur de la liste des erreurs
    this.electeursProblemes = this.electeursProblemes.filter(e => e.id !== this.electeurEnCours?.id);

    this.electeurEnCours = null;
  }
}
