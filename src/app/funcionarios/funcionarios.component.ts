import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from './funcionario.model';
import { DialogConfirmService } from '../residentes/dialog-confirm.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as jspdf from 'jspdf';

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


  funcionarios: Funcionario[]

  constructor(private funcionariosService: FuncionariosService, private dialogConfirmService: DialogConfirmService) { }

  funcionariosState = 'ready'

  @ViewChild('reportFuncionarios') reportFuncionarios: ElementRef

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

  public downloadPDF() {
    let doc = new jspdf()
    let specialElementsHandlers = {
      '#editor': function (element, renderer) {
        return true
      }
    }
    let content = this.reportFuncionarios.nativeElement

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementsHandlers
    })
    doc.save('Relatório de Funcionários.pdf')
  }
}
