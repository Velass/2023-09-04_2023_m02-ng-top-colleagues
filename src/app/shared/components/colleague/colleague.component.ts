import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input()
  colleague!: Colleague;

  disableLikeButton = false;
  disableHateButton = false;


  constructor(private voteService : VoteService,private colleagueService : ColleagueService) {

  }
  
  handleAvis(avis: LikeHate) {
    if (this.colleague) {
      let vote = {colleague : this.colleague, vote: LikeHate.LIKE};
      let action ="";

      if (avis === LikeHate.LIKE){
        vote.vote = LikeHate.LIKE;
        action="LIKE"
      }else if(avis === LikeHate.HATE){
        vote.vote = LikeHate.HATE;
        action="HATE"
      }
      
      this.voteService.actionNext(vote)
      this.colleagueService.vote(this.colleague.pseudo, action).subscribe(res => {
        this.colleague.score = res.score
      });

      if (this.colleague.score >= 1000) {
        this.disableLikeButton = true;
      }

      if (this.colleague.score <= -1000) {
        this.disableHateButton = true;

      }
    }
  }


  get likeHateDisable(): boolean {
    return this.disableLikeButton;
  }

}
