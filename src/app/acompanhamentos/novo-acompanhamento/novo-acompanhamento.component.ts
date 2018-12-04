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
  cities: any = []
  selectedItems: any = []
  dropdownSettings: any = []


  novoAcompanhamentoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    //Formulário Novo Acompanhamento

    this.novoAcompanhamentoForm = this.formBuilder.group({
      residente: this.formBuilder.control(''),
      data: this.formBuilder.control(''),
      atividade: this.formBuilder.control(''),
      funcionario: this.formBuilder.control('')
    })

    //City List 
    this.cities = [
      { item_id: 1, item_text: 'Delhi' },
      { item_id: 2, item_text: 'Noida' },
      { item_id: 3, item_text: 'Banglaore' },
      { item_id: 4, item_text: 'Pune' },
      { item_id: 5, item_text: 'Chennai' },
      { item_id: 6, item_text: 'Mumbai' }
    ]

    this.selectedItems = [{ item_id: 4, item_text: 'Pune' },
                          { item_id: 6, item_text: 'Mumbai' }]

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAlltext: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: this.ShowFilter
    }

    this.myForm = this.formBuilder.group({
      city: [this.selectedItems]
    })

  }

  novoAcompanhamento(acompanhamento: Acompanhamento){
    console.log(acompanhamento)
  }

  onItemSelect(item: any){
    console.log('onItemSelect', item)
  }

  onSelectAll(items: any){
    console.log('onSelectAll', items)
  }

}
