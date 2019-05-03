import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: any): any {
    let telefone = value

    if (telefone.length == '8') {
      return telefonePoints(telefone)
    } else if (telefone.length == '9') {
      return celularPoints(telefone)
    } else {
      return 'Não declarado'
    }

    function telefonePoints(value?: string): string {
      return `${value.substr(0, 4)}-${value.substr(4, 4)}`
    }

    function celularPoints(value?: string): string {
      return `${value.substr(0, 5)}-${value.substr(5, 4)}`
    }
  }

}
