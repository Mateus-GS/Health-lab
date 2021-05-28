import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinamentoPessoalComponent } from './treinamento-pessoal.component';

describe('TreinamentoPessoalComponent', () => {
  let component: TreinamentoPessoalComponent;
  let fixture: ComponentFixture<TreinamentoPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinamentoPessoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinamentoPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
