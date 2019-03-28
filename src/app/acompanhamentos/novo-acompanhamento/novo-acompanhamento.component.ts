import { NovoAcompanhamentoService } from './novo-acompanhamento.service';
import { Acompanhamento } from './../acompanhamento/acompanhamento.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { trigger, state, transition, style, animate } from '@angular/animations';
import { Residente } from 'src/app/residentes/residente/residente.model';


@Component({
  selector: 'salv-novo-acompanhamento',
  templateUrl: './novo-acompanhamento.component.html',
  animations: [
    trigger('novo-acompanhamentoAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class NovoAcompanhamentoComponent implements OnInit {




  novoacompanhamentoState = 'ready'

  myForm: FormGroup
  //Variable Declare
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  residentes: any = []
  funcionarios: any = []
  selectedResidentes: any = []
  selectedFuncionarios: any = []
  dropdownSettings: any = []
  dropdownSettingsF: any = []


  novoAcompanhamentoForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private NovoAcompanhamentoService: NovoAcompanhamentoService, ) { }

  ngOnInit() {

    //Formulário Novo Acompanhamento
    this.novoAcompanhamentoForm = this.formBuilder.group({
      data: this.formBuilder.control('', []),
      atividade: this.formBuilder.control('', [])
    })


    //Residentes List         



    this.NovoAcompanhamentoService.residentes()
      .subscribe(residentes => {
        this.residentes = residentes
      })

    //funcionarios List
    this.NovoAcompanhamentoService.funcionarios()
      .subscribe(funcionarios => {
        this.funcionarios = funcionarios
      })




    this.selectedResidentes = []
    this.selectedFuncionarios = []





    this.dropdownSettings = {
      enableSearch: true,
      displayAllSelectedText: true,
      singleSelection: false,
      idField: 'id',
      textField: 'NOME',
      selectAllText: 'Marcar todos',
      unSelectAlltext: 'Desmarcar todos',
      itemsShowLimit: 5,
      allowSearchFilter: this.ShowFilter
    }


    this.myForm = this.formBuilder.group({
      residente: [this.selectedResidentes],
      funcionario: [this.selectedFuncionarios]

    })

  }

  novoAcompanhamento(acompanhamento: Acompanhamento) {
    console.log(acompanhamento)
  }

  onResidenteSelect(residente: any) {
    console.log('onResidenteSelect', residente)
  }

  onFuncioanrioSelect(funcionarios: any) {
    console.log('onFuncioanrioSelect', funcionarios)
  }

}
