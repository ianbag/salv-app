import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AcompanhamentosService } from '../acompanhamentos.service';
import { Acompanhamento } from './acompanhamento.model';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'salv-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  animations: [
    trigger('acompanhamentoAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AcompanhamentoComponent implements OnInit {

  acompanhamentoState = 'ready'

  acompanhamento: Acompanhamento

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.acompanhamentosService.acompanhamentoById(this.route.snapshot.params['id'])
      .subscribe(acompanhamento => {this.acompanhamento = acompanhamento[0]; console.log(acompanhamento)})
  }

}