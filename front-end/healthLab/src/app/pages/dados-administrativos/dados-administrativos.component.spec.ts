import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAdministrativosComponent } from './dados-administrativos.component';

describe('DadosAdministrativosComponent', () => {
  let component: DadosAdministrativosComponent;
  let fixture: ComponentFixture<DadosAdministrativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAdministrativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAdministrativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
