//Modules
import { NgModule } from '@angular/core'
import { SharedModule } from './../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'

//Components
import { ResidentesComponent } from './residentes.component';
import { ResidenteComponent } from './residente/residente.component';
import { InfosPessoaisComponent } from './residente/infos-pessoais/infos-pessoais.component';
import { InfosFamiliarComponent } from './residente/infos-familiar/infos-familiar.component';
import { InfosConvenioComponent } from './residente/infos-convenio/infos-convenio.component';
import { InfosBeneficiosComponent } from './residente/infos-beneficios/infos-beneficios.component';
import { NovoResidenteComponent } from './novo-residente/novo-residente.component';
import { FamiliarResidenteComponent } from './novo-residente/familiar-residente/familiar-residente.component';
import { ConvenioResidenteComponent } from './novo-residente/convenio-residente/convenio-residente.component';


@NgModule({
    declarations: [
        ResidentesComponent,
        ResidenteComponent,
        InfosPessoaisComponent,
        InfosFamiliarComponent,
        InfosConvenioComponent,
        InfosBeneficiosComponent,
        NovoResidenteComponent,
        FamiliarResidenteComponent,
        ConvenioResidenteComponent
    ],
    imports: [
        SharedModule
    ]
})
export class ResidenteModule { }