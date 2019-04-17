import { Component } from '@angular/core';
import { LoginService } from './auth/login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay } from 'rxjs/operators'

@Component({
  selector: 'salv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salv-app';

  showMenu: boolean = false

  constructor(private loginService: LoginService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.loginService.showMenuEmitter.pipe(
      delay(0)
    ).subscribe(
      show => this.showMenu = show
    )
  }

}
