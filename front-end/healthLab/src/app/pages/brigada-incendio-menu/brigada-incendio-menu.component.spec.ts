import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadaIncendioMenuComponent } from './brigada-incendio-menu.component';

describe('BrigadaIncendioMenuComponent', () => {
  let component: BrigadaIncendioMenuComponent;
  let fixture: ComponentFixture<BrigadaIncendioMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrigadaIncendioMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadaIncendioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
