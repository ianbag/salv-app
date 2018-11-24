import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rg'
})
export class RgPipe implements PipeTransform {

  transform(value: any): any {
    let rg = value

    if (rg) {
      return rgPoints(rg)
    } else {
      return 'Não Declarado'
    }

    function rgPoints(value?: string): string {
      return `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 3)}-${value.substr(8, 1)}`
    }
  }

}
