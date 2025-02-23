import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-candidat-form',
  standalone: true,
  imports: [CoreModule, SharedModule, CommonModule, FormsModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.scss']
})
export class CandidatFormComponent implements OnInit {
  step: number = 1;
  voterCardForm: FormGroup;
  candidateForm: FormGroup;
  error: string = '';
  success: string = '';
  photoPreview: string | null = null;
  
  constructor(private fb: FormBuilder) {
    this.voterCardForm = this.fb.group({
      voterCard: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]]
    });

    this.candidateForm = this.fb.group({
      firstName: [{value: '', disabled: true}],
      lastName: [{value: '', disabled: true}],
      birthDate: [{value: '', disabled: true}],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      politicalParty: [''],
      slogan: ['', Validators.required],
      photo: [null, Validators.required],
      partyColors: this.fb.group({
        color1: ['#000000'],
        color2: ['#000000'],
        color3: ['#000000']
      }),
      websiteUrl: ['', Validators.pattern(/^https?:\/\/.+/)]
    });
  }

  ngOnInit(): void {
  }

  verifyVoterCard(): void {
    if (this.voterCardForm.valid) {
      setTimeout(() => {
        this.step = 2;
        this.error = '';
        
        this.candidateForm.patchValue({
          firstName: 'Amadou',
          lastName: 'Diallo',
          birthDate: '1975-03-15'
        });
      }, 1000);
    } else {
      this.error = 'Le numéro de carte d\'électeur doit contenir exactement 12 chiffres';
    }
  }

  onPhotoSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.candidateForm.patchValue({
        photo: file
      });

      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.candidateForm.valid) {
      setTimeout(() => {
        this.success = 'Candidature enregistrée avec succès! Un code de sécurité a été envoyé à votre email et téléphone.';
        setTimeout(() => {
          this.resetForm();
        }, 5000);
      }, 1000);
    } else {
      this.error = 'Veuillez remplir tous les champs obligatoires correctement';
    }
  }

  resetForm(): void {
    this.step = 1;
    this.voterCardForm.reset();
    this.candidateForm.reset();
    this.error = '';
    this.success = '';
    this.photoPreview = null;
  }

  getErrorMessage(controlName: string): string {
    const control = this.candidateForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Ce champ est obligatoire';
    }
    if (control?.hasError('email')) {
      return 'Veuillez entrer une adresse email valide';
    }
    if (control?.hasError('pattern')) {
      if (controlName === 'phone') {
        return 'Le numéro de téléphone doit contenir 9 chiffres';
      }
      if (controlName === 'websiteUrl') {
        return 'Veuillez entrer une URL valide commençant par http:// ou https://';
      }
    }
    return '';
  }
}