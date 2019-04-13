import { Funcionario, FuncionarioQuery } from './../../funcionarios/funcionario.model';
import { Residente } from './../../residentes/residente/residente.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AcompanhamentosService } from '../acompanhamentos.service';
import { Acompanhamento } from './acompanhamento.model';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
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

    
    
  acompanhamentoState = 'ready'

  acompanhamento: Acompanhamento []
  funcionarios: any[]
  residentes: any[]


  @ViewChild('reportAcompanhamento') reportAcompanhamento: ElementRef

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.spinner.show();
    this.acompanhamentosService.acompanhamentoById(this.route.snapshot.params['id'])
      .subscribe(acompanhamento => { this.spinner.hide() 
      this.acompanhamento = acompanhamento[0]; console.log(acompanhamento) })

      this.acompanhamentosService.AcompanhamentoFuncionarioQuery(this.route.snapshot.params['id']).subscribe(acompanhamento_funcionario => {
      this.spinner.hide() 
       this.funcionarios = acompanhamento_funcionario

        console.log('funcionario', this.funcionarios)
      })

      this.acompanhamentosService.AcompanhamentoResidenteQuery(this.route.snapshot.params['id']).subscribe(acompanhamento_residente => {
        this.spinner.hide() 
        this.residentes = acompanhamento_residente
 
         console.log('residente', this.residentes)
       })
       
      
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