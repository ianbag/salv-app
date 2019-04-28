import { Component, OnInit, Input } from '@angular/core';
import { Beneficio } from './beneficio.model';
import { ResidentesService } from '../../residentes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogConfirmService } from '../../dialog-confirm.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-infos-beneficios',
  templateUrl: './infos-beneficios.component.html'
})
export class InfosBeneficiosComponent implements OnInit {

  @Input() beneficio: Beneficio

  beneficios: Beneficio[]
  beneficioResidenteForm: FormGroup

  constructor(
    private residentesService: ResidentesService,
    private formBuilder: FormBuilder,
    private dialogConfirmService: DialogConfirmService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {

  }

  deletarBeneficio(beneficio: Beneficio) {
    this.dialogConfirmService.confirm(`Deseja excluir o benefício?`)
      .then((isTrue) => {
        if (isTrue) {
          this.residentesService.deleteBeneficio(beneficio.NOME_BENEFICIO, beneficio.CODIGO_RESIDENTE)
            .subscribe(res => {
              delete this.beneficio
              this.notificationService.notify(`Beneficio deletado com sucesso!`)
            })
        }
      })
  }

}
