import { Residente } from './../../residentes/residente/residente.model';
import { Acompanhamento } from './../acompanhamento/acompanhamento.model';
import { Funcionario } from './../../funcionarios/funcionario/funcionario.model';

import { SALV_API } from './../../app.api';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()

export class NovoAcompanhamentoService {

    acompanhamento: Acompanhamento

    constructor(private http: HttpClient) { }

    residentes(): Observable<Residente[]> {
        return this.http.get<Residente[]>(`${SALV_API}/residenteNome`)
    }

    funcionarios(): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(`${SALV_API}/funcionarioNome`)
    }
    createAcompanhamento(acompanhamento: Acompanhamento): Observable<Acompanhamento>{
        return this.http.post<Acompanhamento>(`${SALV_API}/residente`, acompanhamento)
    }

    
}