import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {
// TODO ajouter un attribut "nombre"
private nombre :number = 0;
constructor() {}
// TODO ajouter une méthode "incrementer"
incrementer(): number  {
  this.nombre++;
return this.nombre;
}
}
