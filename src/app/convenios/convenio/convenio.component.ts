import { Validators } from '@angular/forms';
import { ConvenioQuery } from './../convenio.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Convenio } from 'src/app/convenios/convenio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
import * as jspdf from 'jspdf'
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-convenio',
  templateUrl: './convenio.component.html',
  animations: [
    trigger('convenioAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConvenioComponent implements OnInit {

  convenioState = 'ready'

  convenio: Convenio

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  editarConvenioForm: FormGroup
  convenio1: ConvenioQuery[] = []
  _cod_end: number
  _cod_tel: number
  _cod_conv: number

  @ViewChild('reportConvenio') reportConvenio: ElementRef

  constructor(private fb: FormBuilder, private cs: ConveniosService, private router: Router, private ar: ActivatedRoute, private ns: NotificationService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.cs.conveniosById(this.ar.snapshot.params['id'])
      .subscribe(convenio => {
        this.spinner.hide();
        this.convenio = convenio[0], console.log(this.convenio)
      })

      
    this.cs.convenioQuery(this.ar.snapshot.params['id']).subscribe(data => {

      this.convenio1 = data
      this._cod_conv = this.convenio1[0].COD_CONV
      this._cod_end = this.convenio1[0].COD_END
      this._cod_tel = this.convenio1[0].COD_TEL
  
      console.log(this.convenio1[0])
  
      })

      this.editarConvenioForm = this.fb.group({
        NOME_CONVENIO: this.fb.control(null, [Validators.required]),
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
  
      setTimeout(() => {
  
        this.editarConvenioForm.patchValue({
  
          COD_CONV: this.convenio1[0].COD_CONV,
          NOME_CONVENIO: this.convenio1[0].NOME_CONVENIO,
          TIPO_CONVENIO: this.convenio1[0].TIPO_CONVENIO,
          ENDERECO: {
            ENDERECO: this.convenio1[0].ENDERECO,
            NUMERO: this.convenio1[0].NUMERO,
            BAIRRO: this.convenio1[0].BAIRRO,
            COMPLEMENTO: this.convenio1[0].COMPLEMENTO,
            CIDADE: this.convenio1[0].CIDADE,
            ESTADO: this.convenio1[0].ESTADO.toUpperCase(),
            CEP: this.convenio1[0].CEP,
            REFERENCIA: this.convenio1[0].REFERENCIA
          },
          TELEFONE: {
            DDD: this.convenio1[0].DDD,
            NUMERO: this.convenio1[0].NUM_TEL
          }
  
        }
        )
        this.spinner.hide()
      }, 2250)

  }

  editarConvenio(editConvenio) {
    this.cs.updateConvenio(this._cod_conv, this._cod_end, this._cod_tel, editConvenio.TELEFONE, editConvenio.ENDERECO, editConvenio).subscribe(res => {
      console.log(editConvenio)
      if (res['errors']) {
        res['errors'].forEach(error => {
          console.log('Houve um erro!', error)
          this.ns.notify(`Houve um erro! ${error.message}`)
        })
      } else {
        this.cs.conveniosById(this.ar.snapshot.params['id']).subscribe(response => {
          this.convenio = response[0]
          console.log(response)
          this.ns.notify('Convênio atualizado com sucesso!')
        })
      }
    })
  }



}
