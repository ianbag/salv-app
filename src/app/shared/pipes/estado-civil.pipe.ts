import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCivil'
})
export class EstadoCivilPipe implements PipeTransform {

  transform(value: any): any {
    let estadoCivil

    if (value == 'S') {
      estadoCivil = 'Solteiro'
    } else if (value == 'C') {
      estadoCivil = 'Casado'
    } else if (value == 'V') {
      estadoCivil = 'Viúvo'
    } else if (value == 'D') {
      estadoCivil = 'Divorciado'
    } else {
      estadoCivil = 'Não especificado'
    }

    return estadoCivil
  }

}
