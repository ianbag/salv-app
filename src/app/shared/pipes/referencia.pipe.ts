import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencia'
})
export class ReferenciaPipe implements PipeTransform {
  transform(value: any) {
    let referencia = value

    if (referencia) {
      return referencia
    } else {
      return 'Não declarado'
    }
  }
}
