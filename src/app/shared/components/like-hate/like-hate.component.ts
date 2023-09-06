import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Output() avisEmitted: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();
  @Input() disableLikeButton: boolean = true;
  @Input() disableHateButton: boolean = true;

  

  Like() {
    this.avisEmitted.emit(LikeHate.LIKE);
  }

  Hate() {
    this.avisEmitted.emit(LikeHate.HATE);
  }
}
