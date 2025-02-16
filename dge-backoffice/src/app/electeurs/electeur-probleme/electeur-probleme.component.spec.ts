import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurProblemeComponent } from './electeur-probleme.component';

describe('ElecteurProblemeComponent', () => {
  let component: ElecteurProblemeComponent;
  let fixture: ComponentFixture<ElecteurProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElecteurProblemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElecteurProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
