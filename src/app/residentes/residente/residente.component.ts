import { Convenio } from './infos-convenio/convenio.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResidentesService } from '../residentes.service';
import { ActivatedRoute } from '@angular/router';
import { Residente, Residente_Convenio } from './residente.model';
import { Familiar, Telefone } from './infos-familiar/familiar.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormArray, Validators, FormGroup, AbstractControl, FormControl, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { Beneficio } from './infos-beneficios/beneficio.model';
import { UniqueValuesValidators } from 'src/app/shared/validators/unique-values/unique-values.component';
import { ConveniosService } from 'src/app/convenios/convenios.service';

@Component({
  selector: 'salv-residente',
  templateUrl: './residente.component.html',
  animations: [
    trigger('residenteAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ResidenteComponent implements OnInit {

  residenteState = 'ready'

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT",
    "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO",
    "RR", "SC", "SP", "SE", "TO"
  ];

  residente: Residente
  familiares: Familiar[] = [];
  convenios: Convenio[] = [];
  beneficios: Beneficio[] = [];
  residenteConvenios: any[] = [];

  familiarResidenteForm: FormGroup
  convenioResidenteForm: FormGroup
  beneficioResidenteForm: FormGroup

  telefonesArray: FormArray

  CODIGO_RESIDENTE

  constructor(
    private residentesService: ResidentesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private spinner: NgxSpinnerService,
    private uniqueValidators: UniqueValuesValidators,
    private cs: ConveniosService
  ) { }

  ngOnInit() {
    this.spinner.show()

    this.CODIGO_RESIDENTE = this.route.snapshot.params['id']

    this.residentesService.residenteById(this.CODIGO_RESIDENTE)
      .subscribe(residente => {
        this.residente = residente
      })

    // this.residentesService.convenios()
    //   .subscribe(convenio => {
    //     this.spinner.hide()
    //     this.residenteConvenios = convenio
    //   })

    this.cs.tratados()
      .subscribe(convenio => {
        this.spinner.hide()
        this.residenteConvenios = convenio
      })

    this.getFamiliar()
      
    this.getConvenio()

    this.getBeneficio()

    this.familiarResidenteForm = this.formBuilder.group({
      NOME: this.formBuilder.control(null, [Validators.required]),
      SOBRENOME: this.formBuilder.control(null, [Validators.required]),
      PARENTESCO: this.formBuilder.control(null, [Validators.required]),
      ENDERECOS: this.formBuilder.group({
        ENDERECO: this.formBuilder.control(null, [Validators.required]),
        NUMERO: this.formBuilder.control(null, [Validators.required]),
        BAIRRO: this.formBuilder.control(null, [Validators.required]),
        CIDADE: this.formBuilder.control(null, [Validators.required]),
        ESTADO: this.formBuilder.control(null, [Validators.required]),
        CEP: this.formBuilder.control(null, [Validators.required]),
        COMPLEMENTO: this.formBuilder.control(null, []),
        REFERENCIA: this.formBuilder.control(null, []),
      }),
      TELEFONE: this.formBuilder.group({
        DDD: this.formBuilder.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
        NUMERO: this.formBuilder.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(9)])
      })
    })

    this.convenioResidenteForm = this.formBuilder.group({
      NUMERO_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      TITULAR_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      PARENTESCO_TITULAR: this.formBuilder.control(null, []),
      CONVENIO_CODIGO: this.formBuilder.control(null, [Validators.required]),
    })

    this.beneficioResidenteForm = this.formBuilder.group({
      NOME_BENEFICIO: this.formBuilder.control(null, [Validators.required], this.uniqueValidators.validateBeneficioNome(this.CODIGO_RESIDENTE, null)),
      BANCO_BENEFICIO: this.formBuilder.control(null, []),
      AGENCIA_BENEFICIO: this.formBuilder.control(null, []),
      CONTA_BENEFICIO: this.formBuilder.control(null, []),
      VALOR_BENEFICIO: this.formBuilder.control(null, []),
      PROVA_VIDA_BENEFICIO: this.formBuilder.control(null, [Validators.required])
    })
  }

  getFamiliar() {
    this.residentesService.familiarById(this.CODIGO_RESIDENTE)
      .subscribe(familiar => this.familiares = familiar)
  }

  getConvenio() {
    this.residentesService.convenioById(this.CODIGO_RESIDENTE)
      .subscribe(convenio => this.convenios = convenio)
  }

  getBeneficio() {
    this.residentesService.beneficiosById(this.CODIGO_RESIDENTE)
      .subscribe(beneficio => this.beneficios = beneficio)
  }

  familiarResidente(familiar: Familiar) {
    this.residentesService.createNewFamiliar(familiar, this.CODIGO_RESIDENTE)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.notificationService.notify(`Familiar adicionado com sucesso!`)
          this.familiarResidenteForm.reset()
          this.getFamiliar()
        }
      })
  }

  convenioResidente(residenteConvenio: Residente_Convenio) {
    this.residentesService.createNewConvenio(residenteConvenio, this.CODIGO_RESIDENTE)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.notificationService.notify(`Convenio adicionado com sucesso!`)
          this.convenioResidenteForm.reset()
          this.getConvenio()
        }
      })
  }

  beneficioResidente(beneficio: Beneficio) {
    this.residentesService.createNewBeneficio(beneficio, this.CODIGO_RESIDENTE)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.notificationService.notify(`Benefício adicionado com sucesso!`)
          this.beneficioResidenteForm.reset()
          this.getBeneficio()
        }
      })
  }

  reportResidente() {
    this.spinner.show()
    this.residentesService.reportResidente(this.residente.PESSOA.CODIGO, this.residente.CODIGO_RESIDENTE).subscribe(x => {
      var newBlob = new Blob([x], { type: 'application/pdf' })

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob)
        return
      }

      const data = window.URL.createObjectURL(newBlob)
      var link = document.createElement('a')
      link.href = data
      link.download = `Relatório de residente - ${this.residente.PESSOA.NOME} ${this.residente.PESSOA.SOBRENOME}`
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))

      setTimeout(function () {
        window.URL.revokeObjectURL(data)
        link.remove()
      }, 100)
      this.spinner.hide()
      this.notificationService.notify('Relatório emitido com sucesso')
    })
  }

}
