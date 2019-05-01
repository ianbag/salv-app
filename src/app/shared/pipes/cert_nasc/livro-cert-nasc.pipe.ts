import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'livroCertNasc'
})
export class LivroCertNascPipe implements PipeTransform {
    transform(value: any) {
        let livro = value

        if (livro) {
            return trataLivro(livro)
        }
        else {
            return 'Não declarado'
        }

        function trataLivro(value?: string): string {
            return value.toUpperCase()
        }
    }
}