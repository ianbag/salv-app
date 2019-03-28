import { Residente, Pessoa } from './../residente/residente.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResidentesService } from '../residentes.service';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'salv-novo-residente',
  templateUrl: './novo-residente.component.html',
  animations: [
    trigger('novo-residenteAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class NovoResidenteComponent implements OnInit {

  novoresidenteState = 'ready'

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

  situacoesInss = [
    { value: "BPC", option: "Benefício de Prestação Continuada" },
    { value: "AIV", option: "Aposentadoria por Invalidez" },
    { value: "AID", option: "Aposentadoria por Idade" }
  ]

  novoResidenteForm: FormGroup;
  pessoa: Pessoa
  residente: Residente

  constructor(private formBuilder: FormBuilder, private residentesService: ResidentesService) {}

  ngOnInit() {
    this.pessoa = this.residentesService.pessoa
    this.residente = this.residentesService.residente

    this.novoResidenteForm = this.formBuilder.group({
      // INFORMAÇÕES PESSOAIS INICIO
      PESSOA: this.formBuilder.group({
        NOME: this.formBuilder.control(null, [Validators.required]),
        SOBRENOME: this.formBuilder.control(null, [Validators.required]),
        CPF: this.formBuilder.control(null, [Validators.minLength(11)]),
        RG: this.formBuilder.control(null, [Validators.minLength(9)]),
        ESTADO_CIVIL: this.formBuilder.control(null, []),
        SEXO: this.formBuilder.control(null, [Validators.required]),
        GENERO: this.formBuilder.control(null, []),
        RELIGIAO: this.formBuilder.control(null, []),
        ESCOLARIDADE: this.formBuilder.control(null, []),
        DATA_NASCIMENTO: this.formBuilder.control(null, []),

      }),
      // INFORMAÇÕES PESSOAIS FINAL
      APELIDO: this.formBuilder.control(null, []),
      PROFISSAO: this.formBuilder.control(null, []),
      // CERTIDAO NASCIMENTO INICIO
      NUMERO_CERTIDAO_NASCIMENTO: this.formBuilder.control(null, []),
      FOLHA_CERTIDAO_NASCIMENTO: this.formBuilder.control(null, []),
      LIVRO_CERTIDAO_NASCIMENTO: this.formBuilder.control(null, []),
      CIDADE_CERTIDAO_NASCIMENTO: this.formBuilder.control(null, []),
      ESTADO_CERTIDAO_NASCIMENTO: this.formBuilder.control(null, []),
      //CERTIDAO NASCIMENTO FINAL

      //ELEITORAL INICIO
      TITULO_ELEITORAL: this.formBuilder.control(null, []),
      ZONA_ELEITORAL: this.formBuilder.control(null, []),
      SECAO_ELEITORAL: this.formBuilder.control(null, []),
      //ELEITORAL FINAL

      //INSS INICIO
      NUMERO_INSS: this.formBuilder.control(null, []),
      BANCO_INSS: this.formBuilder.control(null, []),
      AGENCIA_INSS: this.formBuilder.control(null, []),
      CONTA_INSS: this.formBuilder.control(null, []),
      SITUACAO_INSS: this.formBuilder.control(null, []),
      VALOR_INSS: this.formBuilder.control(null, []),
      PROVA_VIDA_INSS: this.formBuilder.control(null, []),
      //INSS FINAL

      //OUTROS INICIO
      CARTAO_SAMS: this.formBuilder.control(null, []),
      CARTAO_SUS: this.formBuilder.control(null, []),
      DATA_ACOLHIMENTO: this.formBuilder.control(null, [Validators.required])
      //OUTROS FINAL
    })
  }

  novoResidente(residente: Residente) {
    this.residentesService.pessoa = residente.PESSOA
    delete residente.PESSOA
    this.residentesService.residente = residente
  }

}
