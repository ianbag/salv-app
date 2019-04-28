import { Injectable } from '@angular/core'
import * as Rx from 'rxjs/Rx'

@Injectable()
export class DependenteService {
    fetchData(): Rx.Observable<string> {
        return Rx.Observable
            .of('Dependente')
            .delay(500)
    }
}