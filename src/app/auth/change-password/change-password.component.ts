import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
import { AlterarSenha } from './change-password.model';
import { ChangePasswordService } from './change-password.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { UserDetailsComponent } from 'src/app/fixed-elements/header/user-details/user-details.component';

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

  loginAtual

  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private changePasswordService: ChangePasswordService,
    private notificationService: NotificationService,
    private udc: UserDetailsComponent
  ) { }

  ngOnInit() {
    this.spinner.show()

    this.alterarSenhaForm = this.formBuilder.group({
      SENHA_ATUAL: this.formBuilder.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      NOVA_SENHA: this.formBuilder.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      NOVA_SENHA_CONFIRM: this.formBuilder.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
    }, { validator: ChangePasswordComponent.equalsTo })

    this.loginAtual = this.cookieService.get('login')

    this.spinner.hide()
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const NOVA_SENHA = group.get('NOVA_SENHA')
    const NOVA_SENHA_CONFIRM = group.get('NOVA_SENHA_CONFIRM')
    if (!NOVA_SENHA || !NOVA_SENHA_CONFIRM)
      return undefined
    if (NOVA_SENHA.value !== NOVA_SENHA_CONFIRM.value)
      return { passNotMatch: true }
    return undefined
  }

  alterarSenha(dados: AlterarSenha) {
    this.changePasswordService.modificarSenha(dados.SENHA_ATUAL, dados.NOVA_SENHA, this.loginAtual)
      .subscribe(res => {
        if (res['message'] && !res['changed'])
          this.notificationService.notify(res['message'])

        if (res['changed']) {
          this.notificationService.notify(`${res['message']} Você será deslogado em 3 segundos...`)
          setTimeout(() => { this.udc.methodLogout() }, 3250)
        }

      })
  }

}
