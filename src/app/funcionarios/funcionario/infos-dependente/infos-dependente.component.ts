import { ActivatedRoute } from '@angular/router';
import { Dependente } from './dependente.model';
import { Component, OnInit, Input } from '@angular/core';
import { FuncionariosService } from '../../funcionarios.service';

@Component({
  selector: 'salv-infos-dependente',
  templateUrl: './infos-dependente.component.html'
})
export class InfosDependenteComponent implements OnInit {

  @Input() dependente: Dependente

  constructor() { }

  ngOnInit() {
  }

}
