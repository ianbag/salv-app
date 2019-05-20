import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SALV_API } from './../../app.api'
import { FirstAccess } from './first-access.model'

@Injectable()
export class FirstAccessService {

    constructor(private http: HttpClient) { }
}