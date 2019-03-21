import { Familiar } from './../../residente/infos-familiar/familiar.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'salv-familiar-residente',
  templateUrl: './familiar-residente.component.html',
  animations: [
    trigger('familiar-residenteAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class FamiliarResidenteComponent implements OnInit {

  familiarresidenteState = 'ready'

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  familiarResidenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.familiarResidenteForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
      parentesco: this.formBuilder.control('', [Validators.required]),
      rua: this.formBuilder.control('', [Validators.required]),
      numero: this.formBuilder.control('', [Validators.required]),
      bairro: this.formBuilder.control('', [Validators.required]),
      cidade: this.formBuilder.control('', [Validators.required]),
      estado: this.formBuilder.control('', [Validators.required]),
      cep: this.formBuilder.control('', [Validators.required]),
      complemento: this.formBuilder.control('', [Validators.required]),
      referencia: this.formBuilder.control('', [Validators.required]),
      telefone: this.formBuilder.control('', [Validators.required]),
    })
  }

  familiarResidente(familiar: Familiar) {
    console.log(familiar)
  }

}
