import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-de-acidente',
  templateUrl: './relatorio-de-acidente.component.html',
  styleUrls: ['./relatorio-de-acidente.component.css']
})
export class RelatorioDeAcidenteComponent implements OnInit {

  
  constructor() { }
  public tituloRelatorioDeAcidente ='RELATÓRIO ACIDENTE DE TRABALHO';

  ngOnInit(): void {
  }
  
  editar() {
    this.tituloRelatorioDeAcidente = 'EDITANDO RELATÓRIO ACIDENTE ';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloRelatorioDeAcidente = 'RELATÓRIO ACIDENTE DE TRABALHO';
  }

}
