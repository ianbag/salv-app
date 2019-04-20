import { Acompanhamento } from './acompanhamento/acompanhamento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AcompanhamentosService } from './acompanhamentos.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
import * as jspdf from 'jspdf'
import { checkAndUpdateQuery } from '@angular/core/src/view/query';
import { throwError } from 'rxjs';

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

  searchText;
  acompanhamentos: Acompanhamento[]

  @ViewChild('reportAcompanhamentos') reportAcompanhamentos: ElementRef

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  paginaAtual: number = 1;
  ngOnInit() {

    this.spinner.show();
    this.acompanhamentosService.acompanhamentos()
      .subscribe(
        acompanhamentos => {
          this.spinner.hide()
          this.acompanhamentos = acompanhamentos
          console.log('acompanahmentos', this.acompanhamentos)
        })
  }

}
