import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-votinghistory',
  templateUrl: './votinghistory.component.html',
  styleUrls: ['./votinghistory.component.scss']
})
export class VotingHistoryComponent implements OnInit {
  votes: Vote[] = []; 
  constructor(private voteService: VoteService) { }

  ngOnInit(): void {
    this.voteService.getVotes().subscribe((votes) => {
      this.votes = votes;
    });

    this.voteService.actionObs.subscribe((vote: Vote) => {
      this.votes.unshift(vote)
    })
  }


  deleteVote(vote: Vote): void {
    const index = this.votes.findIndex((v) => v.colleague.pseudo === vote.colleague.pseudo);
    if (index !== -1) {
      this.votes.splice(index, 1);

    }
  }
}
