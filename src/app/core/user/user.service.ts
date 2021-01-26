import { Injectable } from "@angular/core";
import { TokenService } from "../token/token.service";
import * as jwt_decode from 'jwt-decode'
import { BehaviorSubject } from "rxjs";
import { User } from "./user";

@Injectable({ providedIn: 'root' })
export class UserService {
    
    private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null)
    constructor(private tokenService: TokenService){
        this.tokenService.hasToken()
            && this.decodeAndNotify()
    }
    
    setToken(token: string){
        this.tokenService.setToken(token)
        this.decodeAndNotify()
    }

    getUser(){
        return this.userSubject.asObservable()
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken()
        const user: User = jwt_decode(token)
        this.userSubject.next(user)
    }

}