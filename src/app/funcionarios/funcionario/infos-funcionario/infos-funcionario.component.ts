import { FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario, Telefone, Endereco, Usuario } from './../../funcionario.model';
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
  novoEnderecoForm: FormGroup
  novoUsuarioForm: FormGroup
  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  constructor(private fs: FuncionariosService, private fb: FormBuilder, private ns: NotificationService) { }

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
    this.novoUsuarioForm = this.fb.group({
      EMAIL: this.fb.control(null, []),
      LOGIN: this.fb.control(null, []),
      SENHA: this.fb.control(null, [])
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

  novoEndereco(endereco: Endereco) {
    this.fs.novoEndereco(this.funcionario.PESSOA_CODIGO, endereco).subscribe(res => {
      this.fs.enderecoById(this.funcionario.PESSOA_CODIGO.toString()).subscribe(res => {
        this.enderecos = res
        this.novoEnderecoForm.reset()
        this.ns.notify('Endereço inserido com sucesso!')
      })
    })
  }

  novoUsuario(usuario: Usuario) {
    this.fs.novoUsuario(this.funcionario.CODIGO_FUNCIONARIO, usuario).subscribe(res => {
      this.funcionario.USUARIO = res
      this.novoUsuarioForm.reset()
      this.ns.notify('Usuário inserido com sucesso!')
    })
  }

  haveLogin() {
    if (this.funcionario.USUARIO) {
      return true
    } else {
      return false
    }
  }

}
