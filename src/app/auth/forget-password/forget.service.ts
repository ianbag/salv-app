import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SALV_API } from './../../app.api';
import { Usuario } from './forget.model';

@Injectable()
export class ForgetService {

    constructor(private http: HttpClient) { }

    sendMail(mailUser: Usuario) {
        return this.http.post(`${SALV_API}/esqueci-a-senha`, mailUser)
    }
}