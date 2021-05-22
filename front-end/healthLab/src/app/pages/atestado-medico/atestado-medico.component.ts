import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atestado-medico',
  templateUrl: './atestado-medico.component.html',
  styleUrls: ['./atestado-medico.component.css']
})
export class AtestadoMedicoComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  salvar() {
    alert(' Atestado salvo com sucesso!');
  }

  uploadDoArquivo() {
    alert(' Atestado enviado com sucesso!');
  }

}
