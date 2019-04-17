import { Component, OnInit } from '@angular/core';
import { Convenio } from './../convenio.model';;
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { transition, style, trigger, state, animate } from '@angular/animations';
import { ConveniosService } from '../convenios.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/shared/notification.service';


@Component({
  selector: 'salv-novo-convenio',
  templateUrl: './novo-convenio.component.html',
  animations: [
    trigger('novo-convenioAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class NovoConvenioComponent implements OnInit {

  novoconvenioState = 'ready'

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  novoConvenioForm: FormGroup;
  convenio: Convenio

  constructor(private fb: FormBuilder, private cs: ConveniosService, private router: Router, private ns: NotificationService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    this.novoConvenioForm = this.fb.group({

      NOME_CONVENIO: this.fb.control('', [Validators.required]),
      TIPO_CONVENIO: this.fb.control('', [Validators.required]),
      ENDERECO: this.fb.group({
        ENDERECO: this.fb.control(null, [Validators.required]),
        NUMERO: this.fb.control(null, [Validators.required]),
        BAIRRO: this.fb.control(null, [Validators.required]),
        COMPLEMENTO: this.fb.control(null),
        CIDADE: this.fb.control(null, [Validators.required]),
        ESTADO: this.fb.control(null, [Validators.required]),
        CEP: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
        REFERENCIA: this.fb.control(null),
      }),
      TELEFONE: this.fb.group({
        DDD: this.fb.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
        NUMERO: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(9)])
      })
    })
    this.spinner.hide();
  }

  novoConvenio(convenio: Convenio) {
    this.cs.createNewConvenio(convenio.TELEFONE, convenio.ENDERECO, convenio)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            console.log('Houve um erro!', error)
            this.ns.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.router.navigate(['/convenios'])
          this.ns.notify(`Convênio inserido com sucesso!`)
        }
      })
  }

}  
