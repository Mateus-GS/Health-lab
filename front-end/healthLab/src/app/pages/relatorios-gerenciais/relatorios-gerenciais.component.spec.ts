import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosGerenciaisComponent } from './relatorios-gerenciais.component';

describe('RelatoriosGerenciaisComponent', () => {
  let component: RelatoriosGerenciaisComponent;
  let fixture: ComponentFixture<RelatoriosGerenciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosGerenciaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosGerenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
