import { Dependente } from './funcionario/infos-dependente/dependente.model';
import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Funcionario } from './funcionario.model';


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
        return this.http.get<Dependente[]>(`${SALV_API}/dependente/${id}/dependente`)
    }

    deleteFuncionario(id: string): Observable<any> {
        return this.http.delete<any>(`${SALV_API}/funcionario/${id}`)
    }

}