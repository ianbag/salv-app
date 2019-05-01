import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tituloEleitor'
})
export class TituloEleitorPipe implements PipeTransform {

  transform(value: any): any {
    let tituloEleitor = value

    if (tituloEleitor) {
      return tituloEleitorPoints(tituloEleitor)
    } else {
      return 'Não declarado'
    }

    function tituloEleitorPoints(value?: string): string {
      return `${value.substr(0, 4)}.${value.substr(4, 4)}.${value.substr(8, 3)}`
    }
  }

}