import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  colleagues!: Colleague[]
  private apiUrl = 'https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues';
  private apiUrl2 = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes";


  constructor(private http: HttpClient) {

  }



  vote(pseudo: string, like_hate: string): Observable<any> {
    const voteData = { pseudo, like_hate };
    return this.http.post(`${this.apiUrl2}`, voteData, this.httpOptions);

  }
  createColleague(colleague: any) {
    console.log(colleague)
    return this.http.post(`${this.apiUrl}`, colleague, this.httpOptions);
  }


  getColleagues(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>(this.apiUrl);
  }


}