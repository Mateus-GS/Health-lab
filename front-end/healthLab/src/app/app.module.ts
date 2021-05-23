import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AcidenteDeTrabalhoComponent } from './pages/acidente-de-trabalho/acidente-de-trabalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroCatComponent } from './pages/cadastro-cat/cadastro-cat.component';
import { AtestadoMedicoComponent } from './pages/atestado-medico/atestado-medico.component';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { RelatorioDeAcidenteComponent } from './pages/relatorio-de-acidente/relatorio-de-acidente.component';
import { DashbordPppComponent } from './pages/dashbord-ppp/dashbord-ppp.component';
import { DadosAdministrativosComponent } from './pages/dados-administrativos/dados-administrativos.component';
import { MonitoracaoBiologicaComponent } from './pages/monitoracao-biologica/monitoracao-biologica.component';
import { ResponsavelPelaInformacaoComponent } from './pages/responsavel-pela-informacao/responsavel-pela-informacao.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RecuperarSenhaComponent,
    PrincipalComponent,
    AcidenteDeTrabalhoComponent,
    CadastroCatComponent,
    AtestadoMedicoComponent,
    RelatorioComponent,
    RelatorioDeAcidenteComponent,
    DashbordPppComponent,
    DadosAdministrativosComponent,
    MonitoracaoBiologicaComponent,
    ResponsavelPelaInformacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
