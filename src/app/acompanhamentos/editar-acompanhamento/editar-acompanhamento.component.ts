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
    residentes: this.formBuilder.control('', []),
    funcionarios: this.formBuilder.control('', [])

    })


    this.acompanhamentoService.AcompanhamentoQuery
    (this.activatedRoute.snapshot.params['id']).subscribe(acompanhamento => {
      this.acompanhamento = acompanhamento
      console.log(this.acompanhamento)
    })

    setTimeout(() => {
     
      this.editarAcompanhamentoForm.patchValue({

        DATA_ACOMPANHAMENTO: this.acompanhamento[0].DATA_ACOMPANHAMENTO,
        ATIVIDADE:  this.acompanhamento[0].ATIVIDADE,
        residentes:  this.acompanhamento[0].CODIGO_RESIDENTE,
        funcionarios: this.acompanhamento[0].CODIGO_RESIDENTE

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


}
