import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'secaoEleitoral'
})
export class SecaoEleitoralPipe implements PipeTransform {
    transform(value: any) {
        let secaoEleitoral = value

        if (secaoEleitoral) {
            return secaoEleitoral
        } else {
            return 'Não declarado'
        }
    }
}