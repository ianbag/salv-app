//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule, Routes } from '@angular/router'

//Components
import { ConveniosComponent } from './convenios.component';
import { ConvenioComponent } from './convenio/convenio.component';
import { NovoConvenioComponent } from './novo-convenio/novo-convenio.component';

//Routes
const ROUTES: Routes = [
    { path: '', component: ConveniosComponent },
    { path: 'novo-convenio', component: NovoConvenioComponent },
    { path: ':id', component: ConvenioComponent },
]

@NgModule({
    declarations: [
        ConveniosComponent,
        ConvenioComponent,
        NovoConvenioComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class ConvenioModule { }