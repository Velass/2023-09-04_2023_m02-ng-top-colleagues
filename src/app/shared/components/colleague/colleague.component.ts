import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Like_Hate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
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
  @Output() avisEmitted: EventEmitter<any> = new EventEmitter<Vote>();

  disableLikeButton = false;
  disableHateButton = false;


  constructor(private voteService : VoteService,private colleagueService : ColleagueService) {

  }
  
  handleAvis(avis: Like_Hate) {
    if (this.colleague) {
      let vote = {colleague : this.colleague, like_hate: avis};
      let action ="";

      if (avis === Like_Hate.LIKE){
        vote.like_hate = Like_Hate.LIKE;
        action="LIKE"
      }else if(avis === Like_Hate.HATE){
        vote.like_hate = Like_Hate.HATE;
        action="HATE"
      }
      this.avisEmitted.emit({ colleague: this.colleague, action: action, vote: vote });
      
      
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
