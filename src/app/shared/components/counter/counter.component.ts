import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';


@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy {
  likeCount: number = 0;
  hateCount: number = 0;
  sub : Subscription


  constructor(private voteServices :VoteService) {

    this.sub = this.voteServices.actionObs.subscribe((vote: Vote) => {
      if (vote.like_hate == "LIKE") {
        this.likeCount++
      }else if (vote.like_hate == "HATE"){
        this.hateCount++;
      }
    })
   }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }



}
