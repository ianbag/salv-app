import { Funcionario } from './../../funcionario.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'salv-infos-funcionario',
  templateUrl: './infos-funcionario.component.html'
})
export class InfosFuncionarioComponent implements OnInit {

  @Input() funcionario: Funcionario

  constructor() { }

  ngOnInit() {
  }

}
