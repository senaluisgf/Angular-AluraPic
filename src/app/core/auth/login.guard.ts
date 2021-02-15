import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user/user.service";

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router: Router
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        if(this.userService.isLogged()){
            const userName = this.userService.getUserName()
            this.router.navigate(['user', userName])
            return false
        }
        return true
    }

}