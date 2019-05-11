//Modules
import { NgModule } from '@angular/core'

//Components
import { InputComponent } from './input/input.component'
import { SnackbarComponent } from './snackbar/snackbar.component'

//Pipes
import { ApelidoPipe } from './pipes/apelido.pipe'
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
        NumeroCertNascPipe
    ]
})
export class SharedModule { }