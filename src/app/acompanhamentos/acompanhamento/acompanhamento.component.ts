import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AcompanhamentosService } from '../acompanhamentos.service';
import { Acompanhamento } from './acompanhamento.model';
import { trigger, state, transition, style, animate } from '@angular/animations';
import * as jspdf from 'jspdf'

@Component({
  selector: 'salv-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  animations: [
    trigger('acompanhamentoAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AcompanhamentoComponent implements OnInit {

    
  residentes = []    
  acompanhamentoState = 'ready'

  acompanhamento: Acompanhamento

  @ViewChild('reportAcompanhamento') reportAcompanhamento: ElementRef

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute) { }

  ngOnInit() {

    
    this.acompanhamentosService.acompanhamentoById(this.route.snapshot.params['id'])
      .subscribe(acompanhamento => { this.acompanhamento = acompanhamento[0]; console.log(acompanhamento) })
      
  }

  

  public downloadPDF() {
    let doc = new jspdf()
    let specialElementsHandlers = {
      '#editor': function (element, renderer) {
        return true
      }
    }
    let content = this.reportAcompanhamento.nativeElement

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementsHandlers
    })
    doc.save('Relatório de Acompanhamento.pdf')
  }
}