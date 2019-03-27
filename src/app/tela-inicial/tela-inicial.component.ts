import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'salv-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(private ns:NotificationService) { }

  ngOnInit() {
  }
     testaNotificacao(){
       console.log(`CLIQUEI NO BOTAO`)
       this.ns.notify(`TESTANDO NOTICAÇÃO`)
     }
}
