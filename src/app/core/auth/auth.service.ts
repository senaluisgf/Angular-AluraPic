import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'

import { TokenService } from '../token/token.service'

const API_URL: string = 'http://localhost:3000'

@Injectable({ providedIn: 'root' })
export class AuthService{

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ){}

  authenticate(userName, password){
    return this.http
      .post(
        API_URL+'/user/login',
        { userName, password },
        { observe: 'response' }
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token')
        this.tokenService.setToken(authToken)
      }))
  }
}