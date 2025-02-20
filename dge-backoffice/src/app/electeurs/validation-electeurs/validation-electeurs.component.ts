import { Component, OnInit } from '@angular/core';
import { ElecteurService } from '../../services/electeur.service';
import { Router } from '@angular/router';
import { NgClass, NgForOf } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '../../filter.pipe';

@Component({
  selector: 'app-validation-electeurs',
  standalone: true,
  templateUrl: './validation-electeurs.component.html',
  imports: [
    NgClass,
    NgForOf,
    FormsModule,
    FilterPipe
  ],
  styleUrls: ['./validation-electeurs.component.scss']
})
export class ValidationElecteursComponent implements OnInit {
  electeursCorriges: any[] = [];
  searchQuery: string = ''; // Pour le filtre

  constructor(private electeurService: ElecteurService, private router: Router) {}

  ngOnInit() {
    // Simulation des électeurs corrigés avec un statut
    this.electeursCorriges = [
      { id: 1, nom: 'Diop', prenom: 'Moussa', cin: '123456789', erreur: 'Numéro CIN invalide', statut: 'Corrigé' },
      { id: 2, nom: 'Sow', prenom: 'Aïcha', dateNaissance: '1995-08-15', erreur: 'Date de naissance incorrecte', statut: 'Corrigé' },
      { id: 3, nom: 'Ba', prenom: 'Cheikh', numElecteur: '987654321', erreur: 'Numéro d’électeur en double', statut: 'En attente' },
      { id: 4, nom: 'Ndoye', prenom: 'Fatou', cin: '654321987', erreur: 'Nom mal écrit', statut: 'Corrigé' },
      { id: 5, nom: 'Fall', prenom: 'Oumar', dateNaissance: '', erreur: 'Date de naissance manquante', statut: 'En attente' }
    ];
  }

  get filteredElecteurs() {
    return this.electeursCorriges.filter(electeur => {
      const search = this.searchQuery.toLowerCase();
      return electeur.nom.toLowerCase().includes(search) ||
        electeur.prenom.toLowerCase().includes(search) ||
        electeur.statut.toLowerCase().includes(search);
    });
  }

  validerCorrections() {
    console.log("Électeurs validés :", this.electeursCorriges);
    alert("Corrections validées avec succès !");
    this.electeurService.reset();
    this.router.navigate(['/electeurs']);
  }
}
