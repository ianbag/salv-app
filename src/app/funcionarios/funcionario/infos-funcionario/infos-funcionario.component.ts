import { Funcionario, Telefone } from './../../funcionario.model';
import { Component, OnInit, Input } from '@angular/core';
import { FuncionariosService } from '../../funcionarios.service';

@Component({
  selector: 'salv-infos-funcionario',
  templateUrl: './infos-funcionario.component.html'
})
export class InfosFuncionarioComponent implements OnInit {

  @Input() funcionario: Funcionario
  @Input() telefones: Telefone[]

  constructor(private fs: FuncionariosService) { }

  ngOnInit(): void {
  }

}