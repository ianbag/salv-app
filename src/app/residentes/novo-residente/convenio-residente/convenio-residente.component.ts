import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ResidentesService } from '../../residentes.service';
import { Convenio } from 'src/app/convenios/convenio.model';
import { Residente, Residente_Convenio } from '../../residente/residente.model';
import { Route, Router } from '@angular/router';
import { Familiar } from '../../residente/infos-familiar/familiar.model';
import { NotificationService } from 'src/app/shared/notification.service';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { DialogConfirmService } from '../../dialog-confirm.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Telefone } from '../../residente/infos-convenio/convenio.model';

@Component({
  selector: 'salv-convenio-residente',
  templateUrl: './convenio-residente.component.html',
  animations: [
    trigger('convenio-residenteAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConvenioResidenteComponent implements OnInit {

  convenioresidenteState = 'ready'

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  convenioResidenteForm: FormGroup
  novoConvenioForm: FormGroup
  convenioTelefoneParentescoForm: FormGroup

  novoTelefoneParentesco: boolean = false

  residente: Residente
  familiar: Familiar
  convenios: Convenio[]
  residenteConvenio: Residente_Convenio

  constructor(
    private formBuilder: FormBuilder,
    private residentesService: ResidentesService,
    private router: Router,
    private notificationService: NotificationService,
    private convenioService: ConveniosService,
    private dialogConfirmService: DialogConfirmService,
    private spinner: NgxSpinnerService
  ) { }

  markAllDirty(control: AbstractControl) {
    if (control.hasOwnProperty('controls')) {
      control.markAsDirty()
      let ctrl = <any>control;
      for (let inner in ctrl.controls)
        this.markAllDirty(ctrl.controls[inner] as AbstractControl);
    }
    else
      (<FormControl>(control)).markAsDirty();
  }

  ngOnInit() {

    
    this.residenteConvenio = this.residentesService.residenteConvenio

    this.getConvenio()

    this.convenioResidenteForm = this.formBuilder.group({
      NUMERO_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      TITULAR_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      PARENTESCO_TITULAR: this.formBuilder.control(null, []),
      CONVENIO_CODIGO: this.formBuilder.control(null, [Validators.required]),
    })

    this.convenioTelefoneParentescoForm = this.formBuilder.group({
      DDD: this.formBuilder.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
      NUMERO: this.formBuilder.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(9)])
    })

    this.novoConvenioForm = this.formBuilder.group({
      NOME_CONVENIO: this.formBuilder.control('', [Validators.required]),
      TIPO_CONVENIO: this.formBuilder.control('', [Validators.required]),
      ENDERECO: this.formBuilder.group({
        ENDERECO: this.formBuilder.control(null, [Validators.required]),
        NUMERO: this.formBuilder.control(null, [Validators.required]),
        BAIRRO: this.formBuilder.control(null, [Validators.required]),
        COMPLEMENTO: this.formBuilder.control(null),
        CIDADE: this.formBuilder.control(null, [Validators.required]),
        ESTADO: this.formBuilder.control(null, [Validators.required]),
        CEP: this.formBuilder.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
        REFERENCIA: this.formBuilder.control(null),
      }),
      TELEFONE: this.formBuilder.group({
        DDD: this.formBuilder.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(3)]),
        NUMERO: this.formBuilder.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(9)])
      })
    })

    if (this.residenteConvenio != undefined)
      this.convenioResidenteForm.patchValue(this.residenteConvenio)
  }

  voltar() {
    this.dialogConfirmService.confirm(`Tem certeza que deseja voltar?`)
    .then((isTrue) => {
      if (isTrue) 
        this.router.navigate([`/residentes/${this.residentesService.codigoResidente}`])
      
    })
  }

  convenioResidente(residenteConvenio: Residente_Convenio,  telefoneParentesco: Telefone) {
    this.residentesService.createNewConvenio(residenteConvenio, this.residentesService.codigoResidente, telefoneParentesco)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            console.log('Houve um erro!', error)
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.notificationService.notify(`Convênio inserido com sucesso!`)
          this.router.navigate([`/residentes/${this.residentesService.codigoResidente}`])
        }
      })
  }

  getConvenio(){
    this.convenioService.tratados()
      .subscribe(convenio => this.convenios = convenio)
  }

  novoConvenio(convenio: Convenio){
    this.convenioService.createNewConvenio(convenio.TELEFONE, convenio.ENDERECO, convenio)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            console.log('Houve um erro!', error)
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.notificationService.notify(`Convênio inserido com sucesso!`)
          this.getConvenio()
        }
      })
  }

}

