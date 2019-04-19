import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { LoginService } from './login.service';

@Component({
  selector: 'salv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup
  message: string
  returnUrl: string

  constructor(private fb: FormBuilder, private router: Router, private ls: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      senha: this.fb.control(null, [Validators.required, Validators.maxLength(10)])
    })
    this.returnUrl = '/'
  }

  login() {
    this.ls.login(this.loginForm.value).subscribe(success => {
      localStorage.setItem('isLoggedIn', "true")
      localStorage.setItem('login', success.login)
      localStorage.setItem('token', success.accessToken)
      this.router.navigate([this.returnUrl])

    })
  }
}


// import { LoginService } from './login.service';
// import { Component, OnInit, NgZone } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// import { NotificationService } from './../../shared/notification.service';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'salv-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm: FormGroup
//   // errorResponse: HttpErrorResponse | any 

//   constructor(private fb: FormBuilder, private ls: LoginService, private ns: NotificationService, private spinner: NgxSpinnerService, private zone: NgZone) {
//     // this.ls.logout()
//     // this.ls.showMenuEmitter.emit(false)
//   }

//   ngOnInit() {
//     this.spinner.hide()
//     this.loginForm = this.fb.group({
//       email: this.fb.control('', [Validators.required, Validators.email]),
//       senha: this.fb.control('', [Validators.required])
//     })


//   }

//   // login() {
//   //   this.spinner.show()
//   //   this.ls.login(this.loginForm.value.email, this.loginForm.value.senha)
//   //     .subscribe(user => this.ns.notify(`Bem vindo, ${user.login}`),
//   //       response => (this.ns.notify(response), this.spinner.hide()),
//   //     )
//   // }

// }
