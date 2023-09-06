import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  constructor() { }

   colleagues: Colleague[] = [
    { pseudo: "test1", photo: 'test',score:50 },
    { pseudo: "test2", photo: 'test',score:-100 },
    { pseudo: "test3", photo: 'test',score:150 },
    { pseudo: "test4", photo: 'test',score:-200 },
  ];

  list(): Colleague[] {
    return this.colleagues;
  }
}