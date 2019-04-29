import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: any): any {
    let telefone = value

    if (telefone) {
      return telefonePoints(telefone)
    } else {
      return 'Não Declarado'
    }

    function telefonePoints(value?: string): string {
      return `${value.substr(0, 5)}-${value.substr(5, 4)}`
    }
  }

}
