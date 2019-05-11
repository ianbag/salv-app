import { Routes } from "@angular/router";

import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component'
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';

import { ResidentesComponent } from "./residentes/residentes.component";
import { ResidenteComponent } from "./residentes/residente/residente.component";
import { NovoResidenteComponent } from './residentes/novo-residente/novo-residente.component';
import { FamiliarResidenteComponent } from './residentes/novo-residente/familiar-residente/familiar-residente.component';
import { ConvenioResidenteComponent } from './residentes/novo-residente/convenio-residente/convenio-residente.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'

export const ROUTES: Routes = [
    //ROTAS VÃO AQUI
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: TelaInicialComponent, canActivate: [AuthGuard] },
    { path: 'esqueci-a-senha', component: ForgetPasswordComponent },
    { path: 'esqueci-a-senha/:token', component: ResetPasswordComponent },

    { path: 'convenios', loadChildren: './convenios/convenio.module#ConvenioModule', canActivate: [AuthGuard] },
    { path: 'funcionarios', loadChildren: './funcionarios/funcionario.module#FuncionarioModule', canActivate: [AuthGuard] },
    { path: 'acompanhamentos', loadChildren: './acompanhamentos/acompanhamento.module#AcompanhamentoModule', canActivate: [AuthGuard] },

    { path: 'residentes', component: ResidentesComponent, canActivate: [AuthGuard] },
    { path: 'residente/:id', component: ResidenteComponent, canActivate: [AuthGuard] },
    { path: 'novo-residente', component: NovoResidenteComponent, canActivate: [AuthGuard] },
    { path: 'familiar-residente', component: FamiliarResidenteComponent, canActivate: [AuthGuard] },
    { path: 'convenio-residente', component: ConvenioResidenteComponent, canActivate: [AuthGuard] },

    { path: '**', component: NotFoundComponent }
]