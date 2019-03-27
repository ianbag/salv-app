import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import * as jspdf from 'jspdf'

@Component({
  selector: 'salv-funcionario',
  templateUrl: './funcionario.component.html',
  animations: [
    trigger('funcionarioAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class FuncionarioComponent implements OnInit {

  funcionarioState = 'ready'

  @ViewChild('reportFuncionario') reportFuncionario: ElementRef

  constructor() { }

  ngOnInit() {
  }

  public downloadPDF() {
    let doc = new jspdf()
    let specialElementsHandlers = {
      '#editor': function (elements, renderer) {
        return true
      }
    }
    let content = this.reportFuncionario.nativeElement

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementsHandlers': specialElementsHandlers
    })
    doc.save('Relatório de Funcionário.pdf')
  }

}
