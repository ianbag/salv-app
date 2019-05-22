import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escolaridade'
})
export class EscolaridadePipe implements PipeTransform {

  transform(value: any): any {
    let escolaridade

    switch (value) {
      default:
        escolaridade = 'Não especificado'
        break;
      case 'FI':
        escolaridade = 'Fundamental Incompleto'
        break;
      case 'FC':
        escolaridade = 'Fundamental Completo'
        break;
      case 'MI':
        escolaridade = 'Médio Incompleto'
        break;
      case 'MC':
        escolaridade = 'Médio Completo'
        break;
      case 'SI':
        escolaridade = 'Superior Incompleto'
        break;
      case 'SC':
        escolaridade = 'Superior Completo'
        break;
    }

    return escolaridade
  }

}
