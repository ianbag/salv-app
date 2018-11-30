import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salv-acompanhamentos',
  templateUrl: './acompanhamentos.component.html'
})
export class AcompanhamentosComponent implements OnInit {

  constructor(private acompanhamentosService: AcompanhamentosService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
