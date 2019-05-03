import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'profissao'
})
export class ProfissaoPipe implements PipeTransform {
    transform(value: any) {
        let profissao = value

        if (profissao) {
            return profissao
        } else {
            return 'Não declarado'
        }
    }
}