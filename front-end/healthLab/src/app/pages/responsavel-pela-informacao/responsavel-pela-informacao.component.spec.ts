import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsavelPelaInformacaoComponent } from './responsavel-pela-informacao.component';

describe('ResponsavelPelaInformacaoComponent', () => {
  let component: ResponsavelPelaInformacaoComponent;
  let fixture: ComponentFixture<ResponsavelPelaInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsavelPelaInformacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsavelPelaInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
