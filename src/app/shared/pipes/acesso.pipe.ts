import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'acesso'
})
export class AcessoPipe implements PipeTransform {
    transform(value: any) {
        let acesso

        if (value == "ADM") {
            acesso = "Administrador"
        } else {
            acesso = "Funcionário"
        }

        return acesso
    }
}