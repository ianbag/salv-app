import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { visualizarResidentes } from "./visualizar-residentes.model";
import { Residente } from './residente/residente.model';

@Injectable()
export class ResidentesService {

    constructor(private http: HttpClient) { }

    residentes(): Observable<visualizarResidentes[]> {
        return this.http.get<visualizarResidentes[]>(`${SALV_API}/pessoa`)
    }

    residenteById(id: string): Observable<Residente>{
        return this.http.get<Residente>(`${SALV_API}/pessoa/${id}`)
    }
}