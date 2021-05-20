import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcidenteDeTrabalhoComponent } from './pages/acidente-de-trabalho/acidente-de-trabalho.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  { path:"login", component: LoginComponent},
  { path:"cadastro", component: CadastroComponent},
  { path:"recuperar-senha", component: RecuperarSenhaComponent},
  { path:"dashboard", component: PrincipalComponent},
  { path:"acidente-de-trabalho", component: AcidenteDeTrabalhoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
