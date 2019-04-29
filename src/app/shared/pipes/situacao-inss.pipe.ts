import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoINSS'
})
export class SituacaoINSSPipe implements PipeTransform {

  transform(value: any): any {
    let situacaoINSS

    if (value == 'bpc' || 'BPC') {
        situacaoINSS = 'Benefício de Prestação Continuada'
    } else if (value == 'aiv' || 'AIV') {
        situacaoINSS = 'Aposentadoria por Invalidez'
    } else if (value == 'aid' || 'AID') {
        situacaoINSS = 'Aposentadoria por Idade'
    }
    
    return situacaoINSS;
  }

}
