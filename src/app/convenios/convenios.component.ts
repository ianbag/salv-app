import { Component, OnInit } from '@angular/core';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { Convenio } from 'src/app/residentes/residente/infos-convenio/convenio.model';

@Component({
  selector: 'salv-convenios',
  templateUrl: './convenios.component.html'
})
export class ConveniosComponent implements OnInit {

  constructor(private conveniosService: ConveniosService) { }

  convenios: Convenio[]
  
  ngOnInit() {
    this.conveniosService.convenios().subscribe(convenios => this.convenios = convenios)
  }

}
