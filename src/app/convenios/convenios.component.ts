import { Component, OnInit } from '@angular/core';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { Convenio } from 'src/app/residentes/residente/infos-convenio/convenio.model';
import { DialogConfirmService } from '../residentes/dialog-confirm.service';

@Component({
  selector: 'salv-convenios',
  templateUrl: './convenios.component.html'
})
export class ConveniosComponent implements OnInit {

  constructor(private conveniosService: ConveniosService, private dialogConfirmService: DialogConfirmService) { }

  convenios: Convenio[]
  
  ngOnInit() {
    this.conveniosService.convenios().subscribe(convenios => this.convenios = convenios)
  }

  deleteConvenio(id: string): void {
    this.dialogConfirmService.confirm(`Deseja excluir o residente?`)
      .then((isTrue) => {
        if (isTrue) {
          this.conveniosService.deleteConvenio(id)
            .subscribe(result => this.conveniosService.convenios()
              .subscribe(convenios => this.convenios = convenios))
        }
      })
  }

}
