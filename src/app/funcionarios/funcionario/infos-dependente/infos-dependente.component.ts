import { ActivatedRoute } from '@angular/router';
import { Dependente } from './dependente.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FuncionariosService } from '../../funcionarios.service';
import { DialogConfirmService } from 'src/app/residentes/dialog-confirm.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UniqueValuesValidators } from 'src/app/shared/validators/unique-values/unique-values.component';
import { LoginService } from "./../../../auth/login/login.service"

@Component({
    selector: 'salv-infos-dependente',
    templateUrl: './infos-dependente.component.html'
})
export class InfosDependenteComponent implements OnInit {

    access: boolean

    @Input() dependente: Dependente
    @Output() atualizaDependentes = new EventEmitter<Dependente[]>()
    updateDependenteForm: FormGroup

    estados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
    ];

    constructor(private dcs: DialogConfirmService, private fs: FuncionariosService, private ns: NotificationService, private fb: FormBuilder, private spinner: NgxSpinnerService, private uniqueValidators: UniqueValuesValidators, private route: ActivatedRoute, private ls: LoginService) { }

    ngOnInit() {

        this.access = this.ls.permissao_acesso

        this.updateDependenteForm = this.fb.group({
            NOME: this.fb.control('', [Validators.required]),
            SOBRENOME: this.fb.control('', [Validators.required]),
            DATA_NASCIMENTO: this.fb.control('', [Validators.required]),
            RG: this.fb.control('', [Validators.minLength(9)], this.uniqueValidators.validateDependenteRG(this.route.snapshot.params['id'], this.dependente.NOME, this.dependente.SOBRENOME)),
            CPF: this.fb.control('', [Validators.minLength(11)], this.uniqueValidators.validateDependenteCPF(this.route.snapshot.params['id'], this.dependente.NOME, this.dependente.SOBRENOME)),
            NUMERO_CERTIDAO_NASCIMENTO: this.fb.control('', [], this.uniqueValidators.validateDependenteNumeroCertidao(this.route.snapshot.params['id'], this.dependente.NOME, this.dependente.SOBRENOME)),
            FOLHA_CERTIDAO_NASCIMENTO: this.fb.control('', []),
            LIVRO_CERTIDAO_NASCIMENTO: this.fb.control('', []),
            CIDADE_CERTIDAO_NASCIMENTO: this.fb.control('', []),
            ESTADO_CERTIDAO_NASCIMENTO: this.fb.control('', [])

        })

    }

    deleteDependente(_dep_nome: string, _dep_sobrenome: string): void {
        this.dcs.confirm('Deseja excluir o dependente?').then((isTrue) => {
            if (isTrue) {
                this.fs.deleteDependente(_dep_nome, _dep_sobrenome).subscribe(() => {
                    this.ns.notify('Dependente excluído com sucesso!')
                    this.fs.dependenteById(this.dependente.CODIGO_FUNCIONARIO.toString()).subscribe(dependentes => {
                        this.atualizaDependentes.emit(dependentes)
                    })
                })
            }
        })
    }

    buscaDependente(_cod_fun, _dep_nome, _dep_sobrenome) {
        this.fs.dependenteId(_cod_fun, _dep_nome, _dep_sobrenome).subscribe(dependente => {
            this.updateDependenteForm.patchValue({
                NOME: dependente[0].NOME,
                SOBRENOME: dependente[0].SOBRENOME,
                DATA_NASCIMENTO: dependente[0].DATA_NASCIMENTO,
                RG: dependente[0].RG,
                CPF: dependente[0].CPF,
                NUMERO_CERTIDAO_NASCIMENTO: dependente[0].NUMERO_CERTIDAO_NASCIMENTO,
                FOLHA_CERTIDAO_NASCIMENTO: dependente[0].FOLHA_CERTIDAO_NASCIMENTO,
                LIVRO_CERTIDAO_NASCIMENTO: dependente[0].LIVRO_CERTIDAO_NASCIMENTO,
                CIDADE_CERTIDAO_NASCIMENTO: dependente[0].CIDADE_CERTIDAO_NASCIMENTO,
                ESTADO_CERTIDAO_NASCIMENTO: dependente[0].ESTADO_CERTIDAO_NASCIMENTO
            })
        })
    }

    updateDependente(id_, nome_, sobrenome_, dependente) {
        this.fs.updateDependente(id_, nome_, sobrenome_, dependente).subscribe(res => {
            if (res['errors']) {
                res['errors'].forEach(error => {
                    console.log('Houve um erro!', error)
                    this.ns.notify(`Houve um erro! ${error.message}`)
                })
            } else {
                this.updateDependenteForm.reset()
                this.ns.notify('Dependente alterado com sucesso!')
                this.fs.dependenteById(this.dependente.CODIGO_FUNCIONARIO.toString()).subscribe(dependentes => {
                    this.atualizaDependentes.emit(dependentes)
                })
            }
        })
    }

}
