import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { LoginService } from './login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/shared/notification.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'salv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup
  returnUrl: string

  constructor(private fb: FormBuilder, private router: Router, private ls: LoginService, private spinner: NgxSpinnerService, private ns: NotificationService, private cs: CookieService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      senha: this.fb.control(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
    })
    this.returnUrl = '/'
  }

  login() {
    this.spinner.show()
    this.ls.login(this.loginForm.value).subscribe(success => {
      this.cs.set('isLoggedIn', "true", 0.0417)
      this.cs.set('login', success.login, 0.0417)
      this.cs.set('token', success.accessToken, 0.0417)
      this.router.navigate([this.returnUrl])
    },
      err => {
        this.spinner.hide()
        this.ns.notify(err.error.message)
      })
  }
}
