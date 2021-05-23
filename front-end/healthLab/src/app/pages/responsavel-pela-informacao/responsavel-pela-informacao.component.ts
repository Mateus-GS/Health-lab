import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsavel-pela-informacao',
  templateUrl: './responsavel-pela-informacao.component.html',
  styleUrls: ['./responsavel-pela-informacao.component.css']
})
export class ResponsavelPelaInformacaoComponent implements OnInit {

  
  constructor() { }
  public tituloResponsavelPelaInformacao = 'RESPONSAVEL PELA INFORMAÇÃO';
  
  ngOnInit(): void {
  }

  editar() {
    this.tituloResponsavelPelaInformacao = 'EDITANDO RESPONSAVEL PELA INFORMAÇÃO';
  }

  salvar() {
    alert('Monitoração salva com sucesso!');
    this.tituloResponsavelPelaInformacao = 'RESPONSAVEL PELA INFORMAÇÃO';
  }


}
