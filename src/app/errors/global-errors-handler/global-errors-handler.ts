import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from 'stacktrace-js'

import { UserService } from "src/app/core/user/user.service";

@Injectable()
export class GlobalErrorsHandler implements ErrorHandler{

    constructor(private injector: Injector){}

    handleError(error: any): void {
        console.log('Entrou no global');

        const location = this.injector.get(LocationStrategy)
        const userName = this.injector.get(UserService).getUserName()

        const url = location instanceof PathLocationStrategy
        ? location.path()
        : '';

        const message = error.message
            ? error.message
            : error
        
        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stack = stackFrames
                    .map(sf => sf.toString())
                    .join('\n')

                console.log(message)
                console.log(stack)
                console.log({ message, url, stack, userName })
            })
    }

}