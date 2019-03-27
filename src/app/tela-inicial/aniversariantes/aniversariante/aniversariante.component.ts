import { Component, OnInit } from '@angular/core';
import { TelaInicialService } from '../../tela-inicial.service';
import { Aniversariante } from './aniversariante.model';

@Component({
  selector: 'salv-aniversariante',
  templateUrl: './aniversariante.component.html',
  styleUrls: ['./aniversariante.component.css']
})
export class AniversarianteComponent implements OnInit {

  aniversariantes: Aniversariante[]

  constructor(private telaInicialService: TelaInicialService) { }

  ngOnInit() {
    this.telaInicialService.aniversariante()
    .subscribe(data => {
      this.aniversariantes = data
      //console.log(data)
    })
  }

}
