import { Component, OnInit } from '@angular/core';
import { ResidentesService } from './residentes.service';
import { visualizarResidentes } from './visualizar-residentes.model';


@Component({
  selector: 'salv-residentes',
  templateUrl: './residentes.component.html'
})
export class ResidentesComponent implements OnInit {

  residentes: visualizarResidentes[]

  constructor(private residentesService: ResidentesService) { }

  ngOnInit() {
    this.residentesService.pessoa()
      .subscribe(residentes => { this.residentes = residentes
        console.log(residentes)
      })
  }

}
