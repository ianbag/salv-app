import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as jspdf from 'jspdf'

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

  funcionariosState = 'ready'

  @ViewChild('reportFuncionarios') reportFuncionarios: ElementRef

  constructor() { }

  ngOnInit() {
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
