import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'zonaEleitoral'
})
export class ZonaEleitoralPipe implements PipeTransform {
    transform(value: any) {
        let zonaEleitoral = value

        if (zonaEleitoral) {
            return zonaEleitoral
        } else {
            return 'Não declarado'
        }
    }
}