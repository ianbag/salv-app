//Modules
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { GlobalErrorHandler } from './app.global-error-handler';
import { SharedModule } from './shared/shared.module';

//Routes
import { ROUTES } from "./app.routes";
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

//Components
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fixed-elements/header/header.component';
import { SidebarComponent } from './fixed-elements/sidebar/sidebar.component';
import { FooterComponent } from './fixed-elements/footer/footer.component';
import { UserDetailsComponent } from './fixed-elements/header/user-details/user-details.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AniversariantesComponent } from './tela-inicial/aniversariantes/aniversariantes.component';
import { ProvaDeVidaComponent } from './tela-inicial/prova-de-vida/prova-de-vida.component';
import { AniversarianteComponent } from './tela-inicial/aniversariantes/aniversariante/aniversariante.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
