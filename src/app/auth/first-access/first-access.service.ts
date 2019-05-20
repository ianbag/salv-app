import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api'
import { FirstAccess } from './first-access.model'
import { LoginService } from '../login/login.service';

@Injectable()
export class FirstAccessService {

    username: string

    constructor(private http: HttpClient) { }

    definePass(firstAccess: FirstAccess) {
        let hash = location.hash
        this.username = hash.slice(18)
        return this.http.post<FirstAccess>(`${SALV_API}/usuario/${this.username}`, firstAccess)
    }
}