import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SALV_API } from './../../app.api';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private http: HttpClient) { }

  uniquePessoaCPF(CPF: string){
    return this.http.post<any>(`${SALV_API}/pessoa/cpf`, {CPF: CPF})
  }

  uniquePessoaRG(RG: string){
    return this.http.post<any>(`${SALV_API}/pessoa/rg`, {RG: RG})
  }

  uniqueResidenteCartaoSAMS(CARTAO_SAMS: string){
    return this.http.post<any>(`${SALV_API}/residente/cartao_sams`, {CARTAO_SAMS: CARTAO_SAMS})
  }

  uniqueResidenteCartaoSUS(CARTAO_SUS: string){
    return this.http.post<any>(`${SALV_API}/residente/cartao_sus`, {CARTAO_SUS: CARTAO_SUS})
  }

  uniqueResidenteContaINSS(CONTA_INSS: string){
    return this.http.post<any>(`${SALV_API}/residente/conta_inss`, {CONTA_INSS: CONTA_INSS})
  }

  uniqueResidenteNumeroCertidao(NUMERO_CERTIDAO_NASCIMENTO: string){
    return this.http.post<any>(`${SALV_API}/residente/numero_certidao_nascimento`, {NUMERO_CERTIDAO_NASCIMENTO: NUMERO_CERTIDAO_NASCIMENTO})
  }

  uniqueResidenteNumeroInss(NUMERO_INSS: string){
    return this.http.post<any>(`${SALV_API}/residente/numero_inss`, {NUMERO_INSS: NUMERO_INSS})
  }

  uniqueResidenteTituloEleitor(TITULO_ELEITOR: string){
    return this.http.post<any>(`${SALV_API}/residente/titulo_eleitor`, {TITULO_ELEITOR: TITULO_ELEITOR})
  }

  uniqueDependenteCPF(CPF: string){
    return this.http.post<any>(`${SALV_API}/dependente/cpf`, {CPF: CPF})
  }

  uniqueDependenteRG(RG: string){
    return this.http.post<any>(`${SALV_API}/dependente/rg`, {RG: RG})
  }

  uniqueDependenteNumeroCertidao(NUMERO_CERTIDAO_NASCIMENTO: string){
    return this.http.post<any>(`${SALV_API}/dependente/numero_certidao_nascimento`, {NUMERO_CERTIDAO_NASCIMENTO: NUMERO_CERTIDAO_NASCIMENTO})
  }

  uniqueUsuarioEmail(EMAIL: string){
    return this.http.post<any>(`${SALV_API}/usuario/email`, {EMAIL: EMAIL})
  }

  uniqueUsuarioLogin(LOGIN: string){
    return this.http.post<any>(`${SALV_API}/usuario/login`, {LOGIN: LOGIN})
  }

}
