import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCivil'
})
export class EstadoCivilPipe implements PipeTransform {

  transform(value: any): any {
    let estadoCivil

    switch (value) {
      case 's':
        estadoCivil = 'Solteiro'
        break;
      case 'c':
        estadoCivil = 'Casado'
        break;
      case 'v':
        estadoCivil = 'Viúvo'
        break;
      case 'd':
        estadoCivil = 'Divorciado'
        break;
    }

    return estadoCivil
  }

}
