import { Dependente } from './depentente.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'salv-infos-dependente',
  templateUrl: './infos-dependente.component.html',
  styleUrls: ['./infos-dependente.component.css']
})
export class InfosDependenteComponent implements OnInit {

  @Input() dependente: Dependente

  constructor() { }

  ngOnInit() {
  }

}
