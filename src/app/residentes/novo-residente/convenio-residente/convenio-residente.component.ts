import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'salv-convenio-residente',
  templateUrl: './convenio-residente.component.html',
  animations: [
    trigger('convenio-residenteAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ConvenioResidenteComponent implements OnInit {

  convenioresidenteState = 'ready'

  nomes = [
    { option: "teste" },
    { option: "teste1" },
    { option: "teste2" },
    { option: "teste3" }
  ];

  convenioResidenteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.convenioResidenteForm = this.formBuilder.group({
      nome: this.formBuilder.control('', []),
      numeroInscricao: this.formBuilder.control('', []),
      titularConvenio: this.formBuilder.control('', [])
    })
    
    
    }

}
