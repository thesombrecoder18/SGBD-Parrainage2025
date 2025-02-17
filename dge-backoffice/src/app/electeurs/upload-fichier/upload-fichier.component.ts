import { Component } from '@angular/core';
import {HeaderComponent} from '../../core/header/header.component';

@Component({
  selector: 'app-upload-fichier',
  standalone: true,
  imports:[HeaderComponent],
  templateUrl: './upload-fichier.component.html',
  styleUrls: ['./upload-fichier.component.scss']
})
export class UploadFichierComponent {
  file: File | null = null;
  message: string = '';

  constructor() {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.message = `Fichier sélectionné : ${this.file?.name}`;
  }

  uploadFile() {
    if (!this.file) {
      this.message = "Veuillez sélectionner un fichier.";
      return;
    }

    // Simulation d'un délai pour imiter un upload
    setTimeout(() => {
      this.message = "Fichier uploadé avec succès (simulation).";
    }, 1000);
  }
}
