import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salv-novo-residente',
  templateUrl: './novo-residente.component.html'
})
export class NovoResidenteComponent implements OnInit {

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ]

  constructor() { }

  ngOnInit() {
  }

}
