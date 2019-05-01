import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'zonaEleitoral'
})
export class ZonaEleitoralPipe implements PipeTransform {
    transform(value: string) {
        let zonaEleitoral = value.toUpperCase()

        if (zonaEleitoral) {
            return zonaEleitoral
        } else {
            return 'Não declarado'
        }
    }
}