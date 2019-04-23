import { Endereco } from './../../../convenios/convenio.model';
import { ActivatedRoute } from '@angular/router';
import { DialogConfirmService } from './../../../residentes/dialog-confirm.service';
import { Telefone } from './../../../convenios/convenio.model';
import { Convenio } from './../../convenio.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConveniosService } from '../../convenios.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-convenio-infos',
  templateUrl: './convenio-infos.component.html'
})
export class ConvenioInfosComponent implements OnInit {

  @Input() convenio: Convenio
  @Input() telefones: Telefone[]
  @Input() enderecos: Endereco[]

  novoTelefoneForm: FormGroup
  novoEnderecoForm: FormGroup
  updateTelefoneForm: FormGroup
  updateEnderecoForm: FormGroup
  updateConvenioForm: FormGroup
  codigoTelefone: number
  codigoEndereco: number

  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

  constructor(private cs: ConveniosService, private fb: FormBuilder, private ns: NotificationService, private dcs: DialogConfirmService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.novoTelefoneForm = this.fb.group({
      DDD: this.fb.control(null, []),
      NUMERO: this.fb.control(null, [])
    })

    this.novoEnderecoForm = this.fb.group({
      ENDERECO: this.fb.control(null, []),
      NUMERO: this.fb.control(null, []),
      BAIRRO: this.fb.control(null, []),
      COMPLEMENTO: this.fb.control(null, []),
      CIDADE: this.fb.control(null, []),
      ESTADO: this.fb.control('Selecione', []),
      CEP: this.fb.control(null, []),
      REFERENCIA: this.fb.control(null, []),
    })

    this.updateTelefoneForm = this.fb.group({
      DDD: this.fb.control(null, []),
      NUMERO: this.fb.control(null, [])
    })

    this.updateEnderecoForm = this.fb.group({
      ENDERECO: this.fb.control(null, []),
      NUMERO: this.fb.control(null, []),
      BAIRRO: this.fb.control(null, []),
      COMPLEMENTO: this.fb.control(null, []),
      CIDADE: this.fb.control(null, []),
      ESTADO: this.fb.control(null, []),
      CEP: this.fb.control(null, []),
      REFERENCIA: this.fb.control(null, [])
    })

    this.updateConvenioForm = this.fb.group({
        NOME_CONVENIO: this.fb.control(null, [Validators.required]),
        TIPO_CONVENIO: this.fb.control('', [Validators.required]),
    })

  }

  novoTelefone(telefone: Telefone) {
    this.cs.novoTelefone(this.convenio.CODIGO, telefone).subscribe((res) => {
      if (res['errors']){
         res['errors'].forEach(error => {
             console.log('Houve um erro!', error)
             this.ns.notify(`Houve um erro! ${error.message}`)
        })
      } else {
          this.cs.telefoneById(this.convenio.CODIGO.toString()).subscribe(res => {
              this.telefones = res
              this.novoTelefoneForm.reset()
              this.ns.notify('Telefone inserido com sucesso!')
          })
      }
    })
  }

  novoEndereco(endereco: Endereco) {
    this.cs.novoEndereco(this.convenio.CODIGO, endereco).subscribe(res => {
        if (res['errors']) {
            res['errors'].forEach(error => {
                console.log('Houve um erro!', error)
                this.ns.notify(`Houve um erro! ${error.message}`)
            })
        } else {
            this.cs.enderecoById(this.convenio.CODIGO.toString()).subscribe(res => {
                this.enderecos = res
                this.novoEnderecoForm.reset()
                this.ns.notify('Endereço inserido com sucesso!')
            })
        }
    })
  }

  deleteTelefone(_cod_conv: number, _cod_tel: number): void {
      this.dcs.confirm(`Deseja excluir o telefone?`).then((isTrue) => {
          if (isTrue) {
            this.cs.deleteTelefone(_cod_conv, _cod_tel).subscribe(() => {
                this.cs.telefoneById(this.convenio.CODIGO.toString()).subscribe(response => {
                    this.telefones = response
                    this.ns.notify('Telefone excluído com sucesso!')
                })
            })
          }
      })
  }

