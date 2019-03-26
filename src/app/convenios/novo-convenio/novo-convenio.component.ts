import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { transition, style, trigger, state, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/convenios/convenio.model';;

@Component({
  selector: 'salv-novo-convenio',
  templateUrl: './novo-convenio.component.html',
  animations: [
    trigger('novo-convenioAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.novoConvenioForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
      tipoConvenio: this.formBuilder.control('', [Validators.required]),
      rua: this.formBuilder.control('', [Validators.required]),
      numero: this.formBuilder.control('', [Validators.required]),
      bairro: this.formBuilder.control('', [Validators.required]),
      cidade: this.formBuilder.control('', [Validators.required]),
      estado: this.formBuilder.control('', [Validators.required]),
      cep: this.formBuilder.control('', [Validators.required]),
      complemento: this.formBuilder.control('', []),
      referencia: this.formBuilder.control('', []),
      telefone: this.formBuilder.control('', [Validators.required])
    })
  }

  novoConvenio(convenio: Convenio){
    console.log(convenio)
  }

}
