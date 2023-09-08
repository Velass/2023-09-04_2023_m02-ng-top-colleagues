import { Component } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleagues: Colleague[] | undefined;

  constructor(private colleagueService: ColleagueService) { }

  ngOnInit(): void {
    this.colleagueService.getColleagues().subscribe(data => {
      this.colleagues = data; 
    });
  }

}
