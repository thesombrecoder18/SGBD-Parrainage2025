import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteurService {
  private electeursCorriges: any[] = [];


  ajouterElecteurCorrige(electeur: any) {
    this.electeursCorriges.push(electeur);
  }


  getElecteursCorriges() {
    return this.electeursCorriges;
  }
  supprimerElecteur(id: number) {
    this.electeursCorriges = this.electeursCorriges.filter(e => e.id !== id);
  }

  reset() {
    this.electeursCorriges = [];
  }

  getElecteurs() {
    return [];
  }
}
