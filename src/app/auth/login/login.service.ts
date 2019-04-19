import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api';
import { User } from './user.model';
import { tap } from 'rxjs/operators'
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoginService {

    user: User
    showMenuEmitter = new EventEmitter<boolean>()

    constructor(private http: HttpClient) { }

    login(user: User) {
        return this.http.post<User>(`${SALV_API}/login`, user).pipe(tap(res => {
            this.showMenuEmitter.emit(true)
        }))
    }

    logout() {
        localStorage.clear()
        this.showMenuEmitter.emit(false)
    }

    showMenuSession() {
        this.showMenuEmitter.emit(true)
    }
}