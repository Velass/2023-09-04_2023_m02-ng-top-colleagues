import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleaguePage } from './create-colleague.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CreateColleagueFormsComponent } from 'src/app/shared/components/create-colleague-forms/create-colleague-forms.component';



@NgModule({
  declarations: [
    CreateColleaguePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
  CreateColleaguePage,
  CreateColleagueFormsComponent
  ],
  
})
export class CreateColleagueModule { }
