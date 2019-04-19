import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { Convenio } from './convenio.model';
import { DialogConfirmService } from '../residentes/dialog-confirm.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(private conveniosService: ConveniosService, private dialogConfirmService: DialogConfirmService, private spinner: NgxSpinnerService) { }

  convenios: Convenio[]

  @ViewChild('reportConvenios') reportConvenios: ElementRef
  paginaAtual: number = 1;
  ngOnInit() {
    this.spinner.show()
    this.conveniosService.convenios()
      .subscribe(convenios => {
        this.spinner.hide();
        this.convenios = convenios
        console.log('CONVENIOS', convenios)
      })
  }

  deleteConvenio(id: string): void {
    this.dialogConfirmService.confirm(`Deseja excluir o convênio?`)
      .then((isTrue) => {
        if (isTrue) {
          this.conveniosService.deleteConvenio(id)
            .subscribe(() => this.conveniosService.convenios()
              .subscribe(convenios => this.convenios = convenios))
        }
      })
  }
}
