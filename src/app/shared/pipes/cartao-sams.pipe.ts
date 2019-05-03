import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'cartaoSams'
})
export class CartaoSamsPipe implements PipeTransform {
    transform(value: any) {
        let cartaoSams = value

        if (cartaoSams) {
            return cartaoSams
        } else {
            return 'Não declarado'
        }
    }
}