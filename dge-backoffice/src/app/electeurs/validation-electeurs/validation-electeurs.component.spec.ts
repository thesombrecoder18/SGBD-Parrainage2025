import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationElecteursComponent } from './validation-electeurs.component';

describe('ValidationElecteursComponent', () => {
  let component: ValidationElecteursComponent;
  let fixture: ComponentFixture<ValidationElecteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationElecteursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationElecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
