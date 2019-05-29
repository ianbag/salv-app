import { Component, OnInit } from '@angular/core';
import { ConveniosService } from 'src/app/convenios/convenios.service';
import { Convenio } from './convenio.model';
import { DialogConfirmService } from '../residentes/dialog-confirm.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
import 'jspdf-autotable'
import { NotificationService } from '../shared/notification.service';
import { LoginService } from "./../auth/login/login.service"

@Component({
  selector: 'salv-convenios',
  templateUrl: './convenios.component.html',
  animations: [
    trigger('conveniosAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConveniosComponent implements OnInit {

  access: boolean

  conveniosState = 'ready'

  constructor(private conveniosService: ConveniosService, private dialogConfirmService: DialogConfirmService, private spinner: NgxSpinnerService, private ns: NotificationService, private ls: LoginService) { }

  public searchString: string;
  convenios: Convenio[]
  conveniosDesativados: Convenio[]

  paginaAtual: number = 1;

  public Desativados
  public filter

  ngOnInit() {
    this.spinner.show()

    this.access = this.ls.permissao_acesso

    this.conveniosService.tratados()
      .subscribe(convenios => {
        this.spinner.hide();
        this.convenios = convenios
        console.log('CONVENIOS', convenios)
      })
  }

  conveniosDesativadoss() {
    this.conveniosService.conveniosDesativados()
      .subscribe(conveniosDesativados => {
        this.conveniosDesativados = conveniosDesativados
        console.log('conveniosDesativados', conveniosDesativados)
      })
  }


  deleteConvenio(id: string): void {
    this.dialogConfirmService.confirm(`Deseja inativar o convênio?`)
      .then((isTrue) => {
        if (isTrue) {
          this.conveniosService.deleteConvenio(id)
            .subscribe(() => this.conveniosService.convenios()
              .subscribe(convenios => this.convenios = convenios))
        }
      })
  }

  ativarConvenio(id: string): void {
    this.dialogConfirmService.confirm(`Deseja ativar o convênio?`)
      .then((isTrue) => {
        if (isTrue) {
          this.conveniosService.ativarConvenio(id)
            .subscribe(() => this.conveniosService.conveniosDesativados()
              .subscribe(convenios => this.conveniosDesativados = convenios, convenios => this.convenios = convenios))
        }
      })
  }

  reportConvenios(status) {
    this.spinner.show()
    this.conveniosService.reportConvenios(status).subscribe(x => {
      var newBlob = new Blob([x], { type: 'application/pdf' })

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob)
        return
      }

      const data = window.URL.createObjectURL(newBlob)
      var link = document.createElement('a')
      link.href = data
      link.download = "Relatório de convênios.pdf"
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }))

      setTimeout(function () {
        window.URL.revokeObjectURL(data)
        link.remove()
      }, 100)
      this.spinner.hide()
      this.ns.notify('Relatório emitido com sucesso')
    })
  }

}
