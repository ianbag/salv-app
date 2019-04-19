import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Convenio } from 'src/app/convenios/convenio.model';
import { ActivatedRoute } from '@angular/router';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
import * as jspdf from 'jspdf'

@Component({
  selector: 'salv-convenio',
  templateUrl: './convenio.component.html',
  animations: [
    trigger('convenioAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConvenioComponent implements OnInit {

  convenioState = 'ready'

  convenio: Convenio

  @ViewChild('reportConvenio') reportConvenio: ElementRef

  constructor(private conveniosService: ConveniosService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.conveniosService.conveniosById(this.route.snapshot.params['id'])
      .subscribe(convenio => {
        this.spinner.hide();
        this.convenio = convenio[0], console.log(this.convenio)
      })

  }
}
