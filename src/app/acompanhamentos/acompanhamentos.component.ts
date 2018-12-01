import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AcompanhamentosService } from './acompanhamentos.service';

@Component({
  selector: 'salv-acompanhamentos',
  templateUrl: './acompanhamentos.component.html'
})
export class AcompanhamentosComponent implements OnInit {

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
