import { Endereco } from './../../residentes/residente/infos-familiar/familiar.model';
import { Funcionario, Telefone, FuncionarioQuery } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-editar-funcionario',
  templateUrl: './editar-funcionario.component.html'
})
export class EditarFuncionarioComponent implements OnInit {

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];
  estadosCivil = [
    { value: "S", option: "Solteiro" },
    { value: "C", option: "Casado" },
    { value: "D", option: "Divorciado" },
    { value: "V", option: "Viúvo" }
  ];
  sexos = [
    { value: "M", option: "Masculino" },
    { value: "F", option: "Feminino" }
  ];
  religioes = [
    { value: "CAT", option: "Católico" },
    { value: "EVG", option: "Evangélico" },
    { value: "ESP", option: "Espírita" },
    { value: "UBC", option: "Umbanda e Candomblé" },
    { value: "OUT", option: "Outras religiões" },
    { value: "SRG", option: "Sem Religião" },
    { value: "NEC", option: "Não Especificado" },
  ];
  escolaridades = [
    { value: "FI", option: "Fundamental Incompleto" },
    { value: "FC", option: "Fundamental Completo" },
    { value: "MI", option: "Médio Incompleto" },
    { value: "MC", option: "Médio Completo" },
    { value: "SI", option: "Superior Incompleto" },
    { value: "SC", option: "Superior Completo" },
    { value: "NE", option: "Não Especificado" },
  ];

  editarFuncionarioForm: FormGroup
  _data_funcionario: FuncionarioQuery[] = []

  constructor(private fb: FormBuilder, private fs: FuncionariosService, private router: Router, private ar: ActivatedRoute, private ns: NotificationService) { }

  ngOnInit() {

    this.fs.funcionarioQuery(this.ar.snapshot.params['id']).subscribe(data => {
      this._data_funcionario = data
      console.log(this._data_funcionario[0])
    })

    this.editarFuncionarioForm = this.fb.group({
      //PESSOA
      PESSOA: this.fb.group({
        NOME: this.fb.control(null, [Validators.required]),
        SOBRENOME: this.fb.control(null, [Validators.required]),
        CPF: this.fb.control(null, [Validators.required, Validators.minLength(11)]),
        RG: this.fb.control(null, [Validators.required, Validators.minLength(9)]),
        ESTADO_CIVIL: this.fb.control(null, []),
        SEXO: this.fb.control(null, [Validators.required]),
        RELIGIAO: this.fb.control(null, []),
        ESCOLARIDADE: this.fb.control(null, []),
        DATA_NASCIMENTO: this.fb.control(null, []),
      }),
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
      }),
      CARGO: this.fb.control(null, [Validators.required]),
      DATA_ADMISSAO: this.fb.control(null, [Validators.required])
    })

    setTimeout(() => {
      this.editarFuncionarioForm.patchValue({
        PESSOA: {
          NOME: this._data_funcionario[0].NOME,
          SOBRENOME: this._data_funcionario[0].SOBRENOME,
          RG: this._data_funcionario[0].RG,
          CPF: this._data_funcionario[0].CPF,
          SEXO: this._data_funcionario[0].SEXO.toUpperCase(),
          ESTADO_CIVIL: this._data_funcionario[0].ESTADO_CIVIL.toUpperCase(),
          DATA_NASCIMENTO: this._data_funcionario[0].DATA_NASCIMENTO,
          RELIGIAO: this._data_funcionario[0].RELIGIAO.toUpperCase(),
          ESCOLARIDADE: this._data_funcionario[0].ESCOLARIDADE.toUpperCase()
        },
        ENDERECO: {
          ENDERECO: this._data_funcionario[0].ENDERECO,
          NUMERO: this._data_funcionario[0].NUMERO,
          BAIRRO: this._data_funcionario[0].BAIRRO,
          COMPLEMENTO: this._data_funcionario[0].COMPLEMENTO,
          CIDADE: this._data_funcionario[0].CIDADE,
          ESTADO: this._data_funcionario[0].ESTADO.toUpperCase(),
          CEP: this._data_funcionario[0].CEP,
          REFERENCIA: this._data_funcionario[0].REFERENCIA
        },
        TELEFONE: {
          DDD: this._data_funcionario[0].DDD,
          NUMERO: this._data_funcionario[0].NUM_TEL
        },
        CARGO: this._data_funcionario[0].CARGO,
        DATA_ADMISSAO: this._data_funcionario[0].DATA_ADMISSAO
      })
    }, 1000)
  }

}
