import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'bancoInss'
})
export class BancoInssPipe implements PipeTransform {
    transform(value: any) {
        let banco = value

        if (banco) {
            return banco
        } else {
            return 'Não declarado'
        }
    }
}