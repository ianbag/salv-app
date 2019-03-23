import { Observable } from 'rxjs';
import { Injectable, ErrorHandler, Injector,NgZone} from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './shared/notification.service'

@Injectable()

export class GlobalErrorHandler extends ErrorHandler {

  constructor(private ns: NotificationService,
              //private injector: Injector,
              private zone: NgZone ) {   
                super() 
   }
   

   handleError(errorResponse:HttpErrorResponse | any){
    if(errorResponse instanceof HttpErrorResponse){
      const message = errorResponse.error.message
      this.zone.run(() => {

      switch(errorResponse.status){
       // case 401: LOGIN
       // break;
        
        case 403:
         this.ns.notify(message || 'Não autorizado')
        break;

        case 404:
         this.ns.notify(message || 'Recurso não encontrado')
        break;
    
      }
     })
    }
    super.handleError(errorResponse)
   }  
}

