import { Component } from '@angular/core';
import { LoginService } from './auth/login/login.service';
import html2canvas from 'html2canvas'
import * as jspdf from 'jspdf'

@Component({
  selector: 'salv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salv-app';

  showMenu: boolean = false

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    )
  }
}
