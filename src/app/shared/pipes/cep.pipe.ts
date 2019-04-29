import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: any): any {
    let cep = value

    if (cep) {
      return cepPoints(cep)
    } else {
      return 'Não Declarado'
    }

    function cepPoints(value?: string): string {
      return `${value.substr(0, 2)}.${value.substr(2, 3)}-${value.substr(5, 3)}`
    }
  }

}
