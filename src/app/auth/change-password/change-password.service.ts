import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api'
import { AlterarSenha } from './change-password.model';


@Injectable()
export class ChangePasswordService {

    constructor(private http: HttpClient) { }

    modificarSenha(SENHA_ATUAL, NOVA_SENHA, LOGIN) {
        return this.http.post<AlterarSenha>(`${SALV_API}/alterar-senha`, {SENHA_ATUAL, NOVA_SENHA, LOGIN} )
    }
}