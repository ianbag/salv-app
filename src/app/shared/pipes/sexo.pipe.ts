import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: any): any {
    let sexo

    if (value === 'M' || value === 'm') {
      sexo = 'Masculino'
    } else if (value === 'F' || value === 'f') {
      sexo = 'Feminino'
    }

    return sexo
  }

}
