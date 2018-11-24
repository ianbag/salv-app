import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escolaridade'
})
export class EscolaridadePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let escolaridade

    switch (value) {
      default:
        escolaridade = 'Não Especificado'
        break;
      case 'fi':
        escolaridade = 'Fundamental Incompleto'
        break;
      case 'fc':
        escolaridade = 'Fundamental Completo'
        break;
      case 'mi':
        escolaridade = 'Médio Incompleto'
        break;
      case 'mc':
        escolaridade = 'Médio Completo'
        break;
      case 'si':
        escolaridade = 'Superior Incompleto'
        break;
      case 'sc':
        escolaridade = 'Superior Completo'
        break;
    }

    return escolaridade
  }

}
