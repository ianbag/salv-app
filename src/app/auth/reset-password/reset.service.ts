import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api'

@Injectable()
export class ResetService {

    constructor(private http: HttpClient) { }

    resetPassword(passes, token) {
        return this.http.post(`${SALV_API}/esqueci-a-senha/${token}`, passes)
    }
}