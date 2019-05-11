import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { NovoAcompanhamentoComponent } from './acompanhamentos/novo-acompanhamento/novo-acompanhamento.component';

import { Routes } from "@angular/router";

import { ResidentesComponent } from "./residentes/residentes.component";
import { ResidenteComponent } from "./residentes/residente/residente.component";
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NovoResidenteComponent } from './residentes/novo-residente/novo-residente.component';
import { AcompanhamentosComponent } from './acompanhamentos/acompanhamentos.component';
import { AcompanhamentoComponent } from './acompanhamentos/acompanhamento/acompanhamento.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { FamiliarResidenteComponent } from './residentes/novo-residente/familiar-residente/familiar-residente.component';
import { ConvenioResidenteComponent } from './residentes/novo-residente/convenio-residente/convenio-residente.component';
import { LoginComponent } from './auth/login/login.component'
import { NovoFuncionarioComponent } from './funcionarios/novo-funcionario/novo-funcionario.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'

export const ROUTES: Routes = [
    //ROTAS VÃO AQUI
    { path: 'login', component: LoginComponent },
    { path: 'residentes', component: ResidentesComponent, canActivate: [AuthGuard] },
    { path: 'residente/:id', component: ResidenteComponent, canActivate: [AuthGuard] },
    { path: 'novo-residente', component: NovoResidenteComponent, canActivate: [AuthGuard] },
    { path: 'familiar-residente', component: FamiliarResidenteComponent, canActivate: [AuthGuard] },
    { path: 'convenio-residente', component: ConvenioResidenteComponent, canActivate: [AuthGuard] },
    { path: 'convenios', loadChildren: './convenios/convenio.module#ConvenioModule', canActivate: [AuthGuard] },
    { path: 'funcionarios', component: FuncionariosComponent, canActivate: [AuthGuard] },
    { path: 'novo-funcionario', component: NovoFuncionarioComponent, canActivate: [AuthGuard] },
    { path: 'funcionario/:id', component: FuncionarioComponent, canActivate: [AuthGuard] },
    { path: 'acompanhamentos', component: AcompanhamentosComponent, canActivate: [AuthGuard] },
    { path: 'acompanhamento/:id', component: AcompanhamentoComponent, canActivate: [AuthGuard] },
    { path: 'novo-acompanhamento', component: NovoAcompanhamentoComponent, canActivate: [AuthGuard] },
    { path: 'esqueci-a-senha', component: ForgetPasswordComponent },
    { path: 'esqueci-a-senha/:token', component: ResetPasswordComponent },
    { path: 'home', component: TelaInicialComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
]