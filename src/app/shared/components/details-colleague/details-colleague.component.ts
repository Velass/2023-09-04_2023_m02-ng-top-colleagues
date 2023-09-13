import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-details-colleague',
  templateUrl: './details-colleague.component.html',
  styleUrls: ['./details-colleague.component.scss']
})
export class DetailsColleagueComponent {
  
  colleague : any = {
    pseudo: '',
    last: '',
    first: '',
    photo: '',
    score: 0,
  };
  constructor(private colleagueService : ColleagueService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const colleaguePseudo =  this.route.snapshot.paramMap.get('pseudo');
    this.colleagueService.getColleaguesByPseudo(colleaguePseudo).subscribe((res) => {
      this.colleague = res;
    });
  }

}
