import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadaIncendioEquipeComponent } from './brigada-incendio-equipe.component';

describe('BrigadaIncendioEquipeComponent', () => {
  let component: BrigadaIncendioEquipeComponent;
  let fixture: ComponentFixture<BrigadaIncendioEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrigadaIncendioEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadaIncendioEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
