import { Convenio } from './infos-convenio/convenio.model';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResidentesService } from '../residentes.service';
import { ActivatedRoute } from '@angular/router';
import { Residente } from './residente.model';
import { Familiar } from './infos-familiar/familiar.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as jspdf from 'jspdf'

@Component({
  selector: 'salv-residente',
  templateUrl: './residente.component.html',
  animations: [
    trigger('residenteAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ResidenteComponent implements OnInit {

  residenteState = 'ready'

  residente: Residente
  familiares: Familiar[]
  convenios: Convenio[]

  @ViewChild('contentReport') contentReport: ElementRef

  constructor(private residentesService: ResidentesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.residentesService.residenteById(this.route.snapshot.params['id'])
      .subscribe(residente => {
        this.residente = residente
        console.log('residente by id', residente.CODIGO_RESIDENTE)
      })

    this.residentesService.familiarById(this.route.snapshot.params['id'])
      .subscribe(familiar => {
        this.familiares = familiar
        console.log('FAMILIAR', familiar)
      })

    this.residentesService.convenioById(this.route.snapshot.params['id'])
      .subscribe(convenio => {
        this.convenios = convenio
        console.log('CONVENIO', this.convenios)
      })
  }

  public downloadPDF() {
    let doc = new jspdf()
    let specialElementsHandlers = {
      '#editor': function (element, renderer) {
        return true
      }
    }
    let content = this.contentReport.nativeElement

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementsHandlers
    })
    doc.save('reportTeste.pdf')
  }

}
