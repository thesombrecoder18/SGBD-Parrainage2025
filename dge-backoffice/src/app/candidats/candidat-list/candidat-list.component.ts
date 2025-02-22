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
  domains: string[] = ['Informatique', 'Santé', 'Mécanique', 'Électronique', 'Génie Civil', 'Plomberie', 'Electricité', "Elevage"];
  regions: string[] = ['Dakar', 'Thiès', 'Saint-Louis', 'Ziguinchor', 'Diourbel', 'Louga', 'Kolda', 'Kédougou', 'Kaffrine', 'Kaolack'];
  selectedDomains: string[] = [];
  selectedRegions: string[] = [];
  searchTerm: string = '';
  showMap: boolean = false;
  faSearch = faSearch;
  faMapMarkerAlt = faMapMarkerAlt;
  selectedSort: string = 'Les plus proches';
  isTypesOpen = true;
  isNiveauOpen = true;
  isDureeOpen = true;
  isModeFormationOpen = true;
  isLangueOpen = true;
  totalResults!: number;
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalPages!: number;
  formationsData = [
    {
      id: 1,
      title: "Master en Développement Web",
      niveau: "Bac+5",
      location: "Dakar",
      rating: 4.8,
      imageUrl: "https://example.com/images/dev-web.jpg",
      logoUrl: "https://example.com/logos/univ-dakar.png",
      description: "Formation complète en développement web front-end et back-end avec spécialisation en frameworks modernes",
      duration: "2 ans",
      price: "3500000 FCFA",
      school: "Université de Dakar"
    },
    {
      id: 2,
      title: "Licence en Science des Données",
      niveau: "Bac+3",
      location: "Saint-Louis",
      rating: 4.5,
      imageUrl: "https://example.com/images/data-science.jpg",
      logoUrl: "https://example.com/logos/univ-saintlouis.png",
      description: "Formation sur l'analyse de données, le machine learning et la visualisation de données",
      duration: "3 ans",
      price: "2800000 FCFA",
      school: "Université Gaston Berger"
    },
    {
      id: 3,
      title: "Certification en Cybersécurité",
      niveau: "Bac+4",
      location: "Dakar",
      rating: 4.7,
      imageUrl: "https://example.com/images/cybersecurity.jpg",
      logoUrl: "https://example.com/logos/isi.png",
      description: "Formation spécialisée dans la sécurité des systèmes d'information et la protection des données",
      duration: "6 mois",
      price: "1500000 FCFA",
      school: "Institut Supérieur d'Informatique"
    },
    {
      id: 4,
      title: "BTS en Réseaux et Télécommunications",
      niveau: "Bac+2",
      location: "Thiès",
      rating: 4.2,
      imageUrl: "https://example.com/images/telecom.jpg",
      logoUrl: "https://example.com/logos/esp-thies.png",
      description: "Formation technique sur l'installation et la maintenance des infrastructures réseaux",
      duration: "2 ans",
      price: "1800000 FCFA",
      school: "École Supérieure Polytechnique de Thiès"
    },
    {
      id: 5,
      title: "MBA en Marketing Digital",
      niveau: "Bac+5",
      location: "Dakar",
      rating: 4.6,
      imageUrl: "https://example.com/images/marketing-digital.jpg",
      logoUrl: "https://example.com/logos/ism.png",
      description: "Formation avancée en stratégies de marketing digital, SEO, et analyse de données marketing",
      duration: "18 mois",
      price: "4200000 FCFA",
      school: "Institut Supérieur de Management"
    },
    {
      id: 6,
      title: "Licence en Intelligence Artificielle",
      niveau: "Bac+3",
      location: "Dakar",
      rating: 4.9,
      imageUrl: "https://example.com/images/ai.jpg",
      logoUrl: "https://example.com/logos/aiu.png",
      description: "Formation spécialisée en algorithmes d'IA, deep learning et systèmes experts",
      duration: "3 ans",
      price: "3200000 FCFA",
      school: "African Institute for AI"
    },
    {
      id: 7,
      title: "DUT en Génie Logiciel",
      niveau: "Bac+2",
      location: "Ziguinchor",
      rating: 4.3,
      imageUrl: "https://example.com/images/software-engineering.jpg",
      logoUrl: "https://example.com/logos/uasz.png",
      description: "Formation en méthodologies de développement logiciel, tests et qualité des applications",
      duration: "2 ans",
      price: "1600000 FCFA",
      school: "Université Assane Seck"
    },
    {
      id: 8,
      title: "Master en Cloud Computing",
      niveau: "Bac+5",
      location: "Saint-Louis",
      rating: 4.7,
      imageUrl: "https://example.com/images/cloud.jpg",
      logoUrl: "https://example.com/logos/ugb.png",
      description: "Formation avancée sur les architectures cloud, la virtualisation et les services AWS/Azure",
      duration: "2 ans",
      price: "3800000 FCFA",
      school: "Université Gaston Berger"
    },
    {
      id: 9,
      title: "Certification DevOps",
      niveau: "Bac+4",
      location: "Dakar",
      rating: 4.8,
      imageUrl: "https://example.com/images/devops.jpg",
      logoUrl: "https://example.com/logos/simplon.png",
      description: "Formation intensive sur les pratiques DevOps, CI/CD, Docker et Kubernetes",
      duration: "4 mois",
      price: "1200000 FCFA",
      school: "Simplon Sénégal"
    },
    {
      id: 10,
      title: "Licence en E-Commerce",
      niveau: "Bac+3",
      location: "Thiès",
      rating: 4.4,
      imageUrl: "assets/img_diomaye.png",
      logoUrl: "https://example.com/logos/esmt.png",
      description: "Formation sur la création et gestion de boutiques en ligne, marketing digital et logistique",
      duration: "3 ans",
      price: "2500000 FCFA",
      school: "École Supérieure Multinationale des Télécommunications"
    }
  ];



  constructor( private router: Router) {}

  ngOnInit(): void {
    
  }

  gotoSchoolPage() {
    this.router.navigateByUrl('/catalogue/centre');
  }

  updatePagination(): void {
    const filteredFormations = this.getFilteredFormations();
    /*this.totalResults = filteredFormations.length
    this.totalPages = Math.ceil(filteredFormations.length / this.itemsPerPage);*/
  }

  toggleMap() {
    this.showMap = !this.showMap;
  }

  onSort(sortType: string) {
    this.selectedSort = sortType;
    console.log(`Tri sélectionné: ${sortType}`);
  }

  // Filtres disponibles
  selectedFilters: any = {
    types: [],
    niveau: [],
    duree: [],
    modeFormation: [],
    langue: [],
  };



  addFilter(value: string) {

  }

  toggleSection(section: string) {
    if (section === 'types') {
      this.isTypesOpen = !this.isTypesOpen;
    } else if (section === 'niveau') {
      this.isNiveauOpen = !this.isNiveauOpen;
    } else if (section === 'duree') {
      this.isDureeOpen = !this.isDureeOpen;
    } else if (section === 'modeFormation') {
      this.isModeFormationOpen = !this.isModeFormationOpen;
    } else if (section === 'langue') {
      this.isLangueOpen = !this.isLangueOpen;
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
  

  removeFilter(value: string) {
    
    if(this.selectedDomains.includes(value)){
      this.selectedDomains = this.selectedDomains.filter((d) => d !== value);
      this.updatePagination();
    }
    if(this.selectedRegions.includes(value)){
      this.selectedRegions = this.selectedRegions.filter((d) => d !== value);
      this.updatePagination();
    }
    
  }

  getFilteredFormations() {

  }
  onDomainChange(domain: string): void {
    this.addFilter(domain);
    if (this.selectedDomains.includes(domain)) {
      this.selectedDomains = this.selectedDomains.filter((d) => d !== domain);
    } else {
      this.selectedDomains.push(domain);
    }
    this.currentPage = 1;
    this.updatePagination();
  }

  onRegionChange(region: string) {
    this.addFilter(region);
    if (this.selectedRegions.includes(region)) {
      this.selectedRegions = this.selectedRegions.filter((d) => d !== region);
    } else {
      this.selectedRegions.push(region);
    }
    this.currentPage = 1;
    this.updatePagination();
  }

  // goFinancement() {
  //   this.router.navigate(['/financement-formations']);
  // }

  /*get paginatedFormations(): Formation[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.getFilteredFormations().slice(start, end);
  }*/

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
    


  convertirEnMois(duree: string): number | null {
    const matches = duree.match(/^(\d+)\s*(mois|ans)$/);
    if (matches) {
      let valeur = parseInt(matches[1], 10);
      if (matches[2] === 'ans') {
        valeur *= 12; 
      }
      return valeur;
    }
    return null;
  }

  convertirIntervalle(intervalle: string): { min: number, max: number } {
    const [min, max] = intervalle.split('-').map(part => parseInt(part, 10));
    return { min: min, max: max };
  }

  /*compterFormationsDansIntervalle(intervalle: string): number {
    const { min, max } = this.convertirIntervalle(intervalle);
    return this.formations.filter(formation => {
      const mois = this.convertirEnMois(formation.durée);
      if (mois !== null) { 
        return mois >= min && mois <= max;
      }
      return false; 
    }).length;
  }*/
  isNiveauCompatible(selectedNiveau: string, formationNiveau: string): boolean {
    const normalizedSelectedNiveau = selectedNiveau.toLowerCase().trim();
    const normalizedFormationNiveau = formationNiveau.toLowerCase().trim();
  
    if (normalizedSelectedNiveau === 'bac') {
      return normalizedFormationNiveau.startsWith('bac');
    }
  
    return normalizedSelectedNiveau === normalizedFormationNiveau;
  }

  scrollToMap() {
    const mapElement = document.getElementById('mapSection');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  /*paginatedEmplois: Emploi[] = [];
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
        emploi: 'Bassirou Diomaye Faye',
        image: 'assets/images/dev-angular.jpg',
        logo: 'assets/images/company-logo1.png',
        actif: true,
        location: 'Paris',
        datePoste: new Date('2025-01-15'),
        description: 'Nous recherchons un développeur Angular expérimenté...'
      },
      {
        id: 2,
        emploi: 'Idrissa Seck',
        image: 'assets/images/data-science.jpg',
        logo: 'assets/images/company-logo2.png',
        actif: true,
        location: 'Lyon',
        datePoste: new Date('2025-01-20'),
        description: 'Rejoignez notre équipe data science...'
      },
      {
        id: 3,
        emploi: 'Macky Sall',
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
    /*openDialog(): void {
      
    }*/

}