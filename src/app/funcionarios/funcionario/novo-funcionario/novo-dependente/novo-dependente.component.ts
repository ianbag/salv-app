import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'salv-novo-dependente',
  templateUrl: './novo-dependente.component.html',
  styleUrls: ['./novo-dependente.component.css'],
  animations: [
    trigger('novo-dependenteAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class NovoDependenteComponent implements OnInit {

  novodependenteState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}
