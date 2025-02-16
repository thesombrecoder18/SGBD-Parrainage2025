import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";


@Component({
  selector: 'app-caroussel',
  imports: [],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.scss',
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0.4, transform: 'scale(1.2) translateY(20px)' }),
        animate('700ms ease-in-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition('* => void', [
        animate('700ms ease-in-out', style({ opacity: 0, transform: 'scale(0.8) translateY(-20px)' }))
      ])
    ])
  ]
  
})
export class CarousselComponent implements OnInit, OnDestroy {
  @Input() slides! : {title: string; id : number; url: string; value: string }[];
  currentSlide = 0;
  private intervalId: any;
  activeAutoPlay : boolean = true;

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.onNextClick();
    }, 3000); // Change slide every 3 seconds
  }


  ngOnInit(): void {
    

  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("heyy")
  
    if(this.activeAutoPlay){
      this.intervalId = setInterval(() => {
        this.onNextClick();
      }, 7000); 
    }
    this.activeAutoPlay = false;
    
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
