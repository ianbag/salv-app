import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: any, ...args): any {
    let sexo

    if (value === 'M') {
      sexo = 'Masculino'
    } else if (value === 'F') {
      sexo = 'Feminino'
    }
    
    return sexo
  }

}
