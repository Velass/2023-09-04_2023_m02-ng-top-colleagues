import { Injectable } from '@angular/core';
import { Vote } from '../models/vote'; // Assurez-vous d'importer l'interface Vote

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  deleteVote(vote: Vote): void {
    const index = this.votes.indexOf(vote);
    if (index !== -1) {
      this.votes.splice(index, 1);

    }
  }
  private votes: Vote[] = [];

  constructor() {
    this.votes = [
      { colleague: { pseudo: 'Collègue 1', photo: '', score: 100 }, vote: 1 },
      { colleague: { pseudo: 'Collègue 2', photo: '', score: 200 }, vote: 1 },
      { colleague: { pseudo: 'Collègue 3', photo: '', score: 300 }, vote: 1 },
      // Ajoutez d'autres votes fictifs ici
    ];
  }

  getVotes(): Vote[] {
    return this.votes;
  }

}
