import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salv-residentes',
  templateUrl: './residentes.component.html'
})
export class ResidentesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nome = 'Cleusa'
  apelido = 'Cleu'
  cpf = '111.111.111-11'
  rg = '22.222.222-2'

}
