import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDeAcidenteComponent } from './relatorio-de-acidente.component';

describe('RelatorioDeAcidenteComponent', () => {
  let component: RelatorioDeAcidenteComponent;
  let fixture: ComponentFixture<RelatorioDeAcidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioDeAcidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioDeAcidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
