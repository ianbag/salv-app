import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'salv-editar-convenio',
  templateUrl: './editar-convenio.component.html',
  animations: [
    trigger('editar-convenioAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class EditarConvenioComponent implements OnInit {

  editarconvenioState = 'ready'
  

  constructor() { }

  ngOnInit() {
  }

}
