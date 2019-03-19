import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api';
import { User } from './user.model';
import { tap } from 'rxjs/operators'

@Injectable()
export class LoginService {

    user: User

    constructor(private http: HttpClient) { }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    login(email: string, senha: string): Observable<User> {
        return this.http.post<User>(`${SALV_API}/login`,
            { email: email, senha: senha }).pipe(tap(user => this.user = user))
    }
}