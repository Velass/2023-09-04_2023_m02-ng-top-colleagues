import { Component } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { FirstLastValidatorDirective } from '../../validators/first-last-validator.directive';
import { PseudoValidatorDirective } from '../../validators/pseudo-validator.directive';
import {Router, ActivatedRoute } from '@angular/router';

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

constructor(private colleagueService: ColleagueService, private route: Router) { }

ngOnInit(): void {

}

ajouter() {
    this.colleagueService.createColleague(this.colleague).subscribe(res => {
      this.route.navigate(["/colleagues-list"]);
    });
}

}
