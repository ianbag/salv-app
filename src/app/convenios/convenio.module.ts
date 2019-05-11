//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

//Components
import { ConveniosComponent } from './convenios.component';
import { ConvenioComponent } from './convenio/convenio.component';
import { NovoConvenioComponent } from './novo-convenio/novo-convenio.component';

@NgModule({
    declarations: [
        ConveniosComponent,
        ConvenioComponent,
        NovoConvenioComponent
    ],
    imports: [
        SharedModule
    ]
})
export class ConvenioModule { }