import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./admin.component.scss'],
  standalone: true
})
export class AdminComponent {
  // Gestion de la période électorale
  showElectionPeriodForm = false;
  startDate: string = '';
  endDate: string = '';
  electionPeriodError: string = '';

  // Gestion des utilisateurs
  users: any[] = [
    { id: 1, name: 'Agent 1', email: 'agent1@dge.sn', role: 'admin' },
    { id: 2, name: 'Agent 2', email: 'agent2@dge.sn', role: 'editor' },
  ];
  newUser: any = {
    name: '',
    email: '',
    role: 'editor',
  };
  userError: string = '';

  // Gestion des candidats
  candidates: any[] = [];
  newCandidate: any = {};
  candidateError: string = '';

  // Gestion des parrainages
  sponsorships: any[] = [];
  sponsorshipStats: any = {};

  // Gestion de l'importation des électeurs
  fileToUpload: File | null = null;
  uploadError: string = '';

  // Méthodes pour gérer la période électorale
  openElectionPeriodForm() {
    this.showElectionPeriodForm = true;
  }

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

  // Méthodes pour gérer les électeurs
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'text/csv') {
      this.fileToUpload = file;
      this.uploadError = '';
    } else {
      this.uploadError = 'Veuillez sélectionner un fichier CSV valide.';
    }
  }

  importVoters() {
    if (!this.fileToUpload) {
      this.uploadError = 'Aucun fichier sélectionné.';
      return;
    }

    // Simuler l'importation
    console.log('Importation du fichier :', this.fileToUpload.name);
    // Ajouter ici la logique pour envoyer le fichier au serveur
  }

  // Méthodes pour gérer les candidats
  viewCandidates() {
    console.log('Voir les candidats');
    // Logique pour afficher les candidats
  }

  addCandidate() {
    if (!this.newCandidate.name || !this.newCandidate.party) {
      this.candidateError = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }

    // Ajouter le candidat à la liste
    this.candidates.push({ ...this.newCandidate });
    this.newCandidate = {}; // Réinitialiser le formulaire
    this.candidateError = '';
  }

  deleteCandidate(index: number) {
    this.candidates.splice(index, 1);
  }

  // Méthodes pour gérer les parrainages
  monitorSponsorships() {
    // Exemple de données simulées
    this.sponsorships = [
      { candidate: 'Candidat A', count: 150 },
      { candidate: 'Candidat B', count: 200 },
    ];

    // Calculer les statistiques
    this.sponsorshipStats = {
      total: this.sponsorships.reduce((sum, s) => sum + s.count, 0),
      max: Math.max(...this.sponsorships.map(s => s.count)),
    };
  }

  // Méthodes pour gérer les utilisateurs
  addUser() {
    if (!this.newUser.name || !this.newUser.email) {
      this.userError = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }

    // Vérifier si l'email est déjà utilisé
    if (this.users.some(user => user.email === this.newUser.email)) {
      this.userError = 'Cet email est déjà utilisé.';
      return;
    }

    // Ajouter le nouvel utilisateur à la liste
    this.users.push({
      id: this.users.length + 1, // Générer un ID unique 
      ...this.newUser,
    });

    // Réinitialiser le formulaire
    this.newUser = { name: '', email: '', role: 'editor' };
    this.userError = '';
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}