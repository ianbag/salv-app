import { Usuario } from './forget.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from './../../shared/notification.service'
import { ForgetService } from './forget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'salv-forget-password',
  templateUrl: './forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup

  constructor(private fb: FormBuilder, private fs: ForgetService, private ns: NotificationService, private router: Router) { }

  ngOnInit() {
    this.forgetPasswordForm = this.fb.group({
      EMAIL: this.fb.control(null, [Validators.required, Validators.email])
    })
  }

  sendMail(user: Usuario) {
    this.fs.sendMail(user).subscribe((res: any) => {
      this.ns.notify(res.message)
      this.router.navigate(['/login'])
    })
  }

}
