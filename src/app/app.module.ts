import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateColleagueReactiveModule } from './pages/create-colleague-reactive/create-colleague-reactive.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { LoginRoutingModule } from './pages/login/login-routing.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    WelcomeModule,
    HttpClientModule,
    CreateColleagueModule,
    CommonModule,
    FormsModule,
    CreateColleagueReactiveModule,
    AppRoutingModule,
    RouterModule,
    LoginModule,
    LoginRoutingModule
  
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
