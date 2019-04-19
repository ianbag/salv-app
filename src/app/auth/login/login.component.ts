import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { LoginService } from './login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'salv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup
  message: string
  returnUrl: string

  constructor(private fb: FormBuilder, private router: Router, private ls: LoginService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      senha: this.fb.control(null, [Validators.required, Validators.maxLength(10)])
    })
    this.returnUrl = '/'
  }

  login() {
    this.spinner.show()
    this.ls.login(this.loginForm.value).subscribe(success => {
      localStorage.setItem('isLoggedIn', "true")
      localStorage.setItem('login', success.login)
      localStorage.setItem('token', success.accessToken)
      this.router.navigate([this.returnUrl])
    })
  }
}
