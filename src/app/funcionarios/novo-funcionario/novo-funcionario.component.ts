import { Component, OnInit, EventEmitter } from '@angular/core';
import { Pessoa, Funcionario, Telefone } from './../funcionario.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FuncionariosService } from './../funcionarios.service'
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  animations: [
    trigger('novo-funcionarioAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class NovoFuncionarioComponent implements OnInit {

  novoFuncionarioState = 'ready'
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

  novoFuncionarioForm: FormGroup
  funcionario: Funcionario

  constructor(private fb: FormBuilder, private fs: FuncionariosService, private router: Router, private ns: NotificationService) { }

  ngOnInit() {
    
    this.novoFuncionarioForm = this.fb.group({
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
      CARGO: this.fb.control(null, [Validators.required]),
      DATA_ADMISSAO: this.fb.control(null, [Validators.required])
    })
  }

  novoFuncionario(funcionario: Funcionario) {
    this.fs.createNewEmployee(funcionario.PESSOA, funcionario.TELEFONE, funcionario)
      .subscribe(res => {
        this.router.navigate(['/funcionarios'])
        this.ns.notify(`Funcionário inserido com sucesso!`)
      })
  }
}
