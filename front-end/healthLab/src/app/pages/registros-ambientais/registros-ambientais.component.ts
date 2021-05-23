import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros-ambientais',
  templateUrl: './registros-ambientais.component.html',
  styleUrls: ['./registros-ambientais.component.css']
})
export class RegistrosAmbientaisComponent implements OnInit {

  constructor() { }
  public tituloRegistroAmbiental ='REGISTRO AMBIENTAL';

  ngOnInit(): void {
  }
  
  editar() {
    this.tituloRegistroAmbiental = 'EDITANDO REGISTRO AMBIENTAL ';
  }

  salvar() {
    alert('Dados salvo com sucesso!');
    this.tituloRegistroAmbiental = 'REGISTRO AMBIENTAL';
  }

}
