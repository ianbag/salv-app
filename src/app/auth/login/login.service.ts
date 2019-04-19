import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api';
import { User } from './user.model';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    // user: User
    // showMenuEmitter = new EventEmitter<boolean>()

    constructor(private http: HttpClient, private router: Router) { }

    // isLoggedIn(): boolean {
    //     return this.user !== undefined
    // }

    // login(email: string, senha: string): Observable<User> {
    //     return this.http.post<User>(`${SALV_API}/login`,
    //         { email: email, senha: senha }).pipe(tap(user => {
    //             this.user = user
    //             this.showMenuEmitter.emit(true)
    //             this.router.navigate(['/'])
    //         }))
    // }

    // logout() {
    //     this.user = undefined
    //     this.router.navigate(['/login'])
    // }
    
}