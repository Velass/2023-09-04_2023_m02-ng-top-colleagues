import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './pages/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    WelcomeModule,
    
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
