//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AcompanhamentosComponent } from './acompanhamentos.component';
import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import { NovoAcompanhamentoComponent } from './novo-acompanhamento/novo-acompanhamento.component';

@NgModule({
    declarations: [
        AcompanhamentosComponent,
        AcompanhamentoComponent,
        NovoAcompanhamentoComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class AcompanhamentoModule { }