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
    permissao_acesso: boolean
    username: string

    constructor(private http: HttpClient, private cs: CookieService) { }

    login(user: User) {
        return this.http.post<User>(`${SALV_API}/login/`, user).pipe(tap(res => {
            localStorage.expandedMenu = 1
            this.primeiro_acesso = res.primeiro_acesso
            this.username = res.login
            this.permissao_acesso = this.verificaPermissaoAcesso(res.access)
            this.showMenuEmitter.emit(true)
        }))
    }

    verificaPermissaoAcesso(database) {
        if (database == 'ADM') {
            return true
        } else {
            return false
        }
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