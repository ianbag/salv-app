import { Acompanhamento } from './acompanhamento/acompanhamento.model';
import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AcompanhamentosService {

    constructor(private http: HttpClient) { }

    acompanhamentos(): Observable<Acompanhamento[]> {
        return this.http.get<Acompanhamento[]>(`${SALV_API}/pessoa`)
    }

    acompanhamentoById(id: string): Observable<Acompanhamento>{
        return this.http.get<Acompanhamento>(`${SALV_API}/pessoa/${id}`)
    }

    familiarById(id: string): Observable<Familiar[]>{
        return this.http.get<Familiar[]>(`${SALV_API}/pessoa/${id}/familiar`)
    }


    deleteResidente(id: string): Observable<any>{
        return this.http.delete<any>(`${SALV_API}/pessoa/${id}`)
    }
}