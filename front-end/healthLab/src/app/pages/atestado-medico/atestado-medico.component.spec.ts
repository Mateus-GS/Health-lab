import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtestadoMedicoComponent } from './atestado-medico.component';

describe('AtestadoMedicoComponent', () => {
  let component: AtestadoMedicoComponent;
  let fixture: ComponentFixture<AtestadoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtestadoMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtestadoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
