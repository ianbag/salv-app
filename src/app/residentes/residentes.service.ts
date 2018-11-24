import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pessoa } from "./pessoa.model";

@Injectable()
export class ResidentesService {

    constructor(private http: HttpClient) { }

    pessoa(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${SALV_API}/pessoa`)
    }
}