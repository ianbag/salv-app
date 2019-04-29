import { Component } from '@angular/core';
import { LoginService } from './auth/login/login.service';
import { delay } from 'rxjs/operators'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'salv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showMenu: boolean = false

  constructor(private ls: LoginService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    // localStorage.setItem('expandedMenu', '0')
  }

  ngAfterViewInit() {
    this.ls.showMenuEmitter.pipe(
      delay(0)
    ).subscribe(
      show => this.showMenu = show
    )
    if (this.showMenu) {
      this.spinner.hide()
    }
  }

}
