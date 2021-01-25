import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from 'src/app/core/auth.service'

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{
    loginForm: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ){}

    ngOnInit(): void{
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(){
        const userName: string = this.loginForm.get('userName').value
        const password: string = this.loginForm.get('password').value
        
        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => this.router.navigate(['user', userName]),
                err => {
                    console.log(err)
                    alert('Invalid user name or password')
                    this.loginForm.reset()
                }
            )
    }
}