import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { LoginService } from './login/login.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private ls: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url
        return this.verifyLogin(url)
    }

    verifyLogin(url): boolean {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login'])
            return false
        } else if (this.isLoggedIn()) {
            this.ls.showMenuSession()
            return true
        }
    }

    isLoggedIn(): boolean {
        let status = false
        if (sessionStorage.getItem('isLoggedIn') == "true") {
            status = true
        } else {
            status = false
        }
        return status
    }
}
