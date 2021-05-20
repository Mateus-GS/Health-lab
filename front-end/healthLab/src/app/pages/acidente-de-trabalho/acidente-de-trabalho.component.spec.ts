import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidenteDeTrabalhoComponent } from './acidente-de-trabalho.component';

describe('AcidenteDeTrabalhoComponent', () => {
  let component: AcidenteDeTrabalhoComponent;
  let fixture: ComponentFixture<AcidenteDeTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcidenteDeTrabalhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidenteDeTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
