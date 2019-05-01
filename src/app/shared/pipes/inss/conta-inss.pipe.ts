import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'contaInss'
})
export class ContaInssPipe implements PipeTransform {
    transform(value: any) {
        let conta = value

        if (conta) {
            return conta
        } else {
            return 'Não declarado'
        }
    }
}