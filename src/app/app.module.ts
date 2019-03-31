import { NotificationService } from './shared/notification.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';



import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxMaskModule } from "ngx-mask";

import { ROUTES } from "./app.routes";

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
import { ConveniosService } from './convenios/convenios.service';
import { AniversariantesComponent } from './tela-inicial/aniversariantes/aniversariantes.component';
import { ProvaDeVidaComponent } from './tela-inicial/prova-de-vida/prova-de-vida.component';
import { AniversarianteComponent } from './tela-inicial/aniversariantes/aniversariante/aniversariante.component';
import { InfosConvenioComponent } from './residentes/residente/infos-convenio/infos-convenio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { ConvenioComponent } from './convenios/convenio/convenio.component';
import { DialogConfirmService } from './residentes/dialog-confirm.service';
import { AcompanhamentosComponent } from './acompanhamentos/acompanhamentos.component';
import { AcompanhamentoComponent } from './acompanhamentos/acompanhamento/acompanhamento.component';
import { AcompanhamentosService } from './acompanhamentos/acompanhamentos.service';
import { NovoResidenteComponent } from './residentes/novo-residente/novo-residente.component';
import { InputComponent } from './shared/input/input.component';
import { FamiliarResidenteComponent } from './residentes/novo-residente/familiar-residente/familiar-residente.component';
import { ConvenioResidenteComponent } from './residentes/novo-residente/convenio-residente/convenio-residente.component';
import { NovoAcompanhamentoComponent } from './acompanhamentos/novo-acompanhamento/novo-acompanhamento.component';

import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { FuncionariosService } from './funcionarios/funcionarios.service';

import { LoginComponent } from './auth/login/login.component';
import { LoginService } from './auth/login/login.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { GlobalErrorHandler } from './app.global-error-handler';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { UserDetailsComponent } from './fixed-elements/header/user-details/user-details.component';
import { NovoConvenioComponent } from './convenios/novo-convenio/novo-convenio.component';
import { EditarConvenioComponent } from './convenios/editar-convenio/editar-convenio.component';
import { NovoAcompanhamentoService } from './acompanhamentos/novo-acompanhamento/novo-acompanhamento.service';
import { TelaInicialService } from './tela-inicial/tela-inicial.service';
import { InfosFuncionarioComponent } from './funcionarios/funcionario/infos-funcionario/infos-funcionario.component';
import { InfosDependenteComponent } from './funcionarios/funcionario/infos-dependente/infos-dependente.component';
import { NovoFuncionarioComponent } from './funcionarios/novo-funcionario/novo-funcionario.component';


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
    AniversarianteComponent,
    InfosConvenioComponent,
    NotFoundComponent,
    FuncionariosComponent,
    SnackbarComponent,
    FuncionarioComponent,
    InfosConvenioComponent,
    NotFoundComponent,
    ConvenioComponent,
    InfosConvenioComponent,
    NotFoundComponent,
    AcompanhamentosComponent,
    InfosConvenioComponent,
    NotFoundComponent,
    AcompanhamentoComponent,
    NovoResidenteComponent,
    InputComponent,
    FamiliarResidenteComponent,
    ConvenioResidenteComponent,
    NovoAcompanhamentoComponent,
    LoginComponent,
    UserDetailsComponent,
    NovoConvenioComponent,
    EditarConvenioComponent,
    UserDetailsComponent,
    InfosFuncionarioComponent,
    InfosDependenteComponent,
    NovoFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    NgxMaskModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  

  
  providers: [
    ResidentesService,
    ConveniosService,
    DialogConfirmService,
    AcompanhamentosService,
    FuncionariosService,
    LoginService,
    AuthGuardService,
    NotificationService,
    TelaInicialService,
    NovoAcompanhamentoService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
