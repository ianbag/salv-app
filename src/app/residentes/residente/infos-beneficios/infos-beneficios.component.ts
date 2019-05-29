import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beneficio } from './beneficio.model';
import { ResidentesService } from '../../residentes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogConfirmService } from '../../dialog-confirm.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { ActivatedRoute } from '@angular/router';
import { UniqueValuesValidators } from 'src/app/shared/validators/unique-values/unique-values.component';
import { LoginService } from "./../../../auth/login/login.service"

@Component({
  selector: 'salv-infos-beneficios',
  templateUrl: './infos-beneficios.component.html'
})
export class InfosBeneficiosComponent implements OnInit {

  access: boolean

  @Input() beneficio: Beneficio
  @Output() atualizaBeneficio = new EventEmitter<Beneficio[]>()

  beneficios: Beneficio[]
  beneficioResidenteForm: FormGroup

  NOME_BENEFICIO_SEM_ESPACO
  CODIGO_RESIDENTE

  constructor(
    private residentesService: ResidentesService,
    private formBuilder: FormBuilder,
    private dialogConfirmService: DialogConfirmService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private uniqueValidators: UniqueValuesValidators,
    private ls: LoginService
  ) { }

  ngOnInit() {
    this.access = this.ls.permissao_acesso

    this.NOME_BENEFICIO_SEM_ESPACO = this.beneficio.NOME_BENEFICIO.replace(/\s/g, '')

    this.CODIGO_RESIDENTE = this.route.snapshot.params['id']

    this.beneficioResidenteForm = this.formBuilder.group({
      NOME_BENEFICIO: this.formBuilder.control(null, [Validators.required], this.uniqueValidators.validateBeneficioNome(this.CODIGO_RESIDENTE, this.beneficio.NOME_BENEFICIO)),
      BANCO_BENEFICIO: this.formBuilder.control(null, []),
      AGENCIA_BENEFICIO: this.formBuilder.control(null, []),
      CONTA_BENEFICIO: this.formBuilder.control(null, []),
      VALOR_BENEFICIO: this.formBuilder.control(null, []),
      PROVA_VIDA_BENEFICIO: this.formBuilder.control(null, [Validators.required])
    })
  }

  deletarBeneficio(beneficio: Beneficio) {
    this.dialogConfirmService.confirm(`Deseja excluir o benefício?`)
      .then((isTrue) => {
        if (isTrue) {
          this.residentesService.deleteBeneficio(beneficio.NOME_BENEFICIO, beneficio.CODIGO_RESIDENTE)
            .subscribe(res => {
              delete this.beneficio
              this.notificationService.notify(`Beneficio deletado com sucesso!`)
              this.atualizaBeneficio.emit(res)
            })
        }
      })
  }

  setValuesBeneficioForm(beneficio: Beneficio) {
    this.beneficioResidenteForm.patchValue(beneficio)
  }

  editarBeneficio(beneficio: Beneficio) {
    this.residentesService.updateBeneficio(beneficio, this.beneficio.NOME_BENEFICIO, this.beneficio.CODIGO_RESIDENTE)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.residentesService.beneficiosByIdName(this.beneficio.CODIGO_RESIDENTE, beneficio.NOME_BENEFICIO)
            .subscribe(res => {
              this.beneficio = res
              this.notificationService.notify(`Benefício atualizado com sucesso!`)
            })
        }
      })
  }

}
