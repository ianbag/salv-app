import { transition, style, trigger, state, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salv-novo-convenio',
  templateUrl: './novo-convenio.component.html',
  animations: [
    trigger('novo-convenioAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class NovoConvenioComponent implements OnInit {

  novoconvenioState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}
