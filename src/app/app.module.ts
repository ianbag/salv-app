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
import { ResidentesComponent } from './residentes/residentes.component';
import { ResidentesService } from './residentes/residentes.service';
import { ResidenteComponent } from './residentes/residente/residente.component';
import { InfosPessoaisComponent } from './residentes/residente/infos-pessoais/infos-pessoais.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ResidentesComponent,
    ResidenteComponent,
    InfosPessoaisComponent,
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
    ResidentesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
