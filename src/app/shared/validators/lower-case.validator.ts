import { AbstractControl } from "@angular/forms";

const expressao = /^[a-z0-9_\-]+$/;

export function lowerCaseValidator(control: AbstractControl){
    if(control.value.trim() && !expressao.test(control.value)){
        return { lowerCase: true };
    } else {
        return null;
    }
}