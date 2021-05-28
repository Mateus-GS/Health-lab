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
import { RegistrosAmbientaisComponent } from './pages/registros-ambientais/registros-ambientais.component';
import { PgrComponent } from './pages/pgr/pgr.component';
import { DashboardPgrComponent } from './pages/dashboard-pgr/dashboard-pgr.component';
import { CadastroPgrComponent } from './pages/cadastro-pgr/cadastro-pgr.component';
import { InventarioDosRiscosOcupacionaisComponent } from './pages/inventario-dos-riscos-ocupacionais/inventario-dos-riscos-ocupacionais.component';
import { InformacoesAgentesFisicosComponent } from './pages/informacoes-agentes-fisicos/informacoes-agentes-fisicos.component';
import { RelatoriosGerenciaisComponent } from './pages/relatorios-gerenciais/relatorios-gerenciais.component';
import { Nr04Component } from './pages/nr04/nr04.component';
import { QuadroIIIComponent } from './pages/nr04/quadro-iii/quadro-iii.component';
import { QuadroIVComponent } from './pages/nr04/quadro-iv/quadro-iv.component';
import { QuadroVComponent } from './pages/nr04/quadro-v/quadro-v.component';
import { QuadroVIComponent } from './pages/nr04/quadro-vi/quadro-vi.component';
import { AcidentesComponent } from './pages/acidentes/acidentes.component';
import { ConsumoEpiComponent } from './pages/consumo-epi/consumo-epi.component';
import { TreinamentoPessoalComponent } from './pages/treinamento-pessoal/treinamento-pessoal.component';
import { EmpresasContratadasComponent } from './pages/empresas-contratadas/empresas-contratadas.component';


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
    ResponsavelPelaInformacaoComponent,
    RegistrosAmbientaisComponent,
    PgrComponent,
    DashboardPgrComponent,
    CadastroPgrComponent,
    InventarioDosRiscosOcupacionaisComponent,
    InformacoesAgentesFisicosComponent,
    RelatoriosGerenciaisComponent,
    Nr04Component,
    QuadroIIIComponent,
    QuadroIVComponent,
    QuadroVComponent,
    QuadroVIComponent,
    AcidentesComponent,
    ConsumoEpiComponent,
    TreinamentoPessoalComponent,
    EmpresasContratadasComponent,
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
