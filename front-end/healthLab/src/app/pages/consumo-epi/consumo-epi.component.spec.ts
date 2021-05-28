import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoEpiComponent } from './consumo-epi.component';

describe('ConsumoEpiComponent', () => {
  let component: ConsumoEpiComponent;
  let fixture: ComponentFixture<ConsumoEpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoEpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoEpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
