import { SALV_API } from './../app.api';
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Residente, Pessoa, Residente_Convenio } from './residente/residente.model';
import { Familiar, Endereco, Telefone } from './residente/infos-familiar/familiar.model';
import { Convenio } from './residente/infos-convenio/convenio.model';

@Injectable()
export class ResidentesService {

    residente: Residente
    pessoa: Pessoa
    familiar: Familiar
    endereco: Endereco
    telefones: Telefone[]
    convenio: Residente_Convenio


    constructor(private http: HttpClient) { }

    residentes(): Observable<Residente[]> {
        return this.http.get<Residente[]>(`${SALV_API}/residente`)
    }

    residenteById(id: string): Observable<Residente> {
        return this.http.get<Residente>(`${SALV_API}/residente/${id}`)
    }

    familiarById(id: string): Observable<Familiar[]> {
        return this.http.get<Familiar[]>(`${SALV_API}/residente_familiar/${id}`)
    }

    convenioById(id: string): Observable<Convenio[]> {
        return this.http.get<Convenio[]>(`${SALV_API}/residente_convenio/${id}`)
    }

    deleteResidente(id: string): Observable<any> {
        return this.http.delete<any>(`${SALV_API}/residente/${id}`)
    }

    convenios() : Observable<Residente_Convenio[]>{
        return this.http.get<Residente_Convenio[]>(`${SALV_API}/convenio`)
    }

    createPessoa(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(`${SALV_API}/pessoa`, pessoa)
    }

    createResidente(residente: Residente): Observable<Residente> {
        return this.http.post<Residente>(`${SALV_API}/residente`, residente)
    }

    createFamiliar(familiar: Familiar): Observable<Familiar> {
        return this.http.post<Familiar>(`${SALV_API}/familiar`, familiar)
    }

    createResidenteFamiliar(residenteFamiliar): Observable<any> {
        return this.http.post<Familiar>(`${SALV_API}/residente_familiar`, residenteFamiliar)
    }

    createEndereco(endereco: Endereco): Observable<Endereco> {
        return this.http.post<Endereco>(`${SALV_API}/endereco`, endereco)
    }

    createEnderecoFamiliar(enderecoFamiliar): Observable<any> {
        return this.http.post<Familiar>(`${SALV_API}/endereco_familiar`, enderecoFamiliar)
    }

    createNewResidente() {
        console.log("PESSOA", this.pessoa)
        return this.http.post<Pessoa>(`${SALV_API}/pessoa`, this.pessoa).switchMap(resPessoa => {
            this.residente.PESSOA_CODIGO = resPessoa.CODIGO
            console.log("RESIDENTE", this.residente)

            return this.http.post<Residente>(`${SALV_API}/residente`, this.residente).switchMap(resResidente => {
                console.log("FAMILIAR", this.familiar)

                return this.http.post<Familiar>(`${SALV_API}/familiar`, this.familiar).switchMap(resFamiliar => {

                    let RESIDENTE_FAMILIAR = {
                        FAMILIAR_CODIGO: resFamiliar.CODIGO,
                        RESIDENTE_CODIGO: resResidente.CODIGO_RESIDENTE
                    }
                    console.log("RESIDENTE FAMILIAR", RESIDENTE_FAMILIAR)

                    return this.http.post<any>(`${SALV_API}/residente_familiar`, RESIDENTE_FAMILIAR).switchMap(resResidenteFamiliar => {
                        console.log("ENDERECO", this.endereco)
                        return this.http.post<Endereco>(`${SALV_API}/endereco`, this.endereco).switchMap(resEndereco => {
                            console.log("RES ENDERECO POS", resEndereco)
                            let ENDERECO_FAMILIAR = {
                                FAMILIAR_CODIGO: resFamiliar.CODIGO,
                                ENDERECO_CODIGO: resEndereco.CODIGO
                            }
                            console.log("ENDERECO_FAMILIAR", ENDERECO_FAMILIAR)
                            return this.http.post<any>(`${SALV_API}/endereco_familiar`, ENDERECO_FAMILIAR).switchMap(resEnderecoFamiliar => {
                                let TELEFONES_FAMILIARES = {
                                    familiar: resFamiliar.CODIGO,
                                    telefones: this.telefones
                                }
                                console.log("TELEFONESFAMILIARES", TELEFONES_FAMILIARES)
                                return this.http.post<any>(`${SALV_API}/telefones`, TELEFONES_FAMILIARES).switchMap(resTelefonesFamiliares => {
                                    console.log("CONVENIO", this.convenio)
                                    this.convenio.RESIDENTE_CODIGO = resResidente.CODIGO_RESIDENTE
                                    return this.http.post<any>(`${SALV_API}/residente_convenio`, this.convenio)
                                })
                            })
                        })
                    })
                    
                })
            })
        })
    }

}