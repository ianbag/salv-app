import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salv-acompanhamento',
  templateUrl: './acompanhamento.component.html'
})
export class AcompanhamentoComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit() { 
  }

}
