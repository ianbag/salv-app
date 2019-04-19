import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { LoginService } from 'src/app/auth/login/login.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { DialogConfirmService } from 'src/app/residentes/dialog-confirm.service';

@Component({
  selector: 'salv-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user = localStorage.getItem('login')

  constructor(private ls: LoginService, private ns: NotificationService, private router: Router, private dcs: DialogConfirmService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedIn') == "true") {
      return true
    }
    return false
  }

  logout() {
    this.dcs.confirm(`Deseja sair?`)
      .then((isTrue) => {
        if (isTrue) {
          this.ls.logout()
          this.router.navigate(['/login'])
          this.ns.notify('Até logo!')
        }
      })
  }

}