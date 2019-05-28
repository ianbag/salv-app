import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'salv-change-password',
  templateUrl: './change-password.component.html',
  animations: [
    trigger('alterar-senhaAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ChangePasswordComponent implements OnInit {

  alterarSenhaState = 'ready'

  alterarSenhaForm: FormGroup;

  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder

    ) { }

  ngOnInit() {
    this.spinner.show()

    this.alterarSenhaForm = this.formBuilder.group({
      SENHA_ATUAL: this.formBuilder.control('', [Validators.required]),
      NOVA_SENHA: this.formBuilder.control('', [Validators.required]),
      NOVA_SENHA_CONFIRM: this.formBuilder.control('', [Validators.required]),
    })

    this.spinner.hide()
  }

}
