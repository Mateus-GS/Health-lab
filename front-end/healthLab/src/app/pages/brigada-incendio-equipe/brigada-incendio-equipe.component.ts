import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brigada-incendio-equipe',
  templateUrl: './brigada-incendio-equipe.component.html',
  styleUrls: ['./brigada-incendio-equipe.component.css']
})
export class BrigadaIncendioEquipeComponent implements OnInit {

  public tituloBrigadaDeIncendio ='CADASTRO BRIGADA DE INCENDIO EQUIPE';

  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloBrigadaDeIncendio = 'EDITANDO BRIGADA DE INCENDIO EQUIPE';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloBrigadaDeIncendio = 'CADASTRO BRIGADA DE INCENDIO EQUIPE';
  }

}
