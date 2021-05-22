import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cat',
  templateUrl: './cadastro-cat.component.html',
  styleUrls: ['./cadastro-cat.component.css']
})
export class CadastroCatComponent implements OnInit {

  public tituloCat ='CADASTRO CAT';

  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloCat = 'EDITANDO CAT';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloCat = 'CADASTRO CAT';
  }

}
