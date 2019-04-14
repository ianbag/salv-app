import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from './../../shared/notification.service'

@Component({
  selector: 'salv-forget-password',
  templateUrl: './forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup

  constructor(private fb: FormBuilder, private ns: NotificationService) { }

  ngOnInit() {
    this.forgetPasswordForm = this.fb.group({
      EMAIL: this.fb.control(null, [Validators.required, Validators.email])
    })
  }

  sendMail(value){
    this.ns.notify(value.EMAIL)
  }

}
