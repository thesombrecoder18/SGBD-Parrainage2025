import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-electeurs',
  standalone: true,
  templateUrl: './electeurs.component.html',
  imports: [
    RouterOutlet,
    MatIcon
  ],
  styleUrls: ['./electeurs.component.scss']
})
export class ElecteursComponent {
  constructor(private router: Router) {}

  naviguer(route: string) {
    this.router.navigate([`/electeurs/${route}`]);
  }
}
