import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/convenios/convenio.model';
import { ActivatedRoute } from '@angular/router';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'salv-convenio',
  templateUrl: './convenio.component.html',
  animations: [
    trigger('convenioAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConvenioComponent implements OnInit {

  convenioState = 'ready'

  convenio : Convenio
  constructor(private conveniosService: ConveniosService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.conveniosService.conveniosById(this.route.snapshot.params['id'])
    .subscribe(convenio => { this.convenio = convenio[0], console.log(this.convenio)})
  }


}
