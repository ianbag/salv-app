import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'religiao'
})
export class ReligiaoPipe implements PipeTransform {

  transform(value: any): any {
    let religiao

    if (value == 'CAT') {
      religiao = 'Católico'
    } else if (value == 'EVG') {
      religiao = 'Evangélico'
    } else if (value == 'ESP') {
      value = 'Espirita'
    } else if (value == 'UBC') {
      value = 'Umbanda e Candomblé'
    } else if (value == 'SRG') {
      value = 'Sem religião'
    } else if (value == 'OUT') {
      value = 'Outras'
    } else {
      religiao = 'Não especificada'
    }

    return religiao;
  }

}
