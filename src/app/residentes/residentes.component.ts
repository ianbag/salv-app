import { DialogConfirmService } from './dialog-confirm.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResidentesService } from './residentes.service';
import { Residente } from './residente/residente.model';


@Component({
  selector: 'salv-residentes',
  templateUrl: './residentes.component.html'
})
export class ResidentesComponent implements OnInit {

  residentes: Residente[]

  constructor(private residentesService: ResidentesService, private dialogConfirmService: DialogConfirmService) { }

  ngOnInit() {
    this.residentesService.residentes()
      .subscribe(residentes => this.residentes = residentes)
  }


  deleteResidente(id: string): void {
    this.dialogConfirmService.confirm(`Deseja excluir o residente?`)
      .then((isTrue) => {
        if (isTrue) {
          this.residentesService.deleteResidente(id)
            .subscribe(result => this.residentesService.residentes()
              .subscribe(residentes => this.residentes = residentes))
        }
      })
  }
}
