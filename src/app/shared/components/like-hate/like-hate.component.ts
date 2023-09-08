import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Like_Hate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Output() avisEmitted: EventEmitter<Like_Hate> = new EventEmitter<Like_Hate>();
  @Input() disableLikeButton: boolean = true;
  @Input() disableHateButton: boolean = true;

  

  Like() {
    this.avisEmitted.emit(Like_Hate.LIKE);
  }

  Hate() {
    this.avisEmitted.emit(Like_Hate.HATE);
  }
}
