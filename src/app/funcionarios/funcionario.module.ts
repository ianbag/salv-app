//Modules
import { NgModule } from '@angular/core'
import { SharedModule } from './../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'

//Components
import { FuncionariosComponent } from './funcionarios.component'
import { FuncionarioComponent } from './funcionario/funcionario.component'
import { InfosFuncionarioComponent } from './funcionario/infos-funcionario/infos-funcionario.component'
import { InfosDependenteComponent } from './funcionario/infos-dependente/infos-dependente.component'
import { NovoFuncionarioComponent } from './novo-funcionario/novo-funcionario.component'

//Routes
const ROUTES: Routes = [
    { path: '', component: FuncionariosComponent },
    { path: 'novo-funcionario', component: NovoFuncionarioComponent },
    { path: ':id', component: FuncionarioComponent }
]

@NgModule({
    declarations: [
        FuncionariosComponent,
        FuncionarioComponent,
        InfosFuncionarioComponent,
        InfosDependenteComponent,
        NovoFuncionarioComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class FuncionarioModule { }