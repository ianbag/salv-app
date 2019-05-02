import { Residente } from './../../residentes/residente/residente.model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'residenteFilter'
})
export class ResidenteFilterPipe implements PipeTransform {

  transform(residentes: Residente[], searchTerm: string): Residente[] {

    if (!residentes || !searchTerm) {
        return residentes
    }

    return residentes.filter(residente => 
        residente.PESSOA.NOME.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)

  }

}