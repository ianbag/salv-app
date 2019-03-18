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
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './security/login/login.component'

export const ROUTES: Routes = [
    //ROTAS VÃO AQUI
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
    { path: 'novo-acompanhamento', component: NovoAcompanhamentoComponent },
    { path: 'error', component: ErrorComponent },
    { path: '', component: TelaInicialComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }


]