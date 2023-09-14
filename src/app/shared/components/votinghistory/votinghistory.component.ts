import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/app/models/vote';
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
      this.votes.push(...votes);
      console.log(this.votes)
      this.voteService.actionObs.subscribe((vote: Vote) => {
        this.votes.unshift(vote)
      })
    });

  }

  deleteVote(index: number): void {
    if (index !== -1) {
      this.votes.splice(index, 1);

    }
  }
}
