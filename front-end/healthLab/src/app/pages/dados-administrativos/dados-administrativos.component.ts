import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-administrativos',
  templateUrl: './dados-administrativos.component.html',
  styleUrls: ['./dados-administrativos.component.css']
})
export class DadosAdministrativosComponent implements OnInit {

  public tituloDadosAdministrativos = 'DADOS ADMINISTRATIVOS';
  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloDadosAdministrativos = 'EDITANDO DADOS ADMINISTRATIVOS';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloDadosAdministrativos = 'DADOS ADMINISTRATIVOS';
  }

}
