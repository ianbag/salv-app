import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'salv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control('', [Validators.required])
    })
  }

  login() {
    console.log(this.loginForm.value.email, this.loginForm.value.senha)
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe(user => console.log(user))
  }

}
