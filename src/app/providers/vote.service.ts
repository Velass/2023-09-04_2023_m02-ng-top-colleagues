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
   apiUrl : string = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes";
  
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
