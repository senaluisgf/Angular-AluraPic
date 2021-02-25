import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { Alert, AlertType } from "./alert";

@Injectable({ providedIn: 'root' })
export class AlertService{

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouted: boolean = false;

    constructor(router: Router){
        router.events.subscribe(event => {
            if(event instanceof NavigationStart){
                if(this.keepAfterRouted){
                    this.keepAfterRouted = false
                } else {
                    this.clearImmediate()
                }
            }
        })
    }

    getAlert(): Observable<Alert>{
        return this.alertSubject.asObservable()
    }

    private alert(alertType: AlertType, message: string, keepAfterRouted: boolean){
        this.keepAfterRouted = keepAfterRouted
        this.alertSubject.next(new Alert(alertType, message))
    }

    success(message: string, keepAfterRouted: boolean = false){
        this.alert(AlertType.SUCCESS, message, keepAfterRouted);
    }

    warning(message: string, keepAfterRouted: boolean = false){
        this.alert(AlertType.WARNING, message, keepAfterRouted);
    }

    danger(message: string, keepAfterRouted: boolean = false){
        this.alert(AlertType.DANGER, message, keepAfterRouted);
    }

    info(message: string, keepAfterRouted: boolean = false){
        this.alert(AlertType.INFO, message, keepAfterRouted);
    }

    clearImmediate(){
        this.alertSubject.next(null)
    }
}