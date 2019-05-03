import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'provaVidaInss'
})
export class ProvaVidaInssPipe implements PipeTransform {
    transform(value: any) {
        let provaVida = value

        if (provaVida) {
            return provaVida
        } else {
            return 'Não declarado'
        }
    }
}