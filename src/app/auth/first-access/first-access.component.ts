import { Component, OnInit } from '@angular/core';
import { FirstAccessService } from './first-access.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'salv-first-access',
  templateUrl: './first-access.component.html'
})
export class FirstAccessComponent implements OnInit {

  senhaForm: FormGroup

  constructor(private fas: FirstAccessService, private fb: FormBuilder, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.senhaForm = this.fb.group({
      senha: this.fb.control(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      confirmaSenha: this.fb.control(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
    })
  }

  defineSenha() {
    this.spinner.show()
    this.fas.definePass(this.senhaForm.value).subscribe((res: any) => {
      this.spinner.hide()
      this.toastr.info('A aba se fechará sozinha', `Bom trabalho, ${res.message}`, {
        timeOut: 6000,
        extendedTimeOut: 0,
        progressBar: true,
        positionClass: 'toast-bottom-center',
      })
      setTimeout(() => {
        window.close()
      }, 6000)
    })
  }

}
