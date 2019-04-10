import { Familiar, Telefone } from './familiar.model';
import { Component, OnInit, Input } from '@angular/core';
import { ResidentesService } from '../../residentes.service';

@Component({
  selector: 'salv-infos-familiar',
  templateUrl: './infos-familiar.component.html'
})
export class InfosFamiliarComponent implements OnInit {

  @Input() familiar: Familiar

  telefones: Telefone[]

  constructor(private residenteService: ResidentesService) { }

  ngOnInit() {
    this.residenteService.telefoneFamiliarByID(this.familiar.CODIGO)
    .subscribe(telefone => {
      this.telefones = telefone
    })
  }


}
