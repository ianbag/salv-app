import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Convenio, Telefone, Endereco, ConvenioQuery } from "./convenio.model";


@Injectable()
export class ConveniosService {

    constructor(private http: HttpClient) { }
    
    convenios(): Observable<Convenio[]> {
        return this.http.get<Convenio[]>(`${SALV_API}/convenio`)
    }

    conveniosById(id: number): Observable<Convenio> {
        return this.http.get<Convenio>(`${SALV_API}/convenio/${id}`)
    }

    telefoneById(id: string): Observable<Telefone[]> {
        return this.http.get<Telefone[]>(`${SALV_API}/telefone_convenio/${id}`)
    }

    enderecoById(id: string): Observable<Endereco[]> {
        return this.http.get<Endereco[]>(`${SALV_API}/endereco_convenio/${id}`)
    }

    deleteConvenio(id: string): Observable<any> {
        return this.http.delete<any>(`${SALV_API}/convenio/${id}`)
    }

    convenioQuery(id: string): Observable<ConvenioQuery[]> {
        return this.http.get<ConvenioQuery[]>(`${SALV_API}/convenio-full/${id}`)
    }

    

}