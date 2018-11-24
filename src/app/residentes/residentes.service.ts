import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { visualizarResidentes } from "./visualizar-residentes.model";

@Injectable()
export class ResidentesService {

    constructor(private http: HttpClient) { }

    pessoa(): Observable<visualizarResidentes[]> {
        return this.http.get<visualizarResidentes[]>(`${SALV_API}/pessoa`)
    }
}