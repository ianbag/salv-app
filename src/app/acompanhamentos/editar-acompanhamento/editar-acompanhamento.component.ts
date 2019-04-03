import { NovoAcompanhamentoService } from './../novo-acompanhamento/novo-acompanhamento.service';

import { AcompanhamentosService } from './../acompanhamentos.service';
import { Acompanhamento, AcompanhamentoQuery } from './../acompanhamento/acompanhamento.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-editar-acompanhamento',
  templateUrl: './editar-acompanhamento.component.html'
})
export class EditarAcompanhamentoComponent implements OnInit {


  editarAcompanhamentoForm: FormGroup
  acompanhamento: AcompanhamentoQuery[] = []
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  residentes: any = []
  funcionarios: any = []
  selectedResidentes: any = []
  selectedFuncionarios: any = []
  dropdownSettings: any = []
  dropdownSettings2: any = []

  constructor(private formBuilder: FormBuilder, private acompanhamentoService: AcompanhamentosService, private NovoAcompanhamentoService: NovoAcompanhamentoService, private router: Router, private activatedRoute: ActivatedRoute, private notificationService: NotificationService ) { }

  ngOnInit() {

    

   this.editarAcompanhamentoForm = this.formBuilder.group({
    DATA_ACOMPANHAMENTO: this.formBuilder.control(null, [Validators.required]),
    ATIVIDADE: this.formBuilder.control(null, [Validators.required]),
    residentes: this.formBuilder.control(null, [Validators.required]),
    funcionarios: this.formBuilder.control(null, [Validators.required])

    })


    this.acompanhamentoService.AcompanhamentoQuery
    (this.activatedRoute.snapshot.params['id']).subscribe(acompanhamento => {
      this.acompanhamento = acompanhamento
      console.log('dados',this.acompanhamento)
    })

    setTimeout(() => {
     
      this.editarAcompanhamentoForm.patchValue({

        DATA_ACOMPANHAMENTO: this.acompanhamento[0].DATA_ACOMPANHAMENTO,
        ATIVIDADE:  this.acompanhamento[0].ATIVIDADE,
       

      })
  }, 1000)



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


  this.selectedResidentes = [{
    NOME: this.residentes.RESIDENTE_NOME,
    CODIGO_RESIDENTE: this.residentes.CODIGO_RESIDENTE

  }]
  this.selectedFuncionarios = []
console.log('residentesSelecionados: ', this.selectedResidentes)
this.dropdownSettings = {
  allowSearchFilter: true,
  searchPlaceholderText: 'Buscar por nome',
  enableSearch: true,
  displayAllSelectedText: true,
  singleSelection: false,
  idField: 'CODIGO_RESIDENTE',
  textField: 'NOME',
  selectAllText: 'Marcar todos',
  unSelectAllText: 'Desmarcar todos',
  itemsShowLimit: 5
  
}

this.dropdownSettings2 = {
  searchPlaceholderText: 'Buscar por nome',
  selectAllText: 'Marcar todos',
  unSelectAllText: 'Desmarcar todos',
  enableSearch: true,
  displayAllSelectedText: true,
  singleSelection: false,
  idField: 'CODIGO_FUNCIONARIO',
  textField: 'NOME', 
  itemsShowLimit: 5,
  allowSearchFilter: true
   }

 } 

 onResidenteSelect(residente: any) {
  console.log('onResidenteSelect', residente['CODIGO_RESIDENTE'] + this.selectedResidentes)
}

onFuncionarioSelect(funcionarios: any) {
  console.log('onFuncionarioSelect', funcionarios['CODIGO_FUNCIONARIO'])
}
}
