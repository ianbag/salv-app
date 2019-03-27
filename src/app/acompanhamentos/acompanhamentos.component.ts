import { Acompanhamento } from './acompanhamento/acompanhamento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AcompanhamentosService } from './acompanhamentos.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import * as jspdf from 'jspdf'

@Component({
  selector: 'salv-acompanhamentos',
  templateUrl: './acompanhamentos.component.html',
  animations: [
    trigger('acompanhamentosAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AcompanhamentosComponent implements OnInit {

  acompanhamentosState = 'ready'

  acompanhamentos: Acompanhamento[]

  @ViewChild('reportAcompanhamentos') reportAcompanhamentos: ElementRef

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.acompanhamentosService.acompanhamentos()
      .subscribe(acompanhamentos => this.acompanhamentos = acompanhamentos)
  }

  public downloadPDF() {
    let doc = new jspdf()
    let specialElementsHandlers = {
      '#editor': function (elements, renderer) {
        return true
      }
    }
    let content = this.reportAcompanhamentos.nativeElement

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementsHandlers
    })

    doc.save('Relatório de Acompanhamentos.pdf')
  }
}
