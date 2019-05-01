import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'apelido'
})
export class ApelidoPipe implements PipeTransform {
    transform(value: any) {
        let apelido = value

        if (apelido) {
            return apelido
        } else {
            return 'Não declarado'
        }
    }
}