import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { ResidenteDetalhes } from "./residente/residente-detalhes.model";

@Injectable()
export class ResidentesService {

    constructor(private http: HttpClient) {

    }

    residentes(): Observable<ResidenteDetalhes[]> {
        return this.http.get<ResidenteDetalhes[]>(`${SALV_API}/pessoa`)
    }
}