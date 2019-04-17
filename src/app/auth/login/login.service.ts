import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api';
import { User } from './user.model';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    user: User
    showMenuEmitter = new EventEmitter<boolean>()

    constructor(private http: HttpClient, private router: Router) { }

    returnUser() {
        var jsonAux = JSON.stringify(this.user)
        localStorage.setItem('userSession', jsonAux)
    }

    isLoggedIn(): boolean {
        if (!this.user) {
            return false
        }
        return true
    }

    login(email: string, senha: string): Observable<User> {
        return this.http.post<User>(`${SALV_API}/login`,
            { email: email, senha: senha }).pipe(tap(user => {
                this.user = user
                this.returnUser()
                // localStorage.setItem('session', user.accessToken)
                this.router.navigate(['/'])
            }))
    }

    logout() {
        this.user = undefined
        this.router.navigate(['/login'])
    }
}