import { FormGroup, ValidatorFn } from "@angular/forms";

export const userNamePasswordValidator: ValidatorFn = (formGroup: FormGroup) => {
    const userName: string = formGroup.get('userName').value
    const password: string = formGroup.get('password').value

    if(userName.trim() + password.trim()){
        if(userName != password){
            return null
        } else {
            return { userNamePassword: true }
        }
    }
}