import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ValidatorService } from '../validator.service';

@Injectable({
  providedIn: 'root'
})

export class UniqueValuesValidators {

  NOME_BENEFICIO_EDITAR: string = null

  constructor(private validatorService: ValidatorService) { }

  validatePessoaCpf(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniquePessoaCPF(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validatePessoaRG(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniquePessoaRG(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null)  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteCartaoSAMS(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteCartaoSAMS(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteCartaoSUS(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteCartaoSUS(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteContaINSS(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteContaINSS(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteNumeroCertidao(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteNumeroCertidao(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteNumeroInss(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteNumeroInss(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteTituloEleitor(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteTituloEleitor(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateDependenteCPF(CODIGO, NOME, SOBRENOME): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueDependenteCPF(control.value, CODIGO, NOME, SOBRENOME)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateDependenteRG(CODIGO, NOME, SOBRENOME): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueDependenteRG(control.value, CODIGO, NOME, SOBRENOME)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateDependenteNumeroCertidao(CODIGO, NOME, SOBRENOME): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueDependenteNumeroCertidao(control.value, CODIGO, NOME, SOBRENOME)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateUsuarioEmail(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueUsuarioEmail(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateUsuarioLogin(CODIGO): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueUsuarioLogin(control.value, CODIGO)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateBeneficioNome(CODIGO, NOME_BENEFICIO_EDITAR): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueBeneficioNome(control.value, CODIGO, NOME_BENEFICIO_EDITAR)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }


}
