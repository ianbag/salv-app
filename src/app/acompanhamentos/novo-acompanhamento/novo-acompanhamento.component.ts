import { Acompanhamento } from './../acompanhamento/acompanhamento.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salv-novo-acompanhamento',
  templateUrl: './novo-acompanhamento.component.html'
})
export class NovoAcompanhamentoComponent implements OnInit {

  myForm: FormGroup
  //Variable Declare
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  residentes: any = []
  selectedResidentes: any = []
  dropdownSettings: any = []


  novoAcompanhamentoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    //Formulário Novo Acompanhamento

    this.novoAcompanhamentoForm = this.formBuilder.group({
      residente: this.formBuilder.control('', []),
      data: this.formBuilder.control('', []),
      atividade: this.formBuilder.control('', []),
      funcionario: this.formBuilder.control('', [])
    })

    //Residentes List 
    this.residentes = [
      { residente_id: 1, residente_text: 'Orlando Nunes' },
      { residente_id: 2, residente_text: 'Vera Noida' },
      { residente_id: 3, residente_text: 'Cássia Banglaore' },
      { residente_id: 4, residente_text: 'Chico Pune' },
      { residente_id: 5, residente_text: 'Chiao Chennai' },
      { residente_id: 6, residente_text: 'Tenerife Mumbai' }
    ]

    this.selectedResidentes = [{ residente_id: 4, residente_text: 'Chico Pune' },
                          { residente_id: 6, residente_text: 'Tenerife Mumbai' }]

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

  novoAcompanhamento(acompanhamento: Acompanhamento){
    console.log(acompanhamento)
  }

  onResidenteSelect(residente: any){
    console.log('onResidenteSelect', residente)
  }

  onSelectAll(residentes: any){
    console.log('onSelectAll', residentes)
  }

}
