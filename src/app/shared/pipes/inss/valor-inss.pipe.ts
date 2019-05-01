import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'valorInss'
})
export class ValorInssPipe implements PipeTransform {
    transform(value: any) {
        let valor = value

        if (valor) {
            return valor
        } else {
            return 'Não declarado'
        }
    }
}