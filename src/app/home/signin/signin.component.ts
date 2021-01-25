import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from 'src/app/core/auth/auth.service'
import { PlatformDetector } from 'src/app/core/platform-detector/platform-detector.service'

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{

    loginForm: FormGroup
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetector: PlatformDetector
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
                    this.platformDetector.isPlatformBrowser()
                        && this.userNameInput.nativeElement.focus()
                    alert('Invalid user name or password')
                    this.loginForm.reset()
                }
            )
    }
}