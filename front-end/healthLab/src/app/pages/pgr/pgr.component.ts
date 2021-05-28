import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgr',
  templateUrl: './pgr.component.html',
  styleUrls: ['./pgr.component.css']
})
export class PgrComponent implements OnInit {

  public tituloPgr ='PGR';

  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloPgr = 'EDITANDO PGR';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloPgr = 'PGR';
  }

}
