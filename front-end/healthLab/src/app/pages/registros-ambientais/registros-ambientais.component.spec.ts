import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosAmbientaisComponent } from './registros-ambientais.component';

describe('RegistrosAmbientaisComponent', () => {
  let component: RegistrosAmbientaisComponent;
  let fixture: ComponentFixture<RegistrosAmbientaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosAmbientaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosAmbientaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
