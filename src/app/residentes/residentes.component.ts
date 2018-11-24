import { Component, OnInit } from '@angular/core';
import { ResidentesService } from './residentes.service';
import { Pessoa } from './pessoa.model';


@Component({
  selector: 'salv-residentes',
  templateUrl: './residentes.component.html'
})
export class ResidentesComponent implements OnInit {

  pessoas: Pessoa[]

  constructor(private residentesService: ResidentesService) { }

  ngOnInit() {
    this.residentesService.pessoa()
      .subscribe(pessoa => {
        this.pessoas = pessoa
        console.log(pessoa)
      })
  }

}
