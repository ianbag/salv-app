import { Component, OnInit } from '@angular/core';
import { FirstAccessService } from './first-access.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'salv-first-access',
  templateUrl: './first-access.component.html'
})
export class FirstAccessComponent implements OnInit {

  senhaForm: FormGroup

  constructor(private fas: FirstAccessService, private fb: FormBuilder, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.senhaForm = this.fb.group({
      senha: this.fb.control(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      confirmaSenha: this.fb.control(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
    })
  }

  defineSenha() {
    this.spinner.show()
    this.fas.definePass(this.senhaForm.value)
    this.spinner.hide()
  }

}
