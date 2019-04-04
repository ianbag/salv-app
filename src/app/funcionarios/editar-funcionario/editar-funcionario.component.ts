import { trigger, state, style, transition, animate } from '@angular/animations';
import { Endereco } from './../../residentes/residente/infos-familiar/familiar.model';
import { Funcionario, Telefone, FuncionarioQuery } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  animations: [
    trigger('editar-funcionarioAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class EditarFuncionarioComponent implements OnInit {

  editarfuncionarioState = 'ready';

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
  funcionario: FuncionarioQuery[] = []
  _cod_pes: number
  _cod_tel: number
  _cod_end: number
  _cod_fun: number

  constructor(private fb: FormBuilder, private fs: FuncionariosService, private router: Router, private ar: ActivatedRoute, private ns: NotificationService) { }

  ngOnInit() {

    this.fs.funcionarioQuery(this.ar.snapshot.params['id']).subscribe(data => {
      this.funcionario = data
      this._cod_pes = this.funcionario[0].COD_PES
      this._cod_tel = this.funcionario[0].COD_TEL
      this._cod_end = this.funcionario[0].COD_END
      this._cod_fun = this.funcionario[0].COD_FUN
      console.log(this.funcionario[0])
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
          COD_PES: this.funcionario[0].COD_PES,
          NOME: this.funcionario[0].NOME,
          SOBRENOME: this.funcionario[0].SOBRENOME,
          RG: this.funcionario[0].RG,
          CPF: this.funcionario[0].CPF,
          SEXO: this.funcionario[0].SEXO.toUpperCase(),
          ESTADO_CIVIL: this.funcionario[0].ESTADO_CIVIL.toUpperCase(),
          DATA_NASCIMENTO: this.funcionario[0].DATA_NASCIMENTO,
          RELIGIAO: this.funcionario[0].RELIGIAO.toUpperCase(),
          ESCOLARIDADE: this.funcionario[0].ESCOLARIDADE.toUpperCase()
        },
        ENDERECO: {
          ENDERECO: this.funcionario[0].ENDERECO,
          NUMERO: this.funcionario[0].NUMERO,
          BAIRRO: this.funcionario[0].BAIRRO,
          COMPLEMENTO: this.funcionario[0].COMPLEMENTO,
          CIDADE: this.funcionario[0].CIDADE,
          ESTADO: this.funcionario[0].ESTADO.toUpperCase(),
          CEP: this.funcionario[0].CEP,
          REFERENCIA: this.funcionario[0].REFERENCIA
        },
        TELEFONE: {
          DDD: this.funcionario[0].DDD,
          NUMERO: this.funcionario[0].NUM_TEL
        },
        CARGO: this.funcionario[0].CARGO,
        DATA_ADMISSAO: this.funcionario[0].DATA_ADMISSAO
      })
    }, 1000)
  }

  editarFuncionario(editFuncionario: Funcionario) {
    this.fs.updateEmployee(this._cod_pes, this._cod_tel, this._cod_end, this._cod_fun, editFuncionario.PESSOA, editFuncionario.TELEFONE, editFuncionario.ENDERECO, editFuncionario).subscribe(res => {
      console.log(editFuncionario.ENDERECO)
      this.router.navigate([`/funcionario/${this._cod_fun}`])
      this.ns.notify('Funcionário atualizado com sucesso!')
    })
  }

}
