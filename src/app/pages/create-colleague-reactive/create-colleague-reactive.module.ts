import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleagueReactivePage } from './create-colleague-reactive.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CreateColleagueReactivePage
    ],
    exports: [
        CreateColleagueReactivePage,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
    ]
})
export class CreateColleagueReactiveModule { }
