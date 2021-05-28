import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pgr',
  templateUrl: './cadastro-pgr.component.html',
  styleUrls: ['./cadastro-pgr.component.css']
})
export class CadastroPgrComponent implements OnInit {

  public tituloPgr ='CADASTRO PGR';

  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloPgr = 'EDITANDO PGR';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloPgr = 'CADASTRO PGR';
  }

}
