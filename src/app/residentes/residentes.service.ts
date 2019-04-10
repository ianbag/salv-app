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
    residenteConvenio: Residente_Convenio


    constructor(private http: HttpClient) { }

    clearDataResidente(){
        this.residente = null
        this.pessoa = null
        this.familiar = null
        this.endereco = null
        this.telefones = null
        this.residenteConvenio = null
    }

    residentes(): Observable<Residente[]> {
        return this.http.get<Residente[]>(`${SALV_API}/residente`)
    }

    residenteById(id: string): Observable<Residente> {
        return this.http.get<Residente>(`${SALV_API}/residente/${id}`)
    }

    familiarById(id: string): Observable<Familiar[]> {
        return this.http.get<Familiar[]>(`${SALV_API}/residente_familiar/${id}`)
    }

    telefoneFamiliarByID(id: number): Observable<Telefone[]>{
        return this.http.get<Telefone[]>(`${SALV_API}/telefone_familiar/${id}`)
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
                                    console.log("CONVENIO", this.residenteConvenio)
                                    this.residenteConvenio.RESIDENTE_CODIGO = resResidente.CODIGO_RESIDENTE
                                    return this.http.post<any>(`${SALV_API}/residente_convenio`, this.residenteConvenio)
                                })
                            })
                        })
                    })
                    
                })
            })
        })
    }

    updateResidente(dataForm: Residente, idResidente, idPessoa){
        return this.http.put<Residente>(`${SALV_API}/residente/${idResidente}`,dataForm).switchMap(res => {
            return this.http.put<Pessoa>(`${SALV_API}/pessoa/${idPessoa}`, dataForm.PESSOA)
        })
    }

    createNewFamiliar(familiar: Familiar, codigoResidente){
        return this.http.post<Familiar>(`${SALV_API}/familiar`, familiar).switchMap(resFamiliar => {
            let RESIDENTE_FAMILIAR = {
                FAMILIAR_CODIGO: resFamiliar.CODIGO,
                RESIDENTE_CODIGO: codigoResidente
            }
            return this.http.post<any>(`${SALV_API}/residente_familiar`, RESIDENTE_FAMILIAR).switchMap(resResidenteFamiliar => {
                return this.http.post<Endereco>(`${SALV_API}/endereco`, familiar.ENDERECOS).switchMap(resEndereco => {
                    let ENDERECO_FAMILIAR = {
                        FAMILIAR_CODIGO: resFamiliar.CODIGO,
                        ENDERECO_CODIGO: resEndereco.CODIGO
                    }
                    return this.http.post<any>(`${SALV_API}/endereco_familiar`, ENDERECO_FAMILIAR).switchMap(resEnderecoFamiliar => {
                        let TELEFONES_FAMILIARES = {
                            familiar: resFamiliar.CODIGO,
                            telefones: familiar['TELEFONES']
                        }
                        return this.http.post<any>(`${SALV_API}/telefones`, TELEFONES_FAMILIARES)
                    })
                })
            })
            
        })
    }

    createNewConvenio(residenteConvenio: Residente_Convenio, codigoResidente){
        residenteConvenio.RESIDENTE_CODIGO = codigoResidente
        return this.http.post<any>(`${SALV_API}/residente_convenio`, residenteConvenio)
    }

}