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
    // Ici, vous pouvez gérer la soumission du formulaire, par exemple, en ajoutant le collègue à une liste.
    console.log('Formulaire soumis avec succès:', this.colleague);
  }
}

