import { Dependente } from './funcionario/infos-dependente/depentente.model';
import { Funcionario } from './funcionario/funcionario.model';
import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class FuncionariosService {

    constructor(private http: HttpClient) { }

    funcionarios(): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(`${SALV_API}/pessoa`)
    }

    funcionarioById(id: string): Observable<Funcionario>{
        return this.http.get<Funcionario>(`${SALV_API}/pessoa/${id}`)
    }

    dependenteById(id: string): Observable<Dependente[]>{
        return this.http.get<Dependente[]>(`${SALV_API}/pessoa/${id}/dependente`)
    }

}