import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadaDeIncendioMembrosComponent } from './brigada-de-incendio-membros.component';

describe('BrigadaDeIncendioMembrosComponent', () => {
  let component: BrigadaDeIncendioMembrosComponent;
  let fixture: ComponentFixture<BrigadaDeIncendioMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrigadaDeIncendioMembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadaDeIncendioMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
