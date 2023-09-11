import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true }]
})
export class PseudoValidatorDirective implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value).pipe(
      switchMap((pseudo: string) => {
        console.log(pseudo);
        if (!pseudo) {
          return of(null);
        }
        return this.http.get<any[]>(`https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues?pseudo=${pseudo}`).pipe(
          map((response) => {
            const exists = response.some((element) => pseudo === element.pseudo);
            if (exists === true) {
              return { pseudoExists: 'Le Pseudo existe déjà.' } ;
            }
            return null
          }),
        );
      })
    );
  }
  
}
