import { Funcionario } from './../funcionario.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import * as jspdf from 'jspdf'
import { FuncionariosService } from '../funcionarios.service';
import { ActivatedRoute } from '@angular/router';

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

  funcionario: Funcionario

  @ViewChild('reportFuncionario') reportFuncionario: ElementRef

  constructor(private fs: FuncionariosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fs.funcionarioById(this.route.snapshot.params['id']).subscribe(funcionario => {
      this.funcionario = funcionario
      console.log('funcionario by id', funcionario.CODIGO_FUNCIONARIO, funcionario.CARGO)
    })
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
