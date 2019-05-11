import { NovoAcompanhamentoService } from './acompanhamentos/novo-acompanhamento/novo-acompanhamento.service';
import { UserDetailsComponent } from './fixed-elements/header/user-details/user-details.component';
import { NotificationService } from './shared/notification.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { ROUTES } from "./app.routes";

import { HeaderComponent } from './fixed-elements/header/header.component';
import { SidebarComponent } from './fixed-elements/sidebar/sidebar.component';
import { FooterComponent } from './fixed-elements/footer/footer.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ResidentesComponent } from './residentes/residentes.component';
import { ResidentesService } from './residentes/residentes.service';
import { ResidenteComponent } from './residentes/residente/residente.component';
import { InfosPessoaisComponent } from './residentes/residente/infos-pessoais/infos-pessoais.component';

import { InfosFamiliarComponent } from './residentes/residente/infos-familiar/infos-familiar.component';
import { ConveniosService } from './convenios/convenios.service';
import { AniversariantesComponent } from './tela-inicial/aniversariantes/aniversariantes.component';
import { ProvaDeVidaComponent } from './tela-inicial/prova-de-vida/prova-de-vida.component';
import { AniversarianteComponent } from './tela-inicial/aniversariantes/aniversariante/aniversariante.component';
import { InfosConvenioComponent } from './residentes/residente/infos-convenio/infos-convenio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DialogConfirmService } from './residentes/dialog-confirm.service';
import { AcompanhamentosService } from './acompanhamentos/acompanhamentos.service';
import { NovoResidenteComponent } from './residentes/novo-residente/novo-residente.component';
import { FamiliarResidenteComponent } from './residentes/novo-residente/familiar-residente/familiar-residente.component';

import { ConvenioResidenteComponent } from './residentes/novo-residente/convenio-residente/convenio-residente.component';

import { FuncionariosService } from './funcionarios/funcionarios.service';

import { LoginComponent } from './auth/login/login.component';
import { LoginService } from './auth/login/login.service';
import { GlobalErrorHandler } from './app.global-error-handler';

import { TelaInicialService } from './tela-inicial/tela-inicial.service';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ForgetService } from './auth/forget-password/forget.service';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetService } from './auth/reset-password/reset.service';

import { AuthGuardService } from './auth/auth-guard.service';

import { ValidatorService } from './shared/validators/validator.service';
import { CookieService } from 'ngx-cookie-service'

import { InfosBeneficiosComponent } from './residentes/residente/infos-beneficios/infos-beneficios.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { SharedModule } from './shared/shared.module';
import { CurrencyMaskModule } from "ng2-currency-mask";

// import { AuthInterceptor } from './auth/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TelaInicialComponent,
    AniversariantesComponent,
    AniversarianteComponent,
    ProvaDeVidaComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailsComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,

    ResidentesComponent,
    ResidenteComponent,
    InfosPessoaisComponent,
    InfosFamiliarComponent,
    InfosConvenioComponent,
    InfosBeneficiosComponent,
    FamiliarResidenteComponent,
    ConvenioResidenteComponent,
    NovoResidenteComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    CurrencyMaskModule,
    RouterModule.forRoot(ROUTES),
  ],


  providers: [
    CookieService,
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
    ForgetService,
    ResetService,
    ValidatorService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
