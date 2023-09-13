import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateColleagueReactiveFormsComponent } from './shared/components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';
import { CreateColleagueFormsComponent } from './shared/components/create-colleague-forms/create-colleague-forms.component';
import { WelcomePage } from './pages/welcome/welcome.page';
import { DetailsColleagueComponent } from './shared/components/details-colleague/details-colleague.component';
import { LoginPage } from './pages/login/login.page';
import { AuthGuard } from './guard/auth.guard';


export const routes: Routes = [
  { path: 'colleagues-list', component: WelcomePage , canActivate: [AuthGuard]},
  { path: 'form-template', component: CreateColleagueFormsComponent, canActivate: [AuthGuard] },
  { path: 'form-reactive', component: CreateColleagueReactiveFormsComponent, canActivate: [AuthGuard] },
  { path: 'colleagues/:pseudo', component: DetailsColleagueComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPage },
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: '**', component: LoginPage },

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }