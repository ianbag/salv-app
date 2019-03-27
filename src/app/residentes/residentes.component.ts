import { DialogConfirmService } from './dialog-confirm.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResidentesService } from './residentes.service';
import { Residente } from './residente/residente.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as jspdf from 'jspdf'


@Component({
  selector: 'salv-residentes',
  templateUrl: './residentes.component.html',
  animations: [
    trigger('residentesAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ResidentesComponent implements OnInit {

  residentesState = 'ready'

  residentes: Residente[]

  @ViewChild('reportResidentes') reportResidentes: ElementRef

  constructor(private residentesService: ResidentesService, private dialogConfirmService: DialogConfirmService) { }

  ngOnInit() {
    this.residentesService.residentes()
      .subscribe(residentes => {
        this.residentes = residentes
        console.log('residente', residentes)
      })
  }


  deleteResidente(id: string): void {
    this.dialogConfirmService.confirm(`Deseja excluir o residente?`)
      .then((isTrue) => {
        if (isTrue) {
          this.residentesService.deleteResidente(id)
            .subscribe(result => this.residentesService.residentes()
              .subscribe(residentes => this.residentes = residentes))
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
    let content = this.reportResidentes.nativeElement

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 250,
      'elementHandlers': specialElementsHandlers
    })
    doc.save('Relatório de Residentes.pdf')
  }
}
