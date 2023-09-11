import { Component } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { FirstLastValidatorDirective } from '../../validators/first-last-validator.directive';
import { PseudoValidatorDirective } from '../../validators/pseudo-validator.directive';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  colleague : any = {
    pseudo: '',
    last: '',
    first: '',
    photo: ''
  };

constructor(private colleagueService: ColleagueService) { }

ngOnInit(): void {

}

ajouter() {
    this.colleagueService.createColleague(this.colleague).subscribe(res => {
      console.log(res)
    });

}

}
