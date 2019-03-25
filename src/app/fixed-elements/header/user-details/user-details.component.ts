import { User } from './../../../auth/login/user.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login/login.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private ls: LoginService, private ns: NotificationService) { }

  ngOnInit() {
  }

  user(): User {
    return this.ls.user
  }

  isLoggedIn(): boolean {
    return this.ls.isLoggedIn()
  }

  logout() {
    this.ns.notify(`Até logo, ${this.user().login}`)
    return this.ls.logout()
  }

}
