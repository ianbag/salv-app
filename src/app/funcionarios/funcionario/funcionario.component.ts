import { Dependente } from './infos-dependente/dependente.model';
import { Funcionario, Telefone, Endereco } from './../funcionario.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FuncionariosService } from '../funcionarios.service';
import { ActivatedRoute } from '@angular/router';
import * as jspdf from 'jspdf'
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/shared/notification.service';
import { DialogConfirmService } from 'src/app/residentes/dialog-confirm.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'salv-funcionario',
  templateUrl: './funcionario.component.html',
  animations: [
    trigger('funcionarioAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class FuncionarioComponent implements OnInit {

  funcionarioState = 'ready'

  funcionario: Funcionario
  dependentes: Dependente[]
  telefones: Telefone[]
  enderecos: Endereco[]
  n_dependentes: number
  estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];
  novoDependenteForm: FormGroup

  @ViewChild('reportFuncionario') reportFuncionario: ElementRef

  constructor(private fs: FuncionariosService, private route: ActivatedRoute, private fb: FormBuilder, private ns: NotificationService, private dcs: DialogConfirmService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    this.fs.funcionarioById(this.route.snapshot.params['id']).subscribe(funcionario => {
      this.funcionario = funcionario
    })

    this.fs.dependenteById(this.route.snapshot.params['id']).subscribe(dependente => {
      this.dependentes = dependente
      this.n_dependentes = this.dependentes.length

    })


    setTimeout(() => {
      this.fs.telefoneById(this.funcionario.PESSOA_CODIGO.toString()).subscribe(resT => {
        this.fs.enderecoById(this.funcionario.PESSOA_CODIGO.toString()).subscribe(resE => {
          this.telefones = resT
          this.enderecos = resE
        })
      })
      this.spinner.hide()
    }, 2300)

    this.novoDependenteForm = this.fb.group({
      NOME: this.fb.control(null, []),
      SOBRENOME: this.fb.control(null, []),
      DATA_NASCIMENTO: this.fb.control(null, []),
      RG: this.fb.control(null, []),
      CPF: this.fb.control(null, []),
      NUMERO_CERTIDAO_NASCIMENTO: this.fb.control(null, []),
      FOLHA_CERTIDAO_NASCIMENTO: this.fb.control(null, []),
      LIVRO_CERTIDAO_NASCIMENTO: this.fb.control(null, []),
      CIDADE_CERTIDAO_NASCIMENTO: this.fb.control(null, []),
      ESTADO_CERTIDAO_NASCIMENTO: this.fb.control(null, [])
    })

  }

  countDependentes() {
    if (this.n_dependentes > 0) {
      return true
    }
    return false
  }

  novoDependente(dependente: Dependente) {
    this.fs.novoDependente(this.funcionario.CODIGO_FUNCIONARIO, dependente).subscribe(res => {
      this.novoDependenteForm.reset()
      this.ns.notify('Dependente inserido com sucesso!')
      this.fs.dependenteById(this.route.snapshot.params['id']).subscribe(dependente => {
        this.dependentes = dependente
      })
    })
  }

  updateDependentes() {
    this.fs.dependenteById(this.route.snapshot.params['id']).subscribe(response => {
      this.dependentes = response
    })
  }

}
