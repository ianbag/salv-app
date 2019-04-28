import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ResetService } from './reset.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup

  constructor(private fb: FormBuilder, private rs: ResetService, private router: Router, private ns: NotificationService, private ar: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
    
    this.resetPasswordForm = this.fb.group({
      newPassword: this.fb.control(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      verifyPassword: this.fb.control(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
      
    }, { validator: ResetPasswordComponent.equalsTo })
    
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
    this.rs.resetPassword(newPass, this.ar.snapshot.params['token']).subscribe((res: any) => {
      this.ns.notify(res.message)
      this.router.navigate(['/login'])
      this.spinner.show()
    })
  }

}
