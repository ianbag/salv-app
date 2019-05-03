import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'data'
})
export class DataPipe implements PipeTransform {
    transform(value: any) {
        let data = value

        if (data) {
            return data
        } else {
            return 'Não declarado'
        }
    }
}