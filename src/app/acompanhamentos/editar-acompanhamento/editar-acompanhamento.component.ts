import { DialogConfirmService } from 'src/app/residentes/dialog-confirm.service';
import { NovoAcompanhamentoService } from './../novo-acompanhamento/novo-acompanhamento.service';

import { AcompanhamentosService } from './../acompanhamentos.service';
import { Acompanhamento, AcompanhamentoQuery, Acompanhamento_Funcionario, Acompanhamento_Residente } from './../acompanhamento/acompanhamento.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { NotificationService } from 'src/app/shared/notification.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'salv-editar-acompanhamento',
  templateUrl: './editar-acompanhamento.component.html',
  animations: [
    trigger('editar-acompanhamentoAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ] 
})

export class EditarAcompanhamentoComponent implements OnInit {

  editaracompanhamentoState = 'ready'


  editarAcompanhamentoForm: FormGroup
  codigo_acompanhamento: number
  ACOMPANHAMENTO_CODIGO: any[]
  acompanhamento: AcompanhamentoQuery[] = []
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  residentes: any = []
  residentesApagar: any = []
  funcionarios: any = []
  funcionariosApagar: any = []
  selectedResidentes: any = []
  selectedFuncionarios: any = []
  acompanhamentoSelecionados: any = []
  dropdownSettings: any = []
  dropdownSettings2: any = []


  constructor(private formBuilder: FormBuilder, private acompanhamentoService: AcompanhamentosService, private NovoAcompanhamentoService: NovoAcompanhamentoService, private router: Router, private activatedRoute: ActivatedRoute, private ns: NotificationService, private dialogConfirmService: DialogConfirmService) { }



  ngOnInit() {



    this.editarAcompanhamentoForm = this.formBuilder.group({
      DATA_ACOMPANHAMENTO: this.formBuilder.control(null, [Validators.required]),
      ATIVIDADE: this.formBuilder.control(null, [Validators.required]),
      residentes: this.formBuilder.control([Validators.required]),
      funcionarios: this.formBuilder.control([Validators.required])

    })


    this.acompanhamentoService.AcompanhamentoQuery
      (this.activatedRoute.snapshot.params['id']).subscribe(acompanhamento => {

        this.acompanhamento = acompanhamento
        this.codigo_acompanhamento = this.acompanhamento[0].CODIGO
        console.log('dados', this.acompanhamento, 'residentes')
      })


    this.acompanhamentoService.AcompanhamentoFuncionarioQuery
      (this.activatedRoute.snapshot.params['id']).subscribe(acompanhamento_funcionario => {

        this.selectedFuncionarios = acompanhamento_funcionario

        console.log('funcionario', this.selectedFuncionarios)
      })

    this.acompanhamentoService.AcompanhamentoResidenteQuery
      (this.activatedRoute.snapshot.params['id']).subscribe(acompanhamento_residente => {

        this.selectedResidentes = acompanhamento_residente

        console.log('residentes', this.selectedResidentes)
      })



    setTimeout(() => {

      this.editarAcompanhamentoForm.patchValue({

        DATA_ACOMPANHAMENTO: this.acompanhamento[0].DATA_ACOMPANHAMENTO,
        ATIVIDADE: this.acompanhamento[0].ATIVIDADE,


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
      enableSearch: true,
      displayAllSelectedText: true,
      singleSelection: false,
      idField: 'CODIGO_FUNCIONARIO',
      textField: 'FNOME',
      selectAllText: 'Marcar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 5,
      allowSearchFilter: true,
      searchPlaceholderText: 'Buscar por nome',
    }



  }



  editarAcompanhamento(editarAcomp: Acompanhamento) {

    this.acompanhamentoService.updateAcompanhamento(editarAcomp, this.codigo_acompanhamento).subscribe(res => {
      this.ns.notify(`Acompanhamento atualizado com sucesso!`)
      this.router.navigate(['/acompanhamentos'])
    })
    console.log('Edição acompanhamento', editarAcomp)
  }



  updateAcompanhamentoFuncionario(acompanhamento_funcionario: Acompanhamento_Funcionario[]) {
    for (let index = 0; index < this.editarAcompanhamentoForm.value.funcionarios.length; index++) {

      acompanhamento_funcionario = [Object.assign(this.editarAcompanhamentoForm.value.funcionarios[index], { "ACOMPANHAMENTO_CODIGO": this.codigo_acompanhamento })]
      this.acompanhamentoService.createAcompanhamentoFuncionario(acompanhamento_funcionario).subscribe(res => {

        console.log('acompanhamento funcionario', acompanhamento_funcionario)
      })

    }
  }

  updateAcompanhamentoResidente(acompanhamento_residente: Acompanhamento_Residente[]) {
    for (let index = 0; index < this.editarAcompanhamentoForm.value.residentes.length; index++) {

      acompanhamento_residente = [Object.assign(this.editarAcompanhamentoForm.value.residentes[index], { "ACOMPANHAMENTO_CODIGO": this.codigo_acompanhamento })]
      this.acompanhamentoService.createAcompanhamentoResidente(acompanhamento_residente).subscribe(res => {

        console.log('acompanhamento residente', acompanhamento_residente)
      })

    }


  }

  deleteResidente(id: string, idAcomp:number)  {
    this.dialogConfirmService.confirm(`Deseja excluir o residente do acompanhamento?`)
      .then((isTrue) => {
        if (isTrue) {
          this.acompanhamentoService.deleteResidenteAcompanhamento(id, idAcomp)           
        }
        
      })
  }

  deleteFuncionario(id: string, idAcomp:number)  {
    this.dialogConfirmService.confirm(`Deseja excluir o funcionário do acompanhamento?`)
      .then((isTrue) => {
        if (isTrue) {
          this.acompanhamentoService.deleteFuncionarioAcompanhamento(id, idAcomp)           
        }
        
      })
  }
        






  onResidenteSelect(residente: any) {
    console.log('onResidenteSelect', residente['CODIGO_RESIDENTE'])
    

  }

  onDeResidenteSelect(residente: any) {
  this.deleteResidente( residente.CODIGO_RESIDENTE,  this.codigo_acompanhamento)
    
    console.log('onDeresidenteSelect',  residente.CODIGO_RESIDENTE, this.codigo_acompanhamento)
  
  }


  onFuncionarioSelect(funcionarios: any) {
    console.log('onFuncionarioSelect', funcionarios['CODIGO_FUNCIONARIO'])
  }

  onDeFuncionarioSelect(funcionarios: any) {
    this.deleteResidente( funcionarios.CODIGO_FUNCIONARIO,  this.codigo_acompanhamento)
    console.log('onDeFuncionarioSelect',  funcionarios.CODIGO_RESIDENTE, this.codigo_acompanhamento)
  }


}


