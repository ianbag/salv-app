import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidentesService } from '../../residentes.service';
import { Convenio } from 'src/app/convenios/convenio.model';
import { Residente } from '../../residente/residente.model';
import { Route, Router } from '@angular/router';
import { Familiar } from '../../residente/infos-familiar/familiar.model';

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

  constructor(private formBuilder: FormBuilder, private residentesService: ResidentesService, private router: Router) { }

  ngOnInit() {

    this.convenioResidenteForm = this.formBuilder.group({
      NOME: this.formBuilder.control(null, [Validators.required]),
    })
  }

  convenioResidente(convenio: Convenio) {
    this.residentesService.createPessoa(this.residentesService.pessoa)
      .subscribe(pessoa => { // PESSOA SUCESSO

        console.log('PESSOA', pessoa)
        this.residente = this.residentesService.residente
        this.residente.PESSOA_CODIGO = pessoa.CODIGO
        this.residentesService.createResidente(this.residente)

          .subscribe(residente => { // RESIDENTE SUCESSO
            console.log('RESIDENTE', residente)
            this.residentesService.createFamiliar(this.residentesService.familiar)
              .subscribe(familiar => { // FAMILIAR SUCESSO
                console.log('FAMILIAR', familiar)

                this.residentesService.createResidenteFamiliar(
                  {RESIDENTE_CODIGO: residente.CODIGO_RESIDENTE,FAMILIAR_CODIGO: familiar.CODIGO})
                  .subscribe(residenteFamiliar => console.log('RESIDENTE FAMILIAR', residenteFamiliar)) // RESIDENTE FAMILIAR SUCESSO
                
                this.residentesService.createEndereco(this.residentesService.endereco)
                  .subscribe(endereco => { // ENDERECO SUCESSO
                    console.log('ENDERECO', endereco)
                    this.residentesService.createEnderecoFamiliar(
                      { FAMILIAR_CODIGO: familiar.CODIGO, ENDERECO_CODIGO: endereco.CODIGO })
                      .subscribe(enderecoFamiliar => console.log('ENDERECO FAMILIAR', enderecoFamiliar)) // ENDERECO FAMILIAR SUCESSO
                  })
              })
          },
            error => this.router.navigate(['/novo-residente']))
      },
        error => this.router.navigate(['/novo-residente']))

  }
}

