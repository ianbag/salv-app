import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'salv-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      newPassword: this.fb.control(null, [Validators.required]),
      verifyPassword: this.fb.control(null, [Validators.required])
    }, {validator: ResetPasswordComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const newPassword = group.get('newPassword')
    const verifyPassword = group.get('verifyPassword')
    if (!newPassword || !verifyPassword) {
      return undefined
    }
    if (newPassword.value !== verifyPassword.value) {
      return { passNotMatch: true }
    }
    return undefined
  }

  resetPass(newPass) {
    console.log(newPass)
  }

}
