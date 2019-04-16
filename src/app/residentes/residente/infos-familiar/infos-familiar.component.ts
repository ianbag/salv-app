import { Familiar, Telefone } from './familiar.model';
import { Component, OnInit, Input } from '@angular/core';
import { ResidentesService } from '../../residentes.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { DialogConfirmService } from '../../dialog-confirm.service';

@Component({
  selector: 'salv-infos-familiar',
  templateUrl: './infos-familiar.component.html'
})
export class InfosFamiliarComponent implements OnInit {

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT",
    "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO",
    "RR", "SC", "SP", "SE", "TO"
  ];

  @Input() familiar: Familiar

  familiarResidenteForm: FormGroup

  novoTelefoneForm: FormGroup

  codigoTelefone: number
  telefone: Telefone[]

  constructor(
    private residenteService: ResidentesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private dialogConfirmService: DialogConfirmService
  ) { }

  ngOnInit() {
    this.getTelefones()

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
      })
    })

    this.novoTelefoneForm = this.formBuilder.group({
      DDD: this.formBuilder.control(null, []),
      NUMERO: this.formBuilder.control(null, [])
    })

  }

  editarFamiliar(familiar: Familiar) {
    this.familiarResidenteForm.reset()

    this.familiarResidenteForm.patchValue({
      NOME: familiar.NOME,
      SOBRENOME: familiar.SOBRENOME,
      PARENTESCO: familiar.PARENTESCO,
      ENDERECOS: {
        ENDERECO: familiar['ENDERECO'],
        NUMERO: familiar['NUMERO'],
        BAIRRO: familiar['BAIRRO'],
        CIDADE: familiar['CIDADE'],
        ESTADO: familiar['ESTADO'],
        CEP: familiar['CEP'],
        COMPLEMENTO: familiar['COMPLEMENTO'],
        REFERENCIA: familiar['REFERENCIA']
      },
    })
  }

  familiarResidente(familiar: Familiar) {
    this.residenteService.updateFamiliar(familiar, this.familiar.CODIGO, this.familiar['ENDERECO_CODIGO'])
      .subscribe(res => {
        this.notificationService.notify(`Familiar atualizado com sucesso!`)
        this.familiarResidenteForm.reset()
        this.residenteService.familiarByID(this.familiar.CODIGO)
          .subscribe(resFamiliar => {
            delete resFamiliar.ENDERECOS
            this.residenteService.enderecoByID(this.familiar['ENDERECO_CODIGO'])
              .subscribe(resEndereco => {
                this.familiar.NOME = resFamiliar.NOME
                this.familiar.SOBRENOME = resFamiliar.SOBRENOME
                this.familiar.PARENTESCO = resFamiliar.PARENTESCO
                this.familiar['ENDERECO'] = resEndereco.ENDERECO
                this.familiar['NUMERO'] = resEndereco.NUMERO
                this.familiar['BAIRRO'] = resEndereco.BAIRRO
                this.familiar['CIDADE'] = resEndereco.CIDADE
                this.familiar['ESTADO'] = resEndereco.ESTADO
                this.familiar['CEP'] = resEndereco.CEP
                this.familiar['COMPLEMENTO'] = resEndereco.COMPLEMENTO
                this.familiar['REFERENCIA'] = resEndereco.REFERENCIA
              })
          })
      })
  }

  deletarFamiliar(idFamiliar) {
    this.dialogConfirmService.confirm(`Deseja excluir o familiar?`)
      .then((isTrue) => {
        if (isTrue) {
          this.residenteService.deleteFamiliar(this.route.snapshot.params['id'], idFamiliar)
            .subscribe(res => {
              delete this.familiar
              this.notificationService.notify(`Familiar deletado com sucesso!`)
            })
        }
      })
  }

  getTelefones() {
    this.residenteService.telefoneFamiliarByID(this.familiar.CODIGO)
      .subscribe(telefone => {
        this.telefone = telefone
      })
  }

  novoTelefone(telefone: Telefone, familiarCodigo) {
    this.residenteService.createNewTelefoneFamiliar(telefone, familiarCodigo).
      subscribe(res => {
        this.getTelefones()
        this.novoTelefoneForm.reset()
        this.notificationService.notify(`Telefone adicionado com sucesso!`)
      })
  }

  buscarTelefone(codigo) {
    this.residenteService.telefoneById(codigo).subscribe(resTel => {
      this.codigoTelefone = resTel.CODIGO
      this.novoTelefoneForm.patchValue({
        DDD: resTel.DDD,
        NUMERO: resTel.NUMERO
      })
    })
  }

  editarTelefone(telefone: Telefone) {
    this.residenteService.updateTelefone(telefone, this.codigoTelefone)
      .subscribe(res => {
        this.getTelefones()
        this.novoTelefoneForm.reset()
        this.notificationService.notify(`Telefone atualizado com sucesso!`)
      })
  }

  deletarTelefoneFamiliar(idTelefone, idFamiliar) {
    this.dialogConfirmService.confirm(`Deseja excluir o telefone?`)
      .then((isTrue) => {
        if (isTrue) {
          this.residenteService.deleteTelefoneFamiliar(idTelefone, idFamiliar)
            .subscribe(res => {
              this.getTelefones()
              this.notificationService.notify(`Telefone deletado com sucesso!`)
            })
        }
      })
  }

}
