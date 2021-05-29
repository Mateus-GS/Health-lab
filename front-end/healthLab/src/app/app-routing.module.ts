import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcidenteDeTrabalhoComponent } from './pages/acidente-de-trabalho/acidente-de-trabalho.component';
import { AtestadoMedicoComponent } from './pages/atestado-medico/atestado-medico.component';
import { BrigadaDeIncendioMembrosComponent } from './pages/brigada-de-incendio-membros/brigada-de-incendio-membros.component';
import { BrigadaIncendioEquipeComponent } from './pages/brigada-incendio-equipe/brigada-incendio-equipe.component';
import { BrigadaIncendioMenuComponent } from './pages/brigada-incendio-menu/brigada-incendio-menu.component';
import { CadastroCatComponent } from './pages/cadastro-cat/cadastro-cat.component';
import { CadastroPgrComponent } from './pages/cadastro-pgr/cadastro-pgr.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DadosAdministrativosComponent } from './pages/dados-administrativos/dados-administrativos.component';
import { DashboardPgrComponent } from './pages/dashboard-pgr/dashboard-pgr.component';
import { DashbordPppComponent } from './pages/dashbord-ppp/dashbord-ppp.component';
import { InformacoesAgentesFisicosComponent } from './pages/informacoes-agentes-fisicos/informacoes-agentes-fisicos.component';
import { InventarioDosRiscosOcupacionaisComponent } from './pages/inventario-dos-riscos-ocupacionais/inventario-dos-riscos-ocupacionais.component';
import { LoginComponent } from './pages/login/login.component';
import { MonitoracaoBiologicaComponent } from './pages/monitoracao-biologica/monitoracao-biologica.component';
import { PgrComponent } from './pages/pgr/pgr.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { RegistrosAmbientaisComponent } from './pages/registros-ambientais/registros-ambientais.component';
import { RelatorioDeAcidenteComponent } from './pages/relatorio-de-acidente/relatorio-de-acidente.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { ResponsavelPelaInformacaoComponent } from './pages/responsavel-pela-informacao/responsavel-pela-informacao.component';
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

const routes: Routes = [
  { path:"", component: LoginComponent},
  { path:"cadastro", component: CadastroComponent},
  { path:"recuperar-senha", component: RecuperarSenhaComponent},
  { path:"dashboard", component: PrincipalComponent},
  { path:"acidente-de-trabalho", component: AcidenteDeTrabalhoComponent},
  { path:"cadastro-cat", component: CadastroCatComponent},
  { path:"atestado-medico", component: AtestadoMedicoComponent},
  { path:"relatorio", component: RelatorioComponent},
  { path:"relatorio-de-acidente", component: RelatorioDeAcidenteComponent},
  { path:"dashboard-ppp", component: DashbordPppComponent},
  { path:"dados-administrativos", component: DadosAdministrativosComponent},
  { path:"monitoracao-biologica", component: MonitoracaoBiologicaComponent},
  { path:"responsavel-pela-informacao", component: ResponsavelPelaInformacaoComponent},
  { path:"registros-ambientais", component: RegistrosAmbientaisComponent},
  { path:"pgr", component: PgrComponent},
  { path:"dashboard-pgr", component: DashboardPgrComponent},
  { path:"cadastro-pgr", component: CadastroPgrComponent},
  { path:"informacoes-agentes-fisicos", component: InformacoesAgentesFisicosComponent},
  { path:"inventario-dos-riscos-ocupacionais", component: InventarioDosRiscosOcupacionaisComponent},
  { path:"brigada-de-incendio-membros", component: BrigadaDeIncendioMembrosComponent},
  { path:"brigada-de-incendio-equipe", component: BrigadaIncendioEquipeComponent},
  { path:"brigada-de-incendio-menu", component: BrigadaIncendioMenuComponent},
  { path:"relatorios-gerenciais", component: RelatoriosGerenciaisComponent},
  { path:"nr04", component: Nr04Component},
  { path:"quadro-iii", component: QuadroIIIComponent},
  { path:"quadro-iv", component: QuadroIVComponent},
  { path:"quadro-v", component: QuadroVComponent},
  { path:"quadro-vi", component: QuadroVIComponent},
  { path:"acidentes", component: AcidentesComponent},
  { path:"consumo-epi", component: ConsumoEpiComponent},
  { path:"treinamento-pessoal", component: TreinamentoPessoalComponent},
  { path:"empresas-contratadas", component: EmpresasContratadasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
