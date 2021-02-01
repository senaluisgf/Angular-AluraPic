import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ],
    declarations: [
        SignInComponent,
        SignUpComponent
    ]
})
export class HomeModule {}