import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioDosRiscosOcupacionaisComponent } from './inventario-dos-riscos-ocupacionais.component';

describe('InventarioDosRiscosOcupacionaisComponent', () => {
  let component: InventarioDosRiscosOcupacionaisComponent;
  let fixture: ComponentFixture<InventarioDosRiscosOcupacionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioDosRiscosOcupacionaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioDosRiscosOcupacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
