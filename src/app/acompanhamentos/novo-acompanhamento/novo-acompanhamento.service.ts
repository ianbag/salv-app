import { Funcionario } from './../../funcionarios/funcionario/funcionario.model';
import { Residente } from 'src/app/residentes/residente/residente.model';
import { SALV_API } from './../../app.api';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()

export class NovoAcompanhamentoService {

    constructor(private http: HttpClient) { }

    residentes(): Observable<Residente[]> {
        return this.http.get<Residente[]>(`${SALV_API}/residenteNome`)
    }

    funcionarios(): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(`${SALV_API}/funcionarioNome`)
    }
}