import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';

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

  constructor() {

  }
  handleAvis(avis: LikeHate) {

    if (this.colleague) {
      if (avis === LikeHate.LIKE) {
        this.colleague.score++;
      } if (avis === LikeHate.HATE) {
        this.colleague.score--;
      }
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
