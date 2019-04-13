import { Component } from '@angular/core';
import { LoginService } from './auth/login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';

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

  ngOnInit() {
  
    this.loginService.showMenuEmitter.subscribe(
     
      show => this.showMenu = show,
      
    )
    

    
  }
}
