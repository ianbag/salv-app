import { Funcionario } from './../../funcionarios/funcionario.model';
import { NovoAcompanhamentoService } from './novo-acompanhamento.service';
import { Acompanhamento, Acompanhamento_Funcionario, Acompanhamento_Residente } from './../acompanhamento/acompanhamento.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';

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
  residentes: any = []
  funcionarios: any = []
  selectedResidentes: any = []
  selectedFuncionarios: any = []
  dropdownSettings: any = []
  dropdownSettings2: any = []


  novoAcompanhamentoForm: FormGroup;
  
  


  constructor(private formBuilder: FormBuilder, private NovoAcompanhamentoService: NovoAcompanhamentoService, private router: Router, private ns: NotificationService) { }

  ngOnInit() {
//Formulário Novo Acompanhamento
this.novoAcompanhamentoForm = this.formBuilder.group({
  DATA_ACOMPANHAMENTO: this.formBuilder.control(null, [Validators.required]),
  ATIVIDADE: this.formBuilder.control(null, [Validators.required]),
  residentes: this.formBuilder.control('', []),
  funcionarios: this.formBuilder.control('', [])

 
})


//Residentes List    
this.NovoAcompanhamentoService.residentes()
  .subscribe(residentes => {
    this.residentes = residentes
    console.log('residentes', residentes)
  })

//funcionarios List
this.NovoAcompanhamentoService.funcionarios()
  .subscribe(funcionarios => {
    this.funcionarios = funcionarios
    console.log('funcionario', funcionarios)
  })


this.selectedResidentes = []
this.selectedFuncionarios = []

this.dropdownSettings = {
  enableSearch: true,
  displayAllSelectedText: true,
  singleSelection: false,
  idField: 'CODIGO_RESIDENTE',
  textField: 'NOME',
  selectAllText: 'Marcar todos',
  unSelectAlltext: 'Desmarcar todos',
  itemsShowLimit: 5,
  allowSearchFilter: this.ShowFilter
}

this.dropdownSettings2 = {
  enableSearch: true,
  displayAllSelectedText: true,
  singleSelection: false,
  idField: 'CODIGO_FUNCIONARIO',
  textField: 'NOME',
  selectAllText: 'Marcar todos',
  unSelectAlltext: 'Desmarcar todos',
  itemsShowLimit: 5,
  allowSearchFilter: this.ShowFilter
}




}


novoAcompanhamento(acompanhamento: Acompanhamento) {
  this.NovoAcompanhamentoService.createAcompanhamento(acompanhamento).subscribe(res=> {
    this.ns.notify(`Acompanhamento inserido com sucesso!`)
  })
   console.log('acompanhamento',acompanhamento)
}

NovoAcompanhamentoFuncionario(acompanhamento_funcionario:  Acompanhamento_Funcionario){
  this.NovoAcompanhamentoService.createAcompanhamentoFuncionario(acompanhamento_funcionario).subscribe()
  console.log('acompanhamento funcionario', acompanhamento_funcionario)
}

NovoAcompanhamentoResidente(acompanhamento_residente:  Acompanhamento_Residente){
  this.NovoAcompanhamentoService.createAcompanhamentoResidente(acompanhamento_residente).subscribe()
  console.log('acompanhamento residente', acompanhamento_residente)
}


onResidenteSelect(residente: any) {
console.log('onResidenteSelect', residente)
}

onFuncioanrioSelect(funcionarios: any) {
console.log('onFuncioanrioSelect', funcionarios)
}

}
