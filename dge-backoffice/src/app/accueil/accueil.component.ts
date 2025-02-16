import { Component,OnInit } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { Router } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from "../core/footer/footer.component";
import { CarousselComponent } from '../shared/caroussel/caroussel.component';

@Component({

  imports: [CoreModule, SharedModule, CarousselComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{
  imageUrl! : {title: string; id : number; url: string; value: string }[];
  cards! : {id : number; icon: string; title: string; description: string}[];
  stats! : {id : number; chiffre : number; title : string}[];
  testimonials! : {id : number; url : string; content : string; name : string; poste : string}[];
  drop : boolean = false;
  drop1 : boolean = false;
  drop2 : boolean = false;
  userOpinion! : string;

  constructor(private router : Router) {
    
  }

  ngOnInit(): void {
    this.initImgUrls();
    this.initCards();
    this.initStats();
    this.initTestimonials();

  }

  onSubmitForm() {
    console.log(this.userOpinion)
    this.userOpinion = ''
  }
  

  initImgUrls() : void{
    this.imageUrl = [
      {title: "Atelier de conception moteur electrique", id:0, url: "assets/f1.png", value: "accessible" },
      {title: "Atelier de conception moteur electrique", id:1, url: "assets/f2.jpg", value: "rapide" },
      {title: "Atelier de conception moteur electrique", id:2, url: "assets/f3.jpg", value: "facile" }
    ];
  }

  initCards() : void{
    this.cards = [
      {id:1, icon : "assets/musee.png", title : "Présentation", description : " JotCi est une plateforme digitale qui centralise les services liés à la formation professionnelle, la recherche d'emploi."},
      {id:2,icon : "assets/goal.png", title : "Nos missions", description : "Le projet vise à offrir un accès simplifié à des formations de qualité et à faciliter le processus."},
      {id:3,icon : "assets/cible.png", title : "Nos cibles", description : "Nous ciblons les etudiants et professionnels : Cherchant à développer leurs compétences ou à trouver un emploi."},
      {id:4,icon : "assets/realisation.png", title : "Nos réalisations", description : "L'offre propose plus de 500 formations et collabore avec 200 entreprises partenaires."},
      {id:6,icon : "assets/cible.png", title : "Notre vision", description : "Nous croyons en une économie où chacun peut se former, évoluer et accéder aux opportunités qui correspondent à son potentiel."},
      {id:5,icon : "assets/musee.png", title : "Engagement", description : "ProSkills collabore avec les entreprises pour comprendre leurs besoins en compétences, au-delà de la simple offre de formations et d'emplois."},
    ]
  }

  initStats() : void{
    this.stats = [
      {id : 1, chiffre : 148, title : "écoles"},
      {id : 2, chiffre : 32, title : "départements"},
      {id : 3, chiffre : 29, title : "domaines"},
      {id : 4, chiffre : 0.85, title : "taux d'insertion"},
   
    ]
  }

  initTestimonials() : void{
    this.testimonials = [
      {id : 1, url : "assets/diomaye.png", 
        content : "“La formation professionnelle n'est pas seulement un outil d'insertion dans le monde du travail. Elle est un pilier fondamental du développement de notre économie, un levier essentiel pour l'émancipation de notre jeunesse, et un facteur clé de l'amélioration de notre compétitivité sur la scène internationale. La formation professionnelle n'est pas seulement un outil d'insertion dans le monde du travail. Elle est un pilier fondamental du développement de notre économie.”",
        name : "S.E.M Bassirou Diomaye Diakhar FAYE", 
        poste : "Président de la république du Sénégal"},
      {id : 2, url : "assets/tapha.png",
       content : "“Nous voulons que chaque jeune Sénégalais, où qu'il se trouve, ait accès à une formation de qualité, lui permettant de réaliser son potentiel, de créer des entreprises, et de contribuer activement à la construction de notre pays. C'est ainsi que nous bâtirons un Sénégal émergent et prospère, où chacun trouve sa place. La formation professionnelle joue un rôle crucial dans l’adaptation des compétences aux besoins du marché. Elle permet aux individus de se spécialiser, d’acquérir des savoir-faire pratiques, et d’évoluer dans leur carrière.”", 
       name : "M. Amadou Moustapha Ndieck SARR",
        poste : "Ministre de la formation professionnelle"},
      {id : 3, url : "assets/babo.png", 
      content : "“Au-delà de son rôle de passerelle vers l’emploi, la formation professionnelle est un vecteur de transformation sociale. Elle permet de réduire les inégalités en offrant à chacun les outils nécessaires pour progresser dans le monde du travail. En formant des professionnels qualifiés, elle soutient le développement des entreprises et renforce la résilience de notre tissu économique face aux défis technologiques et sociaux.”", 
      name : "Dr. Babo Amadou BA",
       poste : "Directeur général de 3FPT"}
    ]
  }

  setDrop():void{
    this.drop = !this.drop
    if(this.drop){
      this.drop1 = this.drop2 = false
    }
  
  }
  setDrop1():void{
    this.drop1 = !this.drop1
    if(this.drop1){
      this.drop = this.drop2 = false
    }
  }
  setDrop2():void{
    this.drop2 = !this.drop2
    if(this.drop2){
      this.drop1 = this.drop = false
    }

  }
  


  scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
