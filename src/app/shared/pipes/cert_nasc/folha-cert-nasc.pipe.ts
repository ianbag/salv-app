import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'folhaCertNasc'
})
export class FolhaCertNascPipe implements PipeTransform {
    transform(value: any) {
        let folha = value

        if (folha) {
            return trataFolha(folha)
        } else {
            return 'Não declarado'
        }

        function trataFolha(value?: string): string {
            return value.toUpperCase()
        }
    }
}