import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [SharedModule, RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  logoUrl!: String;
  isUserConnected: boolean = false;
  isUserAdmin: boolean = false;
  constructor(private router: Router) {}

  goToCatalog(): void {
    this.router.navigateByUrl('/catalogue');
  }

  goToHome(): void {
    this.router.navigateByUrl('/');
  }
  goToJobs(): void {
    this.router.navigateByUrl('/offres-emploi');
  }
  goToServices(): void {
    this.router.navigateByUrl('/prestation-services');
  }
  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
    }

  goToFinancement(): void {
    this.router.navigateByUrl('/financement-formations');
  }

  inscrire(): void {
    this.router.navigateByUrl('/authentification/inscription');
  }
  connecter(): void {
    this.router.navigateByUrl('/authentification/connexion');
  }
  deconnecter() {

    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.logoUrl = 'assets/logo.png';

  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
