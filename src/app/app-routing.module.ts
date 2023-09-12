import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateColleagueReactiveFormsComponent } from './shared/components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';
import { CreateColleagueFormsComponent } from './shared/components/create-colleague-forms/create-colleague-forms.component';
import { WelcomePage } from './pages/welcome/welcome.page';

export const routes: Routes = [
  { path: 'colleagues-list', component: WelcomePage },
  { path: 'form-template', component: CreateColleagueFormsComponent },
  { path: 'form-reactive', component: CreateColleagueReactiveFormsComponent },

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }