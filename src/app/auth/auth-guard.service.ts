import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { LoginService } from './login/login.service'
import { isNull } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public auth: LoginService, public router: Router) { }

    canActivate(): boolean {

        if(localStorage.getItem('userSession') === null){
            this.router.navigate(['login'])
            return false
        }else{
            return true
        }

        // if (!this.auth.isLoggedIn()) {
        //     this.router.navigate(['login'])
        //     return false
        // }
        // return true
    }
}