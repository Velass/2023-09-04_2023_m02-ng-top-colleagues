import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColleagueComponent } from './shared/components/colleague/colleague.component';
import { CreateColleagueReactiveFormsComponent } from './shared/components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';
import { CreateColleagueFormsComponent } from './shared/components/create-colleague-forms/create-colleague-forms.component';

export const routes: Routes = [
  { path: 'colleagues', component: ColleagueComponent },
  { path: 'form-template', component: CreateColleagueFormsComponent },
  { path: 'form-reactive', component: CreateColleagueReactiveFormsComponent },

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }