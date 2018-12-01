import { Acompanhamento } from './acompanhamento/acompanhamento.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AcompanhamentosService } from './acompanhamentos.service';

@Component({
  selector: 'salv-acompanhamentos',
  templateUrl: './acompanhamentos.component.html'
})
export class AcompanhamentosComponent implements OnInit {

  acompanhamentos: Acompanhamento[]

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.acompanhamentosService.acompanhamentos()
      .subscribe(acompanhamentos => this.acompanhamentos = acompanhamentos)
  } 

}
