import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-votinghistory',
  templateUrl: './votinghistory.component.html',
  styleUrls: ['./votinghistory.component.scss']
})
export class VotingHistoryComponent implements OnInit {
  votes: Vote[] = []; // Variable pour stocker les votes

  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
    this.votes = this.voteService.getVotes(); 
  }
   deleteVote(vote: Vote): void {
    // Appelez la méthode du service pour supprimer le vote
    this.voteService.deleteVote(vote);

    // Mettez à jour la liste des votes affichés
    this.votes = this.voteService.getVotes();
  }
}