  deleteEndereco(_cod_conv: number, _cod_end: number): void {
    this.dcs.confirm(`Deseja exluir o endereço?`).then((isTrue) => {
        if (isTrue) {
            this.cs.deleteEndereco(_cod_conv, _cod_end).subscribe(() => {
                this.cs.enderecoById(this.convenio.CODIGO.toString()).subscribe(response => {
                    this.enderecos = response
                    this.ns.notify('Endereço excluído com sucesso!')
                })
            })
        }
    })
}

  buscaTelefone(codTelefone) {
    this.cs.telefoneId(codTelefone).subscribe(telefone => {
        this.codigoTelefone = telefone.CODIGO
        this.updateTelefoneForm.patchValue({
            DDD: telefone.DDD,
            NUMERO: telefone.NUMERO
        })
        console.log(telefone)
    })
  }

  updateTelefone(telefoneAtualizado) {
    this.cs.updateTelefone(this.codigoTelefone, telefoneAtualizado).subscribe(res => {
        if (res['errors']) {
            res['errors'].forEach(error => {
                console.log('Houve um erro!', error)
                this.ns.notify(`Houve um erro! ${error.message}`)
            })
        } else {
            this.cs.telefoneById(this.convenio.CODIGO.toString()).subscribe(response => {
                this.telefones = response
                this.updateTelefoneForm.reset()
                this.ns.notify('Telefone atualizado com sucesso!')
            })
        }
    })
  }

  buscaEndereco(codEndereco) {
    this.cs.enderecoId(codEndereco).subscribe(endereco => {
        this.codigoEndereco = endereco.CODIGO
        this.updateEnderecoForm.patchValue({
            ENDERECO: endereco.ENDERECO,
            NUMERO: endereco.NUMERO,
            BAIRRO: endereco.BAIRRO,
            COMPLEMENTO: endereco.COMPLEMENTO,
            CIDADE: endereco.CIDADE,
            ESTADO: endereco.ESTADO,
            CEP: endereco.CEP,
            REFERENCIA: endereco.REFERENCIA
        })
        console.log(endereco)
    })
}

updateEndereco(enderecoAtualizado) {
    this.cs.updateEndereco(this.codigoEndereco, enderecoAtualizado).subscribe(res => {
        if (res['errors']) {
            res['errors'].forEach(error => {
                console.log('Houve um erro!', error)
                this.ns.notify(`Houve um erro! ${error.message}`)
            })
        } else {
            this.cs.enderecoById(this.convenio.CODIGO.toString()).subscribe(response => {
                this.enderecos = response
                this.updateEnderecoForm.reset()
                this.ns.notify('Endereço atualizado com sucesso!')
            })
        }
    })
}

  buscaConvenio() {
      this.cs.convenioQuery(this.convenio.CODIGO.toString()).subscribe(convenio => {
          this.updateConvenioForm.patchValue({
            COD_CONV: this.convenio[0].COD_CONV,
            NOME_CONVENIO: this.convenio[0].NOME_CONVENIO,
            TIPO_CONVENIO: this.convenio[0].TIPO_CONVENIO,
          })
          console.log(convenio[0])
      })
  }

  updateConvenio(convenioAtualizado) {
      this.cs.updateConvenio(this.convenio.CODIGO.toString(), convenioAtualizado).subscribe(res => {
        if (res['errors']) {
          res['errors'].forEach(error => {
              console.log('Houve um erro!' + error)
              this.ns.notify(`Houve um erro! ${error.message}`)
           })
        } else {
            this.cs.conveniosById(this.route.snapshot.params['id']).subscribe(response => {
                this.convenio = response
                console.log(response)
                this.updateConvenioForm.reset()
                this.ns.notify('Convênio atualizado com sucesso!')
            })
        }

     })
  }

  



}
