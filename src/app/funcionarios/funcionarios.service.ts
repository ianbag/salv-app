import { Dependente } from './funcionario/infos-dependente/dependente.model';
import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/observable/forkJoin'
import { Funcionario, Pessoa, Telefone, Telefone_Pessoa, Endereco, Endereco_Pessoa, FuncionarioQuery } from './funcionario.model';


@Injectable()
export class FuncionariosService {

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

    telefoneById(id: string): Observable<Telefone[]> {
        return this.http.get<Telefone[]>(`${SALV_API}/telefone_pessoa/${id}`)
    }

    enderecoById(id: string): Observable<Endereco[]> {
        return this.http.get<Endereco[]>(`${SALV_API}/endereco_pessoa/${id}`)
    }

    deleteFuncionario(id: string): Observable<any> {
        return this.http.delete<any>(`${SALV_API}/funcionario/${id}`)
    }

    funcionarioQuery(id: string): Observable<FuncionarioQuery[]> {
        return this.http.get<FuncionarioQuery[]>(`${SALV_API}/funcionario-full/${id}`)
    }

    createNewEmployee(pessoa: Pessoa, telefone: Telefone, endereco: Endereco, funcionario: Funcionario) {
        return this.http.post<Pessoa>(`${SALV_API}/pessoa`, pessoa).switchMap(resPessoa => {
            delete funcionario.PESSOA
            return this.http.post<Telefone>(`${SALV_API}/telefone`, telefone).switchMap(resTelefone => {
                delete funcionario.TELEFONE
                let _rel_tel_pes = {
                    PESSOA_CODIGO: resPessoa.CODIGO,
                    TELEFONE_CODIGO: resTelefone.CODIGO
                }
                return this.http.post<Telefone_Pessoa>(`${SALV_API}/telefone_pessoa`, _rel_tel_pes).switchMap(resTP => {
                    return this.http.post<Endereco>(`${SALV_API}/endereco`, endereco).switchMap(resEndereco => {
                        delete funcionario.ENDERECO
                        let _rel_end_pes = {
                            PESSOA_CODIGO: resPessoa.CODIGO,
                            ENDERECO_CODIGO: resEndereco.CODIGO
                        }
                        return this.http.post<Endereco_Pessoa>(`${SALV_API}/endereco_pessoa`, _rel_end_pes).switchMap(resEP => {
                            funcionario.PESSOA_CODIGO = resPessoa.CODIGO
                            return this.http.post<Funcionario>(`${SALV_API}/funcionario`, funcionario)
                        })
                    })
                })
            })
        })
    }

    updateEmployee(cod_pes: number, cod_tel: number, cod_end: number, cod_fun: number, pessoa: Pessoa, telefone: Telefone, endereco: Endereco, funcionario: Funcionario) {
        return this.http.put<Pessoa>(`${SALV_API}/pessoa/${cod_pes}`, pessoa).switchMap(resP => {
            delete funcionario.PESSOA
            return this.http.put<Telefone>(`${SALV_API}/telefone/${cod_tel}`, telefone).switchMap(resT => {
                delete funcionario.TELEFONE
                return this.http.put<Endereco>(`${SALV_API}/endereco/${cod_end}`, endereco).switchMap(resE => {
                    delete funcionario.ENDERECO
                    return this.http.put<Funcionario>(`${SALV_API}/funcionario/${cod_fun}`, funcionario)
                })
            })
        })
    }
}