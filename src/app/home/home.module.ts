import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms'
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ],
    declarations: [SigninComponent]
})
export class HomeModule {}