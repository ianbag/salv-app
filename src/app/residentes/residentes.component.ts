import { Component, OnInit } from '@angular/core';
import { ResidentesService } from './residentes.service';
import { visualizarResidentes } from './visualizar-residentes.model';
import { Residente } from './residente/residente.model';


@Component({
  selector: 'salv-residentes',
  templateUrl: './residentes.component.html'
})
export class ResidentesComponent implements OnInit {

  residentes: Residente[]

  constructor(private residentesService: ResidentesService) { }

  ngOnInit() {
    this.residentesService.residentes()
      .subscribe(residentes => {
      this.residentes = residentes
        console.log(residentes)
      })
  }

}
