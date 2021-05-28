import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes-agentes-fisicos',
  templateUrl: './informacoes-agentes-fisicos.component.html',
  styleUrls: ['./informacoes-agentes-fisicos.component.css']
})
export class InformacoesAgentesFisicosComponent implements OnInit {

  public tituloPgr ='Informações dos agentes físicos, químicos e biológicos';

  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloPgr = 'Editando Informações dos agentes físicos, químicos e biológicos';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloPgr = 'Cadastro Informações dos agentes físicos, químicos e biológicos';
  }

}
