import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../auth/login/login.service'

@Component({
  selector: 'salv-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(private ns: NotificationService, private toastr: ToastrService, private ls: LoginService) { }

  ngOnInit() {
    if (this.ls.primeiro_acesso == 1) {
      this.toastr.info('Primeiro acesso', 'É seu primeiro acesso e o toastr está funcionando corretamente')
    }
  }

}
