import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcidenteDeTrabalhoComponent } from './pages/acidente-de-trabalho/acidente-de-trabalho.component';
import { AtestadoMedicoComponent } from './pages/atestado-medico/atestado-medico.component';
import { CadastroCatComponent } from './pages/cadastro-cat/cadastro-cat.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';

const routes: Routes = [
  { path:"", component: LoginComponent},
  { path:"cadastro", component: CadastroComponent},
  { path:"recuperar-senha", component: RecuperarSenhaComponent},
  { path:"dashboard", component: PrincipalComponent},
  { path:"acidente-de-trabalho", component: AcidenteDeTrabalhoComponent},
  { path:"cadastro-cat", component: CadastroCatComponent},
  { path:"atestado-medico", component: AtestadoMedicoComponent},
  { path:"relatorio", component: RelatorioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
