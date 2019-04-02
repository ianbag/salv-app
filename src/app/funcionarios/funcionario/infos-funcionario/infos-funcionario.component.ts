import { FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario, Telefone, Endereco } from './../../funcionario.model';
import { Component, OnInit, Input } from '@angular/core';
import { FuncionariosService } from '../../funcionarios.service';
import { NotificationService } from 'src/app/shared/notification.service';
@Component({
  selector: 'salv-infos-funcionario',
  templateUrl: './infos-funcionario.component.html'
})
export class InfosFuncionarioComponent implements OnInit {

  @Input() funcionario: Funcionario
  @Input() telefones: Telefone[]
  @Input() enderecos: Endereco[]
  novoTelefoneForm: FormGroup

  constructor(private fs: FuncionariosService, private fb: FormBuilder, private ns: NotificationService) { }

  ngOnInit(): void {
    this.novoTelefoneForm = this.fb.group({
      DDD: this.fb.control(null, []),
      NUMERO: this.fb.control(null, [])
    })
  }

  novoTelefone(telefone: Telefone) {
    this.fs.novoTelefone(this.funcionario.PESSOA_CODIGO, telefone).subscribe(res => {
      this.fs.telefoneById(this.funcionario.PESSOA_CODIGO.toString()).subscribe(res => {
        this.telefones = res
        this.novoTelefoneForm.reset()
        this.ns.notify('Telefone inserido com sucesso!')
      })
    })
  }

}
