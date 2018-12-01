import { Acompanhamento } from './acompanhamento/acompanhamento.model';
import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AcompanhamentosService {

    constructor(private http: HttpClient) { }

    acompanhamentos(): Observable<Acompanhamento[]> {
        return this.http.get<Acompanhamento[]>(`${SALV_API}/acompanhamento`)
    }

    acompanhamentoById(id: string): Observable<Acompanhamento>{
        return this.http.get<Acompanhamento>(`${SALV_API}/acompanhamento/${id}`)
    }
     
}