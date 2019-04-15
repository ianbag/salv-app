import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ResidentesService } from '../../residentes.service';
import { Convenio } from 'src/app/convenios/convenio.model';
import { Residente, Residente_Convenio } from '../../residente/residente.model';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Familiar } from '../../residente/infos-familiar/familiar.model';
import { NotificationService } from 'src/app/shared/notification.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'salv-convenio-residente',
  templateUrl: './editar-convenio-residente.component.html',
  animations: [
    trigger('editar-convenio-residenteAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class EditarConvenioResidenteComponent implements OnInit {

  convenioresidenteState = 'ready'


  convenioResidenteForm: FormGroup

  residente: Residente
  familiar: Familiar
  convenios: Residente_Convenio[]
  residenteConvenio: Residente_Convenio

  id: any

  constructor(
    private formBuilder: FormBuilder,
    private residentesService: ResidentesService,
    private router: Router,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  markAllDirty(control: AbstractControl) {
    if (control.hasOwnProperty('controls')) {
      control.markAsDirty()
      let ctrl = <any>control;
      for (let inner in ctrl.controls)
        this.markAllDirty(ctrl.controls[inner] as AbstractControl);
    }
    else
      (<FormControl>(control)).markAsDirty();
  }

  ngOnInit() {
  
    this.id = this.route.snapshot.params['id']
    this.residenteConvenio = this.residentesService.residenteConvenio

    this.residentesService.convenios()
      .subscribe(convenio => {
        
        this.convenios = convenio})

    this.convenioResidenteForm = this.formBuilder.group({
      NUMERO_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      TITULAR_CONVENIO: this.formBuilder.control(null, [Validators.required]),
      PARENTESCO_TITULAR: this.formBuilder.control(null, []),
      CONVENIO_CODIGO: this.formBuilder.control(null, [Validators.required]),
    })

    if (this.residenteConvenio != undefined)
      this.convenioResidenteForm.patchValue(this.residenteConvenio)
  }

  voltarFamiliar(residenteConvenio: Residente_Convenio) {
    this.residentesService.residenteConvenio = residenteConvenio
  }

  convenioResidente(residenteConvenio: Residente_Convenio) {
    if (this.convenioResidenteForm.valid == true) {
      this.residentesService.residenteConvenio = residenteConvenio
      this.residentesService.createNewResidente()
        .subscribe(res => {
          console.log("CREATE NEW RESIDENTE: ", res)
          this.router.navigate(['/residentes', this.id])
          this.notificationService.notify(`Residente inserido com sucesso!`)
          this.residentesService.clearDataResidente()
        })
    }
    else {
      this.markAllDirty(this.convenioResidenteForm)
      //console.log(this.convenioResidenteForm.controls)
      this.notificationService.notify(`Preencha os campos obrigatórios!`)
    }
  }
}

