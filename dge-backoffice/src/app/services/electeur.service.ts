import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteurService {
  private electeursCorriges: any[] = [];

  // Ajouter un électeur corrigé
  ajouterElecteurCorrige(electeur: any) {
    this.electeursCorriges.push(electeur);
  }

  // Récupérer tous les électeurs corrigés
  getElecteursCorriges() {
    return this.electeursCorriges;
  }
  supprimerElecteur(id: number) {
    this.electeursCorriges = this.electeursCorriges.filter(e => e.id !== id);
  }


  // Réinitialiser la liste après validation
  reset() {
    this.electeursCorriges = [];
  }

  getElecteurs() {
    return [];
  }
}
