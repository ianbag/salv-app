import { ActivatedRoute } from '@angular/router';
import { ConveniosService } from './../convenios.service';
import { Convenio } from './../convenio.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'salv-editar-convenio',
  templateUrl: './editar-convenio.component.html',
  animations: [
    trigger('editar-convenioAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class EditarConvenioComponent implements OnInit {

  editarconvenioState = 'ready'

  editarConvenio : Convenio

  constructor(private conveniosService: ConveniosService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.conveniosService.conveniosById(this.route.snapshot.params['id'])
    .subscribe(convenio => { this.editarConvenio = convenio[0], console.log(this.editarConvenio)})
  }

}
