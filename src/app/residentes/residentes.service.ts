import { SALV_API } from './../app.api';
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Residente, Pessoa } from './residente/residente.model';
import { Familiar, Endereco, Telefone } from './residente/infos-familiar/familiar.model';
import { Convenio } from './residente/infos-convenio/convenio.model';

@Injectable()
export class ResidentesService {

    residente: Residente
    pessoa: Pessoa
    familiar: Familiar
    endereco: Endereco
    telefone: Telefone

    constructor(private http: HttpClient) { }

    residentes(): Observable<Residente[]> {
        return this.http.get<Residente[]>(`${SALV_API}/residente`)
    }

    residenteById(id: string): Observable<Residente>{
        return this.http.get<Residente>(`${SALV_API}/residente/${id}`)
    }

    familiarById(id: string): Observable<Familiar[]>{
        return this.http.get<Familiar[]>(`${SALV_API}/residente_familiar/${id}`)
    }

    convenioById(id: string): Observable<Convenio[]>{
        return this.http.get<Convenio[]>(`${SALV_API}/residente_convenio/${id}`)
    }

    deleteResidente(id: string): Observable<any>{
        return this.http.delete<any>(`${SALV_API}/residente/${id}`)
    }

    createPessoa(pessoa: Pessoa): Observable<Pessoa>{
        return this.http.post<Pessoa>(`${SALV_API}/pessoa`, pessoa)
    }

    createResidente(residente: Residente): Observable<Residente>{
        return this.http.post<Residente>(`${SALV_API}/residente`, residente)
    }

    createFamiliar(familiar: Familiar): Observable<Familiar>{
        return this.http.post<Familiar>(`${SALV_API}/familiar`, familiar)
    }

    createResidenteFamiliar(residenteFamiliar): Observable<any>{
        return this.http.post<Familiar>(`${SALV_API}/residente_familiar`, residenteFamiliar)
    }

    createEndereco(endereco: Endereco): Observable<Endereco>{
        return this.http.post<Endereco>(`${SALV_API}/endereco`, endereco)
    }

    createEnderecoFamiliar(enderecoFamiliar): Observable<any>{
        return this.http.post<Familiar>(`${SALV_API}/endereco_familiar`, enderecoFamiliar)
    }

}