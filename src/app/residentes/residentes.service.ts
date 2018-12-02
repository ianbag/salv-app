import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Residente } from './residente/residente.model';
import { Familiar } from './residente/infos-familiar/familiar.model';
import { Convenio } from './residente/infos-convenio/convenio.model';

@Injectable()
export class ResidentesService {

    constructor(private http: HttpClient) { }

    residentes(): Observable<Residente[]> {
        return this.http.get<Residente[]>(`${SALV_API}/pessoa`)
    }

    residenteById(id: string): Observable<Residente>{
        return this.http.get<Residente>(`${SALV_API}/pessoa/${id}`)
    }

    familiarById(id: string): Observable<Familiar[]>{
        return this.http.get<Familiar[]>(`${SALV_API}/pessoa/${id}/familiar`)
    }

    convenioById(id: string): Observable<Convenio[]>{
        return this.http.get<Convenio[]>(`${SALV_API}/pessoa/${id}/convenio`)
    }

    deleteResidente(id: string): Observable<any>{
        return this.http.delete<any>(`${SALV_API}/pessoa/${id}`)
    }
}