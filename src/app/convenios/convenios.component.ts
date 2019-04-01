import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { Convenio } from './convenio.model';
import { DialogConfirmService } from '../residentes/dialog-confirm.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import * as jspdf from 'jspdf'

@Component({
  selector: 'salv-convenios',
  templateUrl: './convenios.component.html',
  animations: [
    trigger('conveniosAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConveniosComponent implements OnInit {

  conveniosState = 'ready'

  constructor(private conveniosService: ConveniosService, private dialogConfirmService: DialogConfirmService) { }

  convenios: Convenio[]

  @ViewChild('reportConvenios') reportConvenios: ElementRef

  ngOnInit() {
    this.conveniosService.convenios()
      .subscribe(convenios => {
        this.convenios = convenios
        console.log('CONVENIOS', convenios)
      })
  }

  deleteConvenio(id: string): void {
    this.dialogConfirmService.confirm(`Deseja excluir o residente?`)
      .then((isTrue) => {
        if (isTrue) {
          this.conveniosService.deleteConvenio(id)
            .subscribe(result => this.conveniosService.convenios()
              .subscribe(convenios => this.convenios = convenios))
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
    let content = this.reportConvenios.nativeElement

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementsHandlers': specialElementsHandlers
    })
    doc.save('Relatório de Convênios.pdf')
  }

}
