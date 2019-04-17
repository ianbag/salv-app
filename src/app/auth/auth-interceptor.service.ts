import { User } from './login/user.model';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Injectable, Injector } from '@angular/core'
import { LoginService } from './login/login.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    jsonUser = localStorage.getItem('userSession')
    user: User = JSON.parse(this.jsonUser)

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const ls = this.injector.get(LoginService)
        

        if (this.user) {
            ls.showMenuEmitter.emit(true)
            const authRequest = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.user.accessToken}`
                }
            })
            ls.user = this.user
            return next.handle(authRequest)
        } else {
            return next.handle(request)
        }
    }
}