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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.novoResidenteForm = this.formBuilder.group({
      // INFORMAÇÕES PESSOAIS INICIO
      nome: this.formBuilder.control('', [Validators.required]),
      apelido: this.formBuilder.control('', []),
      profissao: this.formBuilder.control('', []),
      cpf: this.formBuilder.control('', []),
      rg: this.formBuilder.control('', []),
      estadoCivil: this.formBuilder.control('', []),
      sexo: this.formBuilder.control('', [Validators.required]),
      genero: this.formBuilder.control('', []),
      religiao: this.formBuilder.control('', []),
      escolaridade: this.formBuilder.control('', []),
      dataNascimento: this.formBuilder.control('', []),
      // INFORMAÇÕES PESSOAIS FINAL

      // CERTIDAO NASCIMENTO INICIO
      numeroCertidaoNascimento: this.formBuilder.control('', []),
      folhaCertidaoNascimento: this.formBuilder.control('', []),
      livroCertidaoNascimento: this.formBuilder.control('', []),
      cidadeCertidaoNascimento: this.formBuilder.control('', []),
      estadoCertidaoNascimento: this.formBuilder.control('', []),
      //CERTIDAO NASCIMENTO FINAL

      //ELEITORAL INICIO
      tituloEleitoral: this.formBuilder.control('', []),
      zonaEleitoral: this.formBuilder.control('', []),
      secaoEleitoral: this.formBuilder.control('', []),
      //ELEITORAL FINAL

      //INSS INICIO
      numeroInss: this.formBuilder.control('', []),
      bancoInss: this.formBuilder.control('', []),
      agenciaInss: this.formBuilder.control('', []),
      contaInss: this.formBuilder.control('', []),
      situacaoInss: this.formBuilder.control('', []),
      valorInss: this.formBuilder.control('', []),
      provaVidaInss: this.formBuilder.control('', []),
      //INSS FINAL

      //OUTROS INICIO
      cartaoSams: this.formBuilder.control('', []),
      cartaoSus: this.formBuilder.control('', []),
      dataAcolhimento: this.formBuilder.control('', [Validators.required])
      //OUTROS FINAL
    })
  }

  novoResidente(residente: Residente) {
    console.log(residente)
  }

}
