import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Convenio } from "./convenio.model";


@Injectable()
export class ConveniosService {

    constructor(private http: HttpClient) { }
    
    convenios(): Observable<Convenio[]> {
        return this.http.get<Convenio[]>(`${SALV_API}/convenio`)
    }

    conveniosById(id: number): Observable<Convenio>{
        return this.http.get<Convenio>(`${SALV_API}/convenio/${id}`)
    }

    deleteConvenio(id: string): Observable<any>{
        return this.http.delete<any>(`${SALV_API}/convenio/${id}`)
    }

}