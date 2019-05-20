import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api'
import { FirstAccess } from './first-access.model'
import { LoginService } from '../login/login.service';

@Injectable()
export class FirstAccessService {

    constructor(private http: HttpClient, private ls: LoginService) { }

    definePass(firstAccess: FirstAccess) {
        console.log(firstAccess)
    }
}