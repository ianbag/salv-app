import { Familiar, Telefone } from './familiar.model';
import { Component, OnInit, Input } from '@angular/core';
import { ResidentesService } from '../../residentes.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';

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

  telefone: Telefone[]

  telefonesArray: FormArray

  contador = 0

  constructor(
    private residenteService: ResidentesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.residenteService.telefoneFamiliarByID(this.familiar.CODIGO)
      .subscribe(telefone => {
        this.telefone = telefone
      })


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
      TELEFONES: this.formBuilder.array([this.createTelefones()])
    })
  }

  createTelefones(): FormGroup {
    return this.formBuilder.group({
      DDD: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      NUMERO: this.formBuilder.control(null, [Validators.required, Validators.minLength(9)])
    });
  }

  get telefones() {
    return this.familiarResidenteForm.get('TELEFONES') as FormArray
  }

  addTelefones() {
    this.telefonesArray = this.familiarResidenteForm.get('TELEFONES') as FormArray;
    this.telefonesArray.push(this.createTelefones());
  }

  removeTelefone(index) {
    if (this.telefonesArray.length != 1) {
      this.telefonesArray = this.familiarResidenteForm.get('TELEFONES') as FormArray;
      this.telefonesArray.removeAt(index)
    }
  }

  familiarResidente(familiar: Familiar) {
    console.log('chama o service pra editar')
  }

  editarFamiliar(familiar: Familiar) {
    this.familiarResidenteForm.reset()
    console.log("FAMILIAR PASSADO EDITAR", this.familiar)

      console.log("TELEFONE", this.telefone)

      this.telefone.forEach(() => {
        this.addTelefones()
      })

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

}
