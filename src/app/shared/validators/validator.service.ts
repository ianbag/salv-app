import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SALV_API } from './../../app.api';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private http: HttpClient) { }

  uniquePessoaCPF(CPF: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/pessoa/cpf`, { CPF: CPF, CODIGO: CODIGO })
  }

  uniquePessoaRG(RG: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/pessoa/rg`, { RG: RG, CODIGO: CODIGO })
  }

  uniqueResidenteCartaoSAMS(CARTAO_SAMS: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/residente/cartao_sams`, { CARTAO_SAMS: CARTAO_SAMS, CODIGO: CODIGO })
  }

  uniqueResidenteCartaoSUS(CARTAO_SUS: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/residente/cartao_sus`, { CARTAO_SUS: CARTAO_SUS, CODIGO: CODIGO })
  }

  uniqueResidenteContaINSS(CONTA_INSS: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/residente/conta_inss`, { CONTA_INSS: CONTA_INSS, CODIGO: CODIGO })
  }

  uniqueResidenteNumeroCertidao(NUMERO_CERTIDAO_NASCIMENTO: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/residente/numero_certidao_nascimento`, { NUMERO_CERTIDAO_NASCIMENTO: NUMERO_CERTIDAO_NASCIMENTO, CODIGO: CODIGO })
  }

  uniqueResidenteNumeroInss(NUMERO_INSS: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/residente/numero_inss`, { NUMERO_INSS: NUMERO_INSS, CODIGO: CODIGO })
  }

  uniqueResidenteTituloEleitor(TITULO_ELEITOR: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/residente/titulo_eleitor`, { TITULO_ELEITOR: TITULO_ELEITOR, CODIGO: CODIGO })
  }

  uniqueDependenteCPF(CPF: string, CODIGO: number, NOME: string, SOBRENOME: string) {
    return this.http.post<any>(`${SALV_API}/dependente/cpf`, { CPF: CPF, CODIGO: CODIGO, NOME: NOME, SOBRENOME: SOBRENOME })
  }

  uniqueDependenteRG(RG: string, CODIGO: number, NOME: string, SOBRENOME: string) {
    return this.http.post<any>(`${SALV_API}/dependente/rg`, { RG: RG, CODIGO: CODIGO, NOME: NOME, SOBRENOME: SOBRENOME })
  }

  uniqueDependenteNumeroCertidao(NUMERO_CERTIDAO_NASCIMENTO: string, CODIGO: number, NOME: string, SOBRENOME: string) {
    return this.http.post<any>(`${SALV_API}/dependente/numero_certidao_nascimento`,
      { NUMERO_CERTIDAO_NASCIMENTO: NUMERO_CERTIDAO_NASCIMENTO, CODIGO: CODIGO, NOME: NOME, SOBRENOME: SOBRENOME })
  }

  uniqueUsuarioEmail(EMAIL: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/usuario/email`, { EMAIL: EMAIL, CODIGO: CODIGO })
  }

  uniqueUsuarioLogin(LOGIN: string, CODIGO: number) {
    return this.http.post<any>(`${SALV_API}/usuario/login`, { LOGIN: LOGIN, CODIGO: CODIGO })
  }

  uniqueBeneficioNome(NOME_BENEFICIO: string, CODIGO: number, NOME_BENEFICIO_EDITAR: string) {
    return this.http.post<any>(`${SALV_API}/beneficio/nome`, {
      NOME_BENEFICIO: NOME_BENEFICIO,
      CODIGO: CODIGO, NOME_BENEFICIO_EDITAR: NOME_BENEFICIO_EDITAR
    })
  }

}
