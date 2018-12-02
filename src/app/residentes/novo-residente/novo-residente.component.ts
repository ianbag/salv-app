import { Residente } from './../residente/residente.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'salv-novo-residente',
  templateUrl: './novo-residente.component.html'
})
export class NovoResidenteComponent implements OnInit {

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  novoResidenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.novoResidenteForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
      apelido: this.formBuilder.control('', [Validators.required]),
      profissao: this.formBuilder.control('', [Validators.required]),
      cpf: this.formBuilder.control('', [Validators.required]),
      rg: this.formBuilder.control('', [Validators.required]),
      estadoCivil: this.formBuilder.control('', [Validators.required]),
      sexo: this.formBuilder.control('', [Validators.required]),
      genero: this.formBuilder.control('', [Validators.required]),
      religiao: this.formBuilder.control('', [Validators.required]),
      escolaridade: this.formBuilder.control('', [Validators.required]),
      dataNascimento: this.formBuilder.control('', [Validators.required]),
    })
  }

  novoResidente(residente: Residente){
    console.log(residente)
  }

}
