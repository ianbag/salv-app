import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ROUTES } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './fixed-elements/header/header.component';
import { SidebarComponent } from './fixed-elements/sidebar/sidebar.component';
import { FooterComponent } from './fixed-elements/footer/footer.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ResidentesComponent } from './residentes/residentes.component';
import { ResidentesService } from './residentes/residentes.service';
import { ResidenteComponent } from './residentes/residente/residente.component';
import { InfosPessoaisComponent } from './residentes/residente/infos-pessoais/infos-pessoais.component';
import { SexoPipe } from './shared/pipes/sexo.pipe';
import { EscolaridadePipe } from './shared/pipes/escolaridade.pipe';
import { EstadoCivilPipe } from './shared/pipes/estado-civil.pipe';
import { ReligiaoPipe } from './shared/pipes/religiao.pipe';
import { CpfPipe } from './shared/pipes/cpf.pipe';
import { RgPipe } from './shared/pipes/rg.pipe';
import { InfosFamiliarComponent } from './residentes/residente/infos-familiar/infos-familiar.component';
import { ConveniosComponent } from './convenios/convenios.component';
<<<<<<< HEAD
import { ConveniosService } from './convenios/convenios.service';
=======
>>>>>>> 1b6cc3466863356b6cf019954b61c51efea14101
import { AniversariantesComponent } from './tela-inicial/aniversariantes/aniversariantes.component';
import { ProvaDeVidaComponent } from './tela-inicial/prova-de-vida/prova-de-vida.component';
import { AniversarianteComponent } from './tela-inicial/aniversariantes/aniversariante/aniversariante.component';
<<<<<<< HEAD
=======
import { DialogConfirmService } from './residentes/dialog-confirm.service';
>>>>>>> upstream/master
import { InfosConvenioComponent } from './residentes/residente/infos-convenio/infos-convenio.component';
import { NotFoundComponent } from './not-found/not-found.component';
<<<<<<< HEAD
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { InfosDependenteComponent } from './funcionarios/funcionario/infos-dependente/infos-dependente.component';
import { InfosFuncionaisComponent } from './funcionarios/funcionario/infos-funcionais/infos-funcionais.component';
import { NovoFuncionarioComponent } from './funcionarios/funcionario/novo-funcionario/novo-funcionario.component';
import { NovoDependenteComponent } from './funcionarios/funcionario/novo-funcionario/novo-dependente/novo-dependente.component';
import { NovaInfoFuncionalComponent } from './funcionarios/funcionario/novo-funcionario/nova-info-funcional/nova-info-funcional.component';
<<<<<<< HEAD
import { ConvenioComponent } from './convenios/convenio/convenio.component';
=======
>>>>>>> 1b6cc3466863356b6cf019954b61c51efea14101
=======
import { AcompanhamentosComponent } from './acompanhamentos/acompanhamentos.component';
import { AcompanhamentoComponent } from './acompanhamentos/acompanhamento/acompanhamento.component';
import { AcompanhamentosService } from './acompanhamentos/acompanhamentos.service';
import { NovoResidenteComponent } from './residentes/novo-residente/novo-residente.component';
>>>>>>> upstream/master

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TelaInicialComponent,
    ResidentesComponent,
    ResidenteComponent,
    InfosPessoaisComponent,
    SexoPipe,
    EscolaridadePipe,
    EstadoCivilPipe,
    ReligiaoPipe,
    CpfPipe,
    RgPipe,
    InfosFamiliarComponent,
    ConveniosComponent,
    AniversariantesComponent,
    ProvaDeVidaComponent,
<<<<<<< HEAD
    AniversarianteComponent,
<<<<<<< HEAD
=======
>>>>>>> upstream/master
    AniversarianteComponent,
    InfosConvenioComponent,
    NotFoundComponent,
    FuncionariosComponent,
    FuncionarioComponent,
    InfosDependenteComponent,
    InfosFuncionaisComponent,
    NovoFuncionarioComponent,
    NovoDependenteComponent,
    NovaInfoFuncionalComponent,
<<<<<<< HEAD
    InfosConvenioComponent,
    NotFoundComponent,
    ConvenioComponent
=======
    InfosConvenioComponent,
    NotFoundComponent
>>>>>>> 1b6cc3466863356b6cf019954b61c51efea14101
=======
    NotFoundComponent,
    AcompanhamentosComponent,
    InfosConvenioComponent,
    NotFoundComponent,
    AcompanhamentoComponent,
    NovoResidenteComponent
>>>>>>> upstream/master
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
<<<<<<< HEAD
    ResidentesService,ConveniosService
=======
    ResidentesService,
    DialogConfirmService,
    AcompanhamentosService
>>>>>>> upstream/master
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
