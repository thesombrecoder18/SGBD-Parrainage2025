import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteurService {

  private electeurs = [
    { id: 1, nom: 'Ba', prenom: 'Moussa', numCarte: '123456' },
    { id: 2, nom: 'Diop', prenom: 'Fatou', numCarte: '654321' }
  ];

  constructor() { }

  getElecteurs() {
    return this.electeurs;
  }

  supprimerElecteur(id: number) {
    this.electeurs = this.electeurs.filter(e => e.id !== id);
  }
}
