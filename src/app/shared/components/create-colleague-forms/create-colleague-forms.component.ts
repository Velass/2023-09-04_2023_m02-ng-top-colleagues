import { Component } from '@angular/core';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  colleague = {
    pseudo: '',
    nom: '',
    prenom: '',
    photoUrl: ''
  };

  onSubmit() {
    console.log('Formulaire soumis avec succès:', this.colleague);
  }
}

