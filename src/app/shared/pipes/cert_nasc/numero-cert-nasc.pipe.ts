import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'numeroCertNasc'
})
export class NumeroCertNasc implements PipeTransform {
    transform(value: any) {
        let numero = value

        if (numero) {
            return numero
        } else {
            return 'Não declarado'
        }
    }
}