import { Component, OnInit } from '@angular/core';
import { ResidenteDetalhes } from './residente/residente-detalhes.model';
import { ResidentesService } from './residentes.service';

@Component({
  selector: 'salv-residentes',
  templateUrl: './residentes.component.html'
})
export class ResidentesComponent implements OnInit {

  residentes: ResidenteDetalhes[]

  constructor(private residentesService: ResidentesService) { }

  ngOnInit() {
    this.residentesService.residentes()
      .subscribe(residentes => this.residentes = residentes)
  }

}
