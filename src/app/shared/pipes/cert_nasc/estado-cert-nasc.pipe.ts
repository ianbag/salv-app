import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'estadoCertNasc'
})
export class EstadoCertNasc implements PipeTransform {
    transform(value: any) {
        let estado = value

        if (estado) {
            return estado
        } else {
            return 'Não declarado'
        }
    }
}