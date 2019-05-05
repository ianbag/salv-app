import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from './funcionario.model';
import { DialogConfirmService } from '../residentes/dialog-confirm.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
import * as jspdf from 'jspdf';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'salv-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
  animations: [
    trigger('funcionariosAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class FuncionariosComponent implements OnInit {

  public searchString: string;
  funcionarios: Funcionario[]
  funcionariosInativos: Funcionario[]

  constructor(private funcionariosService: FuncionariosService, private dialogConfirmService: DialogConfirmService, private spinner: NgxSpinnerService, private ns: NotificationService) { }

  funcionariosState = 'ready'

  paginaAtual: number = 1;

  ngOnInit() {
    this.spinner.show()
    this.funcionariosService.funcionarios()
      .subscribe(funcionarios => {
        this.spinner.hide()
        this.funcionarios = funcionarios
        console.log('FUNCIONARIOS', funcionarios)
      })
  }

  funcionariosInativoss() {
    this.funcionariosService.funcionariosInativos()
      .subscribe(funcionariosInativos => {

        this.funcionariosInativos = funcionariosInativos
        console.log('FUNCIONARIOS', funcionariosInativos)
      })

  }

  deleteFuncionario(id: string): void {
    this.dialogConfirmService.confirm(`Deseja inativar o funcionário?`)
      .then((isTrue) => {
        if (isTrue) {
          this.funcionariosService.deleteFuncionario(id)
            .subscribe(() => this.funcionariosService.funcionarios()
              .subscribe(funcionarios => this.funcionarios = funcionarios))
        }
      })
  }

  ativarFuncionario(id: string): void {
    this.dialogConfirmService.confirm(`Deseja ativar o funcionário?`)
      .then((isTrue) => {
        if (isTrue) {
          this.funcionariosService.ativarFuncionario(id)
            .subscribe(() => this.funcionariosService.funcionariosInativos()
              .subscribe(funcionarios => this.funcionariosInativos = funcionarios, funcionarios => this.funcionarios = funcionarios))
        }
      })
  }

  reportFuncionarios() {
    this.funcionariosService.reportFuncionarios().subscribe(res => {
      
    })
  }

}
