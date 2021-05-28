import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario-dos-riscos-ocupacionais',
  templateUrl: './inventario-dos-riscos-ocupacionais.component.html',
  styleUrls: ['./inventario-dos-riscos-ocupacionais.component.css']
})
export class InventarioDosRiscosOcupacionaisComponent implements OnInit {
  
  public tituloPgr ='Cadastro Inventário dos riscos ocupacionais';

  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloPgr = 'Editando Inventário dos riscos ocupacionais';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloPgr = 'Cadastro Inventário dos riscos ocupacionais';
  }

}
