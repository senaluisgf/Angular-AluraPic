import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms'
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SignUpService } from './signup/signup.service';

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule,
    ],
    declarations: [
        SignInComponent,
        SignUpComponent,
        HomeComponent,
    ],
    providers: [SignUpService]
})
export class HomeModule {}