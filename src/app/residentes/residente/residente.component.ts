import { Component, OnInit, Input } from '@angular/core';

import { ResidenteDetalhes } from './residente-detalhes.model';
@Component({
  selector: 'salv-residente',
  templateUrl: './residente.component.html'
})
export class ResidenteComponent implements OnInit {

  @Input() residente: ResidenteDetalhes

  constructor() { }

  ngOnInit() {
  }

}
