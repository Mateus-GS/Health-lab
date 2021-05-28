import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasContratadasComponent } from './empresas-contratadas.component';

describe('EmpresasContratadasComponent', () => {
  let component: EmpresasContratadasComponent;
  let fixture: ComponentFixture<EmpresasContratadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasContratadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasContratadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
