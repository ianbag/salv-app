import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api';
import { User } from './user.model';
import { tap } from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

    user: User
    showMenuEmitter = new EventEmitter<boolean>()
    primeiro_acesso: number

    constructor(private http: HttpClient, private cs: CookieService) { }

    login(user: User) {
        return this.http.post<User>(`${SALV_API}/login/`, user).pipe(tap(res => {
            localStorage.expandedMenu = 1
            this.primeiro_acesso = res.primeiro_acesso
            this.showMenuEmitter.emit(true)
        }))
    }

    logout() {
        this.cs.deleteAll()
        // sessionStorage.clear()
        localStorage.expandedMenu = 0
        this.showMenuEmitter.emit(false)
    }

    showMenuSession() {
        this.showMenuEmitter.emit(true)
    }
}