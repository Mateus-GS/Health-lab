import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidentesComponent } from './acidentes.component';

describe('AcidentesComponent', () => {
  let component: AcidentesComponent;
  let fixture: ComponentFixture<AcidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
