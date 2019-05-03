import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'agenciaInss'
})
export class AgenciaInssPipe implements PipeTransform {
    transform(value: any) {
        let agencia = value

        if (agencia) {
            return agencia
        } else {
            return 'Não declarado'
        }
    }
}