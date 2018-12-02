<<<<<<< HEAD
import { ConvenioComponent } from './convenios/convenio/convenio.component';
=======
import { AcompanhamentoComponent } from './acompanhamentos/acompanhamento/acompanhamento.component';
import { AcompanhamentosComponent } from './acompanhamentos/acompanhamentos.component';
>>>>>>> upstream/master
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { Component } from '@angular/core';

import { ConveniosComponent } from './convenios/convenios.component';
import { Routes } from "@angular/router";

import { ResidentesComponent } from "./residentes/residentes.component";
import { ResidenteComponent } from "./residentes/residente/residente.component";
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NotFoundComponent } from './not-found/not-found.component';
<<<<<<< HEAD
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NovoFuncionarioComponent } from './funcionarios/funcionario/novo-funcionario/novo-funcionario.component';
import { NovoDependenteComponent } from './funcionarios/funcionario/novo-funcionario/novo-dependente/novo-dependente.component';
<<<<<<< HEAD
=======
>>>>>>> 1b6cc3466863356b6cf019954b61c51efea14101
=======
import { NovoResidenteComponent } from './residentes/novo-residente/novo-residente.component';
>>>>>>> upstream/master


export const ROUTES: Routes = [
    //ROTAS VÃO AQUI
    { path: 'residentes', component: ResidentesComponent },
    { path: 'residente/:id', component: ResidenteComponent },
    {path: 'novo-residente', component: NovoResidenteComponent},
    { path: 'convenios', component: ConveniosComponent },
<<<<<<< HEAD
    { path: 'convenio/:id', component: ConvenioComponent},
    { path: 'funcionarios', component: FuncionariosComponent},
    { path: 'funcionario/:id', component: FuncionarioComponent},
    { path: 'novo-funcionario', component: NovoFuncionarioComponent},
    { path: 'novo-dependente', component: NovoDependenteComponent},
<<<<<<< HEAD
    { path: '', component: TelaInicialComponent},
    { path: '**', component: NotFoundComponent}
    


=======
    { path: 'tela-inicial', component: TelaInicialComponent},
    { path: '**', component: NotFoundComponent}
>>>>>>> 1b6cc3466863356b6cf019954b61c51efea14101
=======
    { path: 'acompanhamentos', component: AcompanhamentosComponent},
    { path: 'acompanhamento/:id', component: AcompanhamentoComponent},
    { path: '', component: TelaInicialComponent},
    { path: '**', component: NotFoundComponent}
>>>>>>> upstream/master
]