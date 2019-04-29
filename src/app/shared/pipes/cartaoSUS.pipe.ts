import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartaoSUS'
})
export class CartaoSUSPipe implements PipeTransform {

  transform(value: any): any {
    let cartaoSUS = value

    if (cartaoSUS) {
      return cartaoSUSPoints(cartaoSUS)
    } else {
      return 'Não Declarado'
    }

    function cartaoSUSPoints(value?: string): string {
      return `${value.substr(0, 3)}.${value.substr(3, 4)}.${value.substr(7, 4)}.${value.substr(11, 2)}`
    }
  }

}