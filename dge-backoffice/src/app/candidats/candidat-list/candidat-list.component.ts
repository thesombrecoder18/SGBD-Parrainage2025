import { Component } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { Router } from '@angular/router'; 
import { MatDialog } from '@angular/material/dialog';
import { get } from 'http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


interface Emploi {
  id: number;
  emploi: string;
  image: string;
  logo: string;
  actif: boolean;
  location: string;
  datePoste: Date;
  description?: string;
}

@Component({
  selector: 'app-candidat-list',
  standalone: true,
  imports: [CoreModule, SharedModule, CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.scss']
})
export class CandidatListComponent {
  paginatedEmplois: Emploi[] = [];
  domains: string[] = ['Informatique', 'Santé', 'Mécanique', 'Électronique'];
  regions: string[] = ['Dakar', 'Thiès', 'Saint-Louis', 'Ziguinchor'];
  selectedDomains: string[] = [];
  selectedRegions: string[] = [];
  searchTerm: string = '';
  showMap: boolean = false;
  faSearch = faSearch;
  faMapMarkerAlt = faMapMarkerAlt;
  selectedSort: string = 'Les plus proches';
  isTypeContratOpen = true;
  isStatutOpen = true;
  totalResults!: number;
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages!: number;
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  isFavorite: boolean = false;


  constructor(private router: Router,  public dialog: MatDialog,) {}

  ngOnInit(): void {
    this.paginatedEmplois = [
      {
        id: 1,
        emploi: 'Développeur Frontend Angular',
        image: 'assets/images/dev-angular.jpg',
        logo: 'assets/images/company-logo1.png',
        actif: true,
        location: 'Paris',
        datePoste: new Date('2025-01-15'),
        description: 'Nous recherchons un développeur Angular expérimenté...'
      },
      {
        id: 2,
        emploi: 'Data Scientist',
        image: 'assets/images/data-science.jpg',
        logo: 'assets/images/company-logo2.png',
        actif: true,
        location: 'Lyon',
        datePoste: new Date('2025-01-20'),
        description: 'Rejoignez notre équipe data science...'
      },
      {
        id: 3,
        emploi: 'DevOps Engineer',
        image: 'assets/images/devops.jpg',
        logo: 'assets/images/company-logo3.png',
        actif: false,
        location: 'Bordeaux',
        datePoste: new Date('2024-12-10'),
        description: 'Nous cherchons un ingénieur DevOps pour...'
      },
      // Ajoutez plus d'emplois ici...
    ];
    this.updatePagination();
  }

  updatePagination(): void {
    
  }

  toggleMap() {
    this.showMap = !this.showMap;
  }

  onSort(sortType: string) {
    this.selectedSort = sortType;
    console.log(`Tri sélectionné: ${sortType}`);
  }

  selectedFilters: any = {
    statut: [],
    typeContrat: [],
  };


  toggleSection(section: string) {
    if (section === 'statut') {
      this.isStatutOpen = !this.isStatutOpen;
    } else if (section === 'typeContrat') {
      this.isTypeContratOpen = !this.isTypeContratOpen;
    } 
  }

  onFilterChange(category: string, value: string) {
    const index = this.selectedFilters[category].indexOf(value);
    if (index === -1) {
      this.selectedFilters[category].push(value);
    } else {
      this.selectedFilters[category].splice(index, 1);
    }
    this.currentPage = 1;
    this.updatePagination();
  }



  onDomainChange(domain: string): void {
    if (this.selectedDomains.includes(domain)) {
      this.selectedDomains = this.selectedDomains.filter((d) => d !== domain);
    } else {
      this.selectedDomains.push(domain);
    }
    this.currentPage = 1;
    this.updatePagination();
  }

  onRegionChange(region: string) {
    if (this.selectedRegions.includes(region)) {
      this.selectedRegions = this.selectedRegions.filter((d) => d !== region);
    } else {
      this.selectedRegions.push(region);
    }
    this.currentPage = 1;
    this.updatePagination();
  }



  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPagination(): any[] {
    const pages: any[] = [];
    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (this.currentPage > 3) {
        pages.push('...');
      }
      for (
        let i = Math.max(2, this.currentPage - 1);
        i <= Math.min(this.totalPages - 1, this.currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (this.currentPage < this.totalPages - 2) {
        pages.push('...');
      }
      pages.push(this.totalPages);
    }
    return pages;
  }
  toggleFavorite(service: any) {
    service.isFavorite = !service.isFavorite;
  }
  goToServiceDetail(serviceId: number) {
    this.router.navigate(['/prestation-services', serviceId]);
  }

  /*openDialog(emploi: OffreEmploiModel): void {
    this.dialog.open(DetailsEmploiComponent, {
      maxWidth: '600px',
      panelClass: 'custom-dialog-container',
      position: { top: '70px' },
      data: emploi
    });
  }*/
    openDialog(): void {
      
    }

}