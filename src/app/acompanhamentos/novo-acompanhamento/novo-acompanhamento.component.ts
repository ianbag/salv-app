
import { ActivatedRoute } from '@angular/router';
import { NovoAcompanhamentoService } from './novo-acompanhamento.service';
import { Acompanhamento } from './../acompanhamento/acompanhamento.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


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

  selectedResidentes: any = []
  dropdownSettings: any = []
  novoAcompanhamentoForm: FormGroup;
  residentes: any = []
  funcionarios: any = []

  constructor(private formBuilder: FormBuilder, private NovoAcompanhamentoService: NovoAcompanhamentoService, private route: ActivatedRoute) { }

  ngOnInit() {


    //Residentes List         
    
    this.residentes = [
    this.NovoAcompanhamentoService.residentes()
      .subscribe(residentes => {
        this.residentes = residentes
        console.log('residente', residentes)
      })
    ]

    this.funcionarios = [
    //funcionarios List
    this.NovoAcompanhamentoService.funcionarios()
      .subscribe(funcionarios => {
        this.funcionarios = funcionarios
        console.log('funcionario', funcionarios)
      })
    ]



    //Formulário Novo Acompanhamento

    this.novoAcompanhamentoForm = this.formBuilder.group({
      residente: this.formBuilder.control('', []),
      data: this.formBuilder.control('', []),
      atividade: this.formBuilder.control('', []),
      funcionario: this.formBuilder.control('', [])


    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'residente_id',
      textField: 'residente_text',
      selectAllText: 'Marcar todos',
      unSelectAlltext: 'Desmarcar todos',
      residentesShowLimit: 10,
      allowSearchFilter: this.ShowFilter
    }

    this.myForm = this.formBuilder.group({
      residente: [this.selectedResidentes]
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
