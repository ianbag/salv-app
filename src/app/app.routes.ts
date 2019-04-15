import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { EditarAcompanhamentoComponent } from './acompanhamentos/editar-acompanhamento/editar-acompanhamento.component';
import { EditarConvenioComponent } from './convenios/editar-convenio/editar-convenio.component';
import { NovoConvenioComponent } from './convenios/novo-convenio/novo-convenio.component';
import { NovoAcompanhamentoComponent } from './acompanhamentos/novo-acompanhamento/novo-acompanhamento.component';

import { ConveniosComponent } from './convenios/convenios.component';
import { Routes } from "@angular/router";

import { ResidentesComponent } from "./residentes/residentes.component";
import { ResidenteComponent } from "./residentes/residente/residente.component";
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NovoResidenteComponent } from './residentes/novo-residente/novo-residente.component';
import { AcompanhamentosComponent } from './acompanhamentos/acompanhamentos.component';
import { AcompanhamentoComponent } from './acompanhamentos/acompanhamento/acompanhamento.component';
import { ConvenioComponent } from './convenios/convenio/convenio.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { FamiliarResidenteComponent } from './residentes/novo-residente/familiar-residente/familiar-residente.component';
import { ConvenioResidenteComponent } from './residentes/novo-residente/convenio-residente/convenio-residente.component';
import { LoginComponent } from './auth/login/login.component'
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'
import { NovoFuncionarioComponent } from './funcionarios/novo-funcionario/novo-funcionario.component';
import { EditarFuncionarioComponent } from './funcionarios/editar-funcionario/editar-funcionario.component';
import { EditarResidenteComponent } from './residentes/editar-residente/editar-residente.component';
import { EditarFamiliarResidenteComponent } from './residentes/editar-residente/familiar-residente/editar-familiar-residente.component';
import { EditarConvenioResidenteComponent } from './residentes/editar-residente/convenio-residente/editar-convenio-residente.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';

export const ROUTES: Routes = [
    //ROTAS VÃO AQUI
    { path: 'login', component: LoginComponent },
    { path: 'residentes', component: ResidentesComponent, canActivate: [AuthGuard] },
    { path: 'residente/:id', component: ResidenteComponent, canActivate: [AuthGuard] },
    { path: 'novo-residente', component: NovoResidenteComponent, canActivate: [AuthGuard] },
    { path: 'familiar-residente', component: FamiliarResidenteComponent, canActivate: [AuthGuard] },
    { path: 'convenio-residente', component: ConvenioResidenteComponent, canActivate: [AuthGuard] },
    { path: 'editar-residente/:id', component: EditarResidenteComponent, canActivate: [AuthGuard] },
    { path: 'editar-familiar-residente/:id', component: EditarFamiliarResidenteComponent, canActivate: [AuthGuard] },
    { path: 'editar-convenio-residente/:id', component: EditarConvenioResidenteComponent, canActivate: [AuthGuard] },
    { path: 'convenios', component: ConveniosComponent, canActivate: [AuthGuard] },
    { path: 'convenio/:id', component: ConvenioComponent, canActivate: [AuthGuard] },
    { path: 'novo-convenio', component: NovoConvenioComponent, canActivate: [AuthGuard] },
    { path: 'editar-convenio/:id', component: EditarConvenioComponent, canActivate: [AuthGuard] },
    { path: 'funcionarios', component: FuncionariosComponent, canActivate: [AuthGuard] },
    { path: 'novo-funcionario', component: NovoFuncionarioComponent, canActivate: [AuthGuard] },
    { path: 'funcionario/:id', component: FuncionarioComponent, canActivate: [AuthGuard] },
    { path: 'editar-funcionario/:id', component: EditarFuncionarioComponent, canActivate: [AuthGuard] },
    { path: 'acompanhamentos', component: AcompanhamentosComponent, canActivate: [AuthGuard] },
    { path: 'editar-acompanhamento/:id', component: EditarAcompanhamentoComponent, canActivate: [AuthGuard] },
    { path: 'acompanhamento/:id', component: AcompanhamentoComponent, canActivate: [AuthGuard] },
    { path: 'novo-acompanhamento', component: NovoAcompanhamentoComponent, canActivate: [AuthGuard] },
    { path: 'esqueci-a-senha', component: ForgetPasswordComponent },
    { path: 'esqueci-a-senha/:token', component: ResetPasswordComponent },
    { path: '', component: TelaInicialComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }


]