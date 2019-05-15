import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'complemento'
})
export class ComplementoPipe implements PipeTransform {
  transform(value: any) {
    let complemento = value

    if (complemento) {
      return complemento
    } else {
      return 'Não declarado'
    }
  }
}
