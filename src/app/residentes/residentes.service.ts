import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Residente } from './residente/residente.model';
import { Familiar } from './residente/infos-familiar/familiar.model';

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
}