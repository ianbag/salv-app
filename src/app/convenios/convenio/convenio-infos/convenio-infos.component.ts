import { ActivatedRoute } from '@angular/router';
import { DialogConfirmService } from './../../../residentes/dialog-confirm.service';
import { Telefone } from './../../../residentes/residente/infos-convenio/convenio.model';
import { Convenio } from './../../convenio.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConveniosService } from '../../convenios.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-convenio-infos',
  templateUrl: './convenio-infos.component.html'
})
export class ConvenioInfosComponent implements OnInit {

  @Input() convenio: Convenio
  @Input() telefones: Telefone[]

  novoTelefoneForm: FormGroup
  uptadeTelefoneForm: FormGroup
  uptadeConvenioForm: FormGroup
  codigoTelefone: number

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

  constructor(private cs: ConveniosService, private fb: FormBuilder, private ns: NotificationService, private dcs: DialogConfirmService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.novoTelefoneForm = this.fb.group({
      DDD: this.fb.control(null, []),
      NUMERO: this.fb.control(null, [])
    })

    this.uptadeTelefoneForm = this.fb.group({
      DDD: this.fb.control(null, []),
      NUMERO: this.fb.control(null, [])
    })

    this.uptadeConvenioForm = this.fb.group({
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
        })
    })

  }

  novoTelefone(telefone: Telefone) {
    this.cs
  }



}
