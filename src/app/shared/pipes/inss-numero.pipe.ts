import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroINSS'
})
export class NumeroINSSPipe implements PipeTransform {

  transform(value: any): any {
    let numeroINSS = value

    if (numeroINSS) {
      return numeroINSSPoints(numeroINSS)
    } else {
      return 'Não declarado'
    }

    function numeroINSSPoints(value?: string): string {
      return `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 4)}-${value.substr(9, 2)}`
    }
  }

}