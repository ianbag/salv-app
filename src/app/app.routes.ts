import { AcompanhamentoComponent } from './acompanhamentos/acompanhamento/acompanhamento.component';
import { AcompanhamentosComponent } from './acompanhamentos/acompanhamentos.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { Component } from '@angular/core';

import { ConveniosComponent } from './convenios/convenios.component';
import { Routes } from "@angular/router";

import { ResidentesComponent } from "./residentes/residentes.component";
import { ResidenteComponent } from "./residentes/residente/residente.component";
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NovoFuncionarioComponent } from './funcionarios/funcionario/novo-funcionario/novo-funcionario.component';
import { NovoDependenteComponent } from './funcionarios/funcionario/novo-funcionario/novo-dependente/novo-dependente.component';


export const ROUTES: Routes = [
    //ROTAS VÃO AQUI
    { path: 'residentes', component: ResidentesComponent },
    { path: 'residente/:id', component: ResidenteComponent },
    { path: 'convenios', component: ConveniosComponent },
    { path: 'funcionarios', component: FuncionariosComponent},
    { path: 'funcionario/:id', component: FuncionarioComponent},
    { path: 'novo-funcionario', component: NovoFuncionarioComponent},
    { path: 'novo-dependente', component: NovoDependenteComponent},
    { path: 'acompanhamentos', component: AcompanhamentosComponent},
    { path: 'acompanhamento/:id', component: AcompanhamentoComponent},
    { path: '', component: TelaInicialComponent},
    { path: '**', component: NotFoundComponent}
]