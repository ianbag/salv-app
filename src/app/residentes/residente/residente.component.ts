import { Convenio } from './infos-convenio/convenio.model';

import { Component, OnInit } from '@angular/core';
import { ResidentesService } from '../residentes.service';
import { ActivatedRoute } from '@angular/router';
import { Residente } from './residente.model';
import { Familiar } from './infos-familiar/familiar.model';

@Component({
  selector: 'salv-residente',
  templateUrl: './residente.component.html'
})
export class ResidenteComponent implements OnInit {

  residente: Residente
  familiares: Familiar[]
  convenios: Convenio[]

  constructor(private residentesService: ResidentesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.residentesService.residenteById(this.route.snapshot.params['id'])
      .subscribe(residente => {
      this.residente = residente
        console.log(residente)
      })
      
      this.residentesService.familiarById(this.route.snapshot.params['id'])
      .subscribe(familiar => {
        this.familiares = familiar
        console.log(familiar)
      })

      this.residentesService.convenioById(this.route.snapshot.params['id'])
      .subscribe(convenio => {
        this.convenios = convenio
        console.log(convenio)
      })
  }

}
