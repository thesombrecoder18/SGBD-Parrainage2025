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

    export class AdminComponent {
      fileToUpload: File | null = null;
      uploadError: string = '';
    
      // Gérer la sélection du fichier
      onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file && file.type === 'text/csv') {
          this.fileToUpload = file;
          this.uploadError = '';
        } else {
          this.uploadError = 'Veuillez sélectionner un fichier CSV valide.';
        }
      }
    
      // Importer le fichier
      importVoters() {
        if (!this.fileToUpload) {
          this.uploadError = 'Aucun fichier sélectionné.';
          return;
        }
    
        // Simuler l'importation
        console.log('Importation du fichier :', this.fileToUpload.name);
        // Ajouter ici la logique pour envoyer le fichier au serveur
      }
    }
  }

  // Méthode pour afficher les candidats
  viewCandidates() {
    console.log('Voir les candidats');
    

    export class AdminComponent {
      candidates: any[] = []; // Liste des candidats
      newCandidate: any = {}; // Nouveau candidat à ajouter
      candidateError: string = '';
    
      // Ajouter un candidat
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
    
      // Supprimer un candidat
      deleteCandidate(index: number) {
        this.candidates.splice(index, 1);
      }
    }
  }

  // Méthode pour suivre les parrainages
  monitorSponsorships() {
    console.log('Suivre les parrainages');
    

    export class AdminComponent {
      sponsorships: any[] = []; // Liste des parrainages
      sponsorshipStats: any = {}; // Statistiques des parrainages
    
      // Simuler le suivi des parrainages
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
    }
  }

  // Méthode pour gerer les users
  adduser() {
    console.log('Gerer les utilisateurs');

    export class AdminComponent {
      // Liste des utilisateurs (agents DGE)
      users: any[] = [
        { id: 1, name: 'Agent 1', email: 'agent1@dge.sn', role: 'admin' },
        { id: 2, name: 'Agent 2', email: 'agent2@dge.sn', role: 'editor' },
      ];
    
      // Nouvel utilisateur à ajouter
      newUser: any = {
        name: '',
        email: '',
        role: 'editor', // Par défaut, un nouvel utilisateur est un éditeur
      };
    
      // Message d'erreur
      userError: string = '';
    
      // Ajouter un nouvel utilisateur
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
    
      // Supprimer un utilisateur
      deleteUser(userId: number) {
        this.users = this.users.filter(user => user.id !== userId);
      }
    }
  }
}
