import { Component, OnInit } from '@angular/core';
import { ResidentesService } from './residentes.service';
import { visualizarResidentes } from './visualizar-residentes.model';


@Component({
  selector: 'salv-residentes',
  templateUrl: './residentes.component.html'
})
export class ResidentesComponent implements OnInit {

  visualizarResidentes: visualizarResidentes[]

  constructor(private residentesService: ResidentesService) { }

  ngOnInit() {
    this.residentesService.pessoa()
      .subscribe(pessoa => { this.visualizarResidentes = pessoa
        console.log(pessoa)
      })
  }

}
