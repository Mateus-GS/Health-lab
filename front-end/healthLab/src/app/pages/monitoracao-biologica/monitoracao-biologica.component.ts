import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoracao-biologica',
  templateUrl: './monitoracao-biologica.component.html',
  styleUrls: ['./monitoracao-biologica.component.css']
})
export class MonitoracaoBiologicaComponent implements OnInit {

  public tituloMonitoracaoBiologica = 'MONITORAÇÃO BIOLÓGICA';
  constructor() { }

  ngOnInit(): void {
  }

  editar() {
    this.tituloMonitoracaoBiologica = 'EDITANDO MONITORAÇÃO BIOLÓGICA';
  }

  salvar() {
    alert('Monitoração salva com sucesso!');
    this.tituloMonitoracaoBiologica = 'MONITORAÇÃO BIOLÓGICA';
  }

}
