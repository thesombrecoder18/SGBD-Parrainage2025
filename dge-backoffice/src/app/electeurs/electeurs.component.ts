import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-electeurs',
  standalone: true,
  templateUrl: './electeurs.component.html',
  imports: [
    MatIcon,
  ],
  styleUrls: ['./electeurs.component.scss']
})
export class ElecteursComponent {
  totalElecteurs = 5000;
  electeursAvecErreurs = 120;
  electeursCorriges = 80;

  constructor(private router: Router) {}

  naviguer(route: string) {
    this.router.navigate([`/electeurs/${route}`]);
  }
  goToAccueil(): void {
    this.router.navigateByUrl('/');
  }


}
