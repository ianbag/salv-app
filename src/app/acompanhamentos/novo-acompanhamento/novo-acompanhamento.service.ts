import { Residente } from './../../residentes/residente/residente.model';
import { Acompanhamento, Acompanhamento_Funcionario, Acompanhamento_Residente } from './../acompanhamento/acompanhamento.model';
import { Funcionario } from './../../funcionarios/funcionario.model';

import { SALV_API } from './../../app.api';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()

export class NovoAcompanhamentoService {

    acompanhamento: Acompanhamento

    constructor(private http: HttpClient) { }

    residentes(): Observable<Residente[]> {
        return this.http.get<Residente[]>(`${SALV_API}/residenteNome`)
    }

    funcionarios(): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(`${SALV_API}/funcionarioNome`)
    }
    
    createAcompanhamento(acompanhamento: Acompanhamento ){
        return this.http.post<Acompanhamento>(`${SALV_API}/acompanhamento`, acompanhamento)
        
        }

  createAcompanhamentoFuncionario(acompanhamento_funcionario: Acompanhamento_Funcionario){
            return this.http.post<Acompanhamento_Funcionario>(`${SALV_API}/acompanhamento_funcionario`, acompanhamento_funcionario)
            
            }

   createAcompanhamentoResidente(acompanhamento_residente: Acompanhamento_Residente){
          return this.http.post<Acompanhamento_Residente>(`${SALV_API}/acompanhamento_residente`, acompanhamento_residente)
                
            }         
    }       
           