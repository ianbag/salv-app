import { Component, OnInit, Input } from '@angular/core';
import { Residente } from '../residente.model';

@Component({
  selector: 'salv-infos-pessoais',
  templateUrl: './infos-pessoais.component.html'
})
export class InfosPessoaisComponent implements OnInit {

  @Input() residente: Residente
  constructor() { }

  ngOnInit() {
  }
}
