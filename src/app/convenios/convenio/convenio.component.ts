import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/convenios/convenio.model';
import { ActivatedRoute } from '@angular/router';
import { ConveniosService } from 'src/app/convenios/convenios.service';

@Component({
  selector: 'salv-convenio',
  templateUrl: './convenio.component.html'
})
export class ConvenioComponent implements OnInit {
  convenio : Convenio
  constructor(private conveniosService: ConveniosService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.conveniosService.conveniosById(this.route.snapshot.params['id'])
    .subscribe(convenio => { this.convenio = convenio[0], console.log(this.convenio)})
  }


}
