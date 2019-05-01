import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'secaoEleitoral'
})
export class SecaoEleitoralPipe implements PipeTransform {
    transform(value: string) {
        let secaoEleitoral = value.toUpperCase()

        if (secaoEleitoral) {
            return secaoEleitoral
        } else {
            return 'Não declarado'
        }
    }
}