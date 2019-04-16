import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'religiao'
})
export class ReligiaoPipe implements PipeTransform {

  transform(value: any): any {
    let religiao

    if (value == 'cat' || 'CAT') {
      religiao = 'Católico'
    } else if (value == 'evg' || 'EVG') {
      religiao = 'Evangélico'
    } else if (value == 'esp' || 'ESP') {
      value = 'Espirita'
    } else if (value == 'ubc' || 'UBC') {
      value = 'Umbanda e Candomblé'
    } else if (value == 'srg' || 'SRG') {
      value = 'Sem religião'
    } else if (value == 'out' || 'OUT') {
      value = 'Outras'
    } else {
      religiao = 'Não especificada'
    }

    return religiao;
  }

}
