import { Convenio, ConvenioQuery, Telefone } from './../convenio.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConveniosService } from './../convenios.service';
import { NotificationService } from './../../shared/notification.service';


@Component({
  selector: 'salv-editar-convenio',
  templateUrl: './editar-convenio.component.html',
  animations: [
    trigger('editar-convenioAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ] 
})
export class EditarConvenioComponent implements OnInit {

  editarconvenioState = 'ready'

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  editarConvenioForm: FormGroup
  convenio: ConvenioQuery[] = []
  _cod_end: number
  _cod_tel: number
  _cod_conv: number

  constructor(private fb: FormBuilder, private cs: ConveniosService, private router: Router, private ar: ActivatedRoute, private ns: NotificationService) { }

  ngOnInit() {

    this.cs.convenioQuery(this.ar.snapshot.params['id']).subscribe(data => {
      this.convenio = data
      this._cod_conv = this.convenio[0].COD_CONV
      this._cod_end = this.convenio[0].COD_END
      this._cod_tel = this.convenio[0].COD_TEL
    })

    this.editarConvenioForm = this.fb.group({
      NOME_CONVENIO: this.fb.control(null, [Validators.required]),
      TIPO_CONVENIO: this.fb.control('', [Validators.required]),
      TELEFONE: this.fb.group({
        DDD: this.fb.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
        NUMERO: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(9)])
      }),
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

    setTimeout(() => {
      this.editarConvenioForm.patchValue({
        NOME_CONVENIO: this.fb.control(null, [Validators.required]),
        TIPO_CONVENIO: this.fb.control('', [Validators.required]),
        ENDERECO: {
          ENDERECO: this.convenio[0].ENDERECO,
          NUMERO: this.convenio[0].NUMERO,
          BAIRRO: this.convenio[0].BAIRRO,
          COMPLEMENTO: this.convenio[0].COMPLEMENTO,
          CIDADE: this.convenio[0].CIDADE,
          ESTADO: this.convenio[0].ESTADO.toUpperCase(),
          CEP: this.convenio[0].CEP,
          REFERENCIA: this.convenio[0].REFERENCIA
        },
        TELEFONE: {
          DDD: this.convenio[0].DDD,
          NUMERO: this.convenio[0].NUM_TEL
        }
      })
    }, 1000)
  
  }

    //editarConvenio(editConvenio: Convenio){
      //this.cs.updateConvenio(this._cod_conv, this._cod_end, this._cod_tel, editConvenio.ENDERECO, editConvenio.TELEFONE, editConvenio).subscribe(res => {
        //this.router.navigate([`/convenio/${this._cod_conv}`])
        //this.ns.notify('Convênio atualizado com sucesso!')
      //})
    //}

}
