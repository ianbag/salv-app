import { Familiar } from './../../residente/infos-familiar/familiar.model';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { ResidentesService } from '../../residentes.service';

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

  familiar: Familiar

  constructor(private formBuilder: FormBuilder, private residentesService: ResidentesService) { }

  ngOnInit() {
    
    this.familiarResidenteForm = this.formBuilder.group({
      NOME: this.formBuilder.control(null, [Validators.required]),
      SOBRENOME: this.formBuilder.control(null, [Validators.required]),
      PARENTESCO: this.formBuilder.control(null, []),
      ENDERECOS: this.formBuilder.group({
        ENDERECO: this.formBuilder.control(null, []),
        NUMERO: this.formBuilder.control(null, []),
        BAIRRO: this.formBuilder.control(null, []),
        CIDADE: this.formBuilder.control(null, []),
        ESTADO: this.formBuilder.control(null, []),
        CEP: this.formBuilder.control(null, []),
        COMPLEMENTO: this.formBuilder.control(null, []),
        REFERENCIA: this.formBuilder.control(null, []),
      }),
      TELEFONES: this.formBuilder.array([])
    })
  }

  get telefones(){
    return this.familiarResidenteForm.get('TELEFONES') as FormArray
  }

  addTelefones(){
    this.telefones.push(new FormControl(''))
  }

  familiarResidente(familiar: Familiar) {
    this.residentesService.endereco = familiar.ENDERECOS
    this.residentesService.telefones = this.telefones.value
    delete familiar.ENDERECOS
    delete familiar.TELEFONE
    this.residentesService.familiar = familiar
    console.log("TELEFONES>: ", this.residentesService.telefones)
  }

}
