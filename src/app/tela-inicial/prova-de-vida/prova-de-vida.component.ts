import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'salv-prova-de-vida',
  templateUrl: './prova-de-vida.component.html',
  styleUrls: ['./prova-de-vida.component.css'],
  animations: [
    trigger('prova-de-vidaAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ProvaDeVidaComponent implements OnInit {

  provadevidaState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}
