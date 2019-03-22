import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'salv-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css'],
  animations: [
    trigger('novo-funcionarioAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class NovoFuncionarioComponent implements OnInit {

  novofuncionarioState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}
