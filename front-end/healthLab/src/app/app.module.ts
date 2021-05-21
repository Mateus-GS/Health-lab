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

import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RecuperarSenhaComponent,
    PrincipalComponent,
    AcidenteDeTrabalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
