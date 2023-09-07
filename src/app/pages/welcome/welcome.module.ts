import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from './welcome.page';
import { SharedModule } from "../../shared/shared.module";
import { AppComponent } from 'src/app/app.component';



@NgModule({
    declarations: [
        WelcomePage,
        
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        WelcomePage
    ]
})
export class WelcomeModule { }
