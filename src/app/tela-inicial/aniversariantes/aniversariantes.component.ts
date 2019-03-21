import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'salv-aniversariantes',
  templateUrl: './aniversariantes.component.html',
  styleUrls: ['./aniversariantes.component.css'],
  animations: [
    trigger('aniversariantesAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AniversariantesComponent implements OnInit {

  aniversariantesState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}
