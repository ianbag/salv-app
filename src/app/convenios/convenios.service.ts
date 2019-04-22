import { SALV_API } from './../app.api';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Convenio, Telefone, Endereco, ConvenioQuery, Telefone_Convenio, Endereco_Convenio } from "./convenio.model";

@Injectable()
export class ConveniosService {

    constructor(private http: HttpClient) { }
    

    convenios(): Observable<Convenio[]> {
        return this.http.get<Convenio[]>(`${SALV_API}/convenio`)
    }

    conveniosDesativados(): Observable<Convenio[]> {
        return this.http.get<Convenio[]>(`${SALV_API}/convenio-desativados`)
    }

    conveniosById(id: number): Observable<Convenio> {
        return this.http.get<Convenio>(`${SALV_API}/convenio/${id}`)
    }

    telefoneById(id: string): Observable<Telefone[]> {
        return this.http.get<Telefone[]>(`${SALV_API}/telefone_convenio/${id}`)
    }

    enderecoById(id: string): Observable<Endereco[]> {
        return this.http.get<Endereco[]>(`${SALV_API}/endereco_convenio/${id}`)
    }

    deleteConvenio(id: string): Observable<any> {
        return this.http.delete<any>(`${SALV_API}/convenio/${id}`)
    }

    convenioQuery(id: string): Observable<ConvenioQuery[]> {
        return this.http.get<ConvenioQuery[]>(`${SALV_API}/convenio-full/${id}`)
    }

    createNewConvenio(telefone: Telefone, endereco: Endereco, convenio: Convenio) {
        return this.http.post<Convenio>(`${SALV_API}/convenio`, convenio).switchMap(resConvenio => {
            return this.http.post<Endereco>(`${SALV_API}/endereco`, endereco).switchMap(resEndereco => {
                delete convenio.ENDERECO
                let _rel_end_conv = {
                    CONVENIO_CODIGO: resConvenio.CODIGO,
                    ENDERECO_CODIGO: resEndereco.CODIGO
                }
                return this.http.post<Endereco_Convenio>(`${SALV_API}/endereco_convenio`, _rel_end_conv).switchMap(resEndC => {
                    return this.http.post<Telefone>(`${SALV_API}/telefone`, telefone).switchMap(resTelefone => {
                        delete convenio.TELEFONE
                        let _rel_tel_conv = {
                            CONVENIO_CODIGO: resConvenio.CODIGO,
                            TELEFONE_CODIGO: resTelefone.CODIGO
                        }
                        return this.http.post<Telefone_Convenio>(`${SALV_API}/telefone_convenio`, _rel_tel_conv)

                    })
                })
            })
        })


    }

    updateConvenio(cod_conv, cod_end, cod_tel, telefone, endereco, convenio) {
        console.log(convenio)
        return this.http.put<Convenio>(`${SALV_API}/convenio/${cod_conv}`, convenio).switchMap(resConv => {
            return this.http.put<Endereco>(`${SALV_API}/endereco/${cod_end}`, endereco).switchMap(resEnd => {
                return this.http.put<Telefone>(`${SALV_API}/telefone/${cod_tel}`, telefone)
            })
        })
    }

    novoTelefone(_cod_conv: number, telefone: Telefone) {
        return this.http.post<Telefone>(`${SALV_API}/telefone`, telefone).switchMap(resT => {
            let _rel_tel_conv = {
                CONVENIO_CODIGO: _cod_conv,
                TELEFONE_CODIGO: resT.CODIGO
            }
            return this.http.post<Telefone_Convenio>(`${SALV_API}/telefone_convenio`, _rel_tel_conv)
        })
    }

    deleteTelefone(_cod_conv: number, _cod_tel: number) {
        return this.http.delete<Telefone_Convenio>(`${SALV_API}/telefone_convenio/${_cod_conv}/${_cod_tel}`).switchMap(response => {
            return this.http.delete<Telefone>(`${SALV_API}/telefone/${_cod_tel}`)
        })
    }

    telefoneId(id): Observable<Telefone> {
        return this.http.get<Telefone>(`${SALV_API}/telefone/${id}`)
    }

    updateTelefone(id, telefone: Telefone) {
        return this.http.put<Telefone>(`${SALV_API}/telefone/${id}`, telefone)
    }

}
