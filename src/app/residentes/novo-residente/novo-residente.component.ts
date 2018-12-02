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

  novoResidenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.novoResidenteForm = this.formBuilder.group({
      // INFORMAÇÕES PESSOAIS INICIO
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
      // INFORMAÇÕES PESSOAIS FINAL

      // CERTIDAO NASCIMENTO INICIO
      numeroCertidaoNascimento: this.formBuilder.control('', [Validators.required]),
      folhaCertidaoNascimento: this.formBuilder.control('', [Validators.required]),
      livroCertidaoNascimento: this.formBuilder.control('', [Validators.required]),
      cidadeCertidaoNascimento: this.formBuilder.control('', [Validators.required]),
      estadoCertidaoNascimento: this.formBuilder.control('', [Validators.required]),
      //CERTIDAO NASCIMENTO FINAL

      //ELEITORAL INICIO
      tituloEleitoral: this.formBuilder.control('', [Validators.required]),
      zonaEleitoral: this.formBuilder.control('', [Validators.required]),
      secaoEleitoral: this.formBuilder.control('', [Validators.required]),
      //ELEITORAL FINAL

      //INSS INICIO
      numeroInss: this.formBuilder.control('', [Validators.required]),
      bancoInss: this.formBuilder.control('', [Validators.required]),
      agenciaInss: this.formBuilder.control('', [Validators.required]),
      contaInss: this.formBuilder.control('', [Validators.required]),
      situacaoInss: this.formBuilder.control('', [Validators.required]),
      valorInss: this.formBuilder.control('', [Validators.required]),
      provaVidaInss: this.formBuilder.control('', [Validators.required]),
      //INSS FINAL

      //OUTROS INICIO
      cartaoSams: this.formBuilder.control('', [Validators.required]),
      cartaoSus: this.formBuilder.control('', [Validators.required]),
      dataAcolhimento: this.formBuilder.control('', [Validators.required])
      //OUTROS FINAL
    })
  }

  novoResidente(residente: Residente) {
    console.log(residente)
  }

}
