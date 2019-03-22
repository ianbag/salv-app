import { Acompanhamento } from './acompanhamento/acompanhamento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AcompanhamentosService } from './acompanhamentos.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'salv-acompanhamentos',
  templateUrl: './acompanhamentos.component.html',
  animations: [
    trigger('acompanhamentosAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AcompanhamentosComponent implements OnInit {

  acompanhamentosState = 'ready'

  acompanhamentos: Acompanhamento[]

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.acompanhamentosService.acompanhamentos()
      .subscribe(acompanhamentos => this.acompanhamentos = acompanhamentos)
  } 

}
