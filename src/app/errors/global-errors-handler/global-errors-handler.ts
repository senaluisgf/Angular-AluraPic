import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from 'stacktrace-js'

import { UserService } from "src/app/core/user/user.service";
import { ServerLogService } from "./server-log.service";
import { Router } from "@angular/router";

import { environment } from '../../../environments/environment'

@Injectable()
export class GlobalErrorsHandler implements ErrorHandler{

    constructor(private injector: Injector){}

    handleError(error: any): void {
        console.log('Entrou no global');

        const location = this.injector.get(LocationStrategy)
        const userName = this.injector.get(UserService).getUserName()
        const serverLogService = this.injector.get(ServerLogService)
        const router = this.injector.get(Router)

        const url = location instanceof PathLocationStrategy
        ? location.path()
        : '';

        const message = error.message
            ? error.message
            : error
        
        if(environment.production) router.navigate(['/global-errors'])
        
        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stack = stackFrames
                    .map(sf => sf.toString())
                    .join('\n')

                console.log(message)
                console.log(stack)
                serverLogService
                    .log({ message, url, stack, userName })
                    .subscribe(
                        () => console.log("Error sent to server log errors"),
                        err => {
                            console.log('Failed to send error to server log errors')
                            throw new Error(err)
                        }
                    )
            })
    }

}