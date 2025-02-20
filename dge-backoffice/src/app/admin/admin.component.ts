import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  showElectionPeriodForm = false;
  startDate: string = '';
  endDate: string = '';
  electionPeriodError: string = '';

  // Ouvrir le formulaire de période de parrainage
  openElectionPeriodForm() {
    this.showElectionPeriodForm = true;
  }

  // Enregistrer la période de parrainage
  setElectionPeriod() {
    if (!this.startDate || !this.endDate) {
      this.electionPeriodError = 'Veuillez remplir toutes les dates.';
      return;
    }

    if (new Date(this.startDate) >= new Date(this.endDate)) {
      this.electionPeriodError = 'La date de début doit être avant la date de fin.';
      return;
    }

    // Enregistrer les dates (simulation)
    console.log('Période de parrainage enregistrée :', this.startDate, 'à', this.endDate);
    this.showElectionPeriodForm = false;
    this.electionPeriodError = '';
  }

  // Méthode pour importer la liste des électeurs
  importVoters() {
    console.log('Importer la liste des électeurs');
    // Ajoutez ici la logique pour importer les électeurs
  }

  // Méthode pour afficher les candidats
  viewCandidates() {
    console.log('Voir les candidats');
    // Ajoutez ici la logique pour afficher les candidats
  }

  // Méthode pour suivre les parrainages
  monitorSponsorships() {
    console.log('Suivre les parrainages');
    // Ajoutez ici la logique pour suivre les parrainages
  }
}
