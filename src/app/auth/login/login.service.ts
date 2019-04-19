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

    login(user: User) {
        return this.http.post<User>(`${SALV_API}/login`, user).pipe(tap(res => {
            this.showMenuEmitter.emit(true)
        }))
    }

    logout() {
        localStorage.clear()
        this.showMenuEmitter.emit(false)
    }
}