//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from "ngx-mask";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CurrencyMaskModule } from "ng2-currency-mask";

//Components
import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

//Pipes
import { ApelidoPipe } from './pipes/apelido.pipe';
import { CartaoSamsPipe } from './pipes/cartao-sams.pipe';
import { CartaoSUSPipe } from './pipes/cartaoSUS.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { DataPipe } from './pipes/data.pipe';
import { EscolaridadePipe } from './pipes/escolaridade.pipe';
import { EstadoCivilPipe } from './pipes/estado-civil.pipe';
import { SearchPipe } from './pipes/filtroData.pipe';
import { ProfissaoPipe } from './pipes/profissao.pipe';
import { ReligiaoPipe } from './pipes/religiao.pipe';
import { RgPipe } from './pipes/rg.pipe';
import { SexoPipe } from './pipes/sexo.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';
import { EstadoCertNascPipe } from './pipes/cert_nasc/estado-cert-nasc.pipe';
import { CidadeCertNascPipe } from './pipes/cert_nasc/cidade-cert-nasc.pipe';
import { FolhaCertNascPipe } from './pipes/cert_nasc/folha-cert-nasc.pipe';
import { LivroCertNascPipe } from './pipes/cert_nasc/livro-cert-nasc.pipe';
import { NumeroCertNascPipe } from './pipes/cert_nasc/numero-cert-nasc.pipe';
import { SecaoEleitoralPipe } from './pipes/eleitoral/secao-eleitoral.pipe';
import { TituloEleitorPipe } from './pipes/eleitoral/titulo-eleitor.pipe';
import { ZonaEleitoralPipe } from './pipes/eleitoral/zona-eleitoral.pipe';
import { AgenciaInssPipe } from './pipes/inss/agencia-inss.pipe';
import { BancoInssPipe } from './pipes/inss/banco-inss.pipe';
import { ContaInssPipe } from './pipes/inss/conta-inss.pipe';
import { NumeroInssPipe } from './pipes/inss/numero-inss.pipe';
import { ProvaVidaInssPipe } from './pipes/inss/prova-vida-inss.pipe';
import { SituacaoInssPipe } from './pipes/inss/situacao-inss.pipe';
import { ValorInssPipe } from './pipes/inss/valor-inss.pipe';

@NgModule({
    declarations: [
        //Components
        InputComponent,
        SnackbarComponent,
        //Pipes
        ApelidoPipe,
        CartaoSamsPipe,
        CartaoSUSPipe,
        CepPipe,
        CpfPipe,
        DataPipe,
        EscolaridadePipe,
        EstadoCivilPipe,
        SearchPipe,
        ProfissaoPipe,
        ReligiaoPipe,
        RgPipe,
        SexoPipe,
        TelefonePipe,
        EstadoCertNascPipe,
        CidadeCertNascPipe,
        FolhaCertNascPipe,
        LivroCertNascPipe,
        NumeroCertNascPipe,
        SecaoEleitoralPipe,
        TituloEleitorPipe,
        ZonaEleitoralPipe,
        AgenciaInssPipe,
        BancoInssPipe,
        ContaInssPipe,
        NumeroInssPipe,
        ProvaVidaInssPipe,
        SituacaoInssPipe,
        ValorInssPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        NgxPaginationModule,
        NgxMaskModule.forRoot(),
        NgMultiSelectDropDownModule.forRoot(),
        Ng2SearchPipeModule,
        FilterPipeModule,
        CurrencyMaskModule
    ],
    exports: [
        //Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        NgxPaginationModule,
        NgxMaskModule,
        NgMultiSelectDropDownModule,
        Ng2SearchPipeModule,
        FilterPipeModule,
        //Components
        InputComponent,
        SnackbarComponent,
        //Pipes
        ApelidoPipe,
        CartaoSamsPipe,
        CartaoSUSPipe,
        CepPipe,
        CpfPipe,
        DataPipe,
        EscolaridadePipe,
        EstadoCivilPipe,
        SearchPipe,
        ProfissaoPipe,
        ReligiaoPipe,
        RgPipe,
        SexoPipe,
        TelefonePipe,
        EstadoCertNascPipe,
        CidadeCertNascPipe,
        FolhaCertNascPipe,
        LivroCertNascPipe,
        NumeroCertNascPipe,
        SecaoEleitoralPipe,
        TituloEleitorPipe,
        ZonaEleitoralPipe,
        AgenciaInssPipe,
        BancoInssPipe,
        ContaInssPipe,
        NumeroInssPipe,
        ProvaVidaInssPipe,
        SituacaoInssPipe,
        ValorInssPipe
    ]
})
export class SharedModule { }