import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'cidadeCertNasc'
})
export class CidadeCertNascPipe implements PipeTransform {
    transform(value: any) {
        let cidade = value

        if (cidade) {
            return cidade
        } else {
            return 'Não declarado'
        }
    }
}