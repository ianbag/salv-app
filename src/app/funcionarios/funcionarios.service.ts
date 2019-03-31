import { Dependente } from './funcionario/infos-dependente/dependente.model';
import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Funcionario, Pessoa, Telefone, Telefone_Pessoa } from './funcionario.model';


@Injectable()
export class FuncionariosService {

    _ref_cod_pessoa: number
    _ref_cod_telefone: number

    constructor(private http: HttpClient) { }


    funcionarios(): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(`${SALV_API}/funcionario`)
    }

    funcionarioById(id: string): Observable<Funcionario> {
        return this.http.get<Funcionario>(`${SALV_API}/funcionario/${id}`)
    }

    dependenteById(id: string): Observable<Dependente[]> {
        return this.http.get<Dependente[]>(`${SALV_API}/dependente/${id}`)
    }

    deleteFuncionario(id: string): Observable<any> {
        return this.http.delete<any>(`${SALV_API}/funcionario/${id}`)
    }

    createNewEmployee(pessoa: Pessoa, telefone: Telefone, funcionario: Funcionario) {
        return this.http.post<Pessoa>(`${SALV_API}/pessoa`, pessoa).switchMap(resPessoa => {
            this._ref_cod_pessoa = resPessoa.CODIGO
            delete funcionario.PESSOA
            return this.http.post<Telefone>(`${SALV_API}/telefone`, telefone).switchMap(resTelefone => {
                this._ref_cod_telefone = resTelefone.CODIGO

                const _ref_tel_pessoa = {
                    PESSOA_CODIGO: this._ref_cod_pessoa,
                    TELEFONE_CODIGO: this._ref_cod_telefone
                }

                return this.http.post<Telefone_Pessoa>(`${SALV_API}/telefone_pessoa`, _ref_tel_pessoa)
            })
        })
    }
}


// funcionario.PESSOA_CODIGO = res.CODIGO
//                 delete funcionario.PESSOA

//                 return this.http.post<Funcionario>(`${SALV_API}/funcionario`, funcionario)