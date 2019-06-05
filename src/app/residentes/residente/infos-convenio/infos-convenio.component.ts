import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Convenio } from './convenio.model';
import { ResidentesService } from '../../residentes.service';
import { Residente_Convenio } from '../residente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogConfirmService } from '../../dialog-confirm.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { Telefone } from 'src/app/convenios/convenio.model';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'salv-infos-convenio',
  templateUrl: './infos-convenio.component.html'
})
export class InfosConvenioComponent implements OnInit {

  @Input() convenio: Residente_Convenio
  @Output() atualizaConvenio = new EventEmitter<Residente_Convenio[]>()

  residenteConvenios: Residente_Convenio[]
  convenioResidenteForm: FormGroup
  convenioTelefoneParentescoForm: FormGroup
  novoTelefoneForm: FormGroup

  codigoTelefone: number

  numeroConvenio: number

  telefones: Telefone[] = []
  telefone: Telefone[] = []

  constructor(
    private residentesService: ResidentesService,
    private formBuilder: FormBuilder,
    private dialogConfirmService: DialogConfirmService,
    private notificationService: NotificationService,
    private spinner: NgxSpinnerService,
    private cs: ConveniosService
  ) { }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.getTelefones()
      this.cs.telefoneById(this.convenio.CONVENIO_CODIGO.toString()).subscribe(resT => {
        this.telefones = resT
        this.spinner.hide()
        console.log(this.telefones)
      })
    }, 500)



    this.residentesService.convenios()
      .subscribe(convenio => this.residenteConvenios = convenio)

    this.convenioResidenteForm = this.formBuilder.group({
      NUMERO_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      TITULAR_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      PARENTESCO_TITULAR: this.formBuilder.control(null, []),
      CONVENIO_CODIGO: this.formBuilder.control(null, [Validators.required]),
    })

    this.convenioTelefoneParentescoForm = this.formBuilder.group({
      NUMERO_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      TELEFONE_CODIGO: this.formBuilder.control(null, [Validators.required]),
    })

    this.novoTelefoneForm = this.formBuilder.group({
      DDD: this.formBuilder.control(null, [Validators.required]),
      NUMERO: this.formBuilder.control(null, [Validators.required])
    })


  }



  //getTelefonesConvenio() {
  //this.residentesService.telefonesConvenio()
  //.subscribe(telconv => this.telefonesConvenio = telconv)
  //console.log(this.telefonesConvenio)
  //}

  setValuesConvenioForm(convenio: Residente_Convenio) {
    convenio.CONVENIO_CODIGO = this.convenio.CONVENIO_CODIGO
    this.convenioResidenteForm.patchValue(convenio)
  }

  editarConvenio(convenio: Residente_Convenio) {
    this.residentesService.updateConvenio(this.convenio.NUMERO_CONVENIO, convenio)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.residentesService.convenioOneByID(convenio.NUMERO_CONVENIO)
            .subscribe(res => {
              this.convenio = res[0]
              this.notificationService.notify(`Convenio atualizado com sucesso!`)
            })
        }
      })
  }

  deletarConvenio(NUMERO_CONVENIO) {
    this.dialogConfirmService.confirm(`Deseja excluir o convenio?`)
      .then((isTrue) => {
        if (isTrue) {
          this.residentesService.deleteResidenteConvenio(NUMERO_CONVENIO)
            .subscribe(res => {
              delete this.convenio
              this.notificationService.notify(`Convenio deletado com sucesso!`)
              this.atualizaConvenio.emit(res)
            })
        }
      })
  }

  getTelefones() {
    this.residentesService.telefoneParentescoByID(this.convenio.NUMERO_CONVENIO)
      .subscribe(telefone => {
        this.telefone = telefone
        console.log(this.telefone)
      })
  }

  novoTelefone(telefone: Telefone, numeroConvenio) {
    this.residentesService.createNewTelefoneParentesco(telefone, numeroConvenio).
      subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.getTelefones()
          this.novoTelefoneForm.reset()
          this.notificationService.notify(`Telefone adicionado com sucesso!`)
        }
      })
  }


  buscarTelefone(codigo) {
    this.residentesService.telefoneById(codigo).subscribe(resTel => {
      this.codigoTelefone = resTel.CODIGO
      this.novoTelefoneForm.patchValue({
        DDD: resTel.DDD,
        NUMERO: resTel.NUMERO
      })
    })
  }

  editarTelefone(telefone: Telefone) {
    this.residentesService.updateTelefone(telefone, this.codigoTelefone)
      .subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
            this.notificationService.notify(`Houve um erro! ${error.message}`)
          })
        } else {
          this.getTelefones()
          this.novoTelefoneForm.reset()
          this.notificationService.notify(`Telefone atualizado com sucesso!`)
        }
      })
  }

  deletarTelefoneFamiliar(idTelefone, idParentesco) {
    this.dialogConfirmService.confirm(`Deseja excluir o telefone?`)
      .then((isTrue) => {
        if (isTrue) {
          this.residentesService.deleteTelefoneParentesco(idTelefone, idParentesco)
            .subscribe(res => {
              this.getTelefones()
              this.notificationService.notify(`Telefone deletado com sucesso!`)
            })
        }
      })
  }

}
