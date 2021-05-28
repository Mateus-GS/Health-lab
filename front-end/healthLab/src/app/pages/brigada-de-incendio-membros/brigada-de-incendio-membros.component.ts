import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brigada-de-incendio-membros',
  templateUrl: './brigada-de-incendio-membros.component.html',
  styleUrls: ['./brigada-de-incendio-membros.component.css']
})
export class BrigadaDeIncendioMembrosComponent implements OnInit {

  public tituloBrigadaDeIncendio ='CADASTRO BRIGADA DE INCENDIO MEMBROS';

  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloBrigadaDeIncendio = 'EDITANDO BRIGADA DE INCENDIO MEMBROS';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloBrigadaDeIncendio = 'CADASTRO BRIGADA DE INCENDIO MEMBROS';
  }

}
