import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Convenio } from 'src/app/convenios/convenio.model';
import { ActivatedRoute } from '@angular/router';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as jspdf from 'jspdf'

@Component({
  selector: 'salv-convenio',
  templateUrl: './convenio.component.html',
  animations: [
    trigger('convenioAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConvenioComponent implements OnInit {

  convenioState = 'ready'

  convenio: Convenio

  @ViewChild('reportConvenio') reportConvenio: ElementRef

  constructor(private conveniosService: ConveniosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.conveniosService.conveniosById(this.route.snapshot.params['id'])
      .subscribe(convenio => { this.convenio = convenio[0], console.log(this.convenio) })
  }

  public downloadPDF() {
    let doc = new jspdf()
    let specialElementsHandlers = {
      '#editor': function (element, renderer) {
        return true
      }
    }
    let content = this.reportConvenio.nativeElement

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementsHandlers
    })
    doc.save('Relatório de Convênio.pdf')
  }

}
