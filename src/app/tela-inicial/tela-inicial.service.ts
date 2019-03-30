import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProvaDeVida } from './prova-de-vida/prova-de-vida.model';
import { Aniversariante } from './aniversariantes/aniversariante/aniversariante.model';


@Injectable()
export class TelaInicialService {

    constructor(private http: HttpClient) { }

    provaDeVida(): Observable<ProvaDeVida[]> {
        return this.http.get<ProvaDeVida[]>(`${SALV_API}/prova-de-vida`)
    }

    aniversariante(): Observable<Aniversariante[]> {
        return this.http.get<Aniversariante[]>(`${SALV_API}/aniversariante`)
    }

}