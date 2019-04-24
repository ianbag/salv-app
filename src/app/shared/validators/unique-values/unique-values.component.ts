import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ValidatorService } from '../validator.service';

@Injectable({
  providedIn: 'root'
})

export class UniqueValuesValidators {
  constructor(private validatorService: ValidatorService) { }

  validatePessoaCpf(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniquePessoaCPF(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validatePessoaRG(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniquePessoaRG(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null)  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteCartaoSAMS(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteCartaoSAMS(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteCartaoSUS(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteCartaoSUS(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteContaINSS(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteContaINSS(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteNumeroCertidao(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteNumeroCertidao(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteNumeroInss(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteNumeroInss(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateResidenteTituloEleitor(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueResidenteTituloEleitor(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateDependenteCPF(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueDependenteCPF(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateDependenteRG(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueDependenteRG(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateDependenteNumeroCertidao(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueDependenteNumeroCertidao(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateUsuarioEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueUsuarioEmail(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }

  validateUsuarioLogin(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.validatorService.uniqueUsuarioLogin(control.value)
        .pipe(
          map(res => {
            if (res.value == 0 && control.value != null && control.value != '')  // se nao for unico
              return { 'unique': true }// retorna o erro
          })
        )
    }
  }


}
