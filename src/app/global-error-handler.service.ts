import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()

export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {

    const router = this.injector.get(Router);
    console.log('Resquest URL:' + (router.url));

    if (error instanceof HttpErrorResponse) {
      console.error('O backend esta retornando o erro: ', error.status);
      console.error('Response body: ', error.message);
    } else {
      console.error('Um erro ocorreu: ', error.message);

    }

    router.navigate(['error']);
  }
}
