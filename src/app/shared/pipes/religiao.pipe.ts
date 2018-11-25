import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'religiao'
})
export class ReligiaoPipe implements PipeTransform {

  transform(value: any): any {
    let religiao

    switch (value) {
      default:
        religiao = 'Não Especificada'
        break;
      case 'cat':
        religiao = 'Católico'
        break;
      case 'evg':
        religiao = 'Evangélico'
        break;
      case 'esp':
        religiao = 'Espirita'
        break;
      case 'ubc':
        religiao = 'Umbanda e Candomblé'
        break;
      case 'srg':
        religiao = 'Sem Religião'
        break;
      case 'out':
        religiao = 'Outras'
        break;
    }

    return religiao;
  }

}
