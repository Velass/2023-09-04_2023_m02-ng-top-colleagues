import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { FirstLastValidatorDirective } from '../../validators/first-last-validator.directive';
import { PseudoValidatorDirective } from '../../validators/pseudo-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent implements OnInit {
  createColleagueForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private colleagueService: ColleagueService, private route: Router) { }

  ngOnInit(): void {
    this.createColleagueForm = this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.minLength(2)]],
      last: ['', [Validators.required, Validators.minLength(2)]],
      first: ['', [Validators.required, Validators.minLength(2)]],
      photo: ['', [Validators.required]],
    });
  }

  ajouter() {
    if (this.createColleagueForm.valid) {
      const formData = this.createColleagueForm.value;
      this.colleagueService.createColleague(formData).subscribe(res => {
        console.log(res)
        this.route.navigate(["/colleagues-list"]);
      });
      } else {
        console.log('Le formulaire contient des erreurs.');
      }
   }
}
