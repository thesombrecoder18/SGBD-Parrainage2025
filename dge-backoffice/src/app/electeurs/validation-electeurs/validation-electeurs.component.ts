import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {ElecteurService} from '../../services/electeur.service';

@Component({
  selector: 'app-validation-electeurs',
  standalone: true,
  templateUrl: './validation-electeurs.component.html',
  styleUrls: ['./validation-electeurs.component.scss']
})
export class ValidationElecteursComponent implements OnInit {
  electeursCorriges: any[] = [];

  constructor(private electeurService: ElecteurService, private router: Router) {}

  ngOnInit() {
    this.electeursCorriges = this.electeurService.getElecteursCorriges();
  }

  validerCorrections() {
    console.log("Électeurs validés :", this.electeursCorriges);
    alert("Corrections validées avec succès !");
    this.electeurService.reset();
    this.router.navigate(['/electeurs']);
  }

  retourAuxCorrections() {
    this.router.navigate(['/electeurs/probleme']);
  }
}
