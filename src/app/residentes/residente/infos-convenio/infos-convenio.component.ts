import { Component, OnInit, Input } from '@angular/core';
import { Convenio } from './convenio.model';

@Component({
  selector: 'salv-infos-convenio',
  templateUrl: './infos-convenio.component.html'
})
export class InfosConvenioComponent implements OnInit {

  @Input() convenio: Convenio

  constructor() { }

  ngOnInit() {
    console.log('TESTE NAO PASSOU CONVENIO PIPE CHANGE')
  }

}
