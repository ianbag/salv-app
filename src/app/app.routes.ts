import { NovoAcompanhamentoComponent } from './acompanhamentos/novo-acompanhamento/novo-acompanhamento.component';

import { ConveniosComponent } from './convenios/convenios.component';
import { Routes } from "@angular/router";

import { ResidentesComponent } from "./residentes/residentes.component";
import { ResidenteComponent } from "./residentes/residente/residente.component";
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NovoFuncionarioComponent } from './funcionarios/funcionario/novo-funcionario/novo-funcionario.component';
import { NovoDependenteComponent } from './funcionarios/funcionario/novo-funcionario/novo-dependente/novo-dependente.component';
import { NovoResidenteComponent } from './residentes/novo-residente/novo-residente.component';
import { AcompanhamentosComponent } from './acompanhamentos/acompanhamentos.component';
import { AcompanhamentoComponent } from './acompanhamentos/acompanhamento/acompanhamento.component';
import { ConvenioComponent } from './convenios/convenio/convenio.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { FamiliarResidenteComponent } from './residentes/novo-residente/familiar-residente/familiar-residente.component';
import { ConvenioResidenteComponent } from './residentes/novo-residente/convenio-residente/convenio-residente.component';
<<<<<<< HEAD

=======
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './auth/login/login.component'
<<<<<<< HEAD
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service'
=======
>>>>>>> upstream/master
>>>>>>> ca77f87d5156b146a37d655ab761b1facae4c8e1

export const ROUTES: Routes = [
    //ROTAS VÃO AQUI
    { path: 'login', component: LoginComponent },
<<<<<<< HEAD
    { path: 'residentes', component: ResidentesComponent, canActivate: [AuthGuard] },
    { path: 'residente/:id', component: ResidenteComponent, canActivate: [AuthGuard]},
    { path: 'novo-residente', component: NovoResidenteComponent, canActivate: [AuthGuard] },
    { path: 'familiar-residente', component: FamiliarResidenteComponent, canActivate: [AuthGuard] },
    { path: 'convenio-residente', component: ConvenioResidenteComponent, canActivate: [AuthGuard] },
    { path: 'convenios', component: ConveniosComponent, canActivate: [AuthGuard] },
    { path: 'convenio/:id', component: ConvenioComponent, canActivate: [AuthGuard] },
    { path: 'funcionarios', component: FuncionariosComponent, canActivate: [AuthGuard] },
    { path: 'funcionario/:id', component: FuncionarioComponent, canActivate: [AuthGuard] },
    { path: 'novo-funcionario', component: NovoFuncionarioComponent, canActivate: [AuthGuard] },
    { path: 'novo-dependente', component: NovoDependenteComponent, canActivate: [AuthGuard] },
    { path: 'acompanhamentos', component: AcompanhamentosComponent, canActivate: [AuthGuard] },
    { path: 'acompanhamento/:id', component: AcompanhamentoComponent, canActivate: [AuthGuard] },
    { path: 'novo-acompanhamento', component: NovoAcompanhamentoComponent, canActivate: [AuthGuard] },
    { path: 'error', component: ErrorComponent },
    { path: '', component: TelaInicialComponent, canActivate: [AuthGuard] },
=======
    { path: 'residentes', component: ResidentesComponent },
    { path: 'residente/:id', component: ResidenteComponent },
    { path: 'novo-residente', component: NovoResidenteComponent },
    { path: 'familiar-residente', component: FamiliarResidenteComponent },
    { path: 'convenio-residente', component: ConvenioResidenteComponent },
    { path: 'convenios', component: ConveniosComponent },
    { path: 'convenio/:id', component: ConvenioComponent },
    { path: 'funcionarios', component: FuncionariosComponent },
    { path: 'funcionario/:id', component: FuncionarioComponent },
    { path: 'novo-funcionario', component: NovoFuncionarioComponent },
    { path: 'novo-dependente', component: NovoDependenteComponent },
    { path: 'acompanhamentos', component: AcompanhamentosComponent },
    { path: 'acompanhamento/:id', component: AcompanhamentoComponent },
<<<<<<< HEAD
    { path: 'novo-acompanhamento', component: NovoAcompanhamentoComponent},   
=======
    { path: 'novo-acompanhamento', component: NovoAcompanhamentoComponent },
    { path: 'error', component: ErrorComponent },
>>>>>>> upstream/master
    { path: '', component: TelaInicialComponent },
>>>>>>> ca77f87d5156b146a37d655ab761b1facae4c8e1
    { path: '**', component: NotFoundComponent }


]