import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from './funcionario.model';
import { DialogConfirmService } from '../residentes/dialog-confirm.service';

@Component({
  selector: 'salv-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: Funcionario[]

  constructor(private funcionariosService: FuncionariosService, private dialogConfirmService: DialogConfirmService) { }

  ngOnInit() {
    this.funcionariosService.funcionarios()
      .subscribe(funcionarios => {
        this.funcionarios = funcionarios
        console.log('FUNCIONARIOS', funcionarios)
      })
  }

  deleteFuncionario(id: string): void {
    this.dialogConfirmService.confirm(`Deseja excluir o funcionário?`)
      .then((isTrue) => {
        if (isTrue) {
          this.funcionariosService.deleteFuncionario(id)
            .subscribe(() => this.funcionariosService.funcionarios()
              .subscribe(funcionarios => this.funcionarios = funcionarios))
        }
      })
  }
}
