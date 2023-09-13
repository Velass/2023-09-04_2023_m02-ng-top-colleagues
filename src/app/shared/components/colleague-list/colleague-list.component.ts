import { Component } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleagues: Colleague[] = [];
  onecolleagues : any = {
    pseudo: '',
    last: '',
    first: '',
    photo: '',
    score: 0,
  };

  pseudoInLocalStorage: string | null = localStorage.getItem("pseudo");
  constructor(private colleagueService: ColleagueService) { }

  ngOnInit(): void {
    this.colleagueService.getColleagues().subscribe(data => {
      this.colleagues = data; 
      this.colleagueService.getColleaguesByPseudo(this.pseudoInLocalStorage).subscribe(res =>{
        console.log(res)
        console.log(this.pseudoInLocalStorage)
        this.onecolleagues = res
        console.log(this.colleagues)
      })
    });
  }

}
