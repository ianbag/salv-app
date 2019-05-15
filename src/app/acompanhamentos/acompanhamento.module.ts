//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AcompanhamentosComponent } from './acompanhamentos.component';
import { AcompanhamentoComponent } from './acompanhamento/acompanhamento.component';
import { NovoAcompanhamentoComponent } from './novo-acompanhamento/novo-acompanhamento.component';

//Routes
const ROUTES: Routes = [
    { path: '', component: AcompanhamentosComponent },
    { path: 'novo-acompanhamento', component: NovoAcompanhamentoComponent },
    { path: ':id', component: AcompanhamentoComponent }
]

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