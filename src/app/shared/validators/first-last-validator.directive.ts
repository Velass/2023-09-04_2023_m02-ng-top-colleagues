import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective,
    multi: true}]
})
export class FirstLastValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const nom = control.get('nom')?.value;
    const prenom = control.get('prenom')?.value;
    console.log(nom)
    console.log(prenom)
    if (nom === prenom) {
      return { firstLast: 'Le nom ne peut pas être identique au prénom.' };
    }
    return null;
    }

}
