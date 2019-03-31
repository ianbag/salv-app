import { Dependente } from './infos-dependente/dependente.model';
import { Funcionario, Telefone } from './../funcionario.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FuncionariosService } from '../funcionarios.service';
import { ActivatedRoute } from '@angular/router';
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

  funcionario: Funcionario
  dependentes: Dependente[]
  telefones: Telefone[]

  @ViewChild('reportFuncionario') reportFuncionario: ElementRef

  constructor(private fs: FuncionariosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fs.funcionarioById(this.route.snapshot.params['id']).subscribe(funcionario => {
      this.funcionario = funcionario
    })

    this.fs.dependenteById(this.route.snapshot.params['id']).subscribe(dependente => {
      this.dependentes = dependente
    })

    setTimeout(() => {
      this.fs.telefoneById(this.funcionario.PESSOA_CODIGO.toString()).subscribe(telefone => {
        this.telefones = telefone
        console.log(telefone)
      })
    }, 150)
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
