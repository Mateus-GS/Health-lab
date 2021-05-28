import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesAgentesFisicosComponent } from './informacoes-agentes-fisicos.component';

describe('InformacoesAgentesFisicosComponent', () => {
  let component: InformacoesAgentesFisicosComponent;
  let fixture: ComponentFixture<InformacoesAgentesFisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoesAgentesFisicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesAgentesFisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
