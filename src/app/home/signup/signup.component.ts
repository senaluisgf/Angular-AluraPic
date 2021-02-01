import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit{
    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email:['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(50)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    Validators.pattern(/^[a-z0-9_\-]+$/),
                    Validators.minLength(2),
                    Validators.maxLength(10)
                ]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(8)
                ]
            ]
        })
    }
}