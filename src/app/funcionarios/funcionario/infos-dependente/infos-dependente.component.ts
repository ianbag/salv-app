import { ActivatedRoute } from '@angular/router';
import { Dependente } from './dependente.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FuncionariosService } from '../../funcionarios.service';
import { DialogConfirmService } from 'src/app/residentes/dialog-confirm.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-infos-dependente',
  templateUrl: './infos-dependente.component.html'
})
export class InfosDependenteComponent implements OnInit {

  @Input() dependente: Dependente
  @Output() _dependentes = new EventEmitter()

  constructor(private dcs: DialogConfirmService, private route: ActivatedRoute, private fs: FuncionariosService, private ns: NotificationService) { }

  ngOnInit() {
  }

  deleteDependente(_dep_nome: string, _dep_sobrenome: string): void {
    this.dcs.confirm('Deseja excluir o dependente?').then((isTrue) => {
      if (isTrue) {
        this.fs.deleteDependente(_dep_nome, _dep_sobrenome).subscribe(() => {
          this._dependentes.emit(true)
          this.ns.notify('Dependente excluído com sucesso!')
        })
      }
    })
  }

}
