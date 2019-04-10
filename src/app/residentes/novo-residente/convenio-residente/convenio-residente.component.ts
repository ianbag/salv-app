import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidentesService } from '../../residentes.service';
import { Convenio } from 'src/app/convenios/convenio.model';
import { Residente, Residente_Convenio } from '../../residente/residente.model';
import { Route, Router } from '@angular/router';
import { Familiar } from '../../residente/infos-familiar/familiar.model';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'salv-convenio-residente',
  templateUrl: './convenio-residente.component.html',
  animations: [
    trigger('convenio-residenteAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConvenioResidenteComponent implements OnInit {

  convenioresidenteState = 'ready'


  convenioResidenteForm: FormGroup

  residente: Residente
  familiar: Familiar
  convenios: Convenio[]

  constructor(private formBuilder: FormBuilder, private residentesService: ResidentesService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
   // this.residentesService.convenios()
   // .subscribe(convenio => this.convenios = convenio)

    this.convenioResidenteForm = this.formBuilder.group({
      NUMERO_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      TITULAR_CONVENIO: this.formBuilder.control(null, []),
      PARENTESCO_TITULAR: this.formBuilder.control(null, []),
      CONVENIO_CODIGO: this.formBuilder.control(null, [Validators.required]),
    })
  }

  convenioResidente(convenio: Residente_Convenio) {
    this.residentesService.convenio = convenio
    this.residentesService.createNewResidente()
      .subscribe(res => {
        console.log("RESPONSE CADASTRO RESIDENTE: ", res)
        this.router.navigate(['/residentes'])
        this.notificationService.notify(`Residente inserido com sucesso!`)
      })
  }
}

