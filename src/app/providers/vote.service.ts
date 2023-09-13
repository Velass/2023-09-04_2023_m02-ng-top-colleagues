import { Injectable } from '@angular/core';
import { Vote } from '../models/vote'; 
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private votes: Vote[] = [];
  private votesSubject = new Subject< Vote >();
   apiUrl : string = "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/votes";
  
  constructor(private http: HttpClient) {
    this.getVotes().subscribe((votes) => {
      this.votes = votes
    })
   
  }

  getVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.apiUrl);
  }
  

  get actionObs() {
    return this.votesSubject.asObservable();
  }

  actionNext(vote : Vote){
    this.votesSubject.next(vote)
  }


}
